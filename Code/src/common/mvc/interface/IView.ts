import IMediator from "./IMediator";

export default interface IView {
    viewComponent:fgui.GComponent;
    /**
     * 打开界面时传过来的参数
     */
    data:any;
    mediator:IMediator;
    otherRes:Array<any>;

    onUILoaded():void;
    removeFromParent():void;
    /**
     * 获取包资源路径
     * @param baseUrl 
     */
    packageURL(baseUrl?:string):string;
    /**
     * 每次页面打开调用，可能会重复调用
     */
    opening():void;
    close():void;
}