export default class ItemTemplate {
    private _id:number;
    private _itemName:string;
    private _itemType:number;
    private _itemQuality:number;
    private _stackingCount:number;
    private _canSell:number;
    private _canUse:number;
    private _part1:number;
    private _part2:string;
    private _icon:string;
    private _specialEffects:string;
    private _getWay:number;
    private _itemDec:string;

    public get id():number {
        return this._id;
    }
    public get itemName():string {
        return this._itemName;
    }
    public get icon():string {
        return this._icon;
    }
    /**叠加上限 */
    public get stackingCount():number {
        return this._stackingCount;
    }

    public decode(data:any):void {
        this._id = data.id;
        this._itemName = data.itemName;
        this._itemType = data.itemType;
        this._itemQuality = data.itemQuality;
        this._stackingCount = data.stackingCount;
        this._canSell = data.canSell;
        this._canUse = data.canUse;
        this._part1 = data.part1;
        this._part2 = data.part2;
        this._icon = data.icon;
        this._specialEffects = data.specialEffects;
        this._getWay = data.getWay;
        this._itemDec = data.itemDec;
    }
}