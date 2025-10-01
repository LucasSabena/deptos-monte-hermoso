import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

const NearbyPlaces = ({ places }) => {
  const handleDirections = (place) => {
    if (place.url) {
      window.open(place.url, '_blank');
    } else {
      const query = encodeURIComponent(`${place.name}, Monte Hermoso`);
      window.open(`https://www.google.com/maps/search/${query}`, '_blank');
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  };

  const placeStyle = {
    border: '1px solid rgba(168, 218, 220, 0.2)',
    borderRadius: '8px',
    padding: '16px',
    transition: 'background-color 0.2s'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  };

  const contentStyle = {
    flex: 1
  };

  const nameContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px'
  };

  const iconContainerStyle = {
    width: '32px',
    height: '32px',
    backgroundColor: 'rgba(168, 218, 220, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const nameStyle = {
    fontWeight: '600',
    color: '#4A4A4A',
    margin: 0
  };

  const distanceStyle = {
    fontSize: '12px',
    backgroundColor: 'rgba(241, 218, 191, 0.5)',
    padding: '2px 8px',
    borderRadius: '12px',
    color: '#7E7E7E'
  };

  const descriptionStyle = {
    color: '#7E7E7E',
    fontSize: '14px',
    marginBottom: '12px',
    margin: 0
  };

  const hoursStyle = {
    fontSize: '12px',
    color: '#7E7E7E',
    margin: 0
  };

  const buttonStyle = {
    marginLeft: '16px',
    backgroundColor: 'rgba(168, 218, 220, 0.1)',
    padding: '8px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  };

  return (
    <div style={containerStyle}>
      {places.map((place, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          style={placeStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(168, 218, 220, 0.05)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          <div style={headerStyle}>
            <div style={contentStyle}>
              <div style={nameContainerStyle}>
                <div style={iconContainerStyle}>
                  <place.icon style={{ width: '16px', height: '16px', color: '#A8DADC' }} />
                </div>
                <h4 style={nameStyle}>{place.name}</h4>
                {place.distance && (
                  <span style={distanceStyle}>
                    {place.distance}
                  </span>
                )}
              </div>
              <p style={descriptionStyle}>{place.description}</p>
              {place.hours && (
                <p style={hoursStyle}>
                  <strong>Horarios:</strong> {place.hours}
                </p>
              )}
            </div>
            <button
              onClick={() => handleDirections(place)}
              style={buttonStyle}
              title="Ver en mapa"
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(168, 218, 220, 0.2)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(168, 218, 220, 0.1)'}
            >
              <ExternalLink style={{ width: '16px', height: '16px', color: '#A8DADC' }} />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default NearbyPlaces;