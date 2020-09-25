import { GatewayThreatModel } from 'types';

export interface IThreatModelStore {
    isPending: boolean;
    isComplete: boolean;
    errorText: string;
    threatModel: GatewayThreatModel | object;
    getThreatModel: () => void;
}
