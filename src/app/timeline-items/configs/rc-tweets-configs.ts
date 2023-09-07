import { TimelineItemType } from "../timeline-item/timeline-item-type.enum";
import { TimelineItemConfig } from "../timeline-item/timeline-item-config.interface";

export const rcTweetsConfigs: TimelineItemConfig[] = [
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2019-07-02',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1146152860205404160',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '"Hello Twitter! #myfirstTweet"',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'RC Retweet',
        dateYYYYMMDD: '2019-11-30',
        urls: [
            {
                url: 'https://twitter.com/BusinessInsider/status/1200802936634384385',
                type: 'X-TWITTER',
                label: 'RC Retweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'RC Retweet',
        dateYYYYMMDD: '2020-01-01',
        urls: [
            {
                url: 'https://twitter.com/HarvardBiz/status/1212256827389489152',
                type: 'X-TWITTER',
                label: 'RC Retweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2020-01-26',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1221498793046265857',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'RC Retweet',
        dateYYYYMMDD: '2020-08-16',
        urls: [
            {
                url: 'https://twitter.com/zackafriedman/status/1295063137830436866',
                type: 'X-TWITTER',
                label: 'RC ReTweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'RC Retweet',
        dateYYYYMMDD: '2020-11-21',
        urls: [
            {
                url: 'https://twitter.com/CNBC/status/1330134444183871488',
                type: 'X-TWITTER',
                label: 'RC ReTweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2020-12-09',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1336775515101949963',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '"😳" https://t.co/hcp4kNNMbz',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-01-06',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1346943412663177218',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '"💩"',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-01-06.jpg'
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-01-17',
        urls: [
            {
                url: 'https://twitter.com/i/status/1350877969816956934',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            }
        ],
        description: '🥜',
        type: TimelineItemType.RC,
        significance: 1,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-01-17.PNG'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-02-24',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1364650709669601289',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/108ib1f/what_happened_on_feb_24_2021_when_the_fedwire/',
                type: 'REDDIT',
                label: 'Superstonk thread Jan 23 2023',
                archiveLink: '',
            },
        ],
        description: '"🐸"',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-02-24.jpg'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-03-04',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1367555194196787206',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/t11w2a/anyone_remember_this_tweet_from_rc/',
                type: 'REDDIT',
                label: 'Superstonk thread Feb 25 2022',
                archiveLink: '',
            },
        ],
        description: '"🤢"',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-03-04.jpg'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-03-11',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1370136976666595331',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/GME/comments/m3d7nl/what_is_happening_right_now_and_why_we_are_not/',
                type: 'REDDIT',
                label: 'r/GME thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/GME/comments/m3h3bc/buckle_the_fuck_up/',
                type: 'REDDIT',
                label: 'r/GME thread',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-03-11.PNG'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-03-17',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1372270634374467587',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/t925jg/march_17_isnt_just_an_earnings_date_its_a_special/',
                type: 'REDDIT',
                label: 'Superstonk thread March 7 2022',
                archiveLink: '',
            },
        ],
        description: '"Superman lives forever 🙏"',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-03-17.jpg'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-03-25',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1372270634374467587',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/GME/comments/md8868/ryan_cohen_tweet_2503_ted/',
                type: 'REDDIT',
                label: 'r/GME thread',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-03-25.PNG'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-04-12',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1381829698263654401',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/mqd0ow/connecting_the_dots_between_todays_announcement/',
                type: 'REDDIT',
                label: 'Superstonk thread April 13 2021',
                archiveLink: '',
            },
        ],
        description: '"Culver City, CA @GameStop👍"',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-04-12.jpg'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-04-20',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1384616641087086596',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-04-20.PNG'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-04-24',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1385989779129503746',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-04-24.jpg'
    },
    // {
    //     title: 'RC Tweet',
    //     dateYYYYMMDD: '2021-04-25',
    //     urls: [
    //         {
    //             url: 'https://twitter.com/ryancohen/status/1386485746916380673',
    //             type: 'X-TWITTER',
    //             label: 'RC Tweet',
    //             archiveLink: '',
    //         },
    //     ],
    //     description: '"😲"',
    //     type: TimelineItemType.RC,
    //     significance: 0,
    //     imgSrc: 'assets/rc-tweets/rc-tweet-2021-04-25.PNG'
    // },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-04-29',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1386485746916380673',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/n19wsf/ryan_cohens_tweet/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-04-29.PNG'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-05-13',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1392649234944507906',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/nbt2v9/decrypted_rc_latest_tweet_its_about_time/',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/nh4tg6/a_different_take_on_an_rc_tweet_from_last_week/',
                type: 'REDDIT',
                label: 'Superstonk thread May 20 2021',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-05-13.jpg'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-05-18',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1394482434171973634',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '"“Ryan, I love you but I don’t like you” (My Grandma)"',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-05-18.jpg'
    },
    // {
    //     title: 'RC Tweet',
    //     dateYYYYMMDD: '2021-05-19',
    //     urls: [
    //         {
    //             url: 'https://twitter.com/ryancohen/status/1395047208748261379',
    //             type: 'X-TWITTER',
    //             label: 'RC Tweet',
    //             archiveLink: '',
    //         },
    //     ],
    //     description: '"❤️"',
    //     type: TimelineItemType.RC,
    //     significance: 0,
    // },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-05-24',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1397047791889879041',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/nklmno/the_daily_stonk_05252021/',
                type: 'REDDIT',
                label: 'Superstonk thread May 25 2021',
                archiveLink: '',
            },
        ],
        description: '"Don’t try this at home"',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-05-24.PNG'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-05-29',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1398454505314959361',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-05-29.jpg'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-06-03',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1400492465442811904',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/o81hz0/rc_sears_tweet/',
                type: 'REDDIT',
                label: 'Superstonk thread June 25 2021',
                archiveLink: '',
            },
        ],
        description: '"💀"',
        type: TimelineItemType.RC,
        significance: 1,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-06-03.jpg'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-06-20',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1406678556436877315',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-06-20.jpg'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-06-23',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1407896835096678402',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-06-23.PNG'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-06-30',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1410398196610723842',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '"Brick By Brick 🧱"',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-07-04',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1411737540210561036',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '"Power to the Players 🇺🇸"',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-07-08',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1413223954387406851',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ogfq3j/ryan_cohens_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"I ❤️ this"',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-07-08.PNG'
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-07-10',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1413669955984236545',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-07-10.jpg'
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-07-19',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1417315406272864258',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/onw3ie/pg13/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"PG-13"',
        type: TimelineItemType.RC,
        significance: 1,
        imgSrc: 'assets/rc-tweets/rc-chopsticks.jpg'
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-07-23',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1418751218566918146',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/GMEJungle/comments/oqgky0/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'r/GMEJungle thread',
                archiveLink: '',
            },
        ],
        description: 'Can’t stop, won’t stop.',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-computerchair.jpg'
    },
    // {
    //     title: 'RC Tweet',
    //     dateYYYYMMDD: '2021-07-28',
    //     urls: [
    //         {
    //             url: 'https://twitter.com/ryancohen/status/1420411942846361612',
    //             type: 'X-TWITTER',
    //             label: 'RC Tweet',
    //             archiveLink: '',
    //         },
    //     ],
    //     description: '"Power to the Players 🇺🇸 🇨🇦"',
    //     type: TimelineItemType.RC,
    //     significance: 0,
    //     imgSrc: 'assets/rc-tweets/rc-tweet-2021-07-28.jpg'
    // },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-07-29',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1420940035042414595',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            }
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-googly-eyes.jpg'
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-08-06',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1423766191311519747',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-08-11',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1425606429574979584',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-08-11.PNG'
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-08-19',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1428518642937892868',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-08-19.PNG'
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-08-27',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1431433651414306825',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/pd0wc4/rc/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk',
                archiveLink: '',
            },
        ],
        description: '"Time for pillow fights and 60s music 🎶"',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-09-26',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1431433651414306825',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"Talk is cheap, it takes money to buy whiskey."',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-10-10',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1447407898905268225',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/q5nlap/shorts_funeral_new_balance/',
                type: 'REDDIT',
                label: 'Shorts. Funeral. New Balance.',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-10-10.jpg'
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-10-26',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1453174821072801794',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-10-26.jpg'
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-10-31',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1454841759104749574',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"MGGA"',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-11-08',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1457902069206163460',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qpzk9r/theory_rc_last_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Theory: RC Last Tweet - Nov 9 2021',
                archiveLink: '',
            },
        ],
        description: '"Deciding between two options for my GME shares: HOLD or HODL…"',
        type: TimelineItemType.RC,
        significance: 2,
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-11-14',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1460127511619252230',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qudfa5/theory_on_why_ryan_cohen_tweeted_backwards/?sort=top',
                type: 'REDDIT',
                label: 'THEORY ON WHY RYAN COHEN TWEETED BACKWARDS  - Nov 15 2021',
                archiveLink: '',
            },
        ],
        description: '"eew eew llams a evah I"',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-11-21',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1462612474071502848',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qzbago/rcs_bedtime_stories_come_in_an_interestingly/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/DDintoGME/comments/qzb4cy/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'r/DDintoGME thread',
                archiveLink: '',
            },
        ],
        description: '"Bedtime stories by Dr. Ruth 🐱"',
        type: TimelineItemType.RC,
        significance: 2,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-11-21.jpg'
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-11-29',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1465518039055622148',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"Only interested in speaking with candidates who want to actually WORK…"',
        type: TimelineItemType.RC,
        significance: 1,
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-12-10',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1469395426839302145',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/rdq2v1/im_cooler_online_than_in_real_life/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"I’m cooler online than in real life"',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-12-13',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1470333397662896130',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1470363505027129346',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet - picture of a Sugar Daddy candy',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/GME/comments/rfggqp/rc_sugar_daddy_tweet/?sort=top',
                type: 'REDDIT',
                label: 'r/GME - RC Sugar daddy tweet ',
                archiveLink: '',
            },
        ],
        description: '"I miss you"',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-12-13.jpg'
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-12-17',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1471901513723387915',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/rimx1d/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk - Ryan Cohen on Twitter ',
                archiveLink: '',
            },
        ],
        description: '"💩"',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2021-12-27',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1475551106071732227',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/rpvctw/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk - Ryan Cohen on Twitter ',
                archiveLink: '',
            },
        ],
        description: '"Taking a dump in the metaverse."',
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-12-27.jpg'
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-01-03',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1475551106071732227',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/rvf4n2/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Ryan Cohen on Twitter - Superstonk',
                archiveLink: '',
            },
        ],
        description: '"Never overestimate a man who underestimates himself"',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-01-11',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1480918109510852610',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/s1ex69/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Ryan Cohen on Twitter - Superstonk',
                archiveLink: '',
            },
        ],
        description: '"Happy Anniversary 💩"',
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-01-27',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1486867794650087427',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/seeoh5/rcs_tweet_why_waste_money_on_college_when/?sort=top',
                type: 'REDDIT',
                label: ' RC never went to college',
                archiveLink: '',
            },
            {
                url: 'https://en.m.wikipedia.org/wiki/69_(sex_position)',
                type: 'WIKIPEDIA',
                label: '69 (sex position) - Wikipedia',
                archiveLink: '',
            },
        ],
        description: '"Why waste money on college when Wikipedia is free…"',
        type: TimelineItemType.RC,
        significance: 0,
    },
    // {
    //     title: 'Ryan Cohen tweet',
    //     dateYYYYMMDD: '2022-01-28',
    //     urls: [
    //         {
    //             url: 'https://twitter.com/ryancohen/status/1487204839591485453',
    //             type: 'X-TWITTER',
    //             label: 'Ryan Cohen tweet',
    //             archiveLink: '',
    //         },
    //     ],
    //     description: '"Anyone going to the movies tonight? 🍿"',
    //     type: TimelineItemType.RC,
    //     significance: 0,
    // },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-02-08',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1487204839591485453',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://apps.apple.com/us/app/gamestop/id406033647',
                type: 'OTHER',
                label: 'GameStop on the App Store',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/sojoyr/on_feb_8th_a_tuesday_morning_ryan_cohen_tweeted/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/GME/comments/snjro0/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'r/GME thread',
                archiveLink: '',
            },
        ],
        description: '"The 21st century ☎️"',
        type: TimelineItemType.RC,
        significance: 0,
    },



    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-10-17',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1582212373985005569',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: 'Ryan Cohen tweets a picture of himself with Carl Icahn',
        type: TimelineItemType.RC,
        significance: 2,
        imgSrc: 'assets/rc-tweets/rc-icahn.jpg'
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-11-19',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1593989511171784705',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.teddy.com',
                type: 'OTHER',
                label: 'teddy.com',
                archiveLink: '',
            },
        ],
        description: 'I also want to be the Book King 👑',
        type: TimelineItemType.RC,
        significance: 2,
    },
];
