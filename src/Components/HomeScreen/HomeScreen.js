import React from 'react';
import './homeScreen.css';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import pickUp from '../../Assets/Pickup.png';
import upDown from '../../Assets/upDown.png';

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
        googleMapsApiKey: 'YOUR_API_KEY',
        libraries,
    });

    const handleSearch = () => {
        // Logic for handling search
        console.log('Search button clicked');
    };

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
                    <div>
                        <input type="text" placeholder="Pickup location" className="input-container1"/>
                    </div>

                    <img src={upDown} alt='UpDown' className='updown-img'/>
                    
                    <div >
                        <input type="text" placeholder="Dropoff location" className="input-container2"/>   
                    </div>

                    <button type="button" onClick={handleSearch}>Search</button>
                </form>
            </div>
            <div className="map">
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
                    <Marker position={center} icon={pickUp} />
                    {/* Add more markers for dropoff locations */}
                </GoogleMap>
            </div>
        </div>
    );
}

export default HomeScreen;