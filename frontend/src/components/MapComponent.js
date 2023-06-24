import React, {useEffect} from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

const MapComponent=({latitude, longitude}) => {

    const position = [latitude, longitude]
    
    function MyComponent() {
        const map = useMap();
        map.panTo(position);
        return null;
    }
  
    return (
        
        <MapContainer  style={{height: '100%', width: "100%"}} center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
            <MyComponent />
        </MapContainer>
    )  
}

export default MapComponent;
