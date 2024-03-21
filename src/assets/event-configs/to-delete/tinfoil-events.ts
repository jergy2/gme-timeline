import { TimelineEventConfig } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-config.interface";
import { TimelineEventType } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-type.enum";

export const tinfoilEvents: TimelineEventConfig[] = [
    {
        title: 'Brick by brick',
        dateYYYYMMDD: '2023-11-24',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/1833177/x/',
                type: 'REDDIT',
                label: 'r/superstonk - 🧱x🧱',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/BBBY/comments/1835h1s/lego_on_x_brick_by_brick/',
                type: 'REDDIT',
                label: 'r/bbby - Lego on X 😯 "Brick by brick"',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 1,
        tags: ['tinfoil', 'lego', 'brick'],
    },
];