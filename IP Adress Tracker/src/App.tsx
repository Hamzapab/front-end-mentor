import { useState } from "react";
import { LatLng } from "leaflet";
import "./index.css";
import MapView from "./components/mapView";
import Header from "./components/header";

interface AutonomousSystem {
  asn: number;
  domain: string;
  name: string;
  route: string;
  type: string;
}

interface Location {
  city: string;
  country: string;
  geonameId: number;
  lat: number;
  lng: number;
  postalCode: string; 
  region: string;
  timezone: string;
}
export interface IpifyResponse {
  ip: string;
  isp: string;
  location: Location;
  as: AutonomousSystem;
}

function App() {
  const [position, setPosition] = useState(new LatLng(35.6971, -0.6308));  // Oran position as default

  // Store fetched IP data in state, initially null
  const [data, setData] = useState<IpifyResponse | null>(null);


const handleSearch = async (ip: string) => {
    const apiKey = import.meta.env.VITE_GEO_API_KEY;
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch IP location");
      }

       const data : IpifyResponse = await response.json();
      // get lat , lng from data > location 
      const { lat, lng } = data.location;
       // Update the map position
      setPosition(new LatLng(lat, lng));    

      setData(data);  

     
    } catch (error) {
      console.error("Error fetching IP data:", error);
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} lcData={data} />
      <MapView position={position} />
    </>
  );
}

export default App;
