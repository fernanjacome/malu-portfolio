import dynamic from "next/dynamic";

// Cargar OpenStreetMap de forma dinámica y deshabilitar SSR
const OpenStreetMap = dynamic(() => import("./OpenStreetMap"), { ssr: false });

const Map = () => {
  return (
    <div>
      <OpenStreetMap />
    </div>
  );
};

export default Map;
