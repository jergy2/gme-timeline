export type urlType = 'YOUTUBE' | 'REDDIT' | 'LEMMY' | 'WIKIPEDIA' | 'X-TWITTER' | 'ARCHIVE' | 'NEWS' | 'DOCUMENT' | 'GAMESTOP' | 'OTHER';

export interface TimelineItemURL{
    url: string;
    type: urlType;
    label: string;
    archiveLink: string;
}
