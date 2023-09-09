import { GmePriceEntry } from "../timeline-items/timeline-item/gme-price-entry.interface";
import { TimelineItemType } from "../timeline-items/timeline-item/timeline-item-type.enum";
import { TimelineItem } from "../timeline-items/timeline-item/timeline-item.class";

export class DatasetConfig{

    private _timelineItems: (TimelineItem | null)[];
    private _label: string;
    private _itemType: TimelineItemType;
    private _color: string;
    private _significanceValue: number;

    public get timelineItems(): (TimelineItem | null)[] { return this._timelineItems; }
    public get dataPoints(): (number | null)[] { return this._timelineItems.map((timelineItem)=>{
        if(timelineItem !== null){
            if(timelineItem.gmePriceEntry){
                return timelineItem.gmePriceEntry.close;
            }
        }
        return null;
    })}
    public get label(): string { return this._label; }
    public get itemType(): TimelineItemType { return this._itemType; }
    public get color(): string { return this._color; }
    public get significance(): number { return this._significanceValue; }

    constructor(timelineItems: (TimelineItem | null)[], label: string, type: TimelineItemType, color: string, significance: number){
        this._timelineItems = timelineItems;
        this._label = label;
        this._itemType = type;
        this._color = color;
        this._significanceValue = significance;
    }

    public get eventCount(): number { 
        return (this._timelineItems.filter(item => item !== null)).length;
    }

    public getIndexOfTimelineItem(checkItem: TimelineItem): number{

        const foundIndex = this._timelineItems.findIndex(item => item?.itemIndex === checkItem.itemIndex);
        return foundIndex;
    }
}