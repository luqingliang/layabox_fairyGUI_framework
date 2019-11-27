export default class UrlUtils {
    /**
     * 获取浏览器参数
     * @param variable 
     */
    public static getQueryVariable(variable:string):string {
        let query:string = window.location.search.substring(1);
        let vars:Array<string> = query.split("&");
        for(let i:number = 0; i < vars.length; i ++) {
                let pair:Array<string> = vars[i].split("=");
                if(pair[0] == variable) {
                    return pair[1];
                }
        }
        return null;
    }
}