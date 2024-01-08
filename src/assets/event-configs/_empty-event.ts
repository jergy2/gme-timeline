import { TimelineEventConfig } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-config.interface";
import { TimelineEventType } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-type.enum";

export const emptyEvent: TimelineEventConfig[] = [
    {
        title: 'title',
        dateYYYYMMDD: '2024-01-01',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1740502410194473412?t=1kgf16QwDp2Ydp9mdZLBYw',
                type: 'X-TWITTER',
                label: 'Ryan Cohen customer service reply tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/18t6rzf/customer_service_ceo_ryan_cohen_ryancohen_on_x/',
                type: 'REDDIT',
                label: 'Customer Service CEO Ryan Cohen (@ryancohen) on X',
                archiveLink: '',
            },
        ],
        description: 'Please send order details. I will DM you.',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen tweet']
    },

]