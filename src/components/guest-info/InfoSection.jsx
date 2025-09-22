import React from 'react';
import { motion } from 'framer-motion';

const InfoSection = ({ title, children, icon: IconComponent, className = '' }) => {
  const sectionStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(241, 218, 191, 0.2)',
    padding: '24px',
    marginBottom: '24px',
    ...className
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px'
  };

  const iconContainerStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(168, 218, 220, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#4A4A4A',
    fontFamily: 'Satoshi, sans-serif'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={sectionStyle}
    >
      <div style={headerStyle}>
        {IconComponent && (
          <div style={iconContainerStyle}>
            <IconComponent style={{ width: '20px', height: '20px', color: '#A8DADC' }} />
          </div>
        )}
        <h2 style={titleStyle}>{title}</h2>
      </div>
      {children}
    </motion.div>
  );
};

export default InfoSection;