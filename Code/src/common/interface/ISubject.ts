import { IObserver } from "./IObserver";

/**抽象主题 */
export interface ISubject {
    addObserver(observer: IObserver);
    removeObserver(observer: IObserver);
    sendNotification(cmd: number, data?: any);
}