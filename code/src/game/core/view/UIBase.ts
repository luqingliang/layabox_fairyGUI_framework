import { DataUpdateType, GameEventType } from "../CustomConsts";
import { LayerType } from "./UIRegister";
import EventCenter from "../../../common/event/EventCenter";
import IEventHandler from "../../../common/interface/IEventHandler";
import { IObserver } from "../../../common/interface/IObserver";
import { ISubject } from "../../../common/interface/ISubject";
import { IUIComponent } from "../../../common/interface/IUIComponent";
import UIManager from "./UIManager";

/**
 * UI基类
 * @author luqingliang
 */
export default class UIBase extends fgui.Window implements IUIComponent, IObserver, IEventHandler {
    public uiType: number;

    /**打开界面携带过来的参数 */
    private _openData: any = null;
    /**界面打开的回调 */
    private _openCallback: Laya.Handler = null;
    /**页面名称 */
    private _pageName: string;
    /**包名称 */
    private _packageName: string;
    /**层级类型 */
    private _layerType: LayerType;
    /**界面是否初始化完成 */
    private _initialized: boolean = false;
    /**界面是否是打开状态 */
    private _opened: boolean = false;
    /**是否是竖屏模式 */
    private _isVertical: boolean = false;
    /**弹窗模式背景色 */
    private _modalLayerColor: string = null;
    /**自定义组件扩展关系 */
    private _extensions: Map<string, new () => fgui.GComponent> = new Map();
    /**感兴趣的数据源 */
    protected _datas: ISubject[] = [];
    /**当前监听的全局事件 */
    protected _eventTypes: Set<GameEventType> = new Set();
    /**是否强制全屏 */
    private _forceFullScreen: boolean = false;

    /**
     * @param packageName fgui包名
     * @param pageName fgui页面名
     * @param layerType 层级类型
     * @param modal 是否开启modal（半透明背景）
     * @param isVertical 是否是竖屏模式
     */
    constructor(packageName: string, pageName: string, layerType: LayerType, modal: boolean = false, isVertical: boolean = false) {
        super();
        this.name = pageName;
        this._pageName = pageName;
        this._packageName = packageName;
        this._layerType = layerType;
        this.modal = modal;
        this._isVertical = isVertical;
    }

    /**
     * 初始化
     * @returns 
     */
    protected onInit(): void {
        for (let [key, value] of this._extensions) {
            fgui.UIObjectFactory.setExtension(key, value);
        }
        const UIobj = fgui.UIPackage.createObject(this._packageName, this._pageName);
        this.contentPane = !UIobj ? null : UIobj.asCom;
        if (!this.contentPane) {
            this.close();
            return;
        }

        this.sortingOrder = this._layerType;
        this._initialized = true;
        this.Start()
    }

    /**
     * 页面创建成功后执行一次（还没显示出来）
     */
    protected Start() { }

    /**
     * 页面每次打开后最先执行
     * @returns 
     */
    protected onShown(): void {
        this._opened = true;
        if (this.isDisposed || !this._initialized) {
            return;
        }

        // 处理横竖屏
        if (this._isVertical) {
            this.setVertical();
        } else {
            this.setHorizontal();
        }

        // 处理屏幕适配
        this.onResize();
        Laya.stage.on(Laya.Event.RESIZE, this, this.onResize);

        // 弹窗和提示框支持点击空白关闭
        if (this._layerType === LayerType.PopWindow || this._layerType === LayerType.Tips) {
            fgui.GRoot.inst.modalLayer.onClick(this, this.onClickModalLayer);
        }
        if (this.modal) {
            if (this._modalLayerColor) {
                fgui.GRoot.inst.modalLayer.displayObject.graphics.clear();
                fgui.GRoot.inst.modalLayer.drawRect(0, null, this._modalLayerColor);
            }
            fgui.GRoot.inst.modalLayer.sortingOrder = this.sortingOrder - 1;
        }

        this.updateUI(this._openData);

        if (this._openCallback) {
            Laya.timer.callLater(this, () => {
                this._openCallback.run();
                this._openCallback = null;
            });
        }
    }

    /**
     * 页面每次打开后执行（已经打开的界面重复打开会重复执行）
     * @param data
     */
    public updateUI(data?: any): void { }

    /**
     * 页面关闭时执行
     */
    protected onHide(): void {
        Laya.timer.clearAll(this);
        Laya.stage.off(Laya.Event.RESIZE, this, this.onResize);
        this._opened = false;
        this._openData = null;
        this.beforeClose();
        this.removeObs();
        this.removeEvents(...this._eventTypes.keys());

        if (this._layerType === LayerType.PopWindow || this._layerType === LayerType.Tips) {
            fgui.GRoot.inst.modalLayer.offClick(this, this.onClickModalLayer);
        }
        if (this.modal && this._modalLayerColor && this._modalLayerColor !== fgui.UIConfig.modalLayerColor) {
            fgui.GRoot.inst.modalLayer.displayObject.graphics.clear();
            fgui.GRoot.inst.modalLayer.drawRect(0, null, fgui.UIConfig.modalLayerColor);
        }
    }

    /**
     * 游戏主循环（首次调用在首次updateUI之后）
     * @param s 间隔，单位秒
     * @param ms 间隔，单位毫秒
     */
    public updateFrame(s: number, ms: number): void { }

    /**
     * 数据更新
     * @param cmd 消息类型
     * @param data 数据
     */
    public updateDB(cmd: DataUpdateType, data: any): void { }

    /**
     * 监听的事件的回调 
     * @param eventType 事件类型
     * @param data 数据
     */
    public eventHandler(eventType: GameEventType, data: any): void { }

    /**
     * 注册要监听的事件
     * @param eventTypes 
     */
    protected addEvents(...eventTypes: GameEventType[]): void {
        for (let type of eventTypes) {
            EventCenter.inst.addListener(type, this);
            if (!this._eventTypes.has(type)) {
                this._eventTypes.add(type);
            }
        }
    }

    /**
     * 移除事件监听
     * @param eventTypes 
     */
    protected removeEvents(...eventTypes: GameEventType[]): void {
        for (let type of eventTypes) {
            EventCenter.inst.removeListener(type, this);
            if (this._eventTypes.has(type)) {
                this._eventTypes.delete(type);
            }
        }
    }

    /**
     * 添加感兴趣的数据源
     * @param datas 
     */
    protected addObs(...datas: ISubject[]): void {
        for (let obs of datas) {
            if (!this._datas.includes(obs)) {
                obs.addObserver(this);
                this._datas.push(obs);
            }
        }
    }

    /**
     * 删除感兴趣的数据源
     * @returns 
     */
    private removeObs(): void {
        for (let obs of this._datas) {
            obs.removeObserver(this);
        }
        this._datas.length = 0;
    }

    /**
     * 注册组件扩展类(必须在构造函数中调用才会生效)
     * @param url 
     * @param classs 
     */
    protected setExtension(url: string, classs: new () => fgui.GComponent): void {
        this._extensions.set(url, classs);
    }

    /**
     * 每次关闭之前执行
     */
    protected beforeClose(): void { }

    /**
     * 关闭自己
     * @param isDispos 
     */
    protected close(isDispos: boolean = true): void {
        UIManager.inst.closePage(this, isDispos);
    }

    /**
     * 处理返回操作 （默认除了游戏场景和飘字都会关闭，如需回退或其他特殊操作自行重写该方法）
     * @returns 当前界面关闭返回 true 否则返回false
     */
    public goBack(): boolean {
        if (this._layerType === LayerType.Scenes || this._layerType === LayerType.Float) { // 游戏场景的返回右原生控制
            return false;
        }
        this.close();
        return true;
    }

    /**
     * 屏幕尺寸发生变化
     */
    private onResize(): void {
        if (this._layerType <= LayerType.Interface || this._forceFullScreen) {
            this.makeFullScreen();
        } else {
            this.center();
        }
    }

    /**
     * 处理模态窗口点击背景关闭
     */
    private onClickModalLayer(): void {
        let firstWindow = UIManager.inst.getTopPopWindow();
        if (firstWindow == this) {
            this.close();
        }
    }

    /**
     * 层级类型
     */
    public get layerType(): LayerType {
        return this._layerType;
    }
    /**
     * 界面是否正在打开中
     */
    public get opened(): boolean {
        return this.isShowing && this._opened;
    }
    /**
     * 包名称
     */
    public get packageName(): string {
        return this._packageName;
    }
    /**
     * 页面名称
     */
    public get pageName(): string {
        return this._pageName;
    }
    /**
     * 打开界面携带的参数
     */
    public set openData(data: any) {
        this._openData = data;
    }
    /**
     * 打开界面携带的参数
     */
    public get openData(): any {
        return this._openData;
    }
    /**
     * 界面打开的回调
     */
    public set openCallback(callback: Laya.Handler) {
        this._openCallback = callback;
    }
    /**
     * 设置弹窗模式背景颜色
     */
    protected set modalLayerColor(color: string) {
        this._modalLayerColor = color;
    }

    /**
     * 是否强制全屏
     */
    protected set forceFullScreen(val: boolean) {
        this._forceFullScreen = val;
    }

    /**
     * 设置横屏
     * @returns 
     */
    private setHorizontal() {
        if (Laya.stage.screenMode == Laya.Stage.SCREEN_HORIZONTAL) {
            return;
        }
        const width: number = Laya.stage.width;
        const height: number = Laya.stage.height;
        Laya.stage.width = height;
        Laya.stage.height = width;
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
    }

    /**
     * 设置竖屏
     * @returns 
     */
    private setVertical() {
        if (Laya.stage.screenMode == Laya.Stage.SCREEN_VERTICAL) {
            return;
        }
        const width: number = Laya.stage.width;
        const height: number = Laya.stage.height;
        Laya.stage.width = height;
        Laya.stage.height = width;
        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
    }

    /**
     * 页面销毁前执行
     */
    protected onDisposed() { }

    /**
     * 销毁ui对象
     * @returns 
     */
    public dispose() {
        if (this.isDisposed) {
            return;
        }
        this.onDisposed();
        super.dispose();
    }
}