import React, { useContext, useEffect } from "react";
import { useObserver } from 'mobx-react';
import { StoreContext } from 'index';
import { IRootStore } from 'types';
import "styles/index.scss";

const App = () => {

  const stores:IRootStore = useContext(StoreContext);
  const { countries, threatModel } = stores;

  useEffect(() => {

    if(countries.errorText) {
      console.log('error: ', countries.errorText);
    }

    if(countries.countries) {
      console.log('countries: ', countries.countries);
    }

    if(! countries.isComplete && ! countries.isPending) {
      countries.getCountries();
    }

    if(threatModel.errorText) {
      console.log('error: ', threatModel.errorText);
    }

    if(threatModel.threatModel) {
      console.log('threatModel: ', threatModel.threatModel);
    }

    if(! threatModel.isComplete && ! threatModel.isPending) {
      threatModel.getThreatModel();
    }

  });
  
  return useObserver(() => (
    <>
      {/* <div className="App">
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
      </div> */}

      <div className="Countries">
        <h2>Country List</h2>
        <p>Pending: { String(countries.isPending) }</p>
        <ul>
          {countries.countries.map((country) => (
            <li key={country.code}>{country.name}</li>
          ))}
        </ul>
      </div>

      {/* <div className="CountryAssessment">
        <h2>CountryAssessment</h2>
      </div> */}
    </>
  ));
}

export default App;
