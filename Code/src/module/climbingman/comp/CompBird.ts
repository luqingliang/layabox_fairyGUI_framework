import UI_CompBird from "../../../ui/fgui/climbingman/UI_CompBird";

export default class CompBird extends UI_CompBird {
    protected onConstruct(): void {
        super.onConstruct();
    }

    public playAni(): void {
        Laya.Tween.to(this.ani0, { x: -1000, y: -1000 }, 3000, null);
        Laya.Tween.to(this.ani1, { x: 1000, y: -1200 }, 3000, null);
        Laya.Tween.to(this.ani2, { x: 1000, y: -800 }, 3000, null);
    }
}