import { QuarterlyResult } from "./quarterly-result.class";
import { QuarterlyResultInterface } from "./quarterly-result.interface";

export class YearlyResult{
    constructor(quarters: QuarterlyResult[]){
        let finalQuarter = quarters[0];
        let allEarnings = 0;
        quarters.forEach(quarter =>{
            if(quarter.quarter > finalQuarter.quarter){
                finalQuarter = quarter
            }
            allEarnings += quarter.netIncome;
        });
        let netsales = 0;
        let netLossGain = 0;
        let costOfSales = 0;
        let grossProfit = 0;
        let operatingLossGain = 0;
        quarters.forEach(quarter =>{
            netsales += quarter.revenue;
            netLossGain += quarter.netIncome;
            costOfSales += quarter.costOfSalesMillions;
            grossProfit += quarter.grossProfitMillions;
            operatingLossGain += quarter.operatingLossGainMillions;
        });
        let values: QuarterlyResultInterface = {
            year: finalQuarter.fiscalYear,
            quarter: finalQuarter.quarter,
            netSalesMillions: netsales,
            netLossGainMillions: netLossGain,
            tenQKformLink: finalQuarter.tenQKformLink,
            newsReleaseLink: finalQuarter.newsReleaseLink,
            filingDateYYYYMMDD: finalQuarter.filingDateYYYYMMDD,
            documentDateYYYYMMDD: finalQuarter.documentDateYYYYMMDD,
            assetsMillions: finalQuarter.assetsMillions,
            liabilitiesMillions: finalQuarter.liabilitiesMillions,
            stockholderEquityMillions: finalQuarter.stockholderEquityMillions,
            costOfSalesMillions: costOfSales,
            grossProfitMillions: grossProfit,
            operatingLossGainMillions: operatingLossGain,
            sharesOutstandingMillions: finalQuarter.sharesOutstandingMillions,
            DRSMillions: finalQuarter.DRSMillions,
            netEarningsLossPerShare: allEarnings / finalQuarter.sharesOutstandingMillions,
            sankeyChartImg: finalQuarter.sankeyImg,
        }
        this._values = values;
    }

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
    public get sankeyImg(): string { return this._values.sankeyChartImg; }
}