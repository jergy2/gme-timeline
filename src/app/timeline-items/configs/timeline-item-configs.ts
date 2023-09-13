import { TimelineItemType } from "../timeline-item/timeline-item-type.enum";
import { TimelineItemConfig } from "../timeline-item/timeline-item-config.interface";

export const timelineItemConfigs: TimelineItemConfig[] = [
    {
        title: 'Michael Burry files 13F showing position in GME',
        dateYYYYMMDD: '2019-02-14',
        urls: [
            {
                url: 'https://markets.businessinsider.com/news/stocks/big-short-investor-michael-burry-scion-gamestop-stock-price-frenzy-2021-2-1030050393',
                type: 'NEWS',
                label: 'Businessinsider.com',
                archiveLink: '',
            },
            {
                url: 'https://www.sec.gov/Archives/edgar/data/0001649339/000156761919004198/0001567619-19-004198-index.html',
                type: 'DOCUMENT',
                label: 'SEC link',
                archiveLink: '',
            },

        ],
        description: '',
        type: [TimelineItemType.OTHER],
        significance: 1,
    },
    {
        title: 'Michael Burry increases GME position',
        dateYYYYMMDD: '2019-05-15',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/0001649339/000156761919010955/0001567619-19-010955-index.html',
                type: 'DOCUMENT',
                label: 'SEC link',
                archiveLink: '',
            },
        ],
        description: '',
        type: [TimelineItemType.OTHER],
        significance: 1,
    },
    {
        title: 'Michael Burry writes to GameStop board of directors',
        dateYYYYMMDD: '2019-08-16',
        urls: [
            {
                url: 'https://www.businesswire.com/news/home/20190819005633/en/Scion-Asset-Management-Urges-GameStop-Buy-238?mod=article_inline',
                type: 'NEWS',
                label: 'Businesswire.com',
                archiveLink: '',
            },
        ],
        description: '',
        type: [TimelineItemType.OTHER],
        significance: 1,
    },
    {
        title: 'DFV Posts his GME position for the time on Reddit',
        dateYYYYMMDD: '2019-08-16',
        urls: [
            {
                url: 'https://www.reddit.com/r/wallstreetbets/comments/d1g7x0/hey_burry_thanks_a_lot_for_jacking_up_my_cost/',
                type: 'REDDIT',
                label: 'DFV post on r/wallstreetbets',
                archiveLink: '',
            },
        ],
        description: '',
        type: [TimelineItemType.DFV],
        significance: 1,
    },
    {
        title: 'Michael Burry increases GME position',
        dateYYYYMMDD: '2019-11-14',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/0001649339/000156761919021303/0001567619-19-021303-index.html',
                type: 'DOCUMENT',
                label: '13F on SEC.gov',
                archiveLink: '',
            },
        ],
        description: 'Position value of approximately $16.6 million',
        type: [TimelineItemType.OTHER],
        significance: 1,
    },
    {
        title: 'Naked, Short and Greedy: Wall Streets Failure to Deliver published',
        dateYYYYMMDD: '2019-12-02',
        urls: [
            {
                url: 'https://www.goodreads.com/book/show/49089890-naked-short-and-greedy',
                type: 'OTHER',
                label: 'goodreads.com',
                archiveLink: '',
            },
        ],
        description: 'Susanne Trimbath publishes a book that eventually becomes foundational to GameStop investors understanding of the market',
        type: [TimelineItemType.DRS],
        significance: 2,
    },
    {
        title: 'Michael Burry increases GME position',
        dateYYYYMMDD: '2020-04-02',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/0001649339/000090514820000491/efc20-335_sc13d.htm',
                type: 'DOCUMENT',
                label: '13D on SEC.gov',
                archiveLink: '',
            },
        ],
        description: 'Position value of approximately $9.7 million',
        type: [TimelineItemType.OTHER],
        significance: 1,
    },
    {
        title: 'Michael Burry decreases GME position',
        dateYYYYMMDD: '2020-05-04',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/0001649339/000090514820000563/efc20-411_sc13da.htm',
                type: 'DOCUMENT',
                label: '13D on SEC.gov',
                archiveLink: '',
            },
            // {
            //     url: 'https://twitter.com/Entrepreneur/status/1257350664306528257',
            //     type: 'X-TWITTER',
            //     label: 'Unrelated to Burry, RC Retweets',
            //     archiveLink: '',
            // },
        ],
        description: 'Position value of approximately $15.4 million',
        type: [TimelineItemType.OTHER],
        significance: 1,
    },
    {
        title: 'Michael Burry - Scion Asset Management Voted in Support of GameStop’s Board and Management',
        dateYYYYMMDD: '2020-06-03',
        urls: [
            {
                url: 'https://www.businesswire.com/news/home/20200603005929/en/Scion-Asset-Management-Voted-in-Support-of-GameStop%E2%80%99s-Board-and-Management',
                type: 'NEWS',
                label: 'Businesswire.com link',
                archiveLink: '',
            },
        ],
        description: '',
        type: [TimelineItemType.OTHER],
        significance: 1,
    },
    {
        title: 'Roaring Kitty - 100%+ short interest in GameStop stock (GME) – fundamental & technical deep value analysis',
        dateYYYYMMDD: '2020-07-27',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=GZTr1-Gp74U',
                type: 'YOUTUBE',
                label: 'YouTube link',
                archiveLink: '',
            },
        ],
        description: '',
        type: [TimelineItemType.DFV],
        significance: 2,
        imgSrc: 'assets/dfv-short-interest.jpg'
    },
    {
        title: 'Roaring Kitty - 5 reasons GameStop stock (GME) is a roach not a cigar butt a la Warren Buffett & could short squeeze',
        dateYYYYMMDD: '2020-08-04',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=JWdWCtLMoU0',
                type: 'YOUTUBE',
                label: 'YouTube link',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/CNBCMakeIt/status/1290713003483160582',
                type: 'X-TWITTER',
                label: 'Unrelated - RC retweets',
                archiveLink: '',
            }
        ],
        description: '',
        type: [TimelineItemType.DFV],
        significance: 2,
        imgSrc: 'assets/dfv-cigar.jpg'
    },
    {
        title: 'RC Ventures LLC purchases 9% of GameStop',
        dateYYYYMMDD: '2020-08-18',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/1822844/000101359420000670/rc13d-082820.htm',
                type: 'DOCUMENT',
                label: 'SEC link',
                archiveLink: '',
            },
        ],
        description: '',
        type: [TimelineItemType.RC],
        significance: 3,
        imgSrc: 'assets/ryan-cohen-loading.jpg'
    },
    {
        title: 'Roaring Kitty - The Big Short SQUEEZE from $5 to $50? Could GameStop stock (GME) explode higher?? Value investing!',
        dateYYYYMMDD: '2020-08-21',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=alntJzg0Um4',
                type: 'YOUTUBE',
                label: 'YouTube link',
                archiveLink: '',
            },
        ],
        description: '',
        type: [TimelineItemType.DFV],
        significance: 2,
    },
    {
        title: 'Michael Burry decreases GME position',
        dateYYYYMMDD: '2020-09-30',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/1649339/000156761920019679/xslForm13F_X01/form13fInfoTable.xml',
                type: 'DOCUMENT',
                label: '13F on SEC.gov',
                archiveLink: '',
            },
        ],
        description: 'Position value of approximately $17.4 million',
        type: [TimelineItemType.OTHER],
        significance: 1,
    },
    {
        title: 'RC Ventures writes to the GameStop Board of Directors',
        dateYYYYMMDD: '2020-11-16',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/1326380/000101359420000821/rc13da3-111620.pdf',
                type: 'DOCUMENT',
                label: 'SEC link',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/nd18ee/ryan_cohens_letter_to_the_boardmy_north_star/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - May 15 2021',
                archiveLink: '',
            },

        ],
        description: 'Subject: Maximizing Stockholder Value by Becoming the Ultimate Destination for Gamers, “GAMESTOP’S LEADERSHIP MUST PROMPTLY PIVOT FROM A BRICK-AND-MORTAR MINDSET TO A TECHNOLOGY-DRIVEN VISION”',
        type: [TimelineItemType.RC],
        significance: 4,
    },
    {
        title: 'Through RC Ventures, Cohen now owns a 12.9% stake in GameStop worth $140 million as of Monday"s close, according to an SEC filing. ',
        dateYYYYMMDD: '2020-12-17',
        urls: [
            {
                url: 'https://markets.businessinsider.com/news/stocks/gamestop-stock-price-chewy-cofounder-ryan-cohen-activist-investment-stake-2020-12-1029915366',
                type: 'NEWS',
                label: 'Business Insider link',
                archiveLink: '',
            },
            {
                url: 'https://news.gamestop.com/static-files/89e3e0c1-e050-4511-887d-d1f9321703f8',
                type: 'GAMESTOP',
                label: 'GameStop link',
                archiveLink: '',
            },
        ],
        description: '',
        type: [TimelineItemType.RC],
        significance: 2,
    },
    {
        title: 'Michael Burry closes entire GME position',
        dateYYYYMMDD: '2020-12-31',
        urls: [
            {
                url: 'https://www.sec.gov/Archives/edgar/data/1649339/000156761921003819/xslForm13F_X01/form13fInfoTable.xml',
                type: 'DOCUMENT',
                label: '13F on SEC.gov',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1344687817998401537',
                type: 'X-TWITTER',
                label: 'Unrelated to Burry - RC Tweet',
                archiveLink: '',
            },
        ],
        description: 'Some time between September 30th and December 31st, Michael Burry sells his entire GME position, evidenced by the absense of any position in GameStop in form 13F',
        type: [TimelineItemType.OTHER],
        significance: 1,
    },
    {
        title: 'Peak of the short sneeze',
        dateYYYYMMDD: '2021-01-27',
        urls: [
            {
                url: 'https://lemmy.whynotdrs.org/post/156063',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/wallstreetbets/comments/l6ekdz/gme_yolo_update_jan_27_2021_guess_i_need_102/',
                type: 'REDDIT',
                label: 'GME YOLO update by DFV',
                archiveLink: '',
            },
            {
                url: 'https://en.wikipedia.org/wiki/GameStop_short_squeeze',
                type: 'WIKIPEDIA',
                label: 'Wikipedia link',
                archiveLink: '',
            },

        ],
        description: '',
        type: [TimelineItemType.OTHER],
        significance: 2,
    },
    {
        title: 'Michael Burry tweet',
        dateYYYYMMDD: '2021-01-29',
        urls: [
            {
                url: 'https://web.archive.org/web/20210130042803/https://twitter.com/michaeljburry/status/1355221824661983233',
                type: 'X-TWITTER',
                label: 'Michael Burry tweet (archive)',
                archiveLink: 'https://web.archive.org/web/20210130042803/https://twitter.com/michaeljburry/status/1355221824661983233',
            }
        ],
        description: '"May 2020, relatively sane times for $GME, I called in my lent-out GME shares. It took my brokers WEEKS to find my shares.  I cannot even imagine the sh*tstorm in settlement now. They may have to extend delivery timelines. #pigsgetslaughtered #nakedshorts"',
        type: [TimelineItemType.OTHER],
        significance: 1,
        imgSrc: 'assets/burry-tweet-2021-01-29.jpg'
    },
    {
        title: 'Brokerages shut off the buy button',
        dateYYYYMMDD: '2021-01-28',
        urls: [
            {
                url: 'https://lemmy.whynotdrs.org/post/156058',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/investing/comments/l6wvia/robinhood_and_other_brokers_literally_blocking/',
                type: 'REDDIT',
                label: 'r/investing thread',
                archiveLink: '',
            },
            {
                url: 'https://www.cnbc.com/2021/01/28/robinhood-interactive-brokers-restrict-trading-in-gamestop-s.html',
                type: 'NEWS',
                label: 'CNBC.com',
                archiveLink: '',
            },
            // {
            //     url: 'https://www.benzinga.com/news/23/08/34086181/the-sec-releases-new-information-regarding-a-finra-rule-change-for-options-trading',
            //     type: 'NEWS',
            //     label: 'Benzinga.com',
            //     archiveLink: '',
            // },
        ],
        description: '',
        type: [TimelineItemType.OTHER],
        significance: 5,
    },

    {
        title: 'Game Stopped? Congressional hearing',
        dateYYYYMMDD: '2021-02-18',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=RfEuNHVPc_k',
                type: 'YOUTUBE',
                label: 'YouTube link',
                archiveLink: '',
            },
            {
                url: 'https://www.youtube.com/watch?v=OARREl39syQ',
                type: 'YOUTUBE',
                label: '"I like the stock" - Keith Gill',
                archiveLink: '',
            },
        ],
        description: 'Game Stopped? Who Wins and Loses When Short Sellers, Social Media, and Retail Investors Collide. Keith Gill testifies before congress House Committee on Financial Services',
        type: [TimelineItemType.OTHER],
        significance: 4,
        imgSrc: 'assets/i-like-the-stock.png'
    },
    {
        title: 'Michael Burry receives a visit from the SEC',
        dateYYYYMMDD: '2021-03-18',
        urls: [
            {
                url: 'https://markets.businessinsider.com/currencies/news/big-short-investor-michael-burry-stop-tweets-sec-regulators-visit-2021-3-1030222890                ',
                type: 'NEWS',
                label: 'businessinsider.com',
                archiveLink: '',
            },
        ],
        description: '"Tweeting and getting in the news lately apparently has caused the SEC to pay us a visit," the Scion Asset Management boss said in a now-deleted tweet.',
        type: [TimelineItemType.OTHER],
        significance: 1,
    },

    {
        title: 'GME YOLO update — Apr 16 2021 — final update',
        dateYYYYMMDD: '2021-04-16',
        urls: [
            {
                url: 'https://www.reddit.com/r/wallstreetbets/comments/msblc3/gme_yolo_update_apr_16_2021_final_update/?sort=top',
                type: 'REDDIT',
                label: 'DFV on r/wallstreetbets',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1383204653630914563',
                type: 'X-TWITTER',
                label: 'RC Tweet - "👊"',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/msgqpc/dfv_is_streaming_and_now_gamestop_is_tweeting_at/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: 'DFV’s final reddit post',
        type: [TimelineItemType.DFV],
        significance: 3,
        imgSrc: 'assets/dfv-loading.jpg'
    },
    {
        title: 'Gary Gensler assumes position of chair of the SEC',
        dateYYYYMMDD: '2021-04-17',
        urls: [
            {
                url: 'https://en.wikipedia.org/wiki/Gary_Gensler',
                type: 'WIKIPEDIA',
                label: 'Wikipedia link',
                archiveLink: '',
            },
        ],
        description: '',
        type: [TimelineItemType.OTHER],
        significance: 1,
        imgSrc: 'assets/gensler-loading.png'
    },
    {
        title: 'Roaring Kitty Tweet',
        dateYYYYMMDD: '2021-06-01',
        urls: [
            {
                url: 'https://twitter.com/theroaringkitty/status/1399727581369409539',
                type: 'X-TWITTER',
                label: 'Roaring Kitty tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/npupq3/roaring_kitty_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/npuu7r/for_anyone_having_trouble_viewing_the_video_in/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1399526466770059268',
                type: 'X-TWITTER',
                label: 'Unrelated - RC Tweet "God bless 🇺🇸"',
                archiveLink: '',
            },
        ],
        description: 'DFV aka Roaring Kitty tweets an observing cat with background music of O Fortuna',
        type: [TimelineItemType.DFV],
        significance: 1,
        imgSrc: 'assets/dfv-tweet-2021-06-01.PNG'
    },



    {
        title: 'Michael Burry tweet',
        dateYYYYMMDD: '2021-06-15',
        urls: [
            {
                url: 'https://web.archive.org/web/20210616051602/https://twitter.com/michaeljburry/status/1404803383589060618',
                type: 'X-TWITTER',
                label: 'Michael Burry tweet (archive)',
                archiveLink: 'https://web.archive.org/web/20210616051602/https://twitter.com/michaeljburry/status/1404803383589060618',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/o0fdnl/michael_burry_vol2_jacked_to_the_tits/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"People always ask me what is going on in the markets. It is simple. Greatest Speculative Bubble of All Time in All Things. By two orders of magnitude. #FlyingPigs360"',
        type: [TimelineItemType.OTHER],
        significance: 1,
    },
    {
        title: 'DFVs former employer receives fine of $4.75 million from Massachusetts securities regulators',
        dateYYYYMMDD: '2021-09-16',
        urls: [
            {
                url: 'https://www.reuters.com/business/finance/massachusetts-fines-massmutual-475-mln-failing-supervise-roaring-kitty-other-2021-09-16/?taid=61438d2de56df4000174c11e&utm_campaign=trueAnthem:+Trending+Content&utm_medium=trueAnthem&utm_source=twitter',
                type: 'NEWS',
                label: 'reuters.com',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ppfa9q/former_employer_of_roaring_kitty_fined_4_million/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread September 16',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/q6pfjj/dfvs_employer_fined_4m_for_inadequate_supervision/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread October 12',
                archiveLink: '',
            }
        ],
        description: '"State regulators found MassMutual failed to detect nearly 1,700 trades by Gill, who was able to execute at least two trades in GameStop in excess of $700,000, beyond a company limit."',
        type: [TimelineItemType.DFV],
        significance: 1,
    },
    {
        title: 'SEC publishes the GameStop report',
        dateYYYYMMDD: '2021-10-18',
        urls: [
            {
                url: 'https://www.sec.gov/files/staff-report-equity-options-market-struction-conditions-early-2021.pdf',
                type: 'DOCUMENT',
                label: 'SEC link',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qavn6v/superstonk_megathread_for_the_sec_staff_report_on/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk megathread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qavclr/official_link_to_the_sec_report_about_the_one/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qbjhiv/fox_business_sec_gamestop_report_segment_2_with/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread regarding FOX business segment',
                archiveLink: '',
            },

        ],
        description: '',
        type: [TimelineItemType.OTHER],
        significance: 2,
    },
    {
        title: 'Financial Stability Oversight Council publishes Annual Report, saying that a single security exhibited idiosyncratic risk ',
        dateYYYYMMDD: '2021-12-17',
        urls: [
            {
                url: 'https://home.treasury.gov/system/files/261/FSOC2021AnnualReport.pdf',
                type: 'DOCUMENT',
                label: 'US Treasury link',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/rivizr/so_it_was_never_revealed_which_stock_had/',
                type: 'REDDIT',
                label: 'Superstonk thread - December 17, 2021',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ztmutp/there_is_a_single_security_exhibiting/',
                type: 'REDDIT',
                label: 'Superstonk thread - December 23, 2022',
                archiveLink: '',
            },
        ],
        description: '',
        type: [TimelineItemType.OTHER],
        significance: 2,
    },
    {
        title: 'Superstonk participates in r/place 2022',
        dateYYYYMMDD: '2022-04-04',
        urls: [
            {
                url: 'https://www.reddit.com/r/place/comments/twft1q/full_screenshot_of_rplace_2022/',
                type: 'REDDIT',
                label: 'Full screenshot of r/place 2022',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tts2vw/updated_coordinates_for_rplace/',
                type: 'REDDIT',
                label: 'Superstonk thread April 1 2022',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tur8b5/updated_rplace_design_alliances/',
                type: 'REDDIT',
                label: 'Superstonk thread April 2 2022',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tvdw8n/i_recreated_the_rplace_image_on_ps_and_its/',
                type: 'REDDIT',
                label: 'Superstonk thread April 3 2022',
                archiveLink: '',
            },

        ],
        description: '',
        type: [TimelineItemType.OTHER],
        significance: 1,
        imgSrc: 'assets/superstonk-r-place.png'
    },
    {
        title: 'Pulte enters the fray',
        dateYYYYMMDD: '2022-04-09',
        urls: [
            {
                url: 'https://lemmy.whynotdrs.org/post/199572',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tzxia1/hi_its_pulte/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk - Hi Its Pulte',
                archiveLink: '',
            },

        ],
        description: 'After engaging with Ryan Cohen on Twitter in discussions about BCG, Pulte begins to engage with Superstonk',
        type: [TimelineItemType.OTHER],
        significance: 3,
        imgSrc: 'assets/bill-pulte.jpg'
    },
    {
        title: 'Melvin Capital announces it will be shutting down',
        dateYYYYMMDD: '2022-05-18',
        urls: [
            {
                url: 'https://www.reuters.com/markets/us/hedge-fund-melvin-capital-tells-investors-it-plans-shut-down-letter-2022-05-18/',
                type: 'NEWS',
                label: 'Reuters.com',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ussx2r/the_melvin_capital_shutdown_isnt_what_you_think/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ut71as/ken_takes_zero_accountability_again_puts_all_the/',
                type: 'REDDIT',
                label: 'Superstonk thread - May 19',
                archiveLink: '',
            },
            {
                url: 'https://en.wikipedia.org/wiki/Melvin_Capital',
                type: 'WIKIPEDIA',
                label: 'Melvin Capital - Wikipedia',
                archiveLink: '',
            },
        ],
        description: '',
        type: [TimelineItemType.OTHER],
        significance: 3,
    },

    {
        title: 'Citadel Securities raises $600m',
        dateYYYYMMDD: '2022-08-18',
        urls: [],
        description: '',
        type: [TimelineItemType.OTHER],
        significance: 2,
    },
    {
        title: 'An example of rot within the system',
        dateYYYYMMDD: '2022-09-21',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/xkiiog/this_moment_from_the_house_committee_on_financial/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/xmujd3/the_big_short_director_adam_mckay_tweeted_a/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread about Adam Mckay tweeting this',
                archiveLink: '',
            },
            {
                url: 'https://jacobin.com/2022/09/trey-hollingsworth-bank-of-america-revolving-door-lobbying/',
                type: 'NEWS',
                label: 'jacobin.com',
                archiveLink: '',
            },
        ],
        description: 'A team member of congressional representative Trey Hollingsworth goes from overseeing the banks to joining Bank of America where her father already works.',
        type: [TimelineItemType.OTHER],
        significance: 1,
        imgSrc: 'assets/2022-09-21-boa-subversion.PNG'
    },

    {
        title: 'Crypto giant FTX collapses into bankruptcy',
        dateYYYYMMDD: '2022-11-12',
        urls: [
            {
                url: 'https://www.bbc.co.uk/news/business-63601213',
                type: 'NEWS',
                label: 'BBC.co.uk',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ytxb95/ftx_megathread/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },

        ],
        description: '',
        type: [TimelineItemType.OTHER],
        significance: 2,
    },
    {
        title: 'The Ryan Cohen Interview with Joe Fonicello of GMEdd.com',
        dateYYYYMMDD: '2022-11-20',
        urls: [
            {
                url: 'https://www.youtube.com/watch?v=uN2Dw8AOdMk',
                type: 'YOUTUBE',
                label: 'YouTube link',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/z0e1fq/gmedd_interview_with_ryan_cohen/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },

        ],
        description: '',
        type: [TimelineItemType.RC],
        significance: 4,
        imgSrc: 'assets/rc-gmedd-interview.png'
    },

    {
        title: 'Citadel founder Ken Griffin donates $300 million more to alma mater Harvard',
        dateYYYYMMDD: '2023-04-11',
        urls: [
            {
                url: 'https://www.reuters.com/world/us/citadel-founder-ken-griffin-donates-300-million-more-alma-mater-harvard-2023-04-11/',
                type: 'NEWS',
                label: 'Reuters.com',
                archiveLink: '',
            },
        ],
        description: '',
        type: [TimelineItemType.OTHER],
        significance: 1,
    },


]; 