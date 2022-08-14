import { LayerType } from "./UIRegister";
import UIBase from "./UIBase";

/**
 * 用户界面管理
 * @author luqingliang
 */
export default class UIManager {
    public constructor() { }

    private static _inst: UIManager;
    public static get inst(): UIManager {
        if (!this._inst) {
            this._inst = new UIManager();
        }
        return this._inst;
    }

    /**保存UI的构造字典 */
    private _uiClasss: Map<number, any> = new Map();
    /**实例化对象 */
    private _uiObjects: Map<number, UIBase> = new Map();

    /**
     * 初始化
     * @param uiClasss 注册的UI类
     */
    public init(uiClasss: Map<number, any>, cb: Laya.Handler): void {
        this._uiClasss = uiClasss;
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        Laya.timer.frameLoop(1, this, this.updateFrame);
        if (cb) {
            cb.run();
        }
    }

    /**
    * 调用当前打开界面的帧刷新函数
    */
    private updateFrame(): void {
        for (let [key, value] of this._uiObjects) {
            if (value.opened) {
                value.updateFrame(Laya.timer.delta / 1000, Laya.timer.delta);
            }
        }
    }

    /**
     * 查看某个界面是否正在显示
     * @param type 
     * @returns 
     */
    public isShowing(type: number): boolean {
        const uiObj: UIBase = this._uiObjects.get(type);
        return uiObj ? uiObj.opened : false;
    }

    /**
     * 打开ui 如果管理器里面没有就创建 有就隐藏变为显示
     * @param type
     * @param openData 打开面板参数
     * @param openCallback 界面打开回调
     */
    public openUI(type: number, openData: any = null, openCallback: Laya.Handler = null): UIBase {
        if (!this._uiClasss.has(type)) {
            console.error("没有录入UI type");
            return null;
        }

        let view: UIBase = null;
        if (this._uiObjects.has(type)) {
            view = this._uiObjects.get(type);
        } else {
            const classs = this._uiClasss.get(type);
            view = new classs();
            view.uiType = type;
            this._uiObjects.set(type, view);
        }

        view.openData = openData;
        view.openCallback = openCallback;

        if (view.opened) { // 打开已经显示的界面就更新数据
            view.updateUI(openData);
            return view;
        }

        fgui.UIPackage.loadPackage("res/fgui/" + view.packageName + "/" + view.packageName, Laya.Handler.create(this, () => {
            fgui.GRoot.inst.showWindow(view);
        }));

        return view;
    }

    /**
     * 关闭UI
     * @param type
     */
    public closeUI(type: number, isDispos: boolean = true): void {
        let page = this.getUI(type);
        if (page) {
            this.closePage(page, isDispos);
        }
    }
    /**
     * 关闭page 
     * @param page
     * @param isDispos 是否销毁
     */
    public closePage(page: UIBase, isDispos: boolean = true) {
        const type = page.uiType;
        const tview: any = this._uiObjects.get(type);

        if (tview) {
            fgui.GRoot.inst.hideWindow(tview);
            if (isDispos) {
                this.destroyPage(page);
            }
        } else {
            if (!page.isDisposed) {
                this.destroyPage(page);
            }
        }
    }

    /**
     * 从显示节点移除并销毁界面
     * @param page 
     */
    private destroyPage(page: UIBase) {
        if (this._uiObjects.has(page.uiType)) {
            this._uiObjects.delete(page.uiType);
        }
        page.dispose();
    }

    /**获取UI */
    public getUI(type: number): UIBase {
        let page: UIBase = this._uiObjects.get(type);
        if (page && page.opened) {
            return page;
        }
        return null;
    }

    /**
     * 获取当前最上层的pop弹窗
     */
    public getTopPopWindow() {
        const cnt = fgui.GRoot.inst.numChildren;
        for (let i = cnt - 1; i >= 0; i--) {
            let g = fgui.GRoot.inst.getChildAt(i);
            if (g instanceof UIBase && g.layerType === LayerType.PopWindow) {
                return g;
            }
        }
        return null;
    }

    /**
     * 游戏退出
     */
    public exitGame(): void {
        Laya.timer.clear(this, this.updateFrame);
    }
}