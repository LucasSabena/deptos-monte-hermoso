import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Wifi, 
  Settings, 
  Package, 
  MapPin, 
  Phone,
  Home,
  Info,
  Copy,
  Check,
  Car,
  Ambulance,
  Shield,
  Building2,
  UserCheck,
  Utensils,
  Clock,
  Cloud
} from 'lucide-react';

import InfoSection from './components/guest-info/InfoSection';
import InfoItem from './components/guest-info/InfoItem';
import QuickAccess from './components/guest-info/QuickAccess';
import ContactCard from './components/guest-info/ContactCard';
import NearbyPlaces from './components/guest-info/NearbyPlaces';
import InventoryList from './components/guest-info/InventoryList';
import DeliveryRestaurants from './components/guest-info/DeliveryRestaurants';
import CheckInOut from './components/guest-info/CheckInOut';
import WeatherWidget from './components/guest-info/WeatherWidget';
import { Modal } from './components/guest-info/Modal';
import { guestInfoData } from './data/guestInfoData';
import { departments } from '../cms.js';

const GuestInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copiedField, setCopiedField] = useState('');
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', content: null, icon: null });
  
  const depto = departments.find(d => d.id === id);
  const guestInfo = guestInfoData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (guestInfo?.welcome?.title) {
      document.title = `${guestInfo.welcome.title} - Información para Huéspedes`;
      
      // Agregar meta tags para que no sea indexada
      const metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      metaRobots.content = 'noindex, nofollow, noarchive, nosnippet, noimageindex';
      document.head.appendChild(metaRobots);
      
      // Cleanup function para remover el meta tag cuando se desmonte el componente
      return () => {
        const existingMeta = document.querySelector('meta[name="robots"]');
        if (existingMeta) {
          document.head.removeChild(existingMeta);
        }
      };
    }
  }, [guestInfo]);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 2000);
    });
  };

  // Crear componentes de QuickAccess con popups
  const createQuickAccessItems = () => {
    const baseItems = [
      {
        icon: Wifi,
        title: 'WiFi',
        subtitle: 'Ver contraseña',
        onClick: () => {
          setModalConfig({
            isOpen: true,
            title: 'Información WiFi',
            icon: Wifi,
            content: (
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <strong style={{ color: '#1D3557' }}>Red:</strong>
                  <div style={{ 
                    backgroundColor: '#F8F9FA', 
                    padding: '12px', 
                    borderRadius: '8px', 
                    marginTop: '8px',
                    fontFamily: 'monospace',
                    fontSize: '16px'
                  }}>
                    {guestInfo.wifi.network}
                  </div>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <strong style={{ color: '#1D3557' }}>Contraseña:</strong>
                  <div style={{ 
                    backgroundColor: '#F8F9FA', 
                    padding: '12px', 
                    borderRadius: '8px', 
                    marginTop: '8px',
                    fontFamily: 'monospace',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    {guestInfo.wifi.password}
                    <button
                      onClick={() => copyToClipboard(guestInfo.wifi.password, 'wifi')}
                      style={{
                        background: '#A8DADC',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        color: '#1D3557'
                      }}
                    >
                      {copiedField === 'wifi' ? 'Copiado!' : 'Copiar'}
                    </button>
                  </div>
                </div>
                <div style={{ fontSize: '14px', color: '#64748B' }}>
                  <strong>Velocidad:</strong> {guestInfo.wifi.speed}
                </div>
              </div>
            )
          });
        }
      },
      {
        icon: Phone,
        title: 'Contacto',
        subtitle: 'WhatsApp anfitrión',
        onClick: () => {
          window.open(`https://api.whatsapp.com/send?phone=5492916480599`, '_blank');
        }
      },
      {
        icon: MapPin,
        title: 'Ubicación',
        subtitle: 'Ver en mapa',
        onClick: () => {
          const query = encodeURIComponent(depto.location.address);
          window.open(`https://www.google.com/maps/search/${query}`, '_blank');
        }
      }
    ];

    // Agregar botón de cochera solo para depto-agreste-ii
    if (id === 'depto-agreste-ii') {
      baseItems.push({
        icon: Car,
        title: 'Cochera',
        subtitle: 'Acceso privado',
        onClick: () => {
          setModalConfig({
            isOpen: true,
            title: 'Cochera Privada',
            icon: Car,
            content: (
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#F0FDF4', 
                  padding: '20px', 
                  borderRadius: '12px',
                  marginBottom: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <Car size={48} color="#059669" style={{ marginBottom: '8px' }} />
                  <strong style={{ color: '#059669', fontSize: '18px' }}>Cochera incluida</strong>
                </div>
                <div style={{ textAlign: 'left', lineHeight: '1.6' }}>
                  <div style={{ margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={16} color="#059669" />
                    <span><strong>Acceso:</strong> Portón automático</span>
                  </div>
                  <div style={{ margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Settings size={16} color="#059669" />
                    <span><strong>Control:</strong> Disponible en el departamento</span>
                  </div>
                  <div style={{ margin: '0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Shield size={16} color="#059669" />
                    <span><strong>Seguridad:</strong> Espacio privado y cerrado</span>
                  </div>
                </div>
              </div>
            )
          });
        }
      });
    }

    // Agregar botón de emergencia al final
    baseItems.push({
      icon: Info,
      title: 'Emergencia',
      subtitle: 'Números útiles',
      onClick: () => {
        setModalConfig({
          isOpen: true,
          title: 'Números de Emergencia',
          icon: Info,
          content: (
            <div style={{ lineHeight: '1.8' }}>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '12px',
                  backgroundColor: '#FEF2F2',
                  borderRadius: '8px',
                  marginBottom: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Ambulance size={20} color="#DC2626" />
                    <strong style={{ color: '#DC2626' }}>Ambulancia</strong>
                  </div>
                  <span style={{ fontFamily: 'monospace', fontSize: '18px' }}>107</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '12px',
                  backgroundColor: '#FEF2F2',
                  borderRadius: '8px',
                  marginBottom: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Shield size={20} color="#DC2626" />
                    <strong style={{ color: '#DC2626' }}>Policía</strong>
                  </div>
                  <span style={{ fontFamily: 'monospace', fontSize: '18px' }}>911</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '12px',
                  backgroundColor: '#F0F9FF',
                  borderRadius: '8px',
                  marginBottom: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Building2 size={20} color="#0369A1" />
                    <strong style={{ color: '#0369A1' }}>Hospital Municipal</strong>
                  </div>
                  <span style={{ fontFamily: 'monospace', fontSize: '16px' }}>(0291) 648-2180</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '12px',
                  backgroundColor: '#F0FDF4',
                  borderRadius: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <UserCheck size={20} color="#059669" />
                    <strong style={{ color: '#059669' }}>Valeria (Anfitrión)</strong>
                  </div>
                  <span style={{ fontFamily: 'monospace', fontSize: '16px' }}>+54 2916 48-0599</span>
                </div>
              </div>
            </div>
          )
        });
      }
    });

    return baseItems;
  };

  if (!depto || !guestInfo) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#FDF8F0', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#4A4A4A', 
            marginBottom: '16px' 
          }}>
            Departamento no encontrado
          </h1>
          <button
            onClick={() => navigate('/')}
            style={{
              backgroundColor: '#A8DADC',
              color: '#4A4A4A',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 'medium',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const handleGoBack = () => {
    navigate(`/${id}`);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FDF8F0' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(168, 218, 220, 0.1)'
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
                onClick={handleGoBack}
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
                  {depto.name}
                </h1>
                <p style={{
                  fontSize: '14px',
                  color: '#7E7E7E',
                  margin: 0
                }}>
                  Información para huéspedes
                </p>
              </div>
            </div>
            <button
              onClick={handleGoHome}
              style={{
                padding: '8px',
                borderRadius: '8px',
                backgroundColor: 'rgba(241, 218, 191, 0.5)',
                color: '#4A4A4A',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Home style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px 96px' }}>
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '32px' }}
        >
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#4A4A4A',
            fontFamily: 'Satoshi, sans-serif',
            marginBottom: '16px'
          }}>
            {guestInfo.welcome.title}
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#7E7E7E',
            maxWidth: '640px',
            margin: '0 auto'
          }}>
            {guestInfo.welcome.subtitle}
          </p>
        </motion.div>

        {/* Quick Access */}
        <QuickAccess items={createQuickAccessItems()} />

        <div className="main-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '24px'
        }}>
          
          {/* First Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* WiFi Information */}
            <InfoSection title="Conexión WiFi" icon={Wifi}>
              <InfoItem
                icon={Wifi}
                label="Nombre de la red"
                value={guestInfo.wifi.network}
              />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                backgroundColor: 'rgba(168, 218, 220, 0.05)',
                borderRadius: '8px',
                marginTop: '8px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'rgba(168, 218, 220, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Wifi style={{ width: '16px', height: '16px', color: '#A8DADC' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 'medium', color: '#4A4A4A', fontSize: '14px', margin: 0 }}>
                    Contraseña
                  </p>
                  <p style={{ color: '#7E7E7E', fontSize: '14px', margin: '4px 0 0', fontFamily: 'monospace' }}>
                    {guestInfo.wifi.password}
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(guestInfo.wifi.password, 'password')}
                  style={{
                    padding: '8px',
                    backgroundColor: copiedField === 'password' ? 'rgba(168, 218, 220, 0.2)' : 'rgba(168, 218, 220, 0.1)',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  {copiedField === 'password' ? (
                    <Check style={{ width: '16px', height: '16px', color: '#A8DADC' }} />
                  ) : (
                    <Copy style={{ width: '16px', height: '16px', color: '#A8DADC' }} />
                  )}
                </button>
              </div>
              <InfoItem
                icon={Info}
                label="Velocidad"
                value={guestInfo.wifi.speed}
              />
            </InfoSection>

            {/* Contacts */}
            <InfoSection title="Contactos Importantes" icon={Phone}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {guestInfo.contacts.map((contact, index) => (
                  <ContactCard
                    key={index}
                    name={contact.name}
                    phone={contact.phone}
                    whatsapp={contact.whatsapp}
                    emergencyOnly={contact.emergencyOnly}
                  />
                ))}
              </div>
            </InfoSection>

            {/* Weather Widget */}
            <InfoSection title="Estado del Tiempo" icon={Cloud}>
              <WeatherWidget />
            </InfoSection>
          </div>

          {/* Second Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Appliances */}
            <InfoSection title="Electrodomésticos y Equipos" icon={Settings}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {guestInfo.appliances.map((appliance, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      border: '1px solid rgba(168, 218, 220, 0.2)',
                      borderRadius: '8px',
                      padding: '16px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'rgba(168, 218, 220, 0.1)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <appliance.icon style={{ width: '20px', height: '20px', color: '#A8DADC' }} />
                      </div>
                      <div>
                        <h4 style={{
                          fontWeight: '600',
                          color: '#4A4A4A',
                          margin: 0,
                          marginBottom: '4px'
                        }}>
                          {appliance.name}
                        </h4>
                        <p style={{
                          color: '#7E7E7E',
                          fontSize: '14px',
                          margin: 0
                        }}>
                          {appliance.instructions}
                        </p>
                      </div>
                    </div>
                    <div style={{
                      backgroundColor: 'rgba(230, 164, 180, 0.1)',
                      borderRadius: '8px',
                      padding: '12px'
                    }}>
                      <p style={{
                        fontSize: '14px',
                        color: '#4A4A4A',
                        margin: 0
                      }}>
                        <strong>Tip:</strong> {appliance.tips}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </InfoSection>

            {/* Check-in/Check-out */}
            <InfoSection title="Check-in / Check-out" icon={Clock}>
              <CheckInOut checkInOut={guestInfo.checkInOut} />
            </InfoSection>

            {/* Delivery Restaurants */}
            <InfoSection title="Restaurantes con Delivery" icon={Utensils}>
              <DeliveryRestaurants restaurants={guestInfo.deliveryRestaurants} />
            </InfoSection>
          </div>

          {/* Third Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Inventory */}
            <InfoSection title="Inventario del Departamento" icon={Package}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <InventoryList 
                  title="Cocina y Comedor" 
                  items={guestInfo.inventory.kitchen} 
                />
                <InventoryList 
                  title="Dormitorio y Baño" 
                  items={guestInfo.inventory.bedroom} 
                />
                <InventoryList 
                  title="General" 
                  items={guestInfo.inventory.general} 
                />
              </div>
            </InfoSection>

            {/* Nearby Places */}
            <InfoSection title="Lugares Cercanos" icon={MapPin}>
              <NearbyPlaces places={guestInfo.nearbyPlaces} />
            </InfoSection>
          </div>
        </div>

        {/* CSS for responsive grid */}
        <style jsx>{`
          @media (min-width: 1200px) {
            .main-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          @media (min-width: 768px) and (max-width: 1199px) {
            .main-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 767px) {
            .main-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }
        `}</style>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ marginTop: '48px' }}
        >
          <InfoSection title="Ubicación del Departamento" icon={MapPin}>
            <div style={{
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
              height: '400px'
            }}>
              <iframe
                src={depto.location.embedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación de ${depto.name}`}
              />
            </div>
            <div style={{
              marginTop: '16px',
              padding: '16px',
              backgroundColor: 'rgba(168, 218, 220, 0.05)',
              borderRadius: '8px'
            }}>
              <p style={{
                color: '#7E7E7E',
                fontSize: '14px',
                margin: 0
              }}>
                <strong>Dirección:</strong> {depto.location.address}
              </p>
            </div>
          </InfoSection>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '48px',
            textAlign: 'center',
            backgroundColor: 'rgba(230, 164, 180, 0.1)',
            borderRadius: '12px',
            padding: '32px'
          }}
        >
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#4A4A4A',
            marginBottom: '16px'
          }}>
            ¿Necesitas ayuda?
          </h2>
          <p style={{
            color: '#7E7E7E',
            marginBottom: '24px',
            maxWidth: '500px',
            margin: '0 auto 24px'
          }}>
            Si tienes alguna pregunta o necesitas asistencia durante tu estadía, 
            no dudes en contactarnos. Estamos aquí para ayudarte.
          </p>
          <motion.button
            onClick={() => {
              window.open(`https://api.whatsapp.com/send?phone=5492916480599`, '_blank');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: '#E6A4B4',
              color: '#4A4A4A',
              fontWeight: 'bold',
              padding: '12px 32px',
              borderRadius: '8px',
              boxShadow: '0 8px 16px rgba(230, 164, 180, 0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Phone style={{ width: '16px', height: '16px' }} />
            Escribir por WhatsApp
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        title={modalConfig.title}
        icon={modalConfig.icon}
      >
        {modalConfig.content}
      </Modal>
    </div>
  );
};

export default GuestInfoPage;