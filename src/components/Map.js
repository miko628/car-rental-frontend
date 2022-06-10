import React, { useCallback, useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Map() {
    const [showrooms, setShowrooms] = useState([])

    const fetchDataHandler = useCallback(async () => {
        try {
            const result = await fetch(`http://localhost:8080/showroom/all`)

            if (!result.ok) {
                throw new Error("Nie udało się pobrać danych")
            }

            const resultData = await result.json()
            setShowrooms(resultData)

        } catch (err) {
            console.log(err.message);
        }

    }, [])

    useEffect(() => {
        fetchDataHandler()
    }, []);

    return(
        <div id="map" className="leafletContainer">
            <MapContainer style={{height: '100%', width:'100%'}} center={[52.20394673896355, 19.453349200746953]} zoom={6} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    showrooms.map(showroom => (
                                <Marker key={showroom.id} position={[showroom.latitude, showroom.longitude]}>
                                    <Popup>
                                        {showroom.name}
                                    </Popup>
                                </Marker>
                ))}
            </MapContainer>
        </div>
    )
}
