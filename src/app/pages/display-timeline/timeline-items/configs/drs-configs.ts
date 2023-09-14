import { TimelineItemConfig } from "../timeline-item/timeline-item-config.interface";
import { TimelineItemType } from "../timeline-item/timeline-item-type.enum";

export const drsItemConfigs: TimelineItemConfig[] = [

    {
        title: 'DRSGME.org published by GameStop investors',
        dateYYYYMMDD: '2022-03-18',
        urls: [
            {
                url: 'https://www.DRSGME.org',
                type: 'OTHER',
                label: 'DRSGME.org link',
                archiveLink: '',
            },
        ],
        description: 'Website created by members of the r/superstonk community',
        type: [TimelineItemType.DRS],
        significance: 3,
    },

    {
        title: 'Fidelity posts meme-stock guy',
        dateYYYYMMDD: '2022-10-26',
        urls: [
            {
                url: 'https://lemmy.whynotdrs.org/post/4181',
                type: 'LEMMY',
                label: 'Lemmy discussion',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/yedjog/in_case_you_missed_it_fidelitys_meme_stock_guy/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: 'Fidelity, a major financial services company with trillions of dollars of assets under management, felt compelled to try and disparage DRSd shareholders of GME',
        type: [TimelineItemType.DRS],
        significance: 2,
        imgSrc: 'assets/meme-stock-guy.jpeg',
    },
    {
        title: 'WhyDRS.org published',
        dateYYYYMMDD: '2023-02-14',
        urls: [
            {
                url: 'https://www.whydrs.org',
                type: 'OTHER',
                label: 'WhyDRS.org',
                archiveLink: '',
            },
        ],
        description: 'Website created by the team that made the drsgme.org website as a more neutral non-GME focused information site',
        type: [TimelineItemType.DRS],
        significance: 2,
    },
    {
        title: 'Superstonk mods publicly denounce recent actions of the DRSGME.org team',
        dateYYYYMMDD: '2023-06-09',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/145j69y/fireside_chat_692023_on_the_topic_of_doxxing_and/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/4183',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            {
                url: 'https://www.drsgme.org/the-stockholder-list-summary',
                type: 'OTHER',
                label: 'The Stockholder List Summary',
                archiveLink: '',
            },
            
        ],
        description: 'Superstonk mods wield their authority to spread false information and mischaracterizations with respect to recent actions taken by the DRSGME.org team.',
        type: [TimelineItemType.DRS],
        significance: 1,
    },
    {
        title: 'Reddit permanently bans the r/DRSyourGME subreddit',
        dateYYYYMMDD: '2023-06-14',
        urls: [
            {
                url: 'https://lemmy.whynotdrs.org/post/4183',
                type: 'LEMMY',
                label: 'Lemmy thread',
                archiveLink: '',
            },
            {
                url: 'https://www.drsgme.org/the-stockholder-list-summary',
                type: 'OTHER',
                label: 'DRSGME.org',
                archiveLink: '',
            },
        ],
        description: '',
        type: [TimelineItemType.DRS],
        significance: 3,
    },
]