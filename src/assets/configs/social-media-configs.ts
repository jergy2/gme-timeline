import { TimelineItemConfig } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-item-config.interface";
import { TimelineItemType } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-item-type.enum";

export const socialMediaConfigs: TimelineItemConfig[] = [
   
    {
        title: '@GameStop posts butterflies on X',
        dateYYYYMMDD: '2023-10-09',
        urls: [
            {
                url: 'https://lemmy.whynotdrs.org/post/289260',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/1740krh/our_beloved_on_x_very_smrt/?sort=top',
                type: 'REDDIT',
                label: 'r/Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/ThePPShow/comments/1740okx/more_butterfly_responses/?sort=top',
                type: 'REDDIT',
                label: 'r/ThePPShow thread',
                archiveLink: '',
            }
            
        ],
        description: '',
        types: [TimelineItemType.SOCIAL_MEDIA],
        significance: 1,
    },
]