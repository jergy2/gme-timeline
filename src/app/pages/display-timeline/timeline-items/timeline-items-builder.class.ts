import { GmePriceEntry } from "../../../services/gme-price-entry.interface";
import { TimelineEventConfig } from "./timeline-item/timeline-event-config.interface";
import { TimelineEvent } from "./timeline-item/timeline-event";

export class TimelineItemsBuilder{

    public static getTimelineItems(configs :TimelineEventConfig[][], gmeData: GmePriceEntry[]): TimelineEvent[] {

        let allItemConfigs: TimelineEventConfig[] = [];
        configs.forEach(configSet =>{
            allItemConfigs = allItemConfigs.concat(configSet)
        });
        allItemConfigs = allItemConfigs.sort((item1, item2)=>{
            if(item1.dateYYYYMMDD < item2.dateYYYYMMDD){
                return -1;
            }else if(item1.dateYYYYMMDD > item2.dateYYYYMMDD){
                return 1;
            }else{
                return 0;
            }
        });
        let itemIndex: number = 0;
        const items = allItemConfigs.map(config => {
            const gmePriceEntry: GmePriceEntry | undefined = gmeData.find(entry => entry.date.format('YYYY-MM-DD') === config.dateYYYYMMDD);
            itemIndex++;
            return new TimelineEvent(config, gmePriceEntry, itemIndex);
            
        });
        // for(let i=1; i<items.length;i++){
        //     if(items[i].dateMMMDDYYYY === items[i-1].dateMMMDDYYYY){
        //         console.log("Match:", items[i].dateYYYYMMDD, items[i].title + " , ", items[i-1].title)
        //     }
        // }
        return items;
    }
}