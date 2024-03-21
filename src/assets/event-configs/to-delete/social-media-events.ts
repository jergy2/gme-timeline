import { TimelineEventConfig } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-config.interface";
import { TimelineEventType } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-type.enum";

export const socialMediaEvents: TimelineEventConfig[] = [
    {
        title: 'NO BRIGADING',
        dateYYYYMMDD: '2021-06-25',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/o80eky/no_brigading/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk mod post',
                archiveLink: '',
            },
        ],
        description: 'The approximate beginning of Superstonk’s issues with "brigading"',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 0,
        tags: ['superstonk', 'brigading', 'opposition', 'reddit'],
    },
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
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 2,
        tags: ['superstonk', 'cellar box', 'dd', 'naked short selling'],
    },
    {
        title: 'Superstonk - We have a lot of eyes on this sub right now. Please comment with caution.',
        dateYYYYMMDD: '2022-03-06',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/t8edq1/we_have_a_lot_of_eyes_on_this_sub_right_now/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk mod post',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 0,
        tags: ['superstonk', 'reddit', 'opposition'],
    },
    {
        title: 'Gary Gensler: Resign',
        dateYYYYMMDD: '2022-08-25',
        urls: [
            {
                url: 'https://web.archive.org/web/20220825230545/https://www.forbes.com/sites/roslynlayton/2022/08/25/gary-gensler-resign/',
                type: 'NEWS',
                label: 'Gary Gensler: Resign',
                archiveLink: 'https://web.archive.org/web/20220825230545/https://www.forbes.com/sites/roslynlayton/2022/08/25/gary-gensler-resign/',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/wxi2ey/gary_gensler_resign/',
                type: 'REDDIT',
                label: 'Superstonk - Gary Gensler: Resign',
                archiveLink: '',
            },
        ],
        description: 'Wall Street doesn’t like Gary Gensler, as written in a now deleted, archived post from forbes.com - "The SEC under the Gensler disrespects Congress and the courts and imperils investors and innovators. Gensler is leading himself and the SEC into ruin. He should resign now to avoid further damage."',
        types: [TimelineEventType.MEDIA, TimelineEventType.OTHER],
        significance: 1,
        tags: ['Gary Gensler', 'SEC'],
        
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
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 2,
        tags: ['wallstreetbets', 'bagholders', 'opposition', 'reddit'],
    },
    {
        title: 'Attention Superstonk',
        dateYYYYMMDD: '2022-12-09',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/zh4eqd/attention_superstonk/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk mod post',
                archiveLink: '',
            },
        ],
        description: '"Superstonk isn’t the right place to discuss other subreddits or people there. As well: no more usernames/snoos in screenshots"',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 1,
        tags: ['superstonk', 'censorship', 'brigading', 'reddit', 'opposition'],
    },
    {
        title: 'Superstonk - Brief Community Update - Tagging Users',
        dateYYYYMMDD: '2022-12-17',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/zoa6ed/brief_community_update_tagging_users/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk mod post',
                archiveLink: '',
            },
        ],
        description: 'Apprently Reddit implemented a change that prevented superstonk users from tagging other users',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 1,
        tags: ['superstonk', 'censorship', 'brigading', 'reddit', 'opposition'],
    },
    {
        title: 'Superstonk - State of the Stonk: December 26, 2022',
        dateYYYYMMDD: '2022-12-26',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/zw21op/state_of_the_stonk_december_26_2022/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk mod post',
                archiveLink: '',
            },
        ],
        description: 'Due to apparent brigading, there shall be no more mentioning of usernames or their avatars',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 1,
        tags: ['superstonk', 'censorship', 'brigading', 'reddit', 'opposition'],
    },
    {
        title: 'WeTheInvestors 2nd Q&A With SEC Chair Gary Gensler',
        dateYYYYMMDD: '2023-02-22',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=a2Ao3DjvjB4',
                type: 'YOUTUBE',
                label: 'WeTheInvestors 2nd Q&A With SEC Chair Gary Gensler',
                archiveLink: '',
            },
        ],
        description: 'We The Investors sit down with SEC Chair Gary Gensler for our second Q&A. We will discuss FTDs, DRS, the new SEC rule proposals, and other topics suggested by the community.',
        types: [TimelineEventType.DRS, TimelineEventType.SOCIAL_MEDIA],
        significance: 2,
        tags: ['WeTheInvestors', 'Gary Gensler', 'SEC', 'FTDs', 'DRS', 'whydrs.org', 'whydrs', 'computershare'],
    },
    {
        title: 'Superstonk Fireside Chat - 4/20/2023',
        dateYYYYMMDD: '2023-04-20',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/12to5w5/superstonk_fireside_chat_4202023/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk mod post',
                archiveLink: '',
            },
        ],
        description: 'Superstonk mods say, referring to r/DRSyourGME: "you might feel more comfortable on a subreddit without any review standards that allow baseless accusations and speculation without proof which masquerade as fact."',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 1,
        tags: ['superstonk', 'censorship', 'brigading', 'reddit', 'drsyourgme', 'division'],
    },
    {
        title: 'Reminder on Superstonk’s screenshots, brigading and partisan politics rules',
        dateYYYYMMDD: '2023-04-27',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/130xtu9/reminder_on_superstonks_screenshots_brigading_and/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk mod post',
                archiveLink: '',
            },
        ],
        description: '"The reddit admins expect us to enforce the SPIRIT of the rules not just the LETTER."',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 1,
        tags: ['superstonk', 'censorship', 'brigading', 'reddit', 'politics'],
    },
    {
        title: 'Censorship, Mods r Sus and Brigading',
        dateYYYYMMDD: '2023-04-29',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/1336ri9/censorship_mods_r_sus_and_brigading/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk mod post',
                archiveLink: '',
            },
        ],
        description: 'Superstonk mods address censorship and brigading. "We have people actively encouraging traffic being sent to other subreddits, award bombing and mass voting."',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 1,
        tags: ['superstonk', 'censorship', 'brigading', 'reddit'],
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
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 1,
        tags: ['butterfly', 'superstonk', 'theppshow'],
    },
    {
        title: 'Meme Stock Meltdown: How Deranged Bed Bath & Beyond Retail Investors Spawned a Bagholder Cargo Cult',
        dateYYYYMMDD: '2023-10-17',
        urls: [
            {
                url: 'https://www.reddit.com/r/ThePPShow/comments/17tmd7n/what_is_this_shill_shit/',
                type: 'REDDIT',
                label: 'r/ThePPShow thread - November 12 2023',
                archiveLink: '',
            },
            {
                url: 'https://www.linkedin.com/pulse/how-unwavering-conviction-turned-bed-bath-beyond-meme-tony-dong-msc-2swyc',
                type: 'OTHER',
                label: 'LinkedIn post - Meme Stock Meltdown: How Deranged Bed Bath & Beyond Retail Investors Spawned a Bagholder Cargo Cult',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/221351',
                type: 'LEMMY',
                label: 'What is a meme stock?',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 1,
        tags: ['linkedin', 'meme stock', 'propaganda', 'fud', 'bbby', 'cult', 'bagholder', 'delusional', 'bashing', 'theppshow'],
    },
    {
        title: 'Community Update Post: On the topic of *Brigading*',
        dateYYYYMMDD: '2023-10-09',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/17wdr9t/community_update_post_on_the_topic_of_brigading/?sort=top',
                type: 'REDDIT',
                label: 'r/Superstonk thread',
                archiveLink: '',
            },

        ],
        description: 'Stay in your designated protest zone.  Any deviation from the program will result in consequences.',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 0,
        tags: ['superstonk', 'reddit', 'brigading', 'censorship'],
    },
    {
        title: 'r/ThePPShow permanently banned from Reddit',
        dateYYYYMMDD: '2023-11-21',
        urls: [
            {
                url: 'https://www.reddit.com/r/BBBY/comments/180posy/theppshow_subreddit_was_taken_down_heres_where_we/',
                type: 'REDDIT',
                label: 'r/BBBY - ThePPShow subreddit was taken down heres where we are now.',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Teddy/comments/180swgn/theppshow_sub_was_banned/',
                type: 'REDDIT',
                label: 'r/Teddy - ThePPShow sub was banned',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.SOCIAL_MEDIA],
        significance: 3,
        tags: [ 'theppshow', 'reddit', 'censorship', 'bbby'],
        imgSrc: 'assets/bbby/pp-show-banned.PNG'
    },
];



