import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const DeliveryRestaurants = ({ restaurants }) => {
  const handleCall = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleWhatsApp = (whatsapp) => {
    window.open(`https://api.whatsapp.com/send?phone=${whatsapp}`, '_blank');
  };

  return (
    <div style={{ display: 'grid', gap: '16px' }}>
      {restaurants.map((restaurant, index) => {
        const IconComponent = restaurant.icon;
        return (
          <motion.div
            key={restaurant.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              border: '1px solid rgba(168, 218, 220, 0.2)',
              borderRadius: '12px',
              padding: '16px',
              backgroundColor: 'rgba(168, 218, 220, 0.05)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(168, 218, 220, 0.1)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <IconComponent size={20} color="#A8DADC" />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{
                  margin: '0 0 4px 0',
                  fontWeight: '600',
                  color: '#4A4A4A',
                  fontSize: '16px'
                }}>
                  {restaurant.name}
                </h4>
                <p style={{
                  margin: '0 0 8px 0',
                  color: '#7E7E7E',
                  fontSize: '14px',
                  lineHeight: '1.4'
                }}>
                  {restaurant.description}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  fontSize: '12px',
                  color: '#7E7E7E',
                  marginBottom: '12px'
                }}>
                  <span><strong>Horario:</strong> {restaurant.hours}</span>
                  <span><strong>Especialidad:</strong> {restaurant.speciality}</span>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => handleCall(restaurant.phone)}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  backgroundColor: '#A8DADC',
                  color: '#1D3557',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#7CC5C9';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#A8DADC';
                }}
              >
                <Phone size={14} />
                Llamar
              </button>
              
              <button
                onClick={() => handleWhatsApp(restaurant.whatsapp)}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  backgroundColor: '#25D366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#20B954';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#25D366';
                }}
              >
                <MessageCircle size={14} />
                WhatsApp
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DeliveryRestaurants;