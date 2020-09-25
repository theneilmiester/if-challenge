import HttpGateway from 'services/http-gateway';
import { observable, action, runInAction } from 'mobx';
import { IRootStore, GatewayThreatModel } from 'types';

export default class ThreatModelStore {

    constructor(rootStore:any) {
        this.rootStore = rootStore;
    }

    rootStore:IRootStore;
    
    @observable isPending:boolean = false;
    @observable isComplete:boolean = false;
    @observable errorText:string = '';

    threatModel:(GatewayThreatModel | object) = observable({});

    @action
    async getThreatModel() {
        runInAction(() => {
            this.isPending = true;
            this.isComplete = false;
            this.errorText = '';
        });
        try {
            const response = await HttpGateway.getThreatModel();
            runInAction(() => {
                this.isPending = false;
                this.isComplete = true;
                this.threatModel = response.threatModel || {};
            });
        }
        catch (caught) {
            runInAction(() => {
                this.isPending = false;
                this.isComplete = true;
                this.errorText = 'fetching threat-model failed';
            });
        }
    }

}
