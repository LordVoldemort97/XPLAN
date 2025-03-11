import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Typography, Card, CardContent } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import '../leaflet-fix';

// Tourist attractions in Cairo
const attractions = [
  {
    id: 1,
    name: 'Great Pyramid of Giza',
    position: [29.9792, 31.1342],
    description: 'One of the Seven Wonders of the Ancient World, built around 2560 BCE.',
  },
  {
    id: 2,
    name: 'Egyptian Museum',
    position: [30.0478, 31.2336],
    description: 'Home to the world\'s largest collection of ancient Egyptian antiquities.',
  },
  {
    id: 3,
    name: 'Khan el-Khalili',
    position: [30.0477, 31.2622],
    description: 'A major souk (market) in Cairo\'s historic district.',
  },
  {
    id: 4,
    name: 'Al-Azhar Mosque',
    position: [30.0445, 31.2617],
    description: 'One of Cairo\'s earliest mosques, founded in 970 CE.',
  },
  {
    id: 5,
    name: 'Cairo Citadel',
    position: [30.0287, 31.2599],
    description: 'Medieval Islamic fortification built by Saladin.',
  },
  {
    id: 6,
    name: 'Coptic Cairo',
    position: [30.0064, 31.2313],
    description: 'Historic area with ancient Christian churches and Roman fortress.',
  },
];

const CairoMap = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Cairo Tourist Attractions
      </Typography>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="body1">
            Explore Cairo's most famous tourist attractions on this interactive map.
            Click on the markers to learn more about each location.
          </Typography>
        </CardContent>
      </Card>
      
      <Box
        sx={{
          height: '600px',
          width: '100%',
          '& .leaflet-container': {
            height: '100%',
            width: '100%',
            borderRadius: '8px',
          },
        }}
      >
        <MapContainer
          center={[30.0444, 31.2357]} // Cairo center
          zoom={12}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {attractions.map((attraction) => (
            <Marker
              key={attraction.id}
              position={attraction.position}
            >
              <Popup>
                <Typography variant="h6" gutterBottom>
                  {attraction.name}
                </Typography>
                <Typography variant="body2">
                  {attraction.description}
                </Typography>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Box>
  );
};

export default CairoMap; 