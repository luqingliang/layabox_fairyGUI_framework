/**抽象观察者 */
export interface IObserver {
    updateDB(cmd: number, data: any): void;
}