import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetina,
    iconUrl: icon,
    shadowUrl: iconShadow
});

// Add this component to handle map view updates
function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, map, zoom]);
  return null;
}

const Mapmodal = ({country}) => {
  return (
    <>
      <div className="modal fade" id="MapModal" tabIndex="-1" aria-labelledby="countryModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{country?.name?.common}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div style={{ height: '400px', width: '100%' }}>
                {country && country.latlng && (
                  <MapContainer 
                    center={[country.latlng[0], country.latlng[1]]} 
                    zoom={5} 
                    scrollWheelZoom={true}
                    style={{ height: '100%', width: '100%', borderRadius: '8px' }}
                  >
                    <ChangeView center={[country.latlng[0], country.latlng[1]]} zoom={5} />
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[country.latlng[0], country.latlng[1]]}>
                      <Popup>
                        {country.name.common}
                      </Popup>
                    </Marker>
                  </MapContainer>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mapmodal