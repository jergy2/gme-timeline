import { GmePriceEntry } from "./timeline-item/gme-price-entry.interface";
import { TimelineItemConfig } from "./timeline-item/timeline-item-config.interface";
import { TimelineItem } from "./timeline-item/timeline-item.class";

export class TimelineItemsBuilder{

    public static getTimelineItems(configs :TimelineItemConfig[][], gmeData: GmePriceEntry[]): TimelineItem[] {

        let allItemConfigs: TimelineItemConfig[] = [];
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
        const items = allItemConfigs.map(config => {
            const gmePriceEntry: GmePriceEntry | undefined = gmeData.find(entry => entry.date.format('YYYY-MM-DD') === config.dateYYYYMMDD);
            return new TimelineItem(config, gmePriceEntry)
        });
        return items;
    }
}