import { TimelineItemConfig } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-item-config.interface";
import { TimelineItemType } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-item-type.enum";

export const socialMediaConfigs: TimelineItemConfig[] = [
    {
        title: 'Cellar Boxing DD published in Superstonk',
        dateYYYYMMDD: '2021-09-11',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/pmj9yk/i_found_the_entire_naked_shorting_game_plan/',
                type: 'REDDIT',
                label: 'Original post on Superstonk',
                archiveLink: '',
            },
            {
                url: 'https://investorshub.advfn.com/boards/read_msg.aspx?message_id=2543759',
                type: 'OTHER',
                label: 'Original source - March 7, 2004',
                archiveLink: 'https://archive.ph/KSS6m',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/292430',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            }
        ],
        description: '',
        types: [TimelineItemType.SOCIAL_MEDIA],
        significance: 3,
    },
    {
        title: 'r/wallstreetbets bans GME',
        dateYYYYMMDD: '2022-11-22',
        urls: [
            {
                url: 'https://lemmy.whynotdrs.org/post/226948',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/wallstreetbets/comments/z24vou/gamestop_megathread/?sort=top',
                type: 'REDDIT',
                label: 'GameStop Megathread - Nov 22',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/wallstreetbets/comments/z26nr2/wsb_is_now_a_gmefree_zone/?sort=top',
                type: 'REDDIT',
                label: 'WSB is now a GME-free zone - Nov 22',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/wallstreetbets/comments/z2tk7s/the_ban_of_gme/?sort=top',
                type: 'REDDIT',
                label: 'The Ban of GME - Nov 23',
                archiveLink: '',
            },
        ],
        description: '"WSB is a trading sub, not a place to baghold for years. Apes are no longer welcome."',
        types: [TimelineItemType.SOCIAL_MEDIA],
        significance: 2,
    },
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