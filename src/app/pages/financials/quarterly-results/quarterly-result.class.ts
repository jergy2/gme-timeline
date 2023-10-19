import { QuarterlyResultInterface } from "./quarterly-result.interface";

export class QuarterlyResult{


    private _values: QuarterlyResultInterface;

    public get fiscalYear(): number { return this._values.year; }
    public get quarter(): 'Q1' | 'Q2' | 'Q3' | 'Q4' { return this._values.quarter; }
    public get revenue(): number { return this._values.netSalesMillions; }
    public get netIncome(): number { return this._values.netLossGainMillions; }
    public get tenQKformLink(): string { return this._values.tenQKformLink; }
    public get newsReleaseLink(): string { return this._values.newsReleaseLink; }
    public get filingDateYYYYMMDD(): string { return this._values.filingDateYYYYMMDD; }
    public get documentDateYYYYMMDD(): string { return this._values.documentDateYYYYMMDD; }
    public get assetsMillions(): number { return this._values.assetsMillions; }
    public get liabilitiesMillions(): number { return this._values.liabilitiesMillions; }
    public get stockholderEquityMillions(): number { return this._values.stockholderEquityMillions; }
    public get costOfSalesMillions(): number { return this._values.costOfSalesMillions; }
    public get grossProfitMillions(): number { return this._values.grossProfitMillions; }
    public get operatingLossGainMillions(): number { return this._values.operatingLossGainMillions; }
    public get sharesOutstandingMillions(): number { return this._values.sharesOutstandingMillions; }
    public get DRSMillions(): number { return this._values.DRSMillions; }
    public get netEarningsLossPerShare(): number { return this._values.netEarningsLossPerShare; }


    constructor(values: QuarterlyResultInterface){
        this._values = values;
    }

}