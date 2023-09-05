import { GmePriceEntry } from "./timeline-item/gme-price-entry.interface";
import { TimelineItemConfig } from "./timeline-item/timeline-item-config.interface";
import { TimelineItem } from "./timeline-item/timeline-item.class";

export class TimelineItemsBuilder{

    public static getTimelineItems(configs :TimelineItemConfig[], gmeData: GmePriceEntry[]): TimelineItem[] {
        const items = configs.map(config => {
            const gmePriceEntry: GmePriceEntry | undefined = gmeData.find(entry => entry.date.format('YYYY-MM-DD') === config.dateYYYYMMDD);
            return new TimelineItem(config, gmePriceEntry)
        });
        return items;
    }
}