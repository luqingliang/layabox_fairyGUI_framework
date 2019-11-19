import ITemplate from "./core/ITemplate";

export default class TestTemplate implements ITemplate {
    private _id:number;
    private _name:string;
    private _hp:number;

    public get id():number {
        return this._id;
    }

    public get name():string {
        return this._name;
    }

    public get hp():number {
        return this._hp;
    }

    public decode(data:any):void {
        this._id = data.id;
        this._name = data.name;
        this._hp = data.hp;
    }
}