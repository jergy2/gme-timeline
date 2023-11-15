
import { TimelineEventConfig } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-config.interface";
import { TimelineEventType } from "src/app/pages/display-timeline/timeline-items/timeline-item/timeline-event-type.enum";

export const citadelEvents: TimelineEventConfig[] = [
    {
        title: 'Interview with former Citadel client Edward Thorp',
        dateYYYYMMDD: '2022-06-04',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/v4wxkb/i_spoke_with_a_former_citadel_client_heres_what/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk OC by u/-einfachman-',
                archiveLink: '',
            },
            {
                url: 'https://en.wikipedia.org/wiki/Edward_O._Thorp',
                type: 'WIKIPEDIA',
                label: 'Edward O. Thorp - Wikipedia',
                archiveLink: '',
            }
        ],
        description: '',
        types: [TimelineEventType.OTHER],
        tags: ['Citadel'],
        significance: 2,
    },

    {
        title: 'Citadel Securities raises $600m',
        dateYYYYMMDD: '2022-08-18',
        urls: [],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 2,
        tags: ['citadel'],
    },
    {
        title: 'Citadel Advisors LLC information Brochure',
        dateYYYYMMDD:'2023-03-31',
        urls:[
            {
                url: 'https://files.adviserinfo.sec.gov/IAPD/Content/Common/crd_iapd_Brochure.aspx?BRCHR_VRSN_ID=842328',
                type: 'DOCUMENT',
                label: 'sec.gov - Citadel Advisors LLC information Brochure',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/17iq1d4/citadel_advisors_llc_on_meme_stocks_shorts_short/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk post Oct 28 2023',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/ThePPShow/comments/17ig718/at_least_kenny_is_warning_his_investors_now_i/?sort=top',
                type: 'REDDIT',
                label: 'Superstonk post Oct 28 2023',
                archiveLink: '',
            },
        ],
        description: '"Hedge funds that trade securities that are considered "meme stocks" may be particularly prone to short squeezes related to such stocks."',
        types: [TimelineEventType.OTHER],
        significance: 3,
        tags: ['Citadel', 'meme stocks', 'short squeeze', 'Ken Griffin']
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
        types: [TimelineEventType.OTHER],
        significance: 1,
        tags: ['Citadel', 'Ken Griffin', 'propaganda'],
    },
    {
        title: 'Spotted Ken Griffin sitting next to prince Harry and Megan Markle at Katy Perry’s last performance of her Las Vegas residency',
        dateYYYYMMDD: '2023-11-06',
        urls: [
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/17pcj14/spotted_ken_griffin_sitting_next_to_prince_harry/',
                type: 'REDDIT',
                label: 'Spotted Ken Griffin sitting next to prince Harry and Megan Markle at Katy Perry’s last performance of her Las Vegas residency',
                archiveLink: '',
            },
            {
                url: 'https://www.reddit.com/r/Superstonk/comments/17qlmya/its_official_they_actually_credited_superstonk/',
                type: 'REDDIT',
                label: 'Spotted Ken Griffin sitting next to prince Harry and Megan Markle at Katy Perry’s last performance of her Las Vegas residency',
                archiveLink: '',
            },
            {
                url: 'https://pagesix.com/2023/11/07/royal-family/prince-harry-meghan-markle-party-with-ken-griffin-michael-kives/',
                type: 'REDDIT',
                label: 'pagesix.com',
                archiveLink: '',
            },
        ],
        description: '',
        types: [TimelineEventType.OTHER],
        significance: 0,
        tags: ['Ken Griffin'],
        imgSrc: 'assets/other/ken-griffin-2023-11-06.PNG'
    },
    // {
    //     https://www.reddit.com/r/Superstonk/comments/17tvyfs/kenny_g_sitting_with_former_president_bush/
    // }
];