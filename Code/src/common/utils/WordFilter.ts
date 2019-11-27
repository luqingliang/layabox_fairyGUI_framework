
/**
 * 敏感词过滤
 */
export default class WordFilter {
    private static _wordsMap:Map<string, any>;
    private static _wordsList:Array<string>;

    public static initlize(complete:Laya.Handler = null):void {
        // let textWords:Array<string> = ["日本鬼子", "日本人", "日本男人", "狗", "狗比"];
        // this._wordsMap = this.makeMap(textWords);
        this._wordsList = [];
        let url:string = "res/config/filterWords.json";
        Laya.loader.load(url, Laya.Handler.create(this, () => {
            let arr:Array<any> = Laya.loader.getRes(url);
            for(let i:number = 0; i < arr.length; i ++) {
                this._wordsList.push(arr[i].word);
            }
            Laya.loader.clearRes(url);
            if(complete) {
                complete.run();
            }
        }));
    }


    /**
     * 过滤字符串，返回*替换后的字符串，没有问题原样返回
     * @param str
     **/
    public static filter(str:string):string {
        for(let i:number = 0; i < this._wordsList.length; i ++) {
            //全局替换
            let reg:RegExp = new RegExp(this._wordsList[i], "g");
            if(str.indexOf(this._wordsList[i]) != -1) {
                str = str.replace(reg,"*");
            }
        }
        return str;
    }

    /**
     * 构造数据
     * @param arr 
     */
    private static makeMap(arr:Array<string>):Map<string, any> {
        let result:Map<string, any> = new Map();

        for(let i:number = 0; i < arr.length; i ++) {
            let str:string = arr[i];
            let map:Map<string, any> = result; //当前的节点
            for(let j:number = 0; j < str.length; j ++) {
                let char:string = str.charAt(j);
                if(map.get(char)) { //存在该节点
                    map = map.get(char);
                } else { //节点不存在
                    if(map.get("isEnd") == true) {
                        map.set("isEnd", (j == str.length - 1) ? true : false);
                    }
                    let node:Map<string, any> = new Map(); //新建节点
                    node.set("isEnd", true); //默认先设为结束节点
                    map.set(char, node);
                    map = node; //更新外层循环节点
                }
            }
        }

        return result;
    }

    private static check(str:string):boolean {
        let result:boolean = false;
        let map:Map<string, any> = this._wordsMap;
        for(let i:number = 0; i < str.length; i ++) {
            let char:string = str.charAt(i);
            map = map.get(char);
            if(map) {
                if(map.get("isEnd") == true) { //结尾了
                    result = true;
                    break;
                }
            } else {
                break;
            }
        }
        return result;
    }
}