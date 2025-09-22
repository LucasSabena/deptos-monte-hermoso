import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets } from 'lucide-react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Widget embebido de OpenWeather para Monte Hermoso
    const script = document.createElement('script');
    script.async = true;
    script.charset = 'utf-8';
    script.src = 'https://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
    
    // Crear el contenedor del widget
    const widgetContainer = document.getElementById('openweathermap-widget-11');
    if (widgetContainer) {
      widgetContainer.innerHTML = '';
    }

    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        border: '1px solid rgba(168, 218, 220, 0.2)',
        borderRadius: '12px',
        padding: '16px',
        backgroundColor: 'rgba(168, 218, 220, 0.05)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'rgba(168, 218, 220, 0.1)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Cloud size={20} color="#A8DADC" />
        </div>
        <div>
          <h4 style={{
            margin: '0',
            fontWeight: '600',
            color: '#4A4A4A',
            fontSize: '16px'
          }}>
            Estado del Tiempo
          </h4>
          <p style={{
            margin: '4px 0 0 0',
            color: '#7E7E7E',
            fontSize: '12px'
          }}>
            Monte Hermoso, Buenos Aires
          </p>
        </div>
      </div>

      {/* Widget de OpenWeatherMap */}
      <div 
        id="openweathermap-widget-11"
        style={{
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      ></div>

      {/* Script tag para el widget */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.myWidgetParam = window.myWidgetParam || [];
            window.myWidgetParam.push({
              id: 11,
              cityid: '3430443',
              appid: '2643743bc5608ce60bb2e388b91a6422',
              units: 'metric',
              containerid: 'openweathermap-widget-11',
              theme: 'light'
            });
            (function() {
              var script = document.createElement('script');
              script.async = true;
              script.charset = 'utf-8';
              script.src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(script, s);
            })();
          `
        }}
      />

      {/* Fallback: enlace directo al clima */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '12px',
        paddingTop: '12px',
        borderTop: '1px solid rgba(168, 218, 220, 0.2)'
      }}>
        <a 
          href="https://weather.com/es-AR/weather/today/l/-38.99,-61.28"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#A8DADC',
            textDecoration: 'none',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px'
          }}
        >
          <Wind size={14} />
          Ver pronóstico extendido
        </a>
      </div>
    </motion.div>
  );
};

export default WeatherWidget;