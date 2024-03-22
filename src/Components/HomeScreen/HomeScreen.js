import React from 'react'
import './HomeScreen.css';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
    width: '880px',
    height: '495px',
};
const center = {
    lat: 22.5726, // default latitude
    lng: 88.3639, // default longitude
};

function HomeScreen() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCgB1uIYwhZO_ewy8LmfNsNq44Yxo6U9y4',
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <div className="home">
            <div className="searchbar">
                <h2>Get a ride</h2>
                <form>
                    <input type="text" placeholder="Pickup location"></input><br></br>
                    <input type="text" placeholder="Dropoff location"></input><br></br>
                    <button type="button">Search</button>
                </form>
            </div>
            <div className="map">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
            </div>
           
        </div>
    )
}

export default HomeScreen