import CountriesStore from './countries/CountriesStore';
import ThreatStore from './threats/ThreatStore';

class RootStore {

    countriesStore:any = {};
    threatStore:any = {};

    constructor() {
        this.countriesStore = new CountriesStore(this);
        this.threatStore = new ThreatStore(this);
    }
    
}

const storeInstance = new RootStore();
export default storeInstance;
