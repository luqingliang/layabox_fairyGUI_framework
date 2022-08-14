import MathUtil from "../../../../utils/MathUtil";
import UI_CompBigCrystal from "../../../../ui/fgui/climbingman/UI_CompBigCrystal";
import UI_CompBigStone from "../../../../ui/fgui/climbingman/UI_CompBigStone";
import UI_CompColumn from "../../../../ui/fgui/climbingman/UI_CompColumn";
import UI_CompEggs from "../../../../ui/fgui/climbingman/UI_CompEggs";
import UI_CompFire from "../../../../ui/fgui/climbingman/UI_CompFire";
import UI_CompFlowers from "../../../../ui/fgui/climbingman/UI_CompFlowers";
import UI_CompSmallCrystal from "../../../../ui/fgui/climbingman/UI_CompSmallCrystal";
import UI_CompSmallStone from "../../../../ui/fgui/climbingman/UI_CompSmallStone";
import UI_CompThorns from "../../../../ui/fgui/climbingman/UI_CompThorns";
import UI_CompTreasure from "../../../../ui/fgui/climbingman/UI_CompTreasure";
import UI_CompTree from "../../../../ui/fgui/climbingman/UI_CompTree";
import UI_CompTrees from "../../../../ui/fgui/climbingman/UI_CompTrees";
import CompBird from "./CompBird";

export default class StepDecorations {

    private static _instance: StepDecorations;
    public static get instance(): StepDecorations {
        if (!this._instance) {
            this._instance = new StepDecorations();
        }
        return this._instance;
    }

    private _decorations: Map<number, any> = new Map();

    constructor() {
        this._decorations.set(186, UI_CompBigCrystal);
        this._decorations.set(156, UI_CompBigStone);
        this._decorations.set(223, CompBird);
        this._decorations.set(101, UI_CompColumn);
        this._decorations.set(203, UI_CompEggs);
        this._decorations.set(90, UI_CompFire);
        this._decorations.set(138, UI_CompFlowers);
        this._decorations.set(86, UI_CompSmallCrystal);
        this._decorations.set(53, UI_CompSmallStone);
        this._decorations.set(286, UI_CompThorns);
        this._decorations.set(178, UI_CompTreasure);
        this._decorations.set(68, UI_CompTree);
        this._decorations.set(151, UI_CompTrees);
    }

    public addDecorations(step: fgui.GComponent): fgui.GComponent[] {
        let res: fgui.GComponent[] = [];
        let width: number = step.width;
        let obj: fgui.GComponent = this.createDecorations(width);
        let x: number = MathUtil.getRandom(0, width - obj.width);
        obj.x = x;
        obj.y = 0 - obj.height;
        step.addChild(obj);
        let left: number = x;
        let right: number = step.width - x - obj.width;
        if (left > right) {
            width = x;
        } else {
            width = width - x - obj.width;
        }
        res.push(obj);
        if (MathUtil.getRandom(1, 99) > 49) {
            let obj1: fgui.GComponent = this.createDecorations(width);
            if (obj1) {
                if (left > right) {
                    x = MathUtil.getRandom(0, obj.x - obj1.width);
                } else {
                    x = MathUtil.getRandom(obj.x + obj.width, step.width - obj1.width);
                }
                obj1.x = x;
                obj1.y = 0 - obj1.height;
                step.addChild(obj1);
                res.push(obj1);
            }
        }
        return res;
    }

    private createDecorations(width: number): fgui.GComponent | null {
        const arr: any[] = [];
        for (let [key, value] of this._decorations) {
            if (key <= width) {
                arr.push(value);
            }
        }
        return arr.length < 1 ? null : arr[MathUtil.getRandom(0, arr.length - 1)].createInstance();
    }
}