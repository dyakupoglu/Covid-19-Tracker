import React, { useEffect, useState } from "react";
import "./App.css";

// import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import InfoBox from "./components/InfoBox/InfoBox";

const countriesURL = "https://disease.sh/v3/covid-19/countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      try {
        await fetch(countriesURL)
          .then((response) => response.json())
          .then((data) => {
            const countries = data.map((country) => ({
              name: country.country, // United States, United Kingdom, Turkey.
              value: country.countryInfo.iso2, // USA, UK, TR.
            }));

            setCountries(countries);
          });
      } catch (error) {
        console.log(error);
      }
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="App">
      <div className="app_header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app_dropdown">
          {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
          <Select
            //labelId="demo-simple-select-label"
            //id="demo-simple-select"
            onChange={onCountryChange}
            variant="outlined"
            value={selectedCountry}
            //label="Age"
          >
            <MenuItem value="worldwide">WorldWide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="app_stats">
        <InfoBox title="Coronavirus Cases" />
        <InfoBox title="Recovered" />
        <InfoBox title="Deaths" />
      </div>
    </div>
  );
};

export default App;
