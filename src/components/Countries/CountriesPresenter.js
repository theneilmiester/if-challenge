import countriesRepository from "./CountryRepository";

export default class CountriesPresenter {
  load = async (callback) => {
    await countriesRepository.getCounties((countriesPm) => {
      const countriesVm = countriesPm.map((country) => {
        return { countryCode: country.code, countryName: country.name };
      });
      callback(countriesVm);
    });
  };
}
