import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapClient = () => {
  useEffect(() => {
    // Verifica si el mapa ya está inicializado
    if (!document.getElementById('map')._leaflet_id) {
      const map = L.map('map', {
        center: [-33.8688, 151.2093], // Coordenadas de Sydney, Australia
        zoom: 13,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      L.marker([-33.8688, 151.2093])
        .addTo(map)
        .bindPopup('<b>Here I am!</b>')
        .openPopup();
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        height: '300px',
        width: '450px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        marginTop: '20px',
      }}
    ></div>
  );
};

export default MapClient;
