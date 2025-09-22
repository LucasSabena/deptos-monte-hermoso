import React from 'react';
import { motion } from 'framer-motion';

const InventoryList = ({ items, title }) => {
  const containerStyle = {
    marginBottom: '16px'
  };

  const titleStyle = {
    fontWeight: '600',
    color: '#4A4A4A',
    marginBottom: '16px',
    margin: 0
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '12px'
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px',
    backgroundColor: 'rgba(168, 218, 220, 0.05)',
    borderRadius: '8px'
  };

  const dotStyle = {
    width: '8px',
    height: '8px',
    backgroundColor: '#A8DADC',
    borderRadius: '50%',
    flexShrink: 0
  };

  const textStyle = {
    color: '#7E7E7E',
    fontSize: '14px',
    margin: 0
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <div style={gridStyle}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            style={itemStyle}
          >
            <div style={dotStyle}></div>
            <span style={textStyle}>{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InventoryList;