import { TimelineItemConfig } from "./timeline-item-config.interface";
import { TimelineItemType } from "./timeline-item-type.enum";
import { TimelineItemURL } from "./timeline-item-url.interface";

export class TimelineItem{

    private _title: string;
    private _dateYYYYMMDD: string;
    private _urls: TimelineItemURL[];
    private _description: string;
    private _type: TimelineItemType;
    private _significance: number;

    private _isSelected: boolean = false;

    public get title(): string { return this._title; }
    public get dateYYYYMMDD(): string { return this._dateYYYYMMDD; }
    public get urls(): TimelineItemURL[] { return this._urls; }
    // public get redditLinks(): string[] { return this._urlConfig.redditLinks; }
    // public get archiveLinks(): string[] { return this._urlConfig.archiveLinks; }
    // public get lemmyLinks(): string[] { return this._urlConfig.lemmyLinks; }
    // public get youtubeUrl(): string { return this._urlConfig.youtubeUrl; }
    public get description(): string { return this._description; }
    public get type(): TimelineItemType { return this._type; }
    public get significance(): number { return this._significance; }

    public get isSelected(): boolean { return this._isSelected; }

    constructor(config: TimelineItemConfig){
        this._title = config.title;
        this._dateYYYYMMDD = config.dateYYYYMMDD;
        this._urls = config.urls;
        this._type = config.type;
        this._significance = config.significance
        this._description = config.description;
    }

    public select(){ this._isSelected = true; }
    public unselect() { this._isSelected = false;}

}