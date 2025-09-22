import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const ContactCard = ({ name, phone, whatsapp, emergencyOnly = false }) => {
  const handleCall = () => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?phone=${whatsapp}`, '_blank');
  };

  const cardStyle = {
    border: emergencyOnly ? '1px solid rgba(239, 68, 68, 0.2)' : '1px solid rgba(168, 218, 220, 0.2)',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: emergencyOnly ? 'rgba(254, 242, 242, 1)' : 'rgba(168, 218, 220, 0.05)'
  };

  const titleStyle = {
    fontWeight: '600',
    color: emergencyOnly ? 'rgb(185, 28, 28)' : '#4A4A4A',
    marginBottom: '8px',
    margin: 0
  };

  const buttonBaseStyle = {
    width: '100%',
    textAlign: 'left',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px'
  };

  const phoneButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: emergencyOnly ? 'rgba(254, 226, 226, 1)' : '#FFFFFF',
    color: emergencyOnly ? 'rgb(185, 28, 28)' : '#4A4A4A'
  };

  const whatsappButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: emergencyOnly ? 'rgba(254, 226, 226, 1)' : '#FFFFFF',
    color: emergencyOnly ? 'rgb(185, 28, 28)' : '#4A4A4A',
    marginBottom: 0
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      style={cardStyle}
    >
      <h4 style={titleStyle}>
        {name}
      </h4>
      <div>
        <button
          onClick={handleCall}
          style={phoneButtonStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = emergencyOnly 
              ? 'rgba(252, 165, 165, 1)' 
              : 'rgba(168, 218, 220, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = emergencyOnly 
              ? 'rgba(254, 226, 226, 1)' 
              : '#FFFFFF';
          }}
        >
          <Phone style={{ width: '16px', height: '16px' }} />
          {phone}
        </button>
        {whatsapp && (
          <button
            onClick={handleWhatsApp}
            style={whatsappButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = emergencyOnly 
                ? 'rgba(252, 165, 165, 1)' 
                : 'rgba(168, 218, 220, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = emergencyOnly 
                ? 'rgba(254, 226, 226, 1)' 
                : '#FFFFFF';
            }}
          >
            <Phone style={{ width: '16px', height: '16px' }} />
            WhatsApp
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ContactCard;