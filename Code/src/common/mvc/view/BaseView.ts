import ViewManager from "./ViewManager";
import IView from "../interface/IView";
import IMediator from "../interface/IMediator";

export default class BaseView implements IView {
    private _viewComponent:fgui.GComponent;
    protected _mediator:IMediator;
    protected _packageName:string;
    protected _compName:string;
    protected _closeClearRes:boolean;

    /**
     * 打开界面时传过来的参数
     */
    public data:any = null;

    public onUILoaded():void {
        this.createUI();
    }

    private createUI():void {
        this._viewComponent = fgui.UIPackage.createObject(this._packageName, this._compName).asCom;
        Laya.stage.on(Laya.Event.RESIZE, this, this.resized);

        this.resized();
        this.onUICreated();
        this.addToParent();
    }

    private resized():void {
        this._viewComponent.center();
    }
    
    protected onUICreated():void {

    }

    /**
     * 每次页面打开调用，可能会重复调用
     */
    public opening():void {

    }

    private addToParent():void {
        fgui.GRoot.inst.addChild(this._viewComponent);
        this.opening();
    }

    public removeFromParent():void {
        this._viewComponent.removeFromParent();
        this.dispose();
    }

    public getChild(name:string):fgui.GObject {
        return this._viewComponent.getChild(name);
    }
    public getButton(name:string):fgui.GButton {
        return this._viewComponent.getChild(name).asButton;
    }
    public getText(name:string):fgui.GTextField {
        return this._viewComponent.getChild(name).asTextField;
    }
    public getInput(name:string):fgui.GTextInput {
        return this._viewComponent.getChild(name).asTextInput;
    }
    public getLabel(name:string):fgui.GLabel {
        return this._viewComponent.getChild(name).asLabel;
    }
    public getList(name:string):fgui.GList {
        return this._viewComponent.getChild(name).asList;
    }
    public getController(name:string):fgui.Controller {
        return this._viewComponent.getController(name);
    }

    public get viewComponent():fgui.GComponent {
        return this._viewComponent;
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
        Laya.stage.off(Laya.Event.RESIZE, this, this.resized);
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
        this._viewComponent.dispose();
        this._viewComponent = null;
        this.data = null;
    }
}