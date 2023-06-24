import React, { useState } from 'react';

function CityToLatLong() {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=cb9771dde18842f09fafde8f78f53e47`);
    const data = await response.json();

    if (data.results.length > 0) {
      setLatitude(data.results[0].geometry.lat);
      setLongitude(data.results[0].geometry.lng);
    } else {
      alert(`Could not find coordinates for `,{city});
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input type="text" value={city} onChange={handleCityChange} />
        </label>
        <button type="submit">Get Coordinates</button>
      </form>
      {latitude && longitude && (
        <div>
          Latitude: {latitude}
          <br />
          Longitude: {longitude}
        </div>
      )}
    </div>
  );
}

export default CityToLatLong;
