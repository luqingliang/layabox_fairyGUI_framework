class EventDispatcher {

    protected static ins: any;

    protected calls: any = {};

    /**
     * 侦听
     * @param type
     * @param call
     * @param thisObj
     */
    addEventListener(type: any, call: any, thisObj: any) {
        if (this.checkCall(type, call, thisObj)) {
            return;
        }

        let list: any[] = this.getCalllist(type);
        list.push({ "call": call, "thisObj": thisObj });
    }

    /**
     * 移除
     * @param type
     * @param call
     * @param thisObj
     */
    delEventListener(type: any, call: any, thisObj: any) {
        if (!this.checkCall(type, call, thisObj)) {
            return;
        }

        let list: any[] = this.getCalllist(type);
        let temp: any;
        for (let i: number = 0; i < list.length; i++) {
            temp = list[i];
            if (temp["call"] == call && temp["thisObj"] == thisObj) {
                list.splice(i, 1);
                break;
            }
        }
    }

    /**
     * 广播
     * @param type
     * @param args
     */
    dispatchEvent(type: any, args?: any) {
        let list: any[] = this.getCalllist(type);
        let temp: any;
        for (let i: number = 0; i < list.length; i++) {
            temp = list[i];
            temp["call"].call(temp["thisObj"], args);
        }
    }

    /**
     * 检测回调函数是否已经存在
     * @param type
     * @param call
     * @param thisObj
     * @returns {boolean}
     */
    protected checkCall(type: any, call: any, thisObj: any): boolean {
        let isExist: boolean = false;
        let list: any[] = this.getCalllist(type);
        let temp: any;
        for (let i: number = 0; i < list.length; i++) {
            temp = list[i];
            if (temp["call"] == call && temp["thisObj"] == thisObj) {
                isExist = true;
                break;
            }
        }
        return isExist;
    }

    /**
     * 检测回调函数是否已经存在
     * @param type
     * @returns {any[]}
     */
    protected getCalllist(type: any): any[] {
        let list: any[] = [];
        if (this.calls.hasOwnProperty(type)) {
            list = this.calls[type];
        }
        else {
            this.calls[type] = list;
        }
        return list;
    }
}

export var monitor = new EventDispatcher();

