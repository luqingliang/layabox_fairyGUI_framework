import JsonTemplateMap from "./JsonTemplateMap";

export default class JsonTemplate {
    private static _instance:JsonTemplate;
    public static get instance():JsonTemplate {
        if(!this._instance) {
            this._instance = new JsonTemplate();
        }
        return this._instance;
    }

    private _templates:Map<string, Array<any>>;

    public initialize():void {
        this._templates = new Map();
        JsonTemplateMap.initialize();
        let arr:Array<any> = JsonTemplateMap.getJsonResArr();
        Laya.loader.load(arr, Laya.Handler.create(this, (data) => {
            for(let i:number = 0; i < arr.length; i ++) {
                let json:any = Laya.loader.getRes(arr[i].url);
                if(json) {
                    this.decodeJson(arr[i].jsonFileName, json, JsonTemplateMap.getTemplateClass(arr[i].jsonFileName));
                }
            }
        }));
    }

    private decodeJson(name:string, json:any, template:any):void {
        let arr:Array<any> = [];
        for(let key in json) {
            let obj:any = new template();
            obj.decode(json[key]);
            arr.push(obj);
        }
        this._templates.set(name, arr);
        console.log(this.getTemplate(JsonTemplateMap.TEST_JSON, "id", 1003));
    }

    /**
     * 获取某个配置文件的所有配置信息
     * @param name 
     */
    public getTemplates(name:string):Array<any> {
        return this._templates.get(name);
    }

    /**
     * 获取某配置中某一属性为某值的某一配置信息（如果有重复只会返回第一个）
     * @param name 
     * @param property 
     * @param value 
     */
    public getTemplate(name:string, property:string, value:any):any {
        let arr:Array<any> = this._templates.get(name);
        for(let i:number = 0; i < arr.length; i ++) {
            if(arr[i][property] && arr[i][property] == value) {
                return arr[i];
            }
        }
        return null;
    }

    /**
     * 获取某配置中某一属性为某值的所有配置信息
     * @param name 
     * @param property 
     * @param value 
     */
    public getTemplateList(name:string, property:string, value:any):Array<any> {
        let list:Array<any> = [];
        let arr:Array<any> = this._templates.get(name);
        for(let i:number = 0; i < arr.length; i ++) {
            if(arr[i][property] && arr[i][property] == value) {
                list.push(arr[i]);
            }
        }
        return list;
    }
}