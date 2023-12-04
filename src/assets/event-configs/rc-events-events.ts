import { TimelineEventConfig } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-config.interface";
import { TimelineEventType } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-type.enum";

export const rcTweetsEvents: TimelineEventConfig[] = [
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-01-06.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 1,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-01-17.PNG',
        tags: ['ryan cohen','ryan cohen tweet'],
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
                url: 'https://www.reddit.com/r/Superstonk/comments/108ib1f/what_happened_on_feb_24_2021_when_the_fedwire/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread Jan 23 2023',
                archiveLink: '',
            },
        ],
        description: '"🐸"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-02-24.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
                url: 'https://www.reddit.com/r/Superstonk/comments/t11w2a/anyone_remember_this_tweet_from_rc/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread Feb 25 2022',
                archiveLink: '',
            },
        ],
        description: '"🤢"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-03-04.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
                url: 'https://www.reddit.com/r/GME/comments/m3d7nl/what_is_happening_right_now_and_why_we_are_not/?sort=top',
                type: 'REDDIT',
                label: 'r/GME thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/GME/comments/m3h3bc/buckle_the_fuck_up/?sort=top',
                type: 'REDDIT',
                label: 'r/GME thread',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-03-11.PNG',
        tags: ['ryan cohen','ryan cohen tweet'],
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
                url: 'https://www.reddit.com/r/Superstonk/comments/t925jg/march_17_isnt_just_an_earnings_date_its_a_special/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread March 7 2022',
                archiveLink: '',
            },
        ],
        description: '"Superman lives forever 🙏"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-03-17.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
                url: 'https://www.reddit.com/r/GME/comments/md8868/ryan_cohen_tweet_2503_ted/?sort=top',
                type: 'REDDIT',
                label: 'r/GME thread',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-03-25.PNG',
        tags: ['ryan cohen','ryan cohen tweet'],
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
                url: 'https://www.reddit.com/r/Superstonk/comments/mqd0ow/connecting_the_dots_between_todays_announcement/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread April 13 2021',
                archiveLink: '',
            },
        ],
        description: '"Culver City, CA @GameStop👍"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-04-12.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-04-20.PNG',
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-04-24.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-04-25',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1386485746916380673',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '"😲"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-04-25.PNG',
        tags: ['ryan cohen','ryan cohen tweet'],
    },
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
                url: 'https://www.reddit.com/r/Superstonk/comments/n19wsf/ryan_cohens_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-04-29.PNG',
        tags: ['ryan cohen','ryan cohen tweet'],
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
                url: 'https://www.reddit.com/r/Superstonk/comments/nbt2v9/decrypted_rc_latest_tweet_its_about_time/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/nh4tg6/a_different_take_on_an_rc_tweet_from_last_week/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread May 20 2021',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-05-13.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-05-18.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-05-19',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1395047208748261379',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
        ],
        description: '"❤️"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
    },
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
                url: 'https://www.reddit.com/r/Superstonk/comments/nkh5kc/rc_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/nklmno/the_daily_stonk_05252021/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread May 25 2021',
                archiveLink: '',
            },
        ],
        description: '"Don’t try this at home"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-05-24.PNG',
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-05-29.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
                url: 'https://www.reddit.com/r/Superstonk/comments/o81hz0/rc_sears_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread June 25 2021',
                archiveLink: '',
            },
        ],
        description: '"💀"',
        types: [TimelineEventType.RC],
        significance: 1,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-06-03.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-06-20.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-06-23.PNG',
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-07-08.PNG',
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-07-10.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 1,
        imgSrc: 'assets/rc-tweets/rc-chopsticks.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
                url: 'https://www.reddit.com/r/Superstonk/comments/pnrtdn/revisited_rc_tweets_computerchair_computershare/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - September 13 2021',
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-computerchair.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
    },
    {
        title: 'RC Tweet',
        dateYYYYMMDD: '2021-07-28',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1420411942846361612',
                type: 'X-TWITTER',
                label: 'RC Tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/otcpt0/rc_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },

        ],
        description: '"Power to the Players 🇺🇸 🇨🇦"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-07-28.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
    },
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-googly-eyes.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-08-11.PNG',
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-08-19.PNG',
        tags: ['ryan cohen','ryan cohen tweet'],
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
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Time for pillow fights and 60s music 🎶"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
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
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/pw0hnp/rc_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },

        ],
        description: '"Talk is cheap, it takes money to buy whiskey."',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet', 'talk is cheap', 'it takes money to buy whiskey'],
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
                url: 'https://www.reddit.com/r/Superstonk/comments/q5nhi5/rc_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/q5nlap/shorts_funeral_new_balance/?sort=top',
                type: 'REDDIT',
                label: 'Shorts. Funeral. New Balance.',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-10-10.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qglkui/rc_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-10-26.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qju9wy/rc_tweet_mgga_revealed_to_the_moon/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"MGGA"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
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
                url: 'https://www.reddit.com/r/Superstonk/comments/qpty7e/rc_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
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
        types: [TimelineEventType.RC],
        significance: 2,
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
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
                url: 'https://www.reddit.com/r/Superstonk/comments/qzb1ge/rc_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
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
        types: [TimelineEventType.RC],
        significance: 2,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-11-21.jpg',
        tags: ['ryan cohen','ryan cohen tweet'],
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
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen','ryan cohen tweet', 'work'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet', 'shitposting'],
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2021-12-13',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1470333397662896130',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/rfcedi/rc_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-12-13.jpg',
        tags: ['ryan cohen','ryan cohen tweet', 'ted cohen'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet', 'poop tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-12-27.jpg',
        tags: ['ryan cohen','ryan cohen tweet', 'poop tweet'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet', 'shitposting'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet', 'poop tweet', 'shitposting'],
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet', 'college', 'wikipedia', '69', 'shitposting'],
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-01-28',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1487204839591485453',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"Anyone going to the movies tonight? 🍿"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
    },
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
                url: 'https://www.reddit.com/r/Superstonk/comments/snjrf6/rc_in_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/sojoyr/on_feb_8th_a_tuesday_morning_ryan_cohen_tweeted/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - February 9 2022',
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
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet'],
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-02-09',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1491608576175099908',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/sovs01/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Who will be the piñata for all this inflation? 🤨"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet', 'inflation'],
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-02-11',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1492254050661847044',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/suuw8p/combined_these_3_tweets_say_a_lot_to_me_market/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - February 17 2022',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/wallstreetbets/comments/sqav35/ryan_cohen_on_twitter/',
                type: 'REDDIT',
                label: 'r/wallstreetbets thread',
                archiveLink: '',
            },
        ],
        description: '"The reverberations of fiscal and monetary policy are likely to be more severe to humans than any climate or societal disaster 💀"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet', 'climate change', 'society', 'inflation', 'politics', 'fiscal policy', 'monetary policy', 'disaster', 'fed'],
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-02-16',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1493951577887019015',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/stwvpw/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"God Bless Gmerica 🏴‍☠️"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen','ryan cohen tweet', 'gmerica', 'god bless gmerica'],
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-02-22',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1496304618531602432',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/sz56n6/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/z0evxm/ryan_cohen_explains_his_famous_tweet_and_talks/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - November 20 2022',
                archiveLink: '',
            },
        ],
        description: '"🩳"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen','ryan cohen tweet', 'shorts'],
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-03-02',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1499057365601161223',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/t53r96/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/t56xfi/theory_gamestop_annouces_metaversenft_platform/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - March 2 2022',
                archiveLink: '',
            },
        ],
        description: '"The apple doesn’t fall far from the tree 🍏"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet', 'apple',],
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-03-07',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1500901882423758849',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/t8vwsa/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"No overpaid execs in the metaverse 🔨"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet', 'overpaid', 'consultants', 'metaverse'],
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-03-08',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1501305188732129280',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet - 1:13 PM',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tb09z3/theory_on_why_rc_is_acting_and_communicating_more/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - March 10 2022',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/t8d4xx/ryan_cohens_actual_letter_to_bbby_board_for_all/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - March 6 2022',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1501350252317528066',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet - 4:12 PM',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/t9utjo/rc_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - RC on Twitter',
                archiveLink: '',
            },

        ],
        description: '"Sent letter to $BBBY board, got no response. Sent email to CEO asking for a discussion, haven’t gotten a prompt response. Too busy talking to expensive consultants?"',
        types: [TimelineEventType.RC],
        significance: 2,
        tags: ['ryan cohen','ryan cohen tweet', 'bbby', 'letter', 'consultants'],
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-03-14',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1503565469068009473',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },

            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tegdsu/guys_i_think_ryan_cohen_has_all_his_ducks_in_a/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/teezts/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tetcv1/i_figured_out_the_meaning_behind_ryan_cohens/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - March 15 2022',
                archiveLink: '',
            },
        ],
        description: '"Short sellers are the dumb stormtroopers of the investing galaxy"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen','ryan cohen tweet', 'short sellers', 'dumb stormtroopers',],
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-03-15',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1503924247198150666',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tf7bvx/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tg1lwy/ryan_cohen_is_about_to_pull_a_st_patrick_on_st/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - March 16 2022',
                archiveLink: '',
            },
        ],
        description: '"Good use of taxpayer $ is the government cracking down on hedge fund short sellers"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen','ryan cohen tweet', 'government', 'hedge funds', 'short sellers', 'regulation'],
    },
    {
        title: 'Ryan Cohen buys 100,000 shares of GME',
        dateYYYYMMDD: '2022-03-22',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1506395956832612354',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tkeu98/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - Ryan Cohen on Twitter',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tkegpe/rc_ventures_buy_100000_new_shares_of_gme_today/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - RC Ventures buy 100,000 new shares of GME today',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tkk96c/yo_rall_ryan_cohen_is_putting_his_money_where_his/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tkj3e9/i_want_to_believe_rc_saw_my_tweet_before_posting/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reuters.com/technology/ryan-cohen-picks-up-100000-gamestop-shares-stock-jumps-2022-03-22/',
                type: 'NEWS',
                label: 'reuters.com',
                archiveLink: '',
            },
        ],
        description: '"I put my money where my mouth is"',
        types: [TimelineEventType.RC],
        significance: 2,
        tags: ['ryan cohen','ryan cohen tweet', 'gme', 'purchase', 'i put my money where my mouth is'],
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-03-24',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1507046110497492992',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1507194761622470656',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tmpgyw/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tnl3ox/bbby_reaches_agreement_with_ryan_cohen/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - March 25 2022',
                archiveLink: '',
            },

        ],
        description: '"The overpriced consultants at BCG are picking a fight with the wrong company…🥊 @BCG", "The only ones more useless than overpriced consultants are those who hire them."',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['overpaid', 'overpriced', 'consultants', 'bcg', 'fight', 'ryan cohen', 'ryan cohen tweet',],
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-03-26',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1507765982907060233',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tmpgyw/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"💩@BCG💩"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet', 'bcg', 'consultants']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-03-27',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1508283974770118659',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"I’m proud of the GameStop team. They rock. 🏴‍☠️🔥"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-03-30',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1509373047094063106',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1509455614082273286',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1509459332097875971',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1509582599878029322',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/tyj89t/children_and_animals_must_be_protected_at_all/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - April 7 2022',
                archiveLink: '',
            },
        ],
        description: '"Who is more reprehensible, hedge fund short sellers or overpriced consultants?", "Children and animals must be protected at all costs", "I was born to work", "gas prices are outrageous. Wonder if BCG has a view…"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet', 'hedge funds', 'short sellers', 'overpriced', 'consultants', 'work', 'gas', 'bcg', 'inflation']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-04-03',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1510818828695052289',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"The last time people were excited to see me"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-04-03.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet', 'bbby', 'baby', 'buybuybaby']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-04-04',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1511197065979867138',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/twmri5/ryan_cohen_tweet_possible_meanings/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"You know what happens when I eat too much fruit…"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet', 'fruit', 'apple', 'poop tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-04-07',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1512103363311243269',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-04-07.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-04-09',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1513003729036972032',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/u0hrzj/20_funniest_superstonk_memes_rc_only_needs_to/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - April 10 2022',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ur051m/theory_genius_rc_tweet_strategy_starting_apr_9_w/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - May 16 2022',
                archiveLink: '',
            },
        ],
        description: '"Show me your funniest memes please!"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-04-11',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1513724061364498440',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"Inflated compensation across Corporate America is deplorable. Is this connected to over a decade of negative real interest rates and massive stimulus?"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-04-12',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1514053372562845699',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"Who is more arrogant and elitist: a high priced consultant or a Wall Street analyst?"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-04-13',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1514297711675256840',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/u2vw5p/warren_icahn_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/u2vvxa/ryan_cohen_is_now_warren_icahn_on_twitter_could/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Ryan Cohen by day, Warren Icahn by night"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-04-18',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1516243620889706497',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/u6ug0d/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Life is like a box of condoms"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-04-20',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1516962826962698241',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/u8cquf/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-04-20.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-04-21',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1517324363351035904',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"Party extremism and divisiveness, deglobalization, civil unrest and inflation are byproducts of govts printing huge sums of money"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: '',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-04-24',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1518304621676036097',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ub1r0r/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"hola"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: '',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-04-25',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1518706298866515970',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ubw9bp/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"🗽"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-04-25.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-04-27',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1519403348344164361',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1519472770035470338',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1519476583551180800',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/udr0r3/quick_summary_meaning_of_rc_latest_tweets/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"In my office 🚽", "iToilet is imperative to the future of humanity", "What should Apple make next?"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-04-29',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1520192309673005057',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/uez2dk/ryan_cohen_on_twitter_we_could_say_they_spend/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"We could say they spend like drunken sailors, but that would be unfair to drunken sailors, because the sailors are spending their own money"',
        types: [TimelineEventType.RC],
        significance: 1,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-04-29.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-05-03',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1521680219551186953',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ui3f0o/general_tsos_chicken_tweet_south_park/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - May 4 2022',
                archiveLink: '',
            },
        ],
        description: '"General Tso’s Chicken is the official spelling"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-05-04',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1521973263102001154',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"What’s 30 trillion between friends…"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-05-04.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-05-06',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1522657414327193601',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1522669176569188358',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ujv197/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ukcj35/rc_deciphered_tombstone_carve_out_share_recall/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - May 7 2022',
                archiveLink: '',
            },
        ],
        description: '"weaning the economy off cheap money is like breaking a coke addiction", "i use twitter to overcompensate for my small weewee 🔎"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-05-08',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1523441086076649473',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"Death and interest rates are the greatest equalizers. In that order."',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-05-10',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1524199692468469760',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/umy5y9/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"I got my 8th booster and now I’m fully vaccinated and 2 inches taller"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-05-11',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1524470193157779458',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/unhp98/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"I’m really upset with Putin for causing all this inflation"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-05-12',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1524778497272696833',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/unhp98/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Fair markets are free markets"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-05-16',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1526179671192309760',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/uquy5u/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"I love the spice girls"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-05-18',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1526179671192309760',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1527096183042220032',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/usnh3n/rc_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/usruu3/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"All the “experts” pontificating about when the next recession will begin because equities are declining due to interest rates normalizing is amusing", "Politicians and diapers must be changed often, and for the same reason" ',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-05-23',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1528646500233924608',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/uvv5s8/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1528709914612350977',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/uvyr78/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"I just played with my dad. Dreams with him are the best.", "It’s official! The GameStop Wallet is here."',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-05-25',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1529574128646336512',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/uxripq/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"It is critical for humanity that we expand our civilization to Uranus"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-05-27',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1530266772317917185',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/uz5kjd/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Lurking…🇨🇦"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-05-27.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-05-30',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1531494009209868288',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/v1i5te/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Life is for working, loving, and laughing"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-06-03',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1532836889245503489',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/v49ja5/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Power to the players"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-06-06',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1533719752568446976',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/v5xnbi/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Work is so sexy"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-06-10',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1535247081249595392',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/v97dhk/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Poll: Did coronavirus lockdowns and economic stimulus spark inflation?"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-06-12',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1535936351237021697',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vajepl/ryan_cohen_on_twitter_abhina_prakash_china_is_a/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1535937752377831425',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vajh0r/ryan_cohen_on_twitter_politics_is_the_gentle_art/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"China is a sleeping giant. Let her sleep, for when she wakes she will move the world", "Politics is the gentle art of getting votes from the poor and campaign funds from the rich, by promising to protect each from the other"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-06-13',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1536396937338970112',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vbh7d9/ryan_cohen_on_twitter_the_hell_with_the_left_and/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"The hell with the left and the right. Stop dividing the people 💜"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-06-14',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1536961178869579780',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vco6jk/ryan_cohen_on_twitter_apple_pie_and_ice_cream/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Apple pie and ice cream make me happy"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-06-17',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1537722823900372992',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/ve8t6b/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1537744455867981824',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vea2lx/ryan_cohen_on_twitter_ariannaville6_inflation_is/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1537773789982863360',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vec0s7/ryan_cohen_on_twitter_mikemikedoyle/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Inflation is as violent as a mugger, as frightening as an armed robber and as deadly as a hit man", "Power to the players 🏴‍☠️"',
        types: [TimelineEventType.RC],
        significance: 1,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-06-17.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-06-19',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1538459185859289088',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vfrqr6/rc_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Happy Father’s Day. Why do the good die young?"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-06-19.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-06-20',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1538808850387640320',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vgh23c/ryan_cohen_on_twitter_flatulence_is_the_best/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1538831056031272962',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vgic5h/ryan_cohen_on_twitter_preferably_on_the_first/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Flatulence is the best icebreaker", "Preferably on the first date to efficiently assess devotion"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-06-21',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1539163410260119552',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vh8g2t/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1539180692600504320',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vh9f5t/ryan_cohen_on_twitter_randolph_zeke_correct_in/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Nobody sane can defend today’s compensation for the Corporate Power Brokers (most of which is risk free)","Correct. In power with no personal money at risk and perverse financial incentives. It’s head they win, tails you lose."',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-06-24',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1540485828266164228',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1540476894717456385',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1540490641968226304',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1540484708135337984',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vk2gy5/ryan_cohen_on_twitter_china_has_a_nationwide/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vk1e78/ryan_cohen_on_twitter_this_is_a_testament_to_the/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vk1zvy/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vk23z0/ryan_cohen/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"I have a crush on China 🇨🇳 🍜", "This is a testament to the hard working people of China 🇨🇳", "China has a nationwide high-speed rail network that spans almost 22,000 miles. This is an amazing achievement."',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-06-27',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1541556841133445120',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"Wall Street charges lofty fees, doesn’t risk its own money, consistently underperforms and wins regardless of how the economy does. Meanwhile, Main Street faces inflation and a growing wealth gap. What’s the solution?"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-06-29',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1542160137401630720',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vfrqr6/rc_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"I’m sick of seeing failed executives make millions in risk free compensation while shareholders are left holding the bag"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-07-05',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1544464038511656960',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vsbhal/ryan_cohen_on_twitter_in_general_when_an/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"In general, when an executive gets paid millions of dollars and leaves a company in shambles, they should be forced to return the money"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-07-11',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1546597081732657152',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1546731077301022721',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"Whoops", "That left for dead retailer just launched something new 😳"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-07-13',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1547433078796169216',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/vympwj/ryan_cohen_on_twitter_i_love_coke/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/we0pg3/i_love_coke_ryan_cohen_on_why_gme_nft_is_going_to/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - August 1 2022',
                archiveLink: '',
            },
        ],
        description: '"I love coke"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-07-15',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1548131846864510984',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/w05rej/ryan_cohen_on_twitter_are_dingleberries_fruit/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Are dingleberries fruit?"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    // {
    //     title: 'Ryan Cohen tweets',
    //     dateYYYYMMDD: '2022-07-21',
    //     urls: [
    //         {
    //             url: 'https://twitter.com/ryancohen/status/1550285404149952513',
    //             type: 'X-TWITTER',
    //             label: 'Ryan Cohen tweet',
    //             archiveLink: '',
    //         },
    //         {
    //             url: 'https://twitter.com/ryancohen/status/1550293000344899584',
    //             type: 'X-TWITTER',
    //             label: 'Ryan Cohen tweet',
    //             archiveLink: '',
    //         },
    //         {
    //             url: 'https://www.reddit.com/r/Superstonk/comments/w4x62m/ryan_cohen_on_twitter_happy_splividend_week/?sort=top',
    //             type: 'REDDIT',
    //             label: 'Superstonk thread',
    //             archiveLink: '',
    //         },
    //         {
    //             url: 'https://www.reddit.com/r/Superstonk/comments/w4xt2u/ryan_cohen_on_twitter_the_people_who_work_hardest/?sort=top',
    //             type: 'REDDIT',
    //             label: 'Superstonk thread',
    //             archiveLink: '',
    //         },
    //     ],
    //     description: '"Unless you sweat on the job you don’t know hard work. I have much respect for everyone working on the ground in our stores.", "The people who work hardest usually complain the least."',
    //     type: [TimelineItemType.RC],
    //     significance: 0,
    // },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-07-27',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1552456736870928384',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"The best time to be alive in human history is now"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-08-05',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1555676193071935489',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/wh7qdf/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Ask not what your company can do for you – ask what you can do for your company"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-08-10',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1557541659323248640',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/wleusx/ryan_cohen_on_twitter_if_we_print_a_few_trillion/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1557550311786459136',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"if we print a few trillion more, it should bring inflation down #taxtherich #wealthtax", "💜"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-08-24',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1562562015201488896',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/www9fk/ryan_cohen_on_twitter_gamestop_store_leaders/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"GameStop store leaders ❤️"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-10-11',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1579973046206894081',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/y1nf36/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1580000761412714497',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/y1ptkp/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },

        ],
        description: '"Low interest rates may prove to be like easy sex — tempting but possibly fatal", "I think my tweets are being suppressed"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
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
            {
                url: 'https://lemmy.whynotdrs.org/post/285313',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/y6vjdu/ryan_cohen_again/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/y6wqvm/holy_fuck_the_meaning_of_the_new_rc_tweet_1_icahn/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/147r4y5/ryan_cohens_meeting_with_carl_icahn_cracked/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread - June 12 2023',
                archiveLink: '',
            },
        ],
        description: 'Ryan Cohen tweets a picture of himself with Carl Icahn',
        types: [TimelineEventType.RC],
        significance: 3,
        imgSrc: 'assets/rc-tweets/rc-icahn.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
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
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/yzeeo0/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/yzhsc0/ryan_is_now_the_book_king_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/yzmwa2/down_the_rabbit_hole_of_the_history_behind_rcs/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/4182',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            {
                url: 'https://www.wsj.com/articles/gamestops-ryan-cohen-wants-to-be-more-than-a-meme-stock-king-11668834015',
                type: 'OTHER',
                label: 'GameStop’s Ryan Cohen Wants to Be More Than a Meme-Stock King - WSJ',
                archiveLink: '',
            },

        ],
        description: 'I also want to be the Book King 👑',
        types: [TimelineEventType.RC],
        significance: 2,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2022-11-23',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1595454594351616000',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/z2tkcw/book_king_ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1595615782117208069',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/z38qsq/rc_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Teddy making Thanksgiving great again", "My tweets seem to be suppressed."',
        types: [TimelineEventType.RC],
        significance: 1,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-11-23.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2022-12-30',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1608920756100141057',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/zzaeb1/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/zzcohc/rcs_twitter_views_are_working_now/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Has inflation cured the land from covid?"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },

    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-01-09',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1612408869845889025',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/107c0bh/ryan_cohen_on_twitter_jack_i_want_you_to_draw_me/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Jack, I want you to draw me like one of your French girls. Wearing this. Wearing only this."',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-01-18',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1615752534013902857',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/10fc2cf/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/10esd47/breaking_news_ryan_cohen_buys_all_the_stocks/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: 'RC Tweets a meme that originated on Superstonk',
        types: [TimelineEventType.RC],
        significance: 1,
        imgSrc: 'assets/rc-tweets/rc-tweet-2023-01-18.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-01-25',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1618308520499359744',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/10l52jb/ryan_cohen_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"You know you’ve made it when you buy a turtleneck"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-02-14',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1625507240831553537',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/11275b7/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"someone tell the government to stop shooting down my balloons🎈"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-03-08',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1633552435267379202',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/11m5soh/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"你好"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-03-09',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1633994613429092352',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/11n9qi5/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Does this mean I don’t have to pay back Silicon Valley Bank?"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-03-12',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1635047829067677696',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/11ps8i9/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Odd that treasury isn’t interested in investing in banks today when in 2009 those TARP bailouts yielded some of the best returns for taxpayers.."',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-04-12',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1646267634420154368',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/12k0fzq/ryan_cohen_on_twitter_i_just_got_off_the_phone/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/12pn78j/rc_ventures_buys_nordstrom_shares_page_79/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"I just got off the phone with what was once a great American brand. Lots of problems, no accountability for high paid execs and little interest in my help (at no cost). This could get interesting."',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-04-20',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1649146077335941122',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/12tdvvs/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"It’s 420 everyday in Corporate America"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-04-26',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1651286148486922252',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/12zs3uf/ryan_cohen_on_the_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"America is littered with managers making millions in risk free compensation"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweets',
        dateYYYYMMDD: '2023-04-27',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1651567249965084673',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/130kwqq/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://twitter.com/ryancohen/status/1651613326957223936',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/130snj8/ryan_cohen_on_the_bird/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Corporate America is a wolf in liberal’s clothing"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-05-02',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1653455058745294854',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/135uwlx/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"The Fed may have to choose between fighting inflation or bank contagion"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-05-11',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1656745897064034311',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/13ey463/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/13eyjv6/rcs_latest_tweet_is_a_quote_from_this_letter_to/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2023-05-11.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-05-14',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1657795512395874305',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/13hhmo7/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Show Mom love. There’s nothing more special than a GameStop gift card for Mother’s Day."',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-05-21',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1660396946991857665',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/13o7e11/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2023-05-21.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-05-23',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1661111283431645228',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/13q0816/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2023-05-23.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-06-03',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1665074233888710657',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/13zmevx/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"My gastro once told me it is a terrible mistake that people often mistake kindness for weakness"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-06-07',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1666541652821917701',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/143nwc3/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Not for long"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    }, 
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-06-18',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1670558014678654983',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
        ],
        description: '"Happy Father’s Day"',
        types: [TimelineEventType.RC],
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2023-06-18.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    },
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-06-22',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1671965203855204352',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/14gcoxf/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"My boss doubled my pay and made me employee of the month ⭐️"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    }, 
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-06-23',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1672363242004582400',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/14hb231/rc_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"I challenge Warren Buffett to a thumb war 👍"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    }, 
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-06-29',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1674573778196758528',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/14ml7hb/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Work hard or please leave"',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    }, 
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-07-25',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1684016228938190848',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/159rziw/rip_tylee/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Tylee passed away today. She is the reason Chewy exists and her legacy lives forever."',
        types: [TimelineEventType.RC],
        significance: 1,
        imgSrc: 'assets/rc-tweets/rc-tweet-2023-07-25.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    }, 
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-08-02',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1686913920630484992',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/15gqflg/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"There is nothing more foolish than cat litter and video games"',
        types: [TimelineEventType.RC],
        significance: 0,
        tags: ['ryan cohen', 'ryan cohen tweet']
    }, 
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-09-03',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1698440106053337444',
                type: 'X-TWITTER',
                label: 'Ryan Cohen reply tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/1698689/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
                archiveLink: '',
            },
        ],
        description: '"Big win for consumers. Consumers have also invested their hard earned money in to physical video games. Disk drives should be required on consoles."',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    }, 
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-10-04',
        urls: [
            {
                url: 'https://twitter.com/ryancohen/status/1709785201763582158',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/1708i2k/ryan_cohen_on_x/?sort=top',
                type: 'REDDIT',
                label: 'r/Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/ThePPShow/comments/1708iir/new_rc_post/?sort=top',
                type: 'REDDIT',
                label: 'r/ThePPShow thread',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/272817',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            },
            
        ],
        description: '',
        types: [TimelineEventType.RC],
        significance: 1,
        imgSrc: 'assets/rc-tweets/rc-tweet-2023-10-04.jpg',
        tags: ['ryan cohen', 'ryan cohen tweet']
    }, 
    {
        title: 'Ryan Cohen tweet',
        dateYYYYMMDD: '2023-10-25',
        urls: [
            {
                url: 'https://x.com/ryancohen/status/1717337273262313603?s=46&t=1kgf16QwDp2Ydp9mdZLBYw',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/17gjs2o/ryan_cohen_on_x/?sort=top',
                type: 'REDDIT',
                label: 'r/Superstonk thread',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/ThePPShow/comments/17gjs9b/ryan_cohen_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'r/ThePPShow thread',
                archiveLink: '',
            },
            // {
            //     url: '',
            //     type: 'LEMMY',
            //     label: '',
            //     archiveLink: '',
            // },
            
        ],
        description: '“The most important thing to remember is that inflation is not an act of God, that inflation is not a catastrophe of the elements or a disease that comes like the plague. Inflation is a policy.” -- Ludwig von Mises',
        types: [TimelineEventType.RC],
        significance: 2,
        tags: ['ryan cohen', 'ryan cohen tweet']
    }, 
    {
        title: '5 new Teddy books listed on teddy.com',
        dateYYYYMMDD: '2023-11-21',
        urls: [
            {
                url: 'https://teddy.com/collections/all',
                type: 'OTHER',
                label: 'teddy.com',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/428636',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            }
        ],
        description: 'Ryan Cohen, children’s book author, publishes 5 new Teddy books',
        types: [TimelineEventType.RC],
        significance: 3,
        tags: ['ryan cohen', 'teddy', 'teddy books']
    }, 
    {
        title: 'Ryan Cohen tweet - pigeons',
        dateYYYYMMDD: '2023-12-03',
        urls: [
            {
                url: 'https://x.com/ryancohen/status/1731444926787834343?s=46&t=nOPBbpiKX7W0ruDEeUuUnQ',
                type: 'X-TWITTER',
                label: 'Ryan Cohen tweet - pigeons',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/18a5ob0/ryan_cohen_on_x/?sort=top',
                type: 'REDDIT',
                label: 'Ryan Cohen on X!',
                archiveLink: '',
            },
            {
                url: 'https://lemmy.whynotdrs.org/post/470823',
                type: 'LEMMY',
                label: '',
                archiveLink: '',
            }
        ],
        description: '“I don’t understand why people would want to get rid of pigeons. They don’t bother no one.”— Mike Tyson',
        types: [TimelineEventType.RC],
        significance: 1,
        tags: ['ryan cohen', 'ryan cohen tweet']
    }, 
];
