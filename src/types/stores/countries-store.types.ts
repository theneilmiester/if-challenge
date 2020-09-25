import { GatewayCountry } from 'types';

export interface ICountriesStore {
    isPending: boolean;
    isComplete: boolean;
    errorText: string;
    countries: GatewayCountry[];
    getCountries: () => void;
}
