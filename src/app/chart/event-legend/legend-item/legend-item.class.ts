export class LegendItem{
    
    private _title: string;
    private _color: string;

    public get title(): string { return this._title; }
    public get color(): string { return this._color; }
    constructor(title: string, color: string){
        this._title = title;
        this._color = color;
    }
}