import React from 'react';
import { motion } from 'framer-motion';

const InfoItem = ({ icon: IconComponent, label, value, className = '' }) => {
  const itemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '12px',
    borderRadius: '8px',
    transition: 'background-color 0.2s',
    cursor: 'default',
    ...className
  };

  const iconContainerStyle = {
    width: '32px',
    height: '32px',
    backgroundColor: 'rgba(168, 218, 220, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '2px'
  };

  const labelStyle = {
    fontWeight: 'medium',
    color: '#4A4A4A',
    fontSize: '14px',
    margin: 0
  };

  const valueStyle = {
    color: '#7E7E7E',
    fontSize: '14px',
    marginTop: '4px',
    margin: 0
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      style={itemStyle}
      onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(168, 218, 220, 0.05)'}
      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
    >
      {IconComponent && (
        <div style={iconContainerStyle}>
          <IconComponent style={{ width: '16px', height: '16px', color: '#A8DADC' }} />
        </div>
      )}
      <div style={{ flex: 1 }}>
        <p style={labelStyle}>{label}</p>
        <p style={valueStyle}>{value}</p>
      </div>
    </motion.div>
  );
};

export default InfoItem;