import { GmePriceEntry } from "../timeline-items/timeline-item/gme-price-entry.interface";
import { TimelineItemType } from "../timeline-items/timeline-item/timeline-item-type.enum";

export class DatasetConfig{

    private _priceEntries: (GmePriceEntry | null)[];
    private _label: string;
    private _itemType: TimelineItemType;
    private _color: string;
    private _significanceValue: number;

    public get priceEntries(): (GmePriceEntry | null)[] { return this._priceEntries; }
    public get dataPoints(): (number | null)[] { return this._priceEntries.map((priceEntry)=>{
        if(priceEntry !== null){
            return priceEntry.close;
        }
        return null;
    })}
    public get label(): string { return this._label; }
    public get itemType(): TimelineItemType { return this._itemType; }
    public get color(): string { return this._color; }
    public get significance(): number { return this._significanceValue; }

    constructor(priceEntries: (GmePriceEntry | null)[], label: string, type: TimelineItemType, color: string, significance: number){
        this._priceEntries = priceEntries;
        this._label = label;
        this._itemType = type;
        this._color = color;
        this._significanceValue = significance;
    }

    public get eventCount(): number { 
        return (this._priceEntries.filter(item => item !== null)).length;
    }
}