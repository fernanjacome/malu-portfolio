import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const Map = dynamic(
  () => import('./MapClient'), // Importa el componente con lógica de Leaflet
  { ssr: false } // Desactiva el renderizado en el servidor
);

export default Map;
