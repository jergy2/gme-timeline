import { TimelineItem } from "./timeline-item/timeline-item.class";
import { TimelineItemType } from "./timeline-item/timeline-item-type.enum";
import { TimelineItemConfig } from "./timeline-item/timeline-item-config.interface";

const timelineItemConfigs: TimelineItemConfig[] = [
    {
        title: 'Michael Burry gets involved with GameStop',
        dateYYYYMMDD: '2018-01-01',
        urls: [
            {
                url: 'https://markets.businessinsider.com/news/stocks/big-short-investor-michael-burry-scion-gamestop-stock-price-frenzy-2021-2-1030050393',
                type: 'OTHER',
                label: 'Business Insider link'
            },
        ],
        description: '',
        type: TimelineItemType.EVENT,
        significance: 1,
    },
    {
        title: 'Roaring Kitty - 100%+ short interest in GameStop stock (GME) – fundamental & technical deep value analysis',
        dateYYYYMMDD: '2020-07-27',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=GZTr1-Gp74U',
                type: 'YOUTUBE',
                label: 'YouTube link'
            },
        ],
        description: '',
        type: TimelineItemType.DFV,
        significance: 2,
    },
    {
        title: 'Roaring Kitty - 5 reasons GameStop stock (GME) is a roach not a cigar butt a la Warren Buffett & could short squeeze',
        dateYYYYMMDD: '2020-08-04',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=JWdWCtLMoU0',
                type: 'YOUTUBE',
                label: 'YouTube link'
            },
        ],
        description: '',
        type: TimelineItemType.DFV,
        significance: 2,
    },
    {
        title: 'RC Ventures LLC purchases 9% of GameStop',
        dateYYYYMMDD: '2020-08-18',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/1822844/000101359420000670/rc13d-082820.htm',
                type: 'OTHER',
                label: 'SEC link'
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 3,
    },
    {
        title: 'RC Ventures writes to the GameStop Board of Directors',
        dateYYYYMMDD: '2020-11-16',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/1326380/000101359420000821/rc13da3-111620.pdf',
                type: 'OTHER',
                label: 'SEC link'
            },
        ],
        description: 'Subject: Maximizing Stockholder Value by Becoming the Ultimate Destination for Gamers, “GAMESTOP’S LEADERSHIP MUST PROMPTLY PIVOT FROM A BRICK-AND-MORTAR MINDSET TO A TECHNOLOGY-DRIVEN VISION”',
        type: TimelineItemType.RC,
        significance: 4,
    },
    {
        title: 'Through RC Ventures, Cohen now owns a 12.9% stake in GameStop worth $140 million as of Monday"s close, according to an SEC filing. ',
        dateYYYYMMDD: '2020-12-17',
        urls: [
            {
                url: 'https://markets.businessinsider.com/news/stocks/gamestop-stock-price-chewy-cofounder-ryan-cohen-activist-investment-stake-2020-12-1029915366',
                type: 'OTHER',
                label: 'Business Insider link'
            },
            {
                url: 'https://news.gamestop.com/static-files/89e3e0c1-e050-4511-887d-d1f9321703f8',
                type: 'OTHER',
                label: 'GameStop link'
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 2,
    },
    {
        title: 'Peak of the short sneeze',
        dateYYYYMMDD: '2021-01-27',
        urls: [
            {
                url: 'https://en.wikipedia.org/wiki/GameStop_short_squeeze',
                type: 'WIKIPEDIA',
                label: 'Wikipedia link'
            },
        ],
        description: '',
        type: TimelineItemType.EVENT,
        significance: 2,
    },
    {
        title: 'Brokerages shut off the buy button',
        dateYYYYMMDD: '2021-01-28',
        urls: [],
        description: '',
        type: TimelineItemType.EVENT,
        significance: 5,
    },
    {
        title: 'Thomas Peterffy says “we came dangerously close to the collapse of the entire system”',
        dateYYYYMMDD: '2021-02-17',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=_TPYuIRVfew&t=37s',
                type: 'OTHER',
                label: 'YouTube link'
            },
            {
                url: 'https://www.youtube.com/watch?v=_TPYuIRVfew',
                type: 'YOUTUBE',
                label: 'YouTube link'
            },
        ],
        description: '',
        type: TimelineItemType.MEDIA,
        significance: 2,
    },
    {
        title: 'Game Stopped? Congressional hearing featuring DFV',
        dateYYYYMMDD: '2021-02-18',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=RfEuNHVPc_k',
                type: 'YOUTUBE',
                label: 'YouTube link'
            },
        ],
        description: 'Game Stopped? Who Wins and Loses When Short Sellers, Social Media, and Retail Investors Collide. Keith Gill testifies before congress House Committee on Financial Services:  Game Stopped? Who Wins and Loses when Short Sellers, Social Media, and Retail Investors Collide https://www.youtube.com/watch?v=OARREl39syQ “I like the stock”',
        type: TimelineItemType.EVENT,
        significance: 4,
    },
    {
        title: 'GameStop Completes At-The-Market Equity Offering Program',
        dateYYYYMMDD: '2021-04-05',
        urls: [
            {
                url: 'https://news.gamestop.com/news-releases/news-release-details/gamestop-completes-market-equity-offering-program ',
                type: 'OTHER',
                label: 'GameStop link'
            },
        ],
        description: 'The Company ultimately sold 3,500,000 shares of common stock and generated aggregate gross proceeds before commissions and offering expenses of approximately $551,000,000 ',
        type: TimelineItemType.CORP,
        significance: 4,
    },
    // new TimelineItem(
    //     'GameStop: The Wall Street Hijack',
    //     '2021-04-08',
    //     'https://www.imdb.com/title/tt14439472/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_gamestop',
    //     'Low impact movie:: A group of young, risk-embracing day traders used social media to organize a massive stock buy-up. Jordan Belfort provides details about the story, exploring how it shook the world""s markets.',
    //     TimelineItemType.MEDIA,
    //     1,
    // ),
    {
        title: 'GameStop announces that Ryan Cohen will be become chairman on June 9',
        dateYYYYMMDD: '2021-04-08',
        urls: [
            {
                url: 'https://www.cnbc.com/2021/04/08/gamestop-stock-up-after-company-says-ryan-cohen-to-be-chairman.html',
                type: 'OTHER',
                label: 'CNBC link'
            },
            {
                url: 'https://investor.gamestop.com/news-releases/news-release-details/gamestop-announces-slate-director-candidates-2021-annual-meeting',
                type: 'OTHER',
                label: 'GameStop link'
            },
        ],
       
        description: '',
        type: TimelineItemType.CORP,
        significance: 1,
    },
    {
        title: 'GME YOLO update — Apr 16 2021 — final update',
        dateYYYYMMDD: '2021-04-16',
        urls: [
            {
                url: 'https://www.reddit.com/r/wallstreetbets/comments/msblc3/gme_yolo_update_apr_16_2021_final_update/?sort=top',
                type: 'REDDIT',
                label: 'Reddit link',
            },
        ],
        description: 'DFV`s final reddit post',
        type: TimelineItemType.DFV,
        significance: 3,
    },
    {
        title: 'Gary Gensler assumes position of chair of the SEC',
        dateYYYYMMDD: '2021-04-17',
        urls: [
            {
                url: 'https://en.wikipedia.org/wiki/Gary_Gensler',
                type: 'WIKIPEDIA',
                label: 'Wikipedia link'
            },
        ],
        description: '',
        type: TimelineItemType.UNRELATED,
        significance: 1,
    },
    {
        title: 'Melissa Lee of CNBC:  "Naked Shorts, Yea"',
        dateYYYYMMDD: '2021-06-04',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/nshffm/naked_shorts_just_confirmed_by_the_enemies/',
                type: 'REDDIT',
                label: 'Superstonk link'
            },
            {
                url: 'https://youtu.be/XpHcA8Y1mWI?t=94',
                type: 'YOUTUBE',
                label: 'YouTube link'
            },
        ],
        description: 'In response to the statement: "There are a lot of short sellers borrowing stock that they didn`t have," Melissa Lee says:  "Naked shorts, yea."',
        type: TimelineItemType.MEDIA,
        significance: 2,
    },
    {
        title: 'Ryan Cohen becomes chairman of GameStop, Matt Furlong becomes CEO',
        dateYYYYMMDD: '2021-06-09',
        urls: [],
        description: '',
        type: TimelineItemType.CORP,
        significance: 4,
    },
    {
        title: 'SEC publishes the GameStop report',
        dateYYYYMMDD: '2021-10-18',
        urls: [
            {
                url: 'https://www.sec.gov/files/staff-report-equity-options-market-struction-conditions-early-2021.pdf',
                type: 'OTHER',
                label: 'SEC link'
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qavn6v/superstonk_megathread_for_the_sec_staff_report_on/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk megathread'
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qbjhiv/fox_business_sec_gamestop_report_segment_2_with/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread regarding FOX business segment'
            },
            
        ],
        description: '',
        type: TimelineItemType.EVENT,
        significance: 2,
    },
    {
        title: 'GameStop publishes 2021 Q3 financial report featuring 5.2 million (20.8 million post-split) shares directly registered',
        dateYYYYMMDD: '2021-10-30',
        urls: [
            {
                url: 'https://gamestop.gcs-web.com/sec-filings/sec-filing/10-q/0001326380-21-000129',
                type: 'OTHER',
                label: 'GameSTop link'
            },
        ],
        description: 'GameStop reports for the first time the number of shares that have been directly registered ("DRSd")',
        type: TimelineItemType.DRS,
        significance: 5,
    },
    {
        title: 'Financial Stability Oversight Council publishes Annual Report, saying that a single security exhibited idiosyncratic risk ',
        dateYYYYMMDD: '2021-12-17',
        urls: [
            {
                url: 'https://home.treasury.gov/system/files/261/FSOC2021AnnualReport.pdf',
                type: 'OTHER',
                label: 'US Treasury link'
            },
        ],
        description: '',
        type: TimelineItemType.EVENT,
        significance: 2,
    },
    {
        title: 'GameStop: Rise of the Players - Documentary Movie ',
        dateYYYYMMDD: '2022-01-28',
        urls: [
            {
                url: 'https://www.imdb.com/title/tt17200376/?ref_=nv_sr_srsg_1_tt_8_nm_0_q_gamestop',
                type: 'OTHER',
                label: 'IMDB link'
            },
        ],
        description: '"The David-and-Goliath story about the group of amateur investors who bought stock in the failing video game chain, GameStop."',
        type: TimelineItemType.MEDIA,
        significance: 2,
    },
    {
        title: 'Gaming Wall St – HBO max - 2 episode miniseries',
        dateYYYYMMDD: '2022-03-03',
        urls: [
            {
                url: 'https://en.wikipedia.org/wiki/Gaming_Wall_Street',
                type: 'WIKIPEDIA',
                label: 'Wikipedia link'
            },
        ],
        description: 'Explores the stock market frenzy of GameStop, and how a group of armchair investors and online vigilantes ultimately helped expose the dark underbelly of Wall Street.',
        type: TimelineItemType.MEDIA,
        significance: 2,
    },
    {
        title: 'DRSGME.org published by GameStop investors',
        dateYYYYMMDD: '2022-03-18',
        urls: [
            {
                url: 'www.DRSGME.org',
                type: 'OTHER',
                label: 'DRSGME.org link'
            },
        ],
        description: 'Website created by members of the r/superstonk community',
        type: TimelineItemType.DRS,
        significance: 3,
    },
    {
        title: 'Melvin Capital announces it will be shutting down',
        dateYYYYMMDD: '2022-05-18',
        urls: [],
        description: '',
        type: TimelineItemType.EVENT,
        significance: 2,
    },
    {
        title: 'GameStop does a 4-for-1 stock split in the form of a stock dividend',
        dateYYYYMMDD: '2022-07-21',
        urls: [
            {
                url: 'https://investor.gamestop.com/stock-split',
                type: 'OTHER',
                label: 'GameStop link'
            },
        ],
        description: '',
        type: TimelineItemType.CORP,
        significance: 4,
    },
    // {
    //     title: 'discussion of GME is banned from r/Wallstreetbets ???',
    //     dateYYYYMMDD: '2022-08-00',
    //     urls: [],
    //     description: '',
    //     type: TimelineItemType.DFV,
    //     significance: 1,
    // },
    {
        title: 'Citadel Securities raises $600m',
        dateYYYYMMDD: '2022-08-18',
        urls: [],
        description: '',
        type: TimelineItemType.UNRELATED,
        significance: 2,
    },
    {
        title: 'GameStop Forms Partnership with FTX',
        dateYYYYMMDD: '2022-09-07',
        urls: [
            {
                url: 'https://news.gamestop.com/news-releases/news-release-details/gamestop-forms-partnership-ftx',
                type: 'OTHER',
                label: 'GameStop link'
            },
        ],
        description: 'The partnership is intended to introduce more GameStop customers to FTX’s community and its marketplaces for digital assets. In addition to collaborating with FTX on new ecommerce and online marketing initiatives, GameStop will begin carrying FTX gift cards in select stores. ',
        type: TimelineItemType.CORP,
        significance: 2,
    },
    {
        title: 'Eat the Rich: The GameStop Saga - Netflix 3 episode series',
        dateYYYYMMDD: '2022-09-28',
        urls: [
            {
                url: 'https://www.imdb.com/title/tt14036920/?ref_=nv_sr_srsg_3_tt_8_nm_0_q_gamestop',
                type: 'OTHER',
                label: 'IMDB link'
            },
        ],
        description: 'A look at the layers of intrigue, from the supercharged power of digital communities to the gamification of trading.',
        type: TimelineItemType.MEDIA,
        significance: 2,
    },
    {
        title: 'Crypto giant FTX collapses into bankruptcy',
        dateYYYYMMDD: '2022-11-12',
        urls: [
            {
                url: 'https://www.bbc.co.uk/news/business-63601213',
                type: 'OTHER',
                label: 'BBC.co.uk link'
            },
        ],
        description: 'A look at the layers of intrigue, from the supercharged power of digital communities to the gamification of trading.',
        type: TimelineItemType.UNRELATED,
        significance: 2,
    },
    {
        title: 'Ryan Cohen tweets he wants to be the book king',
        dateYYYYMMDD: '2022-11-19',
        urls: [
            {
                url: 'www.teddy.com',
                type: 'OTHER',
                label: 'teddy.com'
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 2,
    },
    {
        title: 'The Ryan Cohen Interview with Joe Fonicello of GMEdd.com',
        dateYYYYMMDD: '2022-11-20',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=uN2Dw8AOdMk',
                type: 'YOUTUBE',
                label: 'YouTube link'
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 4,
    },
    {
        title: 'WhyDRS.org published',
        dateYYYYMMDD: '2023-02-14',
        urls: [
            {
                url: 'www.whydrs.org',
                type: 'OTHER',
                label: 'WhyDRS.org'
            },
        ],
        description: 'Website created by the team that made the drsgme.org website as a more neutral non-GME focused information site',
        type: TimelineItemType.DRS,
        significance: 2,
    },
    {
        title: 'Citadel founder Ken Griffin donates $300 million more to alma mater Harvard',
        dateYYYYMMDD: '2023-04-11',
        urls: [
            {
                url: 'https://www.reuters.com/world/us/citadel-founder-ken-griffin-donates-300-million-more-alma-mater-harvard-2023-04-11/',
                type: 'OTHER',
                label: 'Reuters.com'
            },
        ],
        description: '',
        type: TimelineItemType.UNRELATED,
        significance: 1,
    },
    {
        title: 'GameStop investors (Mulligan bros) release of Apes Together Strong',
        dateYYYYMMDD: '2023-05-22',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/13oyf8w/apes_together_strong_official_release_statement/',
                type: 'REDDIT',
                label: 'Superstonk thread'
            },
        ],
        description: 'the documentary was released 2 weeks early, therefore original scheduled date of June 5 2023',
        type: TimelineItemType.MEDIA,
        significance: 1,
    },
    {
        title: 'Making of the Meme King - CNBC documentary',
        dateYYYYMMDD: '2023-06-06',
        urls: [
            {
                url: 'https://www.imdb.com/title/tt27903262/',
                type: 'OTHER',
                label: 'IMDB link'
            },
        ],
        description: 'Follows Ryan Cohen"s Rise from High School Graduate to Influential Force Behind the infamous GameStop Meme-Stock Phenomenon that exposed the need for market reform to protect retail investors from predatory shorting and corporate sabotage. ',

        type: TimelineItemType.MEDIA,
        significance: 2,
    },
    {
        title: 'Reddit permanently bans the r/DRSyourGME subreddit',
        dateYYYYMMDD: '2023-06-14',
        urls: [
            {
                url: 'https://lemmy.whynotdrs.org/post/4179',
                type: 'LEMMY',
                label: 'Lemmy thread'
            },
            {
                url: 'https://www.drsgme.org/the-stockholder-list-summary',
                type: 'OTHER',
                label: 'DRSGME.org'
            },
        ],
        description: '',
        type: TimelineItemType.DRS,
        significance: 3,
    },
    {
        title: 'GameStop Announces Election of Ryan Cohen as Executive Chairman',
        dateYYYYMMDD: '2023-07-07',
        urls: [
            {
                url: 'https://news.gamestop.com/news-releases/news-release-details/gamestop-announces-election-ryan-cohen-executive-chairman',
                type: 'OTHER',
                label: 'GameStop link'
            },
        ],
        description: '',
        type: TimelineItemType.CORP,
        significance: 3,
    },
    {
        title: 'Dumb Money movie released',
        dateYYYYMMDD: '2023-09-22',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=bmr8YmwnZ3w',
                type: 'YOUTUBE',
                label: 'YouTube link'
            },
        ],
        description: 'Dumb Money is the ultimate David vs. Goliath tale, based on the insane true story of everyday people who flipped the script on Wall Street and got rich by turning GameStop (yes, the mall videogame store) into the world"s hottest company.',
        type: TimelineItemType.MEDIA,
        significance: 3,
    },
];

export const timelineItems: TimelineItem[] = timelineItemConfigs.map(item => new TimelineItem(item));
