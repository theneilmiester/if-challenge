import CountriesStore from './countries/countries.store';
import ThreatModelStore from './threat-model/threat-model.store';

import {
    ICountriesStore,
    IThreatModelStore
} from 'types';

class RootStore {

    constructor() {
        this.countries = new CountriesStore(this);
        this.threatModel = new ThreatModelStore(this);
    }
    
    countries:(ICountriesStore | null) = null;
    threatModel:(IThreatModelStore | null) = null;
    
}

const storeInstance = new RootStore();
export default storeInstance;
