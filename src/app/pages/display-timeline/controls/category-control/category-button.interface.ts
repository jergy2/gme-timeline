import { TimelineItemType } from "../../timeline-items/timeline-item/timeline-item-type.enum";


export interface CategoryButton{
    category: TimelineItemType | 'ALL',
    showActivated: boolean,
    hideActivated: boolean,
}