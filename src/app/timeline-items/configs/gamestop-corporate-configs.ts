import { TimelineItemType } from "../timeline-item/timeline-item-type.enum";
import { TimelineItemConfig } from "../timeline-item/timeline-item-config.interface";

export const corporateEventConfigs: TimelineItemConfig[] = [
    {
        title: 'GameStop Reports First Quarter 2020 Results',
        dateYYYYMMDD: '2020-06-09',
        urls: [
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-first-quarter-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-20-000060',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.CORP,
        significance: 1,
    },
    {
        title: 'GameStop Reports Second Quarter 2020 Results',
        dateYYYYMMDD: '2020-09-09',
        urls: [
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-second-quarter-results-and-strong-progress',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-20-000119',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.CORP,
        significance: 1,
    },
    {
        title: 'GameStop Reports Third Quarter 2020 Results',
        dateYYYYMMDD: '2020-12-08',
        urls: [
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-third-quarter-results-positive-start-fourth',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-20-000134',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: 'Q3 2020',
        type: TimelineItemType.CORP,
        significance: 1,
    },

    {
        title: 'GameStop Reports Fourth Quarter and Fiscal 2020 Results',
        dateYYYYMMDD: '2021-03-23',
        urls: [
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-fourth-quarter-and-fiscal-2020-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-k/0001326380-21-000032',
                type: 'DOCUMENT',
                label: 'Form 10-K',
                archiveLink: '',
            },
        ],
        description: 'Q4 2020',
        type: TimelineItemType.CORP,
        significance: 1,
    },
    {
        title: 'GameStop Completes At-The-Market Equity Offering Program',
        dateYYYYMMDD: '2021-04-05',
        urls: [
            {
                url: 'https://news.gamestop.com/news-releases/news-release-details/gamestop-completes-market-equity-offering-program ',
                type: 'GAMESTOP',
                label: 'GameStop link',
                archiveLink: '',
            },
        ],
        description: 'The Company ultimately sold 3,500,000 shares of common stock and generated aggregate gross proceeds before commissions and offering expenses of approximately $551,000,000 ',
        type: TimelineItemType.CORP,
        significance: 4,
    },

    {
        title: 'GameStop announces that Ryan Cohen will be become chairman on June 9',
        dateYYYYMMDD: '2021-04-08',
        urls: [
            {
                url: 'https://www.cnbc.com/2021/04/08/gamestop-stock-up-after-company-says-ryan-cohen-to-be-chairman.html',
                type: 'NEWS',
                label: 'CNBC link',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-announces-slate-director-candidates-2021-annual-meeting',
                type: 'GAMESTOP',
                label: 'GameStop link',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1380212953748676608?s=20',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/mmr1de/everyone_please_welcome_chairman_cohen/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.CORP,
        significance: 1,
        imgSrc: 'assets/rc-chairman.jpg'
    },
    {
        title: 'GameStop Releases First Quarter 2021 Financial Results',
        dateYYYYMMDD: '2021-06-09',
        urls: [
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-releases-first-quarter-2021-financial-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-21-000066',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: 'Q1 2021 Ryan Cohen becomes chairman of GameStop, Matt Furlong becomes CEO',
        type: TimelineItemType.CORP,
        significance: 4,
        imgSrc: 'assets/rc-chairman.jpg'
    },
    {
        title: 'GameStop Reports Financial Results for Q2 2021',
        dateYYYYMMDD: '2021-09-08',
        urls: [
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-financial-results-q2-2021',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-21-000090',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: 'Q2 2021',
        type: TimelineItemType.CORP,
        significance: 1,
    },
    {
        title: 'GameStop publishes 2021 Q3 financial report featuring 5.2 million (20.8 million post-split) shares directly registered',
        dateYYYYMMDD: '2021-12-08',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/rc1d5r/52_million_shares_registered_through_computershare/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-financial-results-q2-2021',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-21-000090',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: 'GameStop reports for the first time, as of October 30, 2021, the number of shares that have been directly registered ("DRSd")',
        type: TimelineItemType.DRS,
        significance: 5,
    },
    {
        title: 'GameStop Reports Fourth Quarter and Fiscal Year 2021 Results',
        dateYYYYMMDD: '2022-03-17',
        urls: [
            // {
            //     url: '',
            //     type: 'REDDIT',
            //     label: 'Superstonk thread',
            //     archiveLink: '', 
            // },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-fourth-quarter-and-fiscal-year-2021-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-k/0001326380-22-000021',
                type: 'DOCUMENT',
                label: 'Form 10-K',
                archiveLink: '',
            },
        ],
        description: 'Q4 2021',
        type: TimelineItemType.CORP,
        significance: 1,
    },
    {
        title: 'GameStop Reports First Quarter Fiscal Year 2022 Results',
        dateYYYYMMDD: '2022-06-01',
        urls: [
            // {
            //     url: '',
            //     type: 'REDDIT',
            //     label: 'Superstonk thread',
            //     archiveLink: '', 
            // },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-first-quarter-fiscal-year-2022-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-22-000072',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: 'Q1 2022',
        type: TimelineItemType.CORP,
        significance: 1,
    },
    {
        title: 'GameStop does a 4-for-1 stock split in the form of a stock dividend',
        dateYYYYMMDD: '2022-07-21',
        urls: [
            {
                url: 'https://investor.gamestop.com/stock-split',
                type: 'GAMESTOP',
                label: 'GameStop guidance',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/wdqiu5/confusion_over_a_stock_split_vs_dividend/',
                type: 'REDDIT',
                label: 'Superstonk thread - August 1 ',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/wedhuw/this_is_a_stock_split_this_is_not_a_dividend_this/',
                type: 'REDDIT',
                label: 'Superstonk thread - August 2',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/wh760e/gamestop_statement_about_stock_split_in_the_form/',
                type: 'REDDIT',
                label: 'Superstonk thread - August 5',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.CORP,
        significance: 4,
        specialIdentifier: 'STOCK-SPLIT',
    },
    {
        title: 'GameStop Reports Second Quarter Fiscal Year 2022 Results',
        dateYYYYMMDD: '2022-09-07',
        urls: [
            // {
            //     url: '',
            //     type: 'REDDIT',
            //     label: 'Superstonk thread',
            //     archiveLink: '', 
            // },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-second-quarter-fiscal-year-2022-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-22-000126',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: 'Q2 2022',
        type: TimelineItemType.CORP,
        significance: 1,
    },
    {
        title: 'GameStop Forms Partnership with FTX',
        dateYYYYMMDD: '2022-09-07',
        urls: [
            {
                url: 'https://news.gamestop.com/news-releases/news-release-details/gamestop-forms-partnership-ftx',
                type: 'GAMESTOP',
                label: 'GameStop link',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/x8f6yw/gamestop_forms_partnership_with_ftx/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: 'The partnership is intended to introduce more GameStop customers to FTX’s community and its marketplaces for digital assets. In addition to collaborating with FTX on new ecommerce and online marketing initiatives, GameStop will begin carrying FTX gift cards in select stores. ',
        type: TimelineItemType.CORP,
        significance: 2,
    },

    {
        title: 'GameStop Reports Third Quarter Fiscal Year 2022 Results',
        dateYYYYMMDD: '2022-12-07',
        urls: [
            // {
            //     url: '',
            //     type: 'REDDIT',
            //     label: 'Superstonk thread',
            //     archiveLink: '', 
            // },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-third-quarter-fiscal-year-2022-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-22-000137',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: 'Q3 2022',
        type: TimelineItemType.CORP,
        significance: 1,
    },
    {
        title: 'GameStop Reports Fourth Quarter and Fiscal Year 2022 Results',
        dateYYYYMMDD: '2023-03-21',
        urls: [
            // {
            //     url: '',
            //     type: 'REDDIT',
            //     label: 'Superstonk thread',
            //     archiveLink: '', 
            // },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-reports-fourth-quarter-and-fiscal-year-2022-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-k/0001326380-23-000019',
                type: 'DOCUMENT',
                label: 'Form 10-K',
                archiveLink: '',
            },
        ],
        description: 'Q4 2022',
        type: TimelineItemType.CORP,
        significance: 1,
    },
    {
        title: 'GameStop publishes 2022 Report',
        dateYYYYMMDD: '2023-03-28',
        urls: [
            // {
            //     url: '',
            //     type: 'REDDIT',
            //     label: 'Superstonk thread',
            //     archiveLink: '', 
            // },
            {
                url: 'https://investor.gamestop.com/static-files/fe325562-c087-4fad-809c-efd183364196',
                type: 'GAMESTOP',
                label: '2022 Report',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.CORP,
        significance: 1,
    },
    {
        title: 'GameStop Discloses First Quarter 2023 Results',
        dateYYYYMMDD: '2023-06-07',
        urls: [
            // {
            //     url: '',
            //     type: 'REDDIT',
            //     label: 'Superstonk thread',
            //     archiveLink: '', 
            // },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-discloses-first-quarter-2023-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://investor.gamestop.com/sec-filings/sec-filing/10-q/0001326380-23-000028',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
        ],
        description: 'Q1 2023',
        type: TimelineItemType.CORP,
        significance: 1,
    },
    {
        title: 'GameStop Announces Election of Ryan Cohen as Executive Chairman',
        dateYYYYMMDD: '2023-07-07',
        urls: [
            {
                url: 'https://news.gamestop.com/news-releases/news-release-details/gamestop-announces-election-ryan-cohen-executive-chairman',
                type: 'GAMESTOP',
                label: 'GameStop link',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.CORP,
        significance: 3,
    },
    {
        title: 'GameStop Discloses Second Quarter 2023 Results',
        dateYYYYMMDD: '2023-09-06',
        urls: [
            {
                url: 'https://gamestop.gcs-web.com/news-releases/news-release-details/gamestop-discloses-second-quarter-2023-results',
                type: 'GAMESTOP',
                label: 'Earnings Release',
                archiveLink: '',
            },
            {
                url: 'https://gamestop.gcs-web.com/sec-filings/sec-filing/10-q/0001326380-23-000047',
                type: 'DOCUMENT',
                label: 'Form 10-Q',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/179071?scrollToComments=true',
                type: 'LEMMY',
                label: 'GameStop Discloses Second Quarter 2023 Results Gamestop Corp.',
                archiveLink: '', 
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/16bwilc/holy_schmoly_i_just_compared_all_form_10q_from/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - HOLY SCHMOLY: I just compared all form 10-Q from 2021-2023',
                archiveLink: '', 
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/16bv9e9/754m_drsd/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - 75.4m DRSd',
                archiveLink: '', 
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/16buhp3/gamestop_second_quarter_2023_results/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - GameStop Second Quarter 2023 Results!',
                archiveLink: '', 
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/16buggn/gamestop_discloses_second_quarter_2023_results/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - GameStop Discloses Second Quarter 2023 Results',
                archiveLink: '', 
            },
        ],
        description: 'Q2 2023',
        type: TimelineItemType.CORP,
        significance: 2,
    },
];