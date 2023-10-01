import { TimelineItemConfig } from "../timeline-item/timeline-item-config.interface";
import { TimelineItemType } from "../timeline-item/timeline-item-type.enum";

export const drsItemConfigs: TimelineItemConfig[] = [
    {
        title: 'r/Superstonk Live - Dr. Susanne Trimbath, PhD - April 29, 2021',
        dateYYYYMMDD: '2021-04-29',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=fGVY2Kco8ng',
                type: 'YOUTUBE',
                label: 'r/Superstonk Live - Dr. Susanne Trimbath, PhD - April 29, 2021',
                archiveLink: '',
            },
        ],
        description: 'A conversation which gave attention to the idea of DRS for the first time',
        types: [TimelineItemType.DRS],
        significance: 3,
    },
    {
        title: 'Computershare AMA Part 1 with Paul Conn',
        dateYYYYMMDD: '2021-11-04',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=LVEJo87jejo',
                type: 'YOUTUBE',
                label: 'Computershare AMA with r/SuperStonk - Part 1',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qmnan7/computershare_ama_part_1_video_link_with/',
                type: 'REDDIT',
                label: 'Computershare AMA Part 1',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineItemType.DRS],
        significance: 2,
    },
    {
        title: 'Computershare AMA Part 2 with Paul Conn',
        dateYYYYMMDD: '2021-11-29',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=bo427AW0anw&t=731s',
                type: 'YOUTUBE',
                label: 'Computershare AMA Part 2',
                archiveLink: '',
            },
            {
                url: 'https://web.archive.org/web/20211204192157/https://www.reddit.com/r/Superstonk/comments/r5enlt/computershare_ama_part_2_video_link_transcript/',
                type: 'REDDIT',
                label: 'Computershare AMA Part 2',
                archiveLink: 'https://web.archive.org/web/20211204192157/https://www.reddit.com/r/Superstonk/comments/r5enlt/computershare_ama_part_2_video_link_transcript/',
            },
        ],
        description: '"When people are buying shares through the plan, we record their names on a subclass within the register, so the names are visible to the issuer. So just like the regular common shares, they’re visible. In a technical sense, we are holding a portion of those shares in a Computershare nominee, purely so that we can affect efficient settlement within the market through DTC."',
        types: [TimelineItemType.DRS],
        significance: 2,
    },
    {
        title: 'Superstonk’s 3rd AMA with Paul Conn',
        dateYYYYMMDD: '2022-11-21',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=xFQmiLWiv5Y',
                type: 'YOUTUBE',
                label: 'Computershare AMA with r/SuperStonk - Part 1',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/z16nw3/superstonks_3rd_ama_with_paul_conn_president_of/',
                type: 'REDDIT',
                label: 'Superstonk’s 3rd AMA with Paul Conn',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineItemType.DRS],
        significance: 2,
    },
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
        types: [TimelineItemType.DRS],
        significance: 3,
    },
    {
        title: 'Fidelity posts meme-stock guy',
        dateYYYYMMDD: '2022-10-26',
        urls: [
            {
                url: 'https://lemmy.whynotdrs.org/post/221351',
                type: 'LEMMY',
                label: 'What is a meme stock?',
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
        types: [TimelineItemType.DRS],
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
        types: [TimelineItemType.DRS],
        significance: 2,
    },
    {
        title: 'An update on Fractional and Plan Shares from Computershare’s Paul Conn',
        dateYYYYMMDD: '2023-05-02',
        urls: [
            {
                url: 'https://youtu.be/9Ii-5tgvZKk',
                type: 'YOUTUBE',
                label: 'An update on Fractional and Plan Shares from Computershare’s Paul Conn',
                archiveLink: '',
            },
            // {
            //     url: 'https://www.reddit.com/r/Superstonk/comments/z16nw3/superstonks_3rd_ama_with_paul_conn_president_of/',
            //     type: 'REDDIT',
            //     label: 'Superstonk’s 3rd AMA with Paul Conn',
            //     archiveLink: '',
            // },
        ],
        description: '"We need to maintain a small portion of inventory at DTC so that we can have effective settlement when people are selling"',
        types: [TimelineItemType.DRS],
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
                url: 'https://www.drsgme.org/the-stockholder-list-summary',
                type: 'OTHER',
                label: 'DRSGME.org - The Stockholder List Summary',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/4183',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
        ],
        description: 'Superstonk mods wield their authority to spread false information and mischaracterizations with respect to recent actions taken by the DRSGME.org team.',
        types: [TimelineItemType.DRS],
        significance: 1,
    },
    {
        title: 'Reddit permanently bans the r/DRSyourGME subreddit',
        dateYYYYMMDD: '2023-06-14',
        urls: [
            {
                url: 'https://www.drsgme.org/the-stockholder-list-summary',
                type: 'OTHER',
                label: 'DRSGME.org - The Stockholder List Summary',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/4183',
                type: 'LEMMY',
                label: 'Lemmy thread',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineItemType.DRS],
        significance: 3,
    },
]