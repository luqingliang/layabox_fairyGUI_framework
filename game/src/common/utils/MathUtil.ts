export default class MathUtil {

    /**
     * 获取制定范围内的随机数, 返回最大值到最小值闭区间中的随机值
     * @param min 
     * @param max 
     * @returns >= min && <= max
     */
    public static getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    }


    /**
     * 小数点后保留x位数字，没有数字用0替代
     * @param num 
     * @param decimalLeng 
     * @returns 
     */
    public static toDecimal(num: number, decimalLeng: number): string {
        return num.toFixed(decimalLeng);
    }

    /**
     * 求两点之间距离
     * @param x1 
     * @param y1 
     * @param x2 
     * @param y2 
     * @returns 
     */
    public static getDistance(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    /**
    * 求两点之间距离
    * @param point1
    * @param point2
    * @returns 
    */
    public static getPToPDistance(point1: Laya.Point, point2: Laya.Point): number {
        return point1.distance(point2.x, point2.y);
    }

    /**
     * 求两个线段的交点
     * @param a 
     * @param b 
     * @param c 
     * @param d 
     * @returns 不相交返回{0，0}
     */
    public static getIntersection(a: Laya.Point, b: Laya.Point, c: Laya.Point, d: Laya.Point): Laya.Point | null {
        let res: Laya.Point = new Laya.Point();

        // 三角形abc 面积的2倍  
        var area_abc = (a.x - c.x) * (b.y - c.y) - (a.y - c.y) * (b.x - c.x);

        // 三角形abd 面积的2倍  
        var area_abd = (a.x - d.x) * (b.y - d.y) - (a.y - d.y) * (b.x - d.x);

        // 面积符号相同则两点在线段同侧,不相交 (对点在线段上的情况,本例当作不相交处理);  
        if (area_abc * area_abd >= 0) {
            return null;
        }

        // 三角形cda 面积的2倍  
        var area_cda = (c.x - a.x) * (d.y - a.y) - (c.y - a.y) * (d.x - a.x);
        // 三角形cdb 面积的2倍  
        // 注意: 这里有一个小优化.不需要再用公式计算面积,而是通过已知的三个面积加减得出.  
        var area_cdb = area_cda + area_abc - area_abd;
        if (area_cda * area_cdb >= 0) {
            return null;
        }

        //计算交点坐标  
        var t = area_cda / (area_abd - area_abc);
        var dx = t * (b.x - a.x),
            dy = t * (b.y - a.y);
        res.x = a.x + dx;
        res.y = a.y + dy;
        return res;

    }

    /**
     * 权重随机数
     * @param pList  权重 对象 {1:20,2:30,3:70}
     * @returns 
     */
    public static percent(pList): any {
        let total = 0
        for (var k in pList) {
            total = total + pList[k];
        }

        let rand = Math.ceil(Math.random() * total);
        let pit = 0
        for (var k in pList) {
            pit = pit + pList[k]
            if (rand <= pit) {
                return k
            }
        }
        return 0
    }

    /**
     * 获取某个点绕圆心旋转一定角度后的点
     * @param p 要旋转的点
     * @param center 圆心
     * @param angle 旋转的角度
     * @returns 
     */
    public static getRotationPoint(p: Laya.Point, center: Laya.Point, angle: number): Laya.Point {
        let newPoint: Laya.Point = new Laya.Point(p.x - center.x, center.y - p.y);
        // 弧度值 
        const l: number = (-angle * Math.PI) / 180;

        // 正弦和余弦值
        const cosv: number = Math.cos(l);
        const sinv: number = Math.sin(l);

        // 算出新点
        let newX: number = ((newPoint.x - 0) * cosv - (newPoint.y - 0) * sinv + 0);
        let newY: number = ((newPoint.x - 0) * sinv + (newPoint.y - 0) * cosv + 0);
        newPoint.setTo(center.x + newX, center.y + (-newY));
        return newPoint;

    }

    /**
     * 已知直角三角形三个顶点,求锐角
     * @param A 
     * @param B 
     * @param C 直角点
     * @returns 返回A点的锐角值
     */
    public static getRightTriangleAngle(A: Laya.Point, B: Laya.Point, C: Laya.Point): number {
        let AC: number = this.getPToPDistance(A, C);
        let BC: number = this.getPToPDistance(B, C);
        let tanA: number = BC / AC;
        let ang: number = Math.atan(tanA);
        return ang * 180 / Math.PI;
    }

    /**
     * 获取两点对于X轴的夹角
     */
    public static getAngleHorizontal(x1: number, y1: number, x2: number, y2: number): number {
        let res = Math.atan((y2 - y1) / (x2 - x1)) * 180 / Math.PI;
        if (x1 >= x2 && y1 >= y2) { // 向右下移动
            res = Math.abs(res);
        } else if (x1 < x2 && y1 < y2) { // 向左上移动
            res = Math.abs(res) - 180;
        } else if (x1 > x2 && y1 < y2) { // 向右上移动
            res = res;
        } else if (x1 < x2 && y1 >= y2) { // 向坐下移动
            res = res - 180;
        } else if (x1 == x2 && y1 < y2) { // 垂直向上
            res = -Math.abs(res);
        }
        return res;
    }

    /**
     * 获取A、B两点确定的直线上的任意点(两点确定的直线方程AX+BY+C=0,A=Y1-Y2,B=X2-X1,C=X1(Y2-Y1)-Y1(X2-X1))
     * @param A 
     * @param B 
     * @param C (任意点)
     * @param X (任意点X坐标)
     * @returns 返回直线上C点
     */ public static getLinePointByX(pA: Laya.Point, pB: Laya.Point, pC: Laya.Point): Laya.Point {
        var A = pA.y - pB.y;
        var B = pB.x - pA.x;
        var C = pA.x * (pB.y - pA.y) - pA.y * (pB.x - pA.x);
        pC.y = (A * pC.x + C) / (-B);
        return pC;
    }

    /**
        * 获取A、B两点确定的直线上的任意点(两点确定的直线方程AX+BY+C=0,A=Y1-Y2,B=X2-X1,C=X1(Y2-Y1)-Y1(X2-X1))
        * @param A 
        * @param B 
        * @param C (任意点)
        * @param Y(任意点Y坐标)
        * @returns 返回直线上C点
        */
    public static getLinePointByY(pA: Laya.Point, pB: Laya.Point, pC: Laya.Point): Laya.Point {
        var A = pA.y - pB.y;
        var B = pB.x - pA.x;
        var C = pA.x * (pB.y - pA.y) - pA.y * (pB.x - pA.x);
        pC.x = (B * pC.y + C) / (-A);
        return pC;
    }
}