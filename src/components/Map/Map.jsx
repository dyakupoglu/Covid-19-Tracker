import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import { ChangeView } from "./ChangeView";
import numeral from "numeral";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 100,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 200,
  },
  deaths: {
    hex: "#000000",
    multiplier: 300,
  },
};

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countries.map((country) => (
          <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            pathOptions={{
              color: casesTypeColors[casesType].hex,
              fillColor: casesTypeColors[casesType].hex,
            }}
            radius={
              Math.sqrt(country[casesType]) *
              casesTypeColors[casesType].multiplier
            }
          >
            <Popup>
              <div className="popup_container">
                <div
                  className="popup_flag"
                  style={{
                    backgroundImage: `url("${country.countryInfo.flag}")`,
                  }}
                />
                <div className="popup_name">{country.country}</div>
                <div className="popup_cases">
                  Cases: {numeral(country.cases).format("0,0")}
                </div>
                <div className="popup_recovered">
                  Recovered: {numeral(country.recovered).format("0,0")}
                </div>
                <div className="popup_deaths">
                  Deaths: {numeral(country.deaths).format("0,0")}
                </div>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
