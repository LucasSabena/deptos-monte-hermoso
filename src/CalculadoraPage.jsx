import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calculator, DollarSign, TrendingUp, Info, HelpCircle, X, Download, Share2 } from 'lucide-react';
import html2canvas from 'html2canvas';

const CalculadoraPage = () => {
  const navigate = useNavigate();
  
  // Estados para los inputs
  const [dias, setDias] = useState('');
  const [precioPorDia, setPrecioPorDia] = useState('');
  const [moneda, setMoneda] = useState('pesos'); // 'pesos' o 'dolares'
  const [porcentajeSena, setPorcentajeSena] = useState('20');
  const [dolarBNA, setDolarBNA] = useState(null);
  const [cargandoDolar, setCargandoDolar] = useState(true);
  
  // Estados para los diálogos de ayuda
  const [dialogAbierto, setDialogAbierto] = useState(null);
  
  // Ref para capturar la imagen
  const resumenRef = useRef(null);
  const [generandoImagen, setGenerandoImagen] = useState(false);
  const [modoExportacion, setModoExportacion] = useState('ambas'); // 'ambas', 'pesos', 'dolares'

  // Obtener cotización del dólar BNA oficial con fallbacks
  useEffect(() => {
    const obtenerDolar = async () => {
      const ultimoDolar = localStorage.getItem('ultimoDolarBNA');
      const ultimaActualizacion = localStorage.getItem('ultimaActualizacionDolar');
      
      // API 1: DolarAPI - Dólar Oficial BNA (fuente principal)
      try {
        const response = await fetch('https://dolarapi.com/v1/dolares/oficial');
        if (response.ok) {
          const data = await response.json();
          const valor = data.venta;
          setDolarBNA(valor);
          localStorage.setItem('ultimoDolarBNA', valor);
          localStorage.setItem('ultimaActualizacionDolar', new Date().toISOString());
          setCargandoDolar(false);
          return;
        }
      } catch (error) {
        console.log('DolarAPI falló, intentando API alternativa...');
      }

      // API 2: BluelyAPI - También obtiene del BNA
      try {
        const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
        if (response.ok) {
          const data = await response.json();
          const valor = data.oficial.value_sell; // Precio venta oficial
          setDolarBNA(valor);
          localStorage.setItem('ultimoDolarBNA', valor);
          localStorage.setItem('ultimaActualizacionDolar', new Date().toISOString());
          setCargandoDolar(false);
          return;
        }
      } catch (error) {
        console.log('BluelyAPI falló, intentando última alternativa...');
      }

      // API 3: DolarSi - Scraping de fuentes oficiales
      try {
        const response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        if (response.ok) {
          const data = await response.json();
          // Buscar el dólar oficial
          const dolarOficial = data.find(item => item.casa.nombre === 'Dolar Oficial');
          if (dolarOficial) {
            const valor = parseFloat(dolarOficial.casa.venta.replace(',', '.'));
            setDolarBNA(valor);
            localStorage.setItem('ultimoDolarBNA', valor);
            localStorage.setItem('ultimaActualizacionDolar', new Date().toISOString());
            setCargandoDolar(false);
            return;
          }
        }
      } catch (error) {
        console.log('DolarSi falló...');
      }

      // Si todas las APIs fallan, usar el último valor guardado si es reciente (menos de 24hs)
      if (ultimoDolar && ultimaActualizacion) {
        const horasDesdeActualizacion = (new Date() - new Date(ultimaActualizacion)) / (1000 * 60 * 60);
        if (horasDesdeActualizacion < 24) {
          setDolarBNA(parseFloat(ultimoDolar));
          setCargandoDolar(false);
          return;
        }
      }

      // Si no hay valor guardado reciente, mostrar error
      setDolarBNA(null);
      setCargandoDolar(false);
    };
    
    obtenerDolar();
  }, []);

  // Agregar meta tag para no indexar
  useEffect(() => {
    document.title = 'Calculadora de Alquileres - Monte Hermoso';
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow, noarchive, nosnippet, noimageindex';
    document.head.appendChild(metaRobots);
    
    return () => {
      const existingMeta = document.querySelector('meta[name="robots"]');
      if (existingMeta) {
        document.head.removeChild(existingMeta);
      }
    };
  }, []);

  // Cálculos
  const calcularTotales = () => {
    if (!dias || !precioPorDia || !dolarBNA) {
      return null;
    }

    const diasNum = parseFloat(dias);
    const precioNum = parseFloat(precioPorDia);
    const porcentajeNum = parseFloat(porcentajeSena);

    if (isNaN(diasNum) || isNaN(precioNum) || isNaN(porcentajeNum)) {
      return null;
    }

    // Calcular total en la moneda ingresada
    const totalEnMonedaIngresada = diasNum * precioNum;
    
    // Convertir a pesos y dólares según corresponda
    let totalPesos, totalDolares;
    if (moneda === 'pesos') {
      totalPesos = totalEnMonedaIngresada;
      totalDolares = totalEnMonedaIngresada / dolarBNA;
    } else {
      totalDolares = totalEnMonedaIngresada;
      totalPesos = totalEnMonedaIngresada * dolarBNA;
    }

    // Calcular seña y restante
    const senaPesos = totalPesos * (porcentajeNum / 100);
    const senaDolares = totalDolares * (porcentajeNum / 100);
    const restantePesos = totalPesos - senaPesos;
    const restanteDolares = totalDolares - senaDolares;

    return {
      totalPesos,
      totalDolares,
      senaPesos,
      senaDolares,
      restantePesos,
      restanteDolares
    };
  };

  const resultados = calcularTotales();

  // Función helper para renderizar montos según modo de exportación
  const renderizarMonto = (valorPesos, valorDolares, esImagen = false) => {
    const fontSize = esImagen ? '36px' : '32px';
    const fontSizeSecundario = esImagen ? '20px' : '20px';
    
    if (modoExportacion === 'pesos') {
      return (
        <div>
          <p style={{ fontSize: '14px', color: 'rgba(74, 74, 74, 0.7)', margin: '0 0 6px 0', fontWeight: '600' }}>
            EN PESOS (ARS)
          </p>
          <p style={{ fontSize, fontWeight: 'bold', color: '#4A4A4A', margin: 0 }}>
            {formatearPesos(valorPesos)}
          </p>
        </div>
      );
    } else if (modoExportacion === 'dolares') {
      return (
        <div>
          <p style={{ fontSize: '14px', color: 'rgba(74, 74, 74, 0.7)', margin: '0 0 6px 0', fontWeight: '600' }}>
            EN DÓLARES (USD)
          </p>
          <p style={{ fontSize, fontWeight: 'bold', color: '#4A4A4A', margin: 0 }}>
            {formatearDolares(valorDolares)}
          </p>
        </div>
      );
    } else {
      // Ambas monedas - mostrar primero la moneda elegida
      if (moneda === 'pesos') {
        return (
          <>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '14px', color: 'rgba(74, 74, 74, 0.7)', margin: '0 0 6px 0', fontWeight: '600' }}>
                EN PESOS (ARS)
              </p>
              <p style={{ fontSize, fontWeight: 'bold', color: '#4A4A4A', margin: 0 }}>
                {formatearPesos(valorPesos)}
              </p>
            </div>
            <div style={{ paddingTop: '16px', borderTop: '2px solid rgba(74, 74, 74, 0.1)' }}>
              <p style={{ fontSize: '12px', color: 'rgba(74, 74, 74, 0.6)', margin: '0 0 4px 0', fontWeight: '600' }}>
                EN DÓLARES (USD)
              </p>
              <p style={{ fontSize: fontSizeSecundario, fontWeight: '600', color: 'rgba(74, 74, 74, 0.8)', margin: 0 }}>
                {formatearDolares(valorDolares)}
              </p>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '14px', color: 'rgba(74, 74, 74, 0.7)', margin: '0 0 6px 0', fontWeight: '600' }}>
                EN DÓLARES (USD)
              </p>
              <p style={{ fontSize, fontWeight: 'bold', color: '#4A4A4A', margin: 0 }}>
                {formatearDolares(valorDolares)}
              </p>
            </div>
            <div style={{ paddingTop: '16px', borderTop: '2px solid rgba(74, 74, 74, 0.1)' }}>
              <p style={{ fontSize: '12px', color: 'rgba(74, 74, 74, 0.6)', margin: '0 0 4px 0', fontWeight: '600' }}>
                EN PESOS (ARS)
              </p>
              <p style={{ fontSize: fontSizeSecundario, fontWeight: '600', color: 'rgba(74, 74, 74, 0.8)', margin: 0 }}>
                {formatearPesos(valorPesos)}
              </p>
            </div>
          </>
        );
      }
    }
  };

  // Función para generar y descargar la imagen
  const generarImagen = async () => {
    if (!resumenRef.current || !resultados) return;
    
    setGenerandoImagen(true);
    
    try {
      const canvas = await html2canvas(resumenRef.current, {
        backgroundColor: '#FDF8F0',
        scale: 2,
        logging: false,
        useCORS: true
      });
      
      // Convertir a blob y descargar
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const fecha = new Date().toLocaleDateString('es-AR').replace(/\//g, '-');
        link.download = `alquiler-${fecha}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
        setGenerandoImagen(false);
      });
    } catch (error) {
      console.error('Error al generar imagen:', error);
      setGenerandoImagen(false);
    }
  };

  const formatearPesos = (valor) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(valor);
  };

  const formatearDolares = (valor) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(valor);
  };

  // Componente de diálogo de ayuda
  const HelpDialog = ({ isOpen, onClose, title, content, example }) => {
    if (!isOpen) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '16px'
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px',
              maxWidth: '400px',
              width: '100%',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              position: 'relative'
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                padding: '8px',
                backgroundColor: 'rgba(168, 218, 220, 0.1)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X style={{ width: '20px', height: '20px', color: '#7E7E7E' }} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(168, 218, 220, 0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <HelpCircle style={{ width: '24px', height: '24px', color: '#A8DADC' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#4A4A4A', margin: 0 }}>
                {title}
              </h3>
            </div>

            <p style={{ fontSize: '16px', color: '#4A4A4A', lineHeight: '1.6', marginBottom: '16px' }}>
              {content}
            </p>

            {example && (
              <div style={{
                backgroundColor: 'rgba(230, 164, 180, 0.1)',
                borderRadius: '12px',
                padding: '16px',
                borderLeft: '4px solid #E6A4B4'
              }}>
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#4A4A4A', margin: '0 0 8px 0' }}>
                  Ejemplo:
                </p>
                <p style={{ fontSize: '14px', color: '#7E7E7E', margin: 0 }}>
                  {example}
                </p>
              </div>
            )}

            <button
              onClick={onClose}
              style={{
                width: '100%',
                marginTop: '20px',
                padding: '12px',
                backgroundColor: '#A8DADC',
                color: '#4A4A4A',
                fontWeight: '600',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Entendido
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FDF8F0' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(168, 218, 220, 0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                onClick={() => navigate('/')}
                style={{
                  padding: '8px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(168, 218, 220, 0.1)',
                  color: '#A8DADC',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ArrowLeft style={{ width: '20px', height: '20px' }} />
              </button>
              <div>
                <h1 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#4A4A4A',
                  margin: 0
                }}>
                  Calculadora de Alquileres
                </h1>
                <p style={{
                  fontSize: '14px',
                  color: '#7E7E7E',
                  margin: 0
                }}>
                  Calcula seña y totales fácilmente
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 16px 32px' }}>
        {/* Cotización del dólar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            backgroundColor: dolarBNA === null ? '#FEE2E2' : '#FFFFFF',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '24px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            border: dolarBNA === null ? '2px solid #DC2626' : 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: dolarBNA === null ? 'rgba(220, 38, 38, 0.1)' : 'rgba(168, 218, 220, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {dolarBNA === null ? (
                <X style={{ width: '24px', height: '24px', color: '#DC2626' }} />
              ) : (
                <TrendingUp style={{ width: '24px', height: '24px', color: '#A8DADC' }} />
              )}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '14px', color: dolarBNA === null ? '#DC2626' : '#7E7E7E', margin: 0 }}>
                Dólar BNA (Venta)
              </p>
              {dolarBNA === null ? (
                <>
                  <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#DC2626', margin: '4px 0 0 0' }}>
                    Error al obtener cotización
                  </p>
                  <p style={{ fontSize: '12px', color: '#DC2626', margin: '4px 0 0 0' }}>
                    No se puede conectar con el Banco Nación. Revisá tu conexión a internet e intentá recargar la página.
                  </p>
                </>
              ) : (
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#4A4A4A', margin: 0 }}>
                  {cargandoDolar ? 'Cargando...' : formatearPesos(dolarBNA)}
                </p>
              )}
            </div>
          </div>
          {dolarBNA !== null && !cargandoDolar && (
            <div style={{
              backgroundColor: 'rgba(168, 218, 220, 0.1)',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '12px',
              color: '#4A4A4A'
            }}>
              Actualizado hoy
            </div>
          )}
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            padding: '32px',
            marginBottom: '24px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
            opacity: dolarBNA === null ? 0.5 : 1,
            pointerEvents: dolarBNA === null ? 'none' : 'auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Calculator style={{ width: '24px', height: '24px', color: '#A8DADC' }} />
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#4A4A4A', margin: 0 }}>
              Datos del Alquiler
            </h2>
          </div>

          {/* Cantidad de días */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <label style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4A4A4A',
                margin: 0
              }}>
                Cantidad de días
              </label>
              <button
                onClick={() => setDialogAbierto('dias')}
                style={{
                  padding: '4px',
                  backgroundColor: 'rgba(168, 218, 220, 0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <HelpCircle style={{ width: '18px', height: '18px', color: '#A8DADC' }} />
              </button>
            </div>
            <input
              type="number"
              value={dias}
              onChange={(e) => setDias(e.target.value)}
              placeholder="Ej: 7"
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '18px',
                border: '2px solid rgba(168, 218, 220, 0.3)',
                borderRadius: '8px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#A8DADC'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(168, 218, 220, 0.3)'}
            />
          </div>

          {/* Selector de moneda */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <label style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4A4A4A',
                margin: 0
              }}>
                Moneda del precio
              </label>
              <button
                onClick={() => setDialogAbierto('moneda')}
                style={{
                  padding: '4px',
                  backgroundColor: 'rgba(168, 218, 220, 0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <HelpCircle style={{ width: '18px', height: '18px', color: '#A8DADC' }} />
              </button>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setMoneda('pesos')}
                style={{
                  flex: 1,
                  padding: '16px',
                  fontSize: '16px',
                  fontWeight: '600',
                  border: `2px solid ${moneda === 'pesos' ? '#A8DADC' : 'rgba(168, 218, 220, 0.3)'}`,
                  backgroundColor: moneda === 'pesos' ? 'rgba(168, 218, 220, 0.1)' : '#FFFFFF',
                  color: '#4A4A4A',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                $ Pesos
              </button>
              <button
                onClick={() => setMoneda('dolares')}
                style={{
                  flex: 1,
                  padding: '16px',
                  fontSize: '16px',
                  fontWeight: '600',
                  border: `2px solid ${moneda === 'dolares' ? '#A8DADC' : 'rgba(168, 218, 220, 0.3)'}`,
                  backgroundColor: moneda === 'dolares' ? 'rgba(168, 218, 220, 0.1)' : '#FFFFFF',
                  color: '#4A4A4A',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                US$ Dólares
              </button>
            </div>
          </div>

          {/* Precio por día */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <label style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4A4A4A',
                margin: 0
              }}>
                Precio por día ({moneda === 'pesos' ? 'en pesos' : 'en dólares'})
              </label>
              <button
                onClick={() => setDialogAbierto('precio')}
                style={{
                  padding: '4px',
                  backgroundColor: 'rgba(168, 218, 220, 0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <HelpCircle style={{ width: '18px', height: '18px', color: '#A8DADC' }} />
              </button>
            </div>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '18px',
                color: '#7E7E7E',
                fontWeight: '600'
              }}>
                {moneda === 'pesos' ? '$' : 'US$'}
              </span>
              <input
                type="number"
                value={precioPorDia}
                onChange={(e) => setPrecioPorDia(e.target.value)}
                placeholder={moneda === 'pesos' ? 'Ej: 50000' : 'Ej: 100'}
                style={{
                  width: '100%',
                  padding: '16px 16px 16px 48px',
                  fontSize: '18px',
                  border: '2px solid rgba(168, 218, 220, 0.3)',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#A8DADC'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(168, 218, 220, 0.3)'}
              />
            </div>
          </div>

          {/* Porcentaje de seña */}
          <div style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <label style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4A4A4A',
                margin: 0
              }}>
                Porcentaje de seña: {porcentajeSena}%
              </label>
              <button
                onClick={() => setDialogAbierto('sena')}
                style={{
                  padding: '4px',
                  backgroundColor: 'rgba(168, 218, 220, 0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <HelpCircle style={{ width: '18px', height: '18px', color: '#A8DADC' }} />
              </button>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={porcentajeSena}
              onChange={(e) => setPorcentajeSena(e.target.value)}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                background: `linear-gradient(to right, #A8DADC 0%, #A8DADC ${(porcentajeSena - 10) / 0.4}%, rgba(168, 218, 220, 0.2) ${(porcentajeSena - 10) / 0.4}%, rgba(168, 218, 220, 0.2) 100%)`,
                outline: 'none',
                cursor: 'pointer'
              }}
            />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '8px',
              fontSize: '12px',
              color: '#7E7E7E'
            }}>
              <span>10%</span>
              <span>20%</span>
              <span>30%</span>
              <span>40%</span>
              <span>50%</span>
            </div>
          </div>
        </motion.div>

        {/* Resultados */}
        {resultados && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Selector de modo de exportación */}
            <div style={{ marginBottom: '16px' }}>
              <p style={{ 
                fontSize: '14px', 
                fontWeight: '600', 
                color: '#4A4A4A', 
                textAlign: 'center',
                marginBottom: '12px' 
              }}>
                ¿Qué monedas mostrar en la imagen?
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '8px', 
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <button
                  onClick={() => setModoExportacion('ambas')}
                  style={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: `2px solid ${modoExportacion === 'ambas' ? '#A8DADC' : 'rgba(168, 218, 220, 0.3)'}`,
                    backgroundColor: modoExportacion === 'ambas' ? 'rgba(168, 218, 220, 0.2)' : '#FFFFFF',
                    color: '#4A4A4A',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  Ambas monedas
                </button>
                <button
                  onClick={() => setModoExportacion('pesos')}
                  style={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: `2px solid ${modoExportacion === 'pesos' ? '#A8DADC' : 'rgba(168, 218, 220, 0.3)'}`,
                    backgroundColor: modoExportacion === 'pesos' ? 'rgba(168, 218, 220, 0.2)' : '#FFFFFF',
                    color: '#4A4A4A',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  Solo Pesos
                </button>
                <button
                  onClick={() => setModoExportacion('dolares')}
                  style={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: `2px solid ${modoExportacion === 'dolares' ? '#A8DADC' : 'rgba(168, 218, 220, 0.3)'}`,
                    backgroundColor: modoExportacion === 'dolares' ? 'rgba(168, 218, 220, 0.2)' : '#FFFFFF',
                    color: '#4A4A4A',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  Solo Dólares
                </button>
              </div>
            </div>

            {/* Botón de exportar */}
            <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
              <motion.button
                onClick={generarImagen}
                disabled={generandoImagen || dolarBNA === null}
                whileHover={{ scale: (generandoImagen || dolarBNA === null) ? 1 : 1.05 }}
                whileTap={{ scale: (generandoImagen || dolarBNA === null) ? 1 : 0.95 }}
                style={{
                  backgroundColor: '#A8DADC',
                  color: '#4A4A4A',
                  fontWeight: 'bold',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: (generandoImagen || dolarBNA === null) ? 'not-allowed' : 'pointer',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 8px 16px rgba(168, 218, 220, 0.3)',
                  opacity: (generandoImagen || dolarBNA === null) ? 0.5 : 1
                }}
              >
                <Share2 style={{ width: '20px', height: '20px' }} />
                {generandoImagen ? 'Generando imagen...' : 'Compartir Resumen'}
              </motion.button>
            </div>

            {/* Seña a cobrar */}
            <div style={{
              backgroundColor: '#E6A4B4',
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '16px',
              boxShadow: '0 8px 16px rgba(230, 164, 180, 0.3)'
            }}>
              <p style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#4A4A4A',
                margin: '0 0 16px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Seña a cobrar ({porcentajeSena}%)
              </p>
              {moneda === 'pesos' ? (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.7)',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      En Pesos (ARS)
                    </p>
                    <p style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      color: '#4A4A4A',
                      margin: 0
                    }}>
                      {formatearPesos(resultados.senaPesos)}
                    </p>
                  </div>
                  <div style={{ paddingTop: '12px', borderTop: '2px solid rgba(74, 74, 74, 0.1)' }}>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.6)',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      En Dólares (USD)
                    </p>
                    <p style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.8)',
                      margin: 0
                    }}>
                      {formatearDolares(resultados.senaDolares)}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.7)',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      En Dólares (USD)
                    </p>
                    <p style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      color: '#4A4A4A',
                      margin: 0
                    }}>
                      {formatearDolares(resultados.senaDolares)}
                    </p>
                  </div>
                  <div style={{ paddingTop: '12px', borderTop: '2px solid rgba(74, 74, 74, 0.1)' }}>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.6)',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      En Pesos (ARS)
                    </p>
                    <p style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.8)',
                      margin: 0
                    }}>
                      {formatearPesos(resultados.senaPesos)}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Restante a cobrar */}
            <div style={{
              backgroundColor: '#F1DABF',
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '16px',
              boxShadow: '0 8px 16px rgba(241, 218, 191, 0.3)'
            }}>
              <p style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#4A4A4A',
                margin: '0 0 16px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Restante a cobrar
              </p>
              {moneda === 'pesos' ? (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.7)',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      En Pesos (ARS)
                    </p>
                    <p style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      color: '#4A4A4A',
                      margin: 0
                    }}>
                      {formatearPesos(resultados.restantePesos)}
                    </p>
                  </div>
                  <div style={{ paddingTop: '12px', borderTop: '2px solid rgba(74, 74, 74, 0.1)' }}>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.6)',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      En Dólares (USD)
                    </p>
                    <p style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.8)',
                      margin: 0
                    }}>
                      {formatearDolares(resultados.restanteDolares)}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.7)',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      En Dólares (USD)
                    </p>
                    <p style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      color: '#4A4A4A',
                      margin: 0
                    }}>
                      {formatearDolares(resultados.restanteDolares)}
                    </p>
                  </div>
                  <div style={{ paddingTop: '12px', borderTop: '2px solid rgba(74, 74, 74, 0.1)' }}>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.6)',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      En Pesos (ARS)
                    </p>
                    <p style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.8)',
                      margin: 0
                    }}>
                      {formatearPesos(resultados.restantePesos)}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Total */}
            <div style={{
              backgroundColor: '#A8DADC',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 8px 16px rgba(168, 218, 220, 0.3)'
            }}>
              <p style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#4A4A4A',
                margin: '0 0 16px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Total del alquiler
              </p>
              {moneda === 'pesos' ? (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.7)',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      En Pesos (ARS)
                    </p>
                    <p style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      color: '#4A4A4A',
                      margin: 0
                    }}>
                      {formatearPesos(resultados.totalPesos)}
                    </p>
                  </div>
                  <div style={{ paddingTop: '12px', borderTop: '2px solid rgba(74, 74, 74, 0.1)' }}>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.6)',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      En Dólares (USD)
                    </p>
                    <p style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.8)',
                      margin: 0
                    }}>
                      {formatearDolares(resultados.totalDolares)}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.7)',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      En Dólares (USD)
                    </p>
                    <p style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      color: '#4A4A4A',
                      margin: 0
                    }}>
                      {formatearDolares(resultados.totalDolares)}
                    </p>
                  </div>
                  <div style={{ paddingTop: '12px', borderTop: '2px solid rgba(74, 74, 74, 0.1)' }}>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.6)',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      En Pesos (ARS)
                    </p>
                    <p style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'rgba(74, 74, 74, 0.8)',
                      margin: 0
                    }}>
                      {formatearPesos(resultados.totalPesos)}
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Mensaje de ayuda si no hay resultados */}
        {!resultados && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              backgroundColor: 'rgba(168, 218, 220, 0.1)',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center'
            }}
          >
            <Info style={{ width: '48px', height: '48px', color: '#A8DADC', margin: '0 auto 16px' }} />
            <p style={{ fontSize: '16px', color: '#7E7E7E', margin: 0 }}>
              Completa los datos para ver los cálculos
            </p>
          </motion.div>
        )}
      </div>

      {/* Componente oculto para capturar como imagen */}
      {resultados && (
        <div
          ref={resumenRef}
          style={{
            position: 'absolute',
            left: '-9999px',
            top: '-9999px',
            width: '800px',
            backgroundColor: '#FFFFFF',
            padding: '48px',
            fontFamily: 'Satoshi, sans-serif'
          }}
        >
          {/* Header del resumen */}
          <div style={{ textAlign: 'center', marginBottom: '32px', borderBottom: '3px solid #A8DADC', paddingBottom: '24px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#4A4A4A', margin: '0 0 8px 0' }}>
              Monte Hermoso
            </h1>
            <p style={{ fontSize: '18px', color: '#7E7E7E', margin: 0 }}>
              Resumen de Alquiler
            </p>
          </div>

          {/* Datos del alquiler */}
          <div style={{ 
            backgroundColor: 'rgba(168, 218, 220, 0.1)', 
            borderRadius: '12px', 
            padding: '24px',
            marginBottom: '32px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#4A4A4A', margin: '0 0 16px 0' }}>
              Datos del Alquiler
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <p style={{ fontSize: '14px', color: '#7E7E7E', margin: '0 0 4px 0' }}>Cantidad de días</p>
                <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#4A4A4A', margin: 0 }}>{dias} días</p>
              </div>
              <div>
                <p style={{ fontSize: '14px', color: '#7E7E7E', margin: '0 0 4px 0' }}>Precio por día ({moneda === 'pesos' ? 'ARS' : 'USD'})</p>
                <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#4A4A4A', margin: 0 }}>
                  {moneda === 'pesos' ? formatearPesos(parseFloat(precioPorDia)) : formatearDolares(parseFloat(precioPorDia))}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '14px', color: '#7E7E7E', margin: '0 0 4px 0' }}>Porcentaje de seña</p>
                <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#4A4A4A', margin: 0 }}>{porcentajeSena}%</p>
              </div>
              <div>
                <p style={{ fontSize: '14px', color: '#7E7E7E', margin: '0 0 4px 0' }}>Dólar BNA</p>
                <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#4A4A4A', margin: 0 }}>{formatearPesos(dolarBNA)}</p>
              </div>
            </div>
          </div>

          {/* Seña */}
          <div style={{
            backgroundColor: '#E6A4B4',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '16px'
          }}>
            <p style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#4A4A4A',
              margin: '0 0 20px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Seña a Cobrar ({porcentajeSena}%)
            </p>
            {renderizarMonto(resultados.senaPesos, resultados.senaDolares, true)}
          </div>

          {/* Restante */}
          <div style={{
            backgroundColor: '#F1DABF',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '16px'
          }}>
            <p style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#4A4A4A',
              margin: '0 0 20px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Restante a Cobrar
            </p>
            {renderizarMonto(resultados.restantePesos, resultados.restanteDolares, true)}
          </div>

          {/* Total */}
          <div style={{
            backgroundColor: '#A8DADC',
            borderRadius: '12px',
            padding: '24px'
          }}>
            <p style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#4A4A4A',
              margin: '0 0 20px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Total del Alquiler
            </p>
            {renderizarMonto(resultados.totalPesos, resultados.totalDolares, true)}
          </div>

          {/* Footer */}
          <div style={{ 
            marginTop: '32px', 
            paddingTop: '24px', 
            borderTop: '2px solid rgba(168, 218, 220, 0.3)',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '14px', color: '#7E7E7E', margin: 0 }}>
              Generado el {new Date().toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </p>
            <p style={{ fontSize: '12px', color: '#A8DADC', margin: '8px 0 0 0', fontWeight: '600' }}>
              www.deptosmontehermoso.com.ar
            </p>
          </div>
        </div>
      )}

      {/* Diálogos de ayuda */}
      <HelpDialog
        isOpen={dialogAbierto === 'dias'}
        onClose={() => setDialogAbierto(null)}
        title="Cantidad de días"
        content="Ingresá cuántos días va a durar el alquiler del departamento. Este número se usa para calcular el precio total."
        example="Si el alquiler es de una semana, ponés 7 días. Si es de un fin de semana largo, ponés 3 días."
      />

      <HelpDialog
        isOpen={dialogAbierto === 'moneda'}
        onClose={() => setDialogAbierto(null)}
        title="Moneda del precio"
        content="Elegí en qué moneda te pasaron el precio por día. Si te dijeron el precio en pesos, tocá 'Pesos'. Si te lo dijeron en dólares, tocá 'Dólares'."
        example="Si te dijeron '$50.000 por día', elegí Pesos. Si te dijeron 'US$100 por día', elegí Dólares."
      />

      <HelpDialog
        isOpen={dialogAbierto === 'precio'}
        onClose={() => setDialogAbierto(null)}
        title="Precio por día"
        content="Ingresá cuánto cuesta un día de alquiler. Poné solo el número, sin puntos ni comas. La calculadora lo va a formatear automáticamente."
        example={moneda === 'pesos' 
          ? "Si el día cuesta cincuenta mil pesos, escribí: 50000" 
          : "Si el día cuesta cien dólares, escribí: 100"}
      />

      <HelpDialog
        isOpen={dialogAbierto === 'sena'}
        onClose={() => setDialogAbierto(null)}
        title="Porcentaje de seña"
        content="La seña es el dinero que se cobra por adelantado para reservar. Moviendo la barrita elegís qué porcentaje del total querés cobrar como seña. Lo más común es 20% o 30%."
        example="Si el total es $100.000 y elegís 20%, la seña será $20.000 y el restante $80.000."
      />
    </div>
  );
};

export default CalculadoraPage;
