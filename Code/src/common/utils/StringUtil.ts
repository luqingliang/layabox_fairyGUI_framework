export default class StringUtil {
    /**
     * 获取URL中的参数
     * @param name 
     * @returns {string}
     */
    public static getQueryString(name: string): string {
        return Laya.Utils.getQueryString(name);
    }

    /**
     * 阿拉伯数字转中文大写
     * @param num 
     * @returns 
     */
    public static changeNumToChinese(num): string {
        if (!num || isNaN(num)) {
            return "零";
        }
        const arr1: string[] = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
        const arr2: string[] = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿'];
        let result: string = "";
        const english: string[] = num.toString().split("");
        const len: number = english.length;
        for (let i: number = 0; i < len; i++) {
            const des_i: number = english.length - 1 - i; // 倒序排列设值
            result = arr2[i] + result;
            const arr1_index: string = english[des_i];
            result = arr1[arr1_index] + result;
        }
        //将【零千、零百】换成【零】 【十零】换成【十】
        result = result.replace(/零(千|百|十)/g, '零').replace(/十零/g, '十');
        //合并中间多个零为一个零
        result = result.replace(/零+/g, '零');
        //将【零亿】换成【亿】【零万】换成【万】
        result = result.replace(/零亿/g, '亿').replace(/零万/g, '万');
        //将【亿万】换成【亿】
        result = result.replace(/亿万/g, '亿');
        //移除末尾的零
        result = result.replace(/零+$/, '');
        //将【零一十】换成【零十】
        //result = result.replace(/零一十/g, '零十');//貌似正规读法是零一十
        //将【一十】换成【十】
        result = result.replace(/^一十/g, '十');
        return result;
    }

}