import IView from "../interface/IView";
import IMediator from "../interface/IMediator";
import Observer from "../patterns/Observer";
import FLoadManager from "../../manager/FLoadManager";

export default class ViewManager {
    private static _instance:ViewManager;
    public static get instance():ViewManager {
        if(!this._instance) {
            this._instance = new ViewManager();
        }
        return this._instance;
    }

    private static mediatorMap:Map<string, IMediator> = new Map();
    public static registerMediator(mediator:IMediator):void {
        let name:string = mediator.getMediatorName();
        if(this.mediatorMap.get(name)) return;
        this.mediatorMap.set(name, mediator);
        let events:Array<string> = mediator.eventList();
        for(let i:number = 0; i < events.length; i ++) {
            Observer.instance.register(events[i], mediator, mediator.onEvent, [events[i]]);
        }
        mediator.onRegister();
    }
    public static removeMediator(mediatorName:string):IMediator {
        let mediator:IMediator = this.mediatorMap.get(mediatorName);
        if(!mediator) return null;
        let events:Array<string> = mediator.eventList();
        for(let i:number = 0; i < events.length; i ++) {
            Observer.instance.off(events[i], mediator, mediator.onEvent);
        }
        this.mediatorMap.delete(mediatorName);
        mediator.onRemove();
        return mediator;
    }

    private _openingList:Array<IView> = [];

    /**
     * 打开界面
     * @param viewConstructor 
     * @param data
     */
    public open(viewConstructor:any, data:any = null):IView {
        let view:IView;
        if(!this.getView(viewConstructor)) {
            view = new viewConstructor() as IView;
            view.data = data;
            FLoadManager.instance.load(view.packageURL(), view.otherRes, Laya.Handler.create(this, () => {
                console.log("加载完成！");
                view.onUILoaded();
            }), Laya.Handler.create(this, (p:number) => {
                console.log("加载进度：", p);
            }));
            this._openingList.push(view);
        } else {
            view = this.getView(viewConstructor);
            view.data = data;
            view.opening();
        }

        return view;
    }

    /**
     * 关闭界面
     * @param view 
     */
    public close(view:IView):void {
        view.removeFromParent();
        let index:number = this._openingList.indexOf(view);
        if(index > -1) {
            this._openingList.splice(index, 1);
        }
    }

    /**
     * 获取某个已打开的界面实例
     * @param viewConstructor 
     */
    public getView(viewConstructor:any):IView {
        for(let i:number = 0; i < this._openingList.length; i ++) {
            let win:IView = this._openingList[i];
            if(win instanceof viewConstructor) {
                return win;
            }
        }
        return null;
    }
}