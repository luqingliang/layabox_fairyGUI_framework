export class BezierUtil {
    public static CreateBezierPoints(anchorpoints, pointsAmount): Array<any> {
        var points = [];
        for (var i = 0; i < pointsAmount; i++) {
            var point = this.MultiPointBezier(anchorpoints, i / pointsAmount);
            points.push(point);
        }
        return points;
    }

    private static MultiPointBezier(points, t): any {
        let len: number = points.length;
        let x: number = 0, y: number = 0;
        for (let i: number = 0; i < len; i++) {
            let point: any = points[i];
            x += point.x * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (this.erxiangshi(len - 1, i));
            y += point.y * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (this.erxiangshi(len - 1, i));
        }
        return { x: x, y: y };
    }

    private static erxiangshi(start: number, end: number): number {
        let cs: number = 1, bcs: number = 1;
        while (end > 0) {
            cs *= start;
            bcs *= end;
            start--;
            end--;
        }
        return (cs / bcs);
    }
    //获取贝塞尔曲线运动轨迹

    public static getBezierPathPointArr(pointArr: number[][], getPointNum: number): Laya.Point[] {
        let points = [];
        var pointNum = pointArr.length - 1;
        for (var i = 0; i <= pointNum; i++) {
            let point = new Laya.Point(pointArr[i][0], pointArr[i][1]);
            points.push(point);
        }
        let pointArray = this.CreateBezierPoints(points, getPointNum);
        var posObj = { x: pointArr[pointNum][0], y: pointArr[pointNum][1] };
        pointArray.push(posObj);
        return pointArray;
    }
}