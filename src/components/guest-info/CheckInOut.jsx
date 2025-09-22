import React from 'react';
import { motion } from 'framer-motion';
import { LogIn, LogOut, Clock, Info } from 'lucide-react';

const CheckInOut = ({ checkInOut }) => {
  return (
    <div style={{ display: 'grid', gap: '16px' }}>
      {/* Check-in Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          border: '1px solid rgba(34, 197, 94, 0.2)',
          borderRadius: '12px',
          padding: '16px',
          backgroundColor: 'rgba(34, 197, 94, 0.05)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <LogIn size={20} color="#22C55E" />
          </div>
          <div>
            <h4 style={{
              margin: '0',
              fontWeight: '600',
              color: '#22C55E',
              fontSize: '16px'
            }}>
              Check-in - {checkInOut.checkIn.time}
            </h4>
            <p style={{
              margin: '4px 0 0 0',
              color: '#7E7E7E',
              fontSize: '12px'
            }}>
              Procedimiento de llegada
            </p>
          </div>
        </div>
        
        <ul style={{
          margin: '0',
          paddingLeft: '20px',
          color: '#4A4A4A',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          {checkInOut.checkIn.procedure.map((step, index) => (
            <li key={index} style={{ marginBottom: '4px' }}>{step}</li>
          ))}
        </ul>
      </motion.div>

      {/* Check-out Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '12px',
          padding: '16px',
          backgroundColor: 'rgba(239, 68, 68, 0.05)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <LogOut size={20} color="#EF4444" />
          </div>
          <div>
            <h4 style={{
              margin: '0',
              fontWeight: '600',
              color: '#EF4444',
              fontSize: '16px'
            }}>
              Check-out - {checkInOut.checkOut.time}
            </h4>
            <p style={{
              margin: '4px 0 0 0',
              color: '#7E7E7E',
              fontSize: '12px'
            }}>
              Procedimiento de salida
            </p>
          </div>
        </div>
        
        <ul style={{
          margin: '0',
          paddingLeft: '20px',
          color: '#4A4A4A',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          {checkInOut.checkOut.procedure.map((step, index) => (
            <li key={index} style={{ marginBottom: '4px' }}>{step}</li>
          ))}
        </ul>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          border: '1px solid rgba(168, 218, 220, 0.2)',
          borderRadius: '12px',
          padding: '16px',
          backgroundColor: 'rgba(168, 218, 220, 0.05)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'rgba(168, 218, 220, 0.1)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Info size={20} color="#A8DADC" />
          </div>
          <h4 style={{
            margin: '0',
            fontWeight: '600',
            color: '#4A4A4A',
            fontSize: '16px'
          }}>
            Horarios flexibles
          </h4>
        </div>
        
        <div style={{ display: 'grid', gap: '8px', fontSize: '14px', color: '#4A4A4A' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={16} color="#A8DADC" />
            <span><strong>Check-in temprano:</strong> {checkInOut.earlyCheckIn}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={16} color="#A8DADC" />
            <span><strong>Check-out tardío:</strong> {checkInOut.lateCheckOut}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CheckInOut;