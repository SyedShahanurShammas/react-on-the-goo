import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ CountriesPromiseAll }) => {
  const promiseAll = use(CountriesPromiseAll);
  const countries = promiseAll.countries;

  const [allVisitedCountries, setAllVisitedCountries] = useState([]);
  const [allFlags, setallFlags] = useState([]);
  const visitedCountries = (country) => {
    const newCountries = [...allVisitedCountries, country];
    setAllVisitedCountries(newCountries);
  };

  const allFlagsOfAllCountries = (flag) => {
    const newFlags = [...allFlags, flag];
    setallFlags(newFlags);
  };
  return (
    <div>
      <h1>Visited Countries:{allVisitedCountries.length}</h1>
      <ol>
        {allVisitedCountries.map((country) => (
          <li key={country.cca3.cca3}> {country.name.common} </li>
        ))}
      </ol>
      <div className="flex flex-wrap gap-2">
        {allFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>
      <div className=" grid lg:grid-cols-3 gap-2.5">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            visitedCountries={visitedCountries}
            allFlagsOfAllCountries={allFlagsOfAllCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
