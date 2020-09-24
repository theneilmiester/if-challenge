import { observable, action } from 'mobx';

export interface ICountriesStore {
    likesCount: number;
    updateCount: () => void;
}

export default class CountriesStore<ICountriesStore> {

    rootStore:any = {};

    constructor(rootStore:any) {
        this.rootStore = rootStore;
    }
    
    @observable likesCount = 12;

    @action updateCount() {
        this.likesCount++;
    }
    
}
