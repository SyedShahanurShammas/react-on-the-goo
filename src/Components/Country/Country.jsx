import React, { useState } from "react";
import "./country.css";

const Country = ({ country, visitedCountries, allFlagsOfAllCountries }) => {
  const [Visited, setVisited] = useState(false);
  const handleVisited = () => {
    // Visited ? setVisited(false) : setVisited(true);
    // setVisited(Visited ? false : true);
    setVisited(!Visited);
    visitedCountries(country);
  };
  return (
    <div
      className={`border  min-h-[300px]  p-3 rounded ${
        Visited && "bg-gray-800"
      }`}
    >
      <img
        className="w-full h-[200px]"
        src={country.flags.flags?.png}
        alt={country.flags.flags.alt}
      />
      <h1 className="text-2xl">Name:{country.name?.common}</h1>
      <div className="flex justify-between items-center">
        <div>
          <p>Population : {country.population.population}</p>
          <p>Capital : {country.capital.capital[0]}</p>
          <button onClick={handleVisited} className="btns">
            {Visited ? "Visited" : "Not visited"}
          </button>
          <button
            className="btns ml-2.5"
            onClick={() => {
              allFlagsOfAllCountries(country.flags.flags?.png);
            }}
          >
            Add Flag
          </button>
        </div>
        <div>
          <p>Region : {country.region.region}</p>
          <p>
            Area : {country.area.area} KM <br /> Size :{" "}
            {country.area.area > 300000 ? "Very Big" : "Small country"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
