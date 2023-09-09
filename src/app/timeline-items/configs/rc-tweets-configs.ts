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
                url: 'https://www.reddit.com/r/Superstonk/comments/108ib1f/what_happened_on_feb_24_2021_when_the_fedwire/?sort=top',
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
                url: 'https://www.reddit.com/r/Superstonk/comments/t11w2a/anyone_remember_this_tweet_from_rc/?sort=top',
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
                url: 'https://www.reddit.com/r/Superstonk/comments/t925jg/march_17_isnt_just_an_earnings_date_its_a_special/?sort=top',
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
                url: 'https://www.reddit.com/r/GME/comments/md8868/ryan_cohen_tweet_2503_ted/?sort=top',
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
                url: 'https://www.reddit.com/r/Superstonk/comments/mqd0ow/connecting_the_dots_between_todays_announcement/?sort=top',
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
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-04-25.PNG'
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
        type: TimelineItemType.RC,
        significance: 0,
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
                url: 'https://www.reddit.com/r/Superstonk/comments/o81hz0/rc_sears_tweet/?sort=top',
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
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-computerchair.jpg'
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
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2021-07-28.jpg'
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
                label: 'Superstonk thread',
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
            {
                url:  'https://www.reddit.com/r/Superstonk/comments/pw0hnp/rc_on_twitter/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
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
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qglkui/rc_tweet/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
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
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/qju9wy/rc_tweet_mgga_revealed_to_the_moon/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk thread',
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 1,
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
        type: TimelineItemType.RC,
        significance: 1,
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 2,
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
        type: TimelineItemType.RC,
        significance: 1,
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 2,
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
        type: TimelineItemType.RC,
        significance: 1,
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 1,
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
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-04-03.jpg'
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-04-07.jpg'
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 1,
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-04-20.jpg'
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
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: ''
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
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: ''
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
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-04-25.jpg'
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
        type: TimelineItemType.RC,
        significance: 1,
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
        type: TimelineItemType.RC,
        significance: 1,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-04-29.jpg'
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
        type: TimelineItemType.RC,
        significance: 0,
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
        type: TimelineItemType.RC,
        significance: 0,
        imgSrc: 'assets/rc-tweets/rc-tweet-2022-05-04.jpg'
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
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'Ryan Cohen tweets',
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
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'Ryan Cohen tweets',
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
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'Ryan Cohen tweets',
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
        type: TimelineItemType.RC,
        significance: 0,
    },
    {
        title: 'Ryan Cohen tweets',
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
