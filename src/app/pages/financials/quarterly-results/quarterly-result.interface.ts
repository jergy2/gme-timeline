export interface QuarterlyResultInterface{
    year: number;
    quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
    tenQKformLink: string;
    newsReleaseLink: string;
    filingDateYYYYMMDD: string;
    documentDateYYYYMMDD: string;
    assetsMillions: number;
    liabilitiesMillions: number;
    stockholderEquityMillions: number;
    netSalesMillions: number;
    costOfSalesMillions: number;
    grossProfitMillions: number;
    operatingLossGainMillions: number;
    netLossGainMillions: number;
    sharesOutstandingMillions: number;
    DRSMillions: number;
    netEarningsLossPerShare: number;
}