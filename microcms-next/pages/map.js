import useState from 'react-hook-use-state';

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


export default function Map() {

    const containerStyle = {
        width: "100%",
        height: "100vh",
    };

    // マップの初期情報
    const defaultMapData = {
        center: {
            lat: 35.69575,
            lng: 139.77521,
        },
        zoom: 9,
    };

    const [latlngData, setLatLngData] = useState(null);


    const [mapData, setMapData] = useState(defaultMapData);

    const onMapClick = (event) => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: event.latLng }, (results, status) => {
          if (status === "OK") {
            setLatLngData({
              status: "update",
              data: {
                address: results[0].formatted_address,
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng(),
              },
            });
          }
        });
      };

    // マップを表示
    return (
        <div className="App">
            <LoadScript googleMapsApiKey={process.env.G_API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={mapData.center}
                    zoom={mapData.zoom}
                    onClick={onMapClick}
                />
                  {latlngData && <Marker position={latlngData.data} />}
            </LoadScript>
        </div>
    );
}