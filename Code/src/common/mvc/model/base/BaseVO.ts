export default class BaseVO {
    protected _data:any;

    constructor() {

    }

    public initialize(data:any):void {
        this._data = data;
    }

    public reset():void {
        this._data = null;
    }
}