/**
 * 用来计数，或者存储游戏中用户的其他状态数据
 * @author luqingliang1996[at]foxmail.com
 */
export class UserStateMgr {

    private static _instance:UserStateMgr;
    public static get instance():UserStateMgr {
        if(!this._instance)
            this._instance = new UserStateMgr();
        return this._instance;
    }

    /**存储状态与数据 */
    private _statesMap:Map<string, {[key: string]: any}>;
    
    constructor() {
        this._statesMap = new Map();
    }

    /**
     * 获取某个状态的值
     * @param name 
     */
    public get(name:any):any {
        return this.states[name] ? this.states[name] : '';
    }

    /**
     * 存储或更新状态
     * @param options {object} 键值对
     * @param target {object} 属性值为对象的属性，只在函数实现时递归中传入
     */
    public set(options:{[key: string]: any}, target?:any):void {
        let keys:Array<string> = Object.keys(options);
        let obj:any = target ? target : this.states;

        keys.map((item) => {
            if(typeof obj[item] == 'undefined') {
                obj[item] = options[item];
            }
            else {
                this.typeTest(obj[item]) == 'object' ? this.set(options[item], obj[item]) : obj[item] = options[item];
            }
            return item;
        });
    }

    /**
     * 设置单个状态，方便调用
     * @param key 
     * @param value 
     */
    public setSingle(key:any, value:any):void {
        let data:any = {};
        data[key] = value;
        this.set(data);
    }

    /**
     * 判断数据类型
     * @param elem 
     */
    private typeTest(elem:any):string {
        if(elem == null) {
            return elem + '';
        }
        return toString.call(elem).replace(/[\[\]]/g, '').split(' ')[1].toLowerCase();
    }

    /**
     * 当前角色的状态数据
     */
    private get states():{[key: string]: any} {
        // let roleIdNow:string = gd.login.roleLoginInfo.roleInfo.id;
        let roleIdNow = "test";
        if(!this._statesMap.get(roleIdNow)) {
            this._statesMap.set(roleIdNow, {});
        }
        return this._statesMap.get(roleIdNow);
    }
}