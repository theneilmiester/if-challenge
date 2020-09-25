import { observable, action, runInAction } from 'mobx';
import HttpGateway from 'services/http-gateway';
import { IRootStore, GatewayCountry } from 'types';

export default class CountriesStore {

    constructor(rootStore:any) {
        this.rootStore = rootStore;
    }
    
    rootStore:IRootStore;

    @observable isPending:boolean = false;
    @observable isComplete:boolean = false;
    @observable errorText:string = '';
    
    countries:GatewayCountry[] = observable([]);

    @action
    async getCountries() {
        runInAction(() => {
            this.isPending = true;
            this.isComplete = false;
            this.errorText = '';
            this.countries = [];
        });
        try {
            const response = await HttpGateway.getCountries();
            runInAction(() => {
                this.isPending = false;
                this.isComplete = true;
                this.countries = response.countries || [];
            });
        }
        catch (caught) {
            runInAction(() => {
                this.isPending = false;
                this.isComplete = true;
                this.errorText = 'fetching countries failed';
            });
        }
    }
    
}
