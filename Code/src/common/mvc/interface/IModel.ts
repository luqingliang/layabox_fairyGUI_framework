export default interface IModel {
    sendNotification(name:string, data:any):void;
    destroy():void;
}