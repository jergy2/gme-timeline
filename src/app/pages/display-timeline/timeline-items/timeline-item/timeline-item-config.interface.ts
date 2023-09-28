import { TimelineItemType } from "./timeline-item-type.enum";
import { TimelineItemURL } from "./timeline-item-url.interface";

export interface TimelineItemConfig{
    title: string;
    dateYYYYMMDD: string;
    urls: TimelineItemURL[]; 
    description: string;
    type: TimelineItemType[];
    significance: number;
    imgSrc?: string;
    specialIdentifier?: string;
    tags?: string[];
}