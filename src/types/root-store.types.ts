import {
    ICountriesStore,
    IThreatModelStore
} from 'types';

export interface IRootStore {
    countries: ICountriesStore;
    threatModel: IThreatModelStore;
}
