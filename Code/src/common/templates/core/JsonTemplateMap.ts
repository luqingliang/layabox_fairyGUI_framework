import TestTemplate from "../TestTemplate";

export default class JsonTemplateMap {
    public static readonly TEST_JSON:string = "test.json";
    private static _templates:Map<string, any> = new Map();
    public static initialize():void {
        this._templates.set(this.TEST_JSON, TestTemplate);
    }
    public static getTemplateClass(name:string):any {
		return this._templates.get(name);
    }
    
    /**
     * 获取所有配置资源加载数据
     */
    public static getJsonResArr():Array<any> {
        let res:Array<any> = [];
        let keys:Array<string> = [...this._templates.keys()];
        for(let i:number = 0; i < keys.length; i ++) {
            res.push({url: "res/config/" + keys[i], type: Laya.Loader.JSON, jsonFileName: keys[i]});
        }
        return res;
    }
}