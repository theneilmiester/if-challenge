import React, { useState, useEffect } from "react";
import ThreatModelPresenter from "components/ThreatModels/ThreatModelPresenter";
import CountriesPresenter from "components/Countries/CountriesPresenter";
import "styles.scss";

export default function App() {
  const threatModelPresenter = new ThreatModelPresenter();
  const countryPresenter = new CountriesPresenter();

  const [localThreatModel, copyViewModelToLocalThreatModel] = useState({
    name: "",
    threatFactors: [],
    threatRatings: []
  });

  const [localCountries, copyViewModelToLocalCountries] = useState([]);

  useEffect(() => {
    async function load() {
      await threatModelPresenter.load((viewModel) => {
        copyViewModelToLocalThreatModel(viewModel);
      });
    }
    load();
  }, []);

  useEffect(() => {
    async function load2() {
      await countryPresenter.load((viewModel) => {
        copyViewModelToLocalCountries(viewModel);
      });
    }
    load2();
  }, []);

  return (
    <>
      <div className="App">
        <h1>{localThreatModel.pageTitle}</h1>
      </div>

      <div className="Model">
        <h2>Threat Model: {localThreatModel.name}</h2>
        <h3>Rating Levels</h3>
        <ul>
          {localThreatModel.threatRatings.map((rating) => (
            <li style={{ color: rating.colour }}>{rating.name}</li>
          ))}
        </ul>
        <h3>Risk Factors</h3>
        <ul>
          {localThreatModel.threatFactors.map((factor) => (
            <li>{factor}</li>
          ))}
        </ul>
      </div>

      <div className="Countries">
        <h2>Country List</h2>
        <ul>
          {localCountries.map((country) => (
            <li key={country.countryCode}>{country.countryName}</li>
          ))}
        </ul>
      </div>

      {/* <div className="CountryAssessment">
        <h2>CountryAssessment</h2>
      </div> */}
    </>
  );
}
