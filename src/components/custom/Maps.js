import { useEffect } from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    // Verifica si el mapa ya está inicializado
    if (!document.getElementById('map')._leaflet_id) {
      const map = L.map('map', {
        center: [-33.8688, 151.2093], // Coordenadas de Sydney, Australia
        zoom: 13,
        zoomControl: false, // Desactivar controles de zoom
        scrollWheelZoom: false, // Desactivar zoom por rueda
        dragging: false, // Desactivar la capacidad de arrastrar el mapa
        touchZoom: false, // Desactivar zoom táctil
        doubleClickZoom: false, // Desactivar zoom con doble clic
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      L.marker([-33.8688, 151.2093]) // Coordenadas del marcador
        .addTo(map)
        .bindPopup("<b>Here I am!</b>") // Texto al hacer clic en el marcador
        .openPopup();
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "300px", // Aumento de la altura del mapa
        width: '300',
        borderRadius: '12px', // Bordes más redondeados
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Sombra más suave y grande
        border: '2px solid rgba(255, 255, 255, 0.3)', // Borde suave y delgado
        marginTop: '20px',
      }}
    ></div>
  );
};

export default Map;
