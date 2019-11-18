import BaseVO from "../base/BaseVO";

export default class UserVO extends BaseVO {
    constructor() {
        super();
    }

    public initialize(data:any):void {
        super.initialize(data);
    }

    public get uid():string {
        return this._data.uid;
    }
    public get username():string {
        return this._data.username;
    }
    public get lv():number {
        return this._data.lv;
    }
}