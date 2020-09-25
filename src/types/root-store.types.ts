import {
    ICountriesStore
} from 'types';

export interface IRootStore {
    countriesStore: ICountriesStore;
    threatStore: any;
}
