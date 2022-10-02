import {
  Card,
  CardContent,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import "./App.css";
import React, { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import Map from "./Map";
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldWide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    console.log(countryCode);

    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__left">
        {" "}
        <div className="app__header">
          <h1>Hello corona kemon acho tumi ?</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox title="Corona Virus Cases" total="150"></InfoBox>

          <InfoBox title="recorded" total="230"></InfoBox>
          <InfoBox title="Deads" total="10"></InfoBox>
        </div>
        <Map></Map>
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases</h3>

          <h3>World Wide new Cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
