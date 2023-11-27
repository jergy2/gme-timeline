export interface ChapterInterface{
    title: string;
    dateStartYYYYMMDD: string;
    dateEndYYYYMMDD: string;
    yearGroup: string;
    description: string[];
    subtitle: string;
    subchapters: ChapterInterface[];
}
export class Chapter{

    private _title: string;
    private _dateStartYYYYMMDD: string;
    private _dateEndYYYYMMDD: string;
    private _description: string[];
    private _subtitle: string
    private _subchapters: Chapter[] = [];
    private _yearGroup: string;

    public get title(): string { return this._title; }
    public get dateStartYYYYMMDD(): string { return this._dateStartYYYYMMDD; }
    public get dateEndYYYYMMDD(): string { return this._dateEndYYYYMMDD; }
    public get description(): string[] { return this._description; }
    public get subtitle(): string { return this._subtitle; };
    public get yearGroup(): string { return this._yearGroup; }
    constructor(value: ChapterInterface){
        this._title = value.title;
        this._dateStartYYYYMMDD = value.dateStartYYYYMMDD;
        this._dateEndYYYYMMDD = value.dateEndYYYYMMDD;
        this._description = value.description;
        this._subtitle = value.subtitle;
        this._subchapters = value.subchapters.map(subchapter => new Chapter(subchapter));
        this._yearGroup = value.yearGroup;
    }

    
}