export type GatewayResponse = {
    countries?: GatewayCountry[];
    threatAssessment?: GatewayThreatAssessment;
    threatModel?: GatewayThreatModel;
}

export type GatewayCountry = {
    code?: string;
    alpha1?: string;
    alpha2?: string;
    alpha3?: string;
    name: string;
    sovereignty?: string;
    continent?: {
        code: string;
        name: string;
    }
}

export type GatewayThreatAssessment = {
    id: string;
    modelId: string;
    ratingId: string;
    riskFactors: {
        id: string;
        name: string;
        ratingId: string;
    }[]
}

export type GatewayThreatModel = {
    id: string;
    organisationId: string;
    entityType: string;
    name: string;
    ratings: {
        id: string;
        name: string;
        ranking: number;
        colour: string;
    }[];
    riskFactors: {
        id: string;
        name: string;
    }[];
}
