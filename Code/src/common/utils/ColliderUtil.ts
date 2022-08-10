import MathUtil from "./MathUtil";

export default class ColliderUtil {

    /**
     * 点和圆碰撞
     * @param center 圆心
     * @param r 半径
     * @param target 碰撞点
     * @returns 
     */
    public static pointHitCircle(center: Laya.Point, r: number, target: Laya.Point): boolean {
        let len: number = Math.sqrt(Math.pow(center.x - target.x, 2) + Math.pow(center.y - target.y, 2));
        if (len < r) {
            return true;
        }
        return false;
    }

    /**
     * 圆和圆碰撞
     * @param center1 
     * @param r1 
     * @param center2 
     * @param r2 
     * @returns 
     */
    public static circleHitCircle(center1: Laya.Point, r1: number, center2: Laya.Point, r2: number): boolean {
        let len: number = Math.sqrt(Math.pow(center1.x - center2.x, 2) + Math.pow(center1.y - center2.y, 2));
        if (len < r1 + r2) {
            return true;
        }
        return false;
    }

    /**
     * 点和矩形碰撞
     * @param center1 
     * @param r1 
     * @param center2 
     * @param r2 
     * @returns 
      */
    public static pointHitRect(point: Laya.Point, rect: RectInfo): boolean {
        if (point.x >= rect.x && point.x <= rect.x + rect.width && point.y >= rect.y && point.y < rect.y + rect.height) {
            return true
        }
        return false;
    }

    /**
     * 圆和矩形碰撞
     * @param center 
     * @param r 
     * @param rect 
     * @returns 
     */
    public static circleHitRect(center: Laya.Point, r: number, rect: Laya.Rectangle): boolean {
        let newRect: Laya.Rectangle = new Laya.Rectangle(rect.x - r, rect.y, rect.width + 2 * r, rect.height);
        if (this.pointHitRect(center, { x: newRect.x, y: newRect.y, width: newRect.width, height: newRect.height })) {
            return true;
        }
        newRect.x = rect.x;
        newRect.y = rect.y - r;
        newRect.width = rect.width;
        newRect.height = rect.height + r * 2;
        if (this.pointHitRect(center, { x: newRect.x, y: newRect.y, width: newRect.width, height: newRect.height })) {
            return true;
        }
        let vertex: Laya.Point = new Laya.Point(rect.x, rect.y);
        if (this.pointHitCircle(center, r, vertex)) {
            return true;
        }
        vertex.setTo(rect.x + rect.width, rect.y);
        if (this.pointHitCircle(center, r, vertex)) {
            return true;
        }
        vertex.setTo(rect.x, rect.y + rect.height);
        if (this.pointHitCircle(center, r, vertex)) {
            return true;
        }
        vertex.setTo(rect.x + rect.width, rect.y + rect.height);
        if (this.pointHitCircle(center, r, vertex)) {
            return true;
        }
        return false;
    }

    /**
    * 判断线段和线段是否相交
    * @param center1 
    * @param r1 
    * @param center2 
    * @param r2 
    * @returns 
     */a
    public static LineHitLine(lineAp1: Laya.Point, lineAp2: Laya.Point, lineBp1: Laya.Point, lineBp2: Laya.Point): boolean {
        let num1 = (lineAp2.x - lineAp1.x) * (lineBp1.x - lineAp1.x) - (lineAp2.y - lineAp1.y) * (lineBp1.y - lineAp1.y);
        let num2 = (lineAp2.x - lineAp1.x) * (lineBp2.x - lineAp1.x) - (lineAp2.y - lineAp1.y) * (lineBp2.y - lineAp1.y);
        if (num1 > 0 && num2 < 0) {
            return true
        }
        if (num2 > 0 && num1 < 0) {
            return true;
        }
        return false
    }

    /**
 * 判断线段和矩形是否相交
 * @param center1 
 * @param r1 
 * @param center2 
 * @param r2 
 * @returns 
  */
    public static lineHitRect(point1: Laya.Point, point2: Laya.Point, rect: RectInfo): boolean {
        let LineBP1 = { x: rect.x, y: rect.y };
        let LineBP2 = { x: rect.x + rect.width, y: rect.y + rect.height };

        let LineCP1 = { x: rect.x, y: rect.y + rect.height };
        let LineCP2 = { x: rect.x + rect.width, y: rect.y };

        if (MathUtil.getIntersection(point1, point2, LineBP1 as Laya.Point, LineBP2 as Laya.Point) || MathUtil.getIntersection(point1, point2, LineCP1 as Laya.Point, LineCP2 as Laya.Point)) {
            return true
        }
        return false;

    }
}


export class RectInfo {
    width: number;
    height: number;
    x?: number;
    y?: number;
    offsetX?: number;
    scale?: number;
}