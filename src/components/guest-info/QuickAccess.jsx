import React from 'react';
import { motion } from 'framer-motion';

const QuickAccess = ({ items }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    marginBottom: '32px'
  };

  const itemStyle = {
    backgroundColor: 'rgba(168, 218, 220, 0.1)',
    borderRadius: '12px',
    padding: '16px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s',
    border: 'none',
    width: '100%'
  };

  const iconContainerStyle = {
    width: '48px',
    height: '48px',
    backgroundColor: 'rgba(168, 218, 220, 0.2)',
    borderRadius: '8px',
    margin: '0 auto 12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const titleStyle = {
    fontWeight: '600',
    color: '#4A4A4A',
    fontSize: '14px',
    margin: 0,
    marginBottom: '4px'
  };

  const subtitleStyle = {
    color: '#7E7E7E',
    fontSize: '12px',
    margin: 0
  };

  return (
    <div style={gridStyle}>
      {items.map((item, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          style={itemStyle}
          onClick={item.onClick}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(168, 218, 220, 0.2)';
            e.target.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(168, 218, 220, 0.1)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          <div style={iconContainerStyle}>
            <item.icon style={{ width: '24px', height: '24px', color: '#A8DADC' }} />
          </div>
          <h3 style={titleStyle}>{item.title}</h3>
          <p style={subtitleStyle}>{item.subtitle}</p>
        </motion.button>
      ))}
    </div>
  );
};

export default QuickAccess;