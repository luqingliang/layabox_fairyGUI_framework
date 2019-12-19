import ViewManager from "./ViewManager";
import IView from "../interface/IView";
import IMediator from "../interface/IMediator";

/**
 * 界面基类
 * @author luqingliang1996[at]foxmail.com
 */
export default class BaseView implements IView {
    public view:fgui.GComponent;

    private _modalLayer:fgui.GGraph;

    /**中介者 */
    protected _mediator:IMediator;
    /**包名 */
    protected _packageName:string;
    /**组件名 */
    protected _compName:string;
    /**是否关闭后释放资源 */
    protected _closeClearRes:boolean;
    /**是否显示模态 */
    protected _isModal:boolean = false;

    /**
     * 打开界面时传过来的参数
     */
    public data:any = null;

    public onUILoaded():void {
        this.createUI();
    }

    private createUI():void {
        this.view = fgui.UIPackage.createObject(this._packageName, this._compName).asCom;

        if(this._isModal) {
            this._modalLayer = new fgui.GGraph();
            this._modalLayer.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
            this._modalLayer.drawRect(0, null, fgui.UIConfig.modalLayerColor);
            this.view.addChildAt(this._modalLayer, 0);
            this._modalLayer.center();
            this._modalLayer.onClick(this, () => {
                this.close();
            });
        }

        this.onUICreated();
        this.addToParent();
    }
    
    protected onUICreated():void {

    }

    /**
     * 每次页面打开调用，可能会重复调用
     */
    public opening():void {

    }

    private addToParent():void {
        fgui.GRoot.inst.addChild(this.view);
        this.setSize();
        Laya.stage.on(Laya.Event.RESIZE, this, this.setSize);
        this.opening();
    }

    private setSize():void {
        if(this.view) {
            this.view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height, false);
            this.view.center();
        }
    }

    public removeFromParent():void {
        this.view.removeFromParent();
        this.dispose();
    }

    public getChild(name:string):fgui.GObject {
        return this.view.getChild(name);
    }
    public getButton(name:string):fgui.GButton {
        return this.view.getChild(name).asButton;
    }
    public getText(name:string):fgui.GTextField {
        return this.view.getChild(name).asTextField;
    }
    public getInput(name:string):fgui.GTextInput {
        return this.view.getChild(name).asTextInput;
    }
    public getLabel(name:string):fgui.GLabel {
        return this.view.getChild(name).asLabel;
    }
    public getList(name:string):fgui.GList {
        return this.view.getChild(name).asList;
    }
    public getController(name:string):fgui.Controller {
        return this.view.getController(name);
    }

    public get mediator():IMediator {
        return this._mediator;
    }

    /**
     * 获取包资源路径
     * @param baseUrl 
     */
    public packageURL(baseUrl:string = "res/fgui/"):string {
        return baseUrl + this._packageName;
    }

    /**
     * 其他要加载的资源
     */
    public get otherRes():Array<any> {
        return [];
    }

    public close():void {
        ViewManager.instance.close(this);
    }

    protected dispose():void {
        Laya.stage.off(Laya.Event.RESIZE, this, this.setSize);
        if(this._closeClearRes) {
            let resArr:Array<any> = this.otherRes;
            for(let i:number = 0; i < resArr.length; i ++) {
                if(Object.prototype.toString.call(resArr[i]) === "[object String]") {
                    Laya.loader.clearRes(resArr[i]);
                } else {
                    Laya.loader.clearRes(resArr[i].url);
                }
            }
        }

        let uiPackage:fgui.UIPackage = fgui.UIPackage.getByName(this._packageName);
        if(uiPackage) {
            if(this._closeClearRes) {
                uiPackage.unloadAssets();
                fgui.UIPackage.removePackage(this._packageName);
            }
        }
        if(this._mediator) {
            ViewManager.removeMediator(this._mediator.getMediatorName());
            this._mediator = null;
        }
        if(this._modalLayer) {
            this._modalLayer.removeFromParent();
            this._modalLayer.dispose();
            this._modalLayer = null;
        }
        this.view.dispose();
        this.view = null;
        this.data = null;
    }
}