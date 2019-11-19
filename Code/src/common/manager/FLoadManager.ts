export default class FLoadManager {
    private static _instance:FLoadManager;
    public static get instance():FLoadManager {
        if(!this._instance)
            this._instance = new FLoadManager();
        return this._instance;
    }

    /**加载优先级，越小越优先，最小为0 */
    private priority:number = 1;

    /**
     * 混合加载 
     * @param resKey 
     * @param otherLoadData 
     * @param complete 
     * @param progress 
     * @param priority 
     */
    public load(resKey:string, otherLoadData:any, complete?:Laya.Handler, progress?:Laya.Handler, priority?:number) {
        if(priority) {
            this.priority = priority;
        } else {
            this.priority = 1;
        }
        if(progress) {
            progress.once = false;
        }
        let loadData:Array<any> = [
            {url: resKey + "." + fgui.UIConfig.packageFileExtension, type: Laya.Loader.BUFFER}
        ]
        Laya.loader.load(loadData, Laya.Handler.create(this, this.onLoadPackageComplete, [resKey, otherLoadData, complete, progress]));
    }

    private onLoadPackageComplete(resKey:string, otherLoadData:any, complete?:Laya.Handler, progress?:Laya.Handler) {
        let urlNames = resKey.split("/");
        let pkg:any = fgui.UIPackage.getByName(urlNames[urlNames.length - 1]);
        if(!pkg) {
            let	descData:any = Laya.loader.getRes(resKey + "." + fgui.UIConfig.packageFileExtension);
            if(!descData) {
                this.onComplete(resKey, otherLoadData, complete, progress, loadData);
                return;
            }
            pkg = fgui.UIPackage.addPackage(resKey, descData); 
        }
                
        let allatlas = {};
        var loadData = []; //var会声明提前

        for(let key in pkg._sprites) {
            if(pkg._sprites.hasOwnProperty(key)) {
                let element = pkg._sprites[key];
                if(!allatlas[element.atlas.file] && !Laya.loader.getRes(element.atlas.file)) {
                    allatlas[element.atlas.file] = element.atlas.file;
                    loadData.push({url: element.atlas.file, type: Laya.Loader.IMAGE});
                }
            }
        }
        if(otherLoadData && otherLoadData.length > 0) {
            loadData = loadData.concat(otherLoadData);
        }
        for(var i = 0; i < loadData.length; i++) {
            if(Object.prototype.toString.call(loadData[i]) === "[object Object]") {
                loadData[i].priority = this.priority;
            }
        }
        Laya.loader.load(loadData,Laya.Handler.create(this, this.onComplete, [resKey, otherLoadData, complete, progress, loadData]), progress);
    }

    private onComplete(resKey:string, otherLoadData:any, complete?:Laya.Handler, progress?:Laya.Handler, loadData?:any) {
        if(progress) {
            let fun = progress;
            progress = null;
            fun.recover();
        }
        if(complete) {
            let fun = complete;
            complete = null;
            fun.runWith([resKey, loadData]);
            fun.recover();
        }
    }
}