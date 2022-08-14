export default class DateUtil {
  /**
     * 返回格式  00:00:00/00:00(时：分 : 秒/分 : 秒)
     * @static
     * @param {number} time 秒 
     * @returns {string}
     * @memberof DateUtil
     */
   public static getTimeStrSimple(time: number): string {
    let s1 = 0;
    let s2 = 0;
    let s3 = 0;

    s1 = Math.floor(time / 3600);
    s2 = Math.floor(time / 60);
    s2 >= 60 ? s2 = (s2 % 60) : s2 = s2;
    s3 = Math.floor(time % 60);
    if (s1 >=1) {
        return (s1 < 10 ? "0" + s1 : s1 + "") + ":" + (s2 < 10 ? "0" + s2 : s2 + "") + ":" + (s3 < 10 ? "0" + s3 : s3 + "");
    }
    else {
        return (s2 < 10 ? "0" + s2 : s2 + "") + ":" + (s3 < 10 ? "0" + s3 : s3 + "");
    }
}
}