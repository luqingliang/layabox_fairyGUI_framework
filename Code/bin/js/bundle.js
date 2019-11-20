(function () {
    'use strict';

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedauto";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "Login.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Observer {
        static get instance() {
            if (!this._instance) {
                this._instance = new Observer();
            }
            return this._instance;
        }
        constructor() {
            this._eventDispatcher = new Laya.EventDispatcher();
        }
        notify(eventName, data) {
            this._eventDispatcher.event(eventName, data);
        }
        register(eventName, caller, callBack, args) {
            this._eventDispatcher.on(eventName, caller, callBack, args);
        }
        off(eventName, caller, callBack) {
            this._eventDispatcher.off(eventName, caller, callBack);
        }
        offAll(eventName) {
            this._eventDispatcher.offAll(eventName);
        }
        offAllCaller(caller) {
            this._eventDispatcher.offAllCaller(caller);
        }
    }

    class FLoadManager {
        constructor() {
            this.priority = 1;
        }
        static get instance() {
            if (!this._instance)
                this._instance = new FLoadManager();
            return this._instance;
        }
        load(resKey, otherLoadData, complete, progress, priority) {
            if (priority) {
                this.priority = priority;
            }
            else {
                this.priority = 1;
            }
            if (progress) {
                progress.once = false;
            }
            let loadData = [
                { url: resKey + "." + fgui.UIConfig.packageFileExtension, type: Laya.Loader.BUFFER }
            ];
            Laya.loader.load(loadData, Laya.Handler.create(this, this.onLoadPackageComplete, [resKey, otherLoadData, complete, progress]));
        }
        onLoadPackageComplete(resKey, otherLoadData, complete, progress) {
            let urlNames = resKey.split("/");
            let pkg = fgui.UIPackage.getByName(urlNames[urlNames.length - 1]);
            if (!pkg) {
                let descData = Laya.loader.getRes(resKey + "." + fgui.UIConfig.packageFileExtension);
                if (!descData) {
                    this.onComplete(resKey, otherLoadData, complete, progress, loadData);
                    return;
                }
                pkg = fgui.UIPackage.addPackage(resKey, descData);
            }
            let allatlas = {};
            var loadData = [];
            for (let key in pkg._sprites) {
                if (pkg._sprites.hasOwnProperty(key)) {
                    let element = pkg._sprites[key];
                    if (!allatlas[element.atlas.file] && !Laya.loader.getRes(element.atlas.file)) {
                        allatlas[element.atlas.file] = element.atlas.file;
                        loadData.push({ url: element.atlas.file, type: Laya.Loader.IMAGE });
                    }
                }
            }
            if (otherLoadData && otherLoadData.length > 0) {
                loadData = loadData.concat(otherLoadData);
            }
            for (var i = 0; i < loadData.length; i++) {
                if (Object.prototype.toString.call(loadData[i]) === "[object Object]") {
                    loadData[i].priority = this.priority;
                }
            }
            Laya.loader.load(loadData, Laya.Handler.create(this, this.onComplete, [resKey, otherLoadData, complete, progress, loadData]), progress);
        }
        onComplete(resKey, otherLoadData, complete, progress, loadData) {
            if (progress) {
                let fun = progress;
                progress = null;
                fun.recover();
            }
            if (complete) {
                let fun = complete;
                complete = null;
                fun.runWith([resKey, loadData]);
                fun.recover();
            }
        }
    }

    class ViewManager {
        constructor() {
            this._openingList = [];
        }
        static get instance() {
            if (!this._instance) {
                this._instance = new ViewManager();
            }
            return this._instance;
        }
        static registerMediator(mediator) {
            let name = mediator.getMediatorName();
            if (this.mediatorMap.get(name))
                return;
            this.mediatorMap.set(name, mediator);
            let events = mediator.eventList();
            for (let i = 0; i < events.length; i++) {
                Observer.instance.register(events[i], mediator, mediator.onEvent, [events[i]]);
            }
            mediator.onRegister();
        }
        static removeMediator(mediatorName) {
            let mediator = this.mediatorMap.get(mediatorName);
            if (!mediator)
                return null;
            let events = mediator.eventList();
            for (let i = 0; i < events.length; i++) {
                Observer.instance.off(events[i], mediator, mediator.onEvent);
            }
            this.mediatorMap.delete(mediatorName);
            mediator.onRemove();
            return mediator;
        }
        open(viewConstructor, data = null) {
            let view;
            if (!this.getView(viewConstructor)) {
                view = new viewConstructor();
                view.data = data;
                FLoadManager.instance.load(view.packageURL(), view.otherRes, Laya.Handler.create(this, () => {
                    console.log("加载完成！");
                    view.onUILoaded();
                }), Laya.Handler.create(this, (p) => {
                    console.log("加载进度：", p);
                }));
                this._openingList.push(view);
            }
            else {
                view = this.getView(viewConstructor);
                view.data = data;
                view.opening();
            }
            return view;
        }
        close(view) {
            view.removeFromParent();
            let index = this._openingList.indexOf(view);
            if (index > -1) {
                this._openingList.splice(index, 1);
            }
        }
        getView(viewConstructor) {
            for (let i = 0; i < this._openingList.length; i++) {
                let win = this._openingList[i];
                if (win instanceof viewConstructor) {
                    return win;
                }
            }
            return null;
        }
    }
    ViewManager.mediatorMap = new Map();

    class BaseView {
        constructor() {
            this.data = null;
        }
        onUILoaded() {
            this.createUI();
        }
        createUI() {
            this._viewComponent = fgui.UIPackage.createObject(this._packageName, this._compName).asCom;
            this.onUICreated();
            this.addToParent();
        }
        onUICreated() {
        }
        opening() {
        }
        addToParent() {
            fgui.GRoot.inst.addChild(this._viewComponent);
            this.opening();
        }
        removeFromParent() {
            this._viewComponent.removeFromParent();
            this.dispose();
        }
        getChild(name) {
            return this._viewComponent.getChild(name);
        }
        getButton(name) {
            return this._viewComponent.getChild(name).asButton;
        }
        getText(name) {
            return this._viewComponent.getChild(name).asTextField;
        }
        getInput(name) {
            return this._viewComponent.getChild(name).asTextInput;
        }
        getLabel(name) {
            return this._viewComponent.getChild(name).asLabel;
        }
        getList(name) {
            return this._viewComponent.getChild(name).asList;
        }
        getController(name) {
            return this._viewComponent.getController(name);
        }
        get viewComponent() {
            return this._viewComponent;
        }
        get mediator() {
            return this._mediator;
        }
        packageURL(baseUrl = "res/fgui/") {
            return baseUrl + this._packageName;
        }
        get otherRes() {
            return [];
        }
        close() {
            ViewManager.instance.close(this);
        }
        dispose() {
            if (this._closeClearRes) {
                let resArr = this.otherRes;
                for (let i = 0; i < resArr.length; i++) {
                    if (Object.prototype.toString.call(resArr[i]) === "[object String]") {
                        Laya.loader.clearRes(resArr[i]);
                    }
                    else {
                        Laya.loader.clearRes(resArr[i].url);
                    }
                }
            }
            let uiPackage = fgui.UIPackage.getByName(this._packageName);
            if (uiPackage) {
                if (this._closeClearRes) {
                    uiPackage.unloadAssets();
                    fgui.UIPackage.removePackage(this._packageName);
                }
            }
            if (this._mediator) {
                ViewManager.removeMediator(this._mediator.getMediatorName());
                this._mediator = null;
            }
            this._viewComponent.dispose();
            this._viewComponent = null;
            this.data = null;
        }
    }

    class Mediator {
        constructor(view) {
            this._view = view;
        }
        get view() {
            return this._view;
        }
        getMediatorName() {
            return this._mediatorName;
        }
        eventList() {
            return [];
        }
        onRegister() {
        }
        onEvent(eventName, data) {
        }
        onRemove() {
        }
        sendNotification(name, data = null) {
            Observer.instance.notify(name, data);
        }
    }

    class BaseModel {
        constructor() {
            this.initialize();
        }
        initialize() {
        }
        sendNotification(name, data = null) {
            Observer.instance.notify(name, data);
        }
        destroy() {
        }
    }

    class BaseVO {
        constructor() {
        }
        initialize(data) {
            this._data = data;
        }
        reset() {
            this._data = null;
        }
    }

    class UserVO extends BaseVO {
        constructor() {
            super();
        }
        initialize(data) {
            super.initialize(data);
        }
        get uid() {
            return this._data.uid;
        }
        get username() {
            return this._data.username;
        }
        get lv() {
            return this._data.lv;
        }
    }

    class ObjectPool {
        static from(classConstructor, data, initializeMethod = "initialize") {
            let className = classConstructor.prototype.constructor.name;
            if (!this._pools.get(className)) {
                this._pools.set(className, new Pool(className, classConstructor));
            }
            let pool = this._pools.get(className);
            return pool.from(data, initializeMethod);
        }
        static to(obj, resetMethod = "reset") {
            if (!obj)
                return;
            let className = obj.__proto__.constructor.name;
            if (!className) {
                throw ("[ObjectPool] Is not a valid pool type!");
            }
            let pool = this._pools.get(className);
            if (pool) {
                pool.to(obj, resetMethod);
            }
        }
        static destroy(classConstructor) {
            let className = classConstructor.prototype.constructor.name;
            let pool = this._pools.get(className);
            if (pool) {
                pool.destroy();
            }
        }
    }
    ObjectPool._pools = new Map();
    class Pool {
        constructor(className, classConstructor, maxLength = 0) {
            this._classConstructor = classConstructor;
            this._className = className;
            this._maxLength = maxLength;
            this._pool = [];
        }
        from(data, initializeMethod = null) {
            let obj;
            if (this._pool.length > 0) {
                obj = this._pool.shift();
            }
            else {
                obj = new this._classConstructor();
            }
            if (initializeMethod && obj[initializeMethod]) {
                obj[initializeMethod].call(obj, data);
            }
            return obj;
        }
        to(obj, resetMethod = null) {
            if (resetMethod && obj[resetMethod]) {
                obj[resetMethod].call(obj);
            }
            if (this._pool.indexOf(obj) < 0) {
                if (this._maxLength > 0 && this._pool.length >= this._maxLength) {
                    this._pool.pop();
                }
                this._pool.push(obj);
            }
        }
        destroy() {
            for (let i = 0; i < this._pool.length; i++) {
                let obj = this._pool[i];
                if (obj["reset"]) {
                    obj["reset"].call(obj);
                }
            }
            this._pool.length = 0;
        }
    }

    class UserModel extends BaseModel {
        constructor() {
            super();
        }
        initialize() {
        }
        login(username) {
            Laya.timer.once(400, this, () => {
                this._userData = ObjectPool.from(UserVO, {
                    uid: "1001",
                    username: !username ? "游客" : username,
                    lv: 99,
                });
                console.log("登陆成功，用户信息：", this._userData);
                this.sendNotification(UserModel.EVENT_LOGINSUCCESS);
            });
        }
        get userData() {
            return this._userData;
        }
    }
    UserModel.EVENT_RENAMETEST = "EVENT_RENAMETEST";
    UserModel.EVENT_LOGINSUCCESS = "EVENT_LOGINSUCCESS";

    class Model {
        static initialize() {
            Model.User = new UserModel();
        }
    }

    class HomeMediator extends Mediator {
        constructor(view) {
            super(view);
            this._mediatorName = "HomeMediator";
            ViewManager.registerMediator(this);
        }
        eventList() {
            return [
                UserModel.EVENT_RENAMETEST
            ];
        }
        onEvent(eventName, data) {
            console.log("enentName:", eventName, "data:", data);
            if (eventName == UserModel.EVENT_RENAMETEST) {
                this.view._text.text = "我是玩家：" + data;
            }
        }
        onRegister() {
            console.log("HomeMediator Event Registed!");
        }
        onRemove() {
            console.log("HomeMediator Event Removed!");
        }
        get view() {
            return this._view;
        }
    }

    class HomeView extends BaseView {
        constructor() {
            super();
            this._packageName = "Home";
            this._compName = "Home";
        }
        get otherRes() {
            return [
                { url: "res/img/test.png", type: Laya.Loader.IMAGE }
            ];
        }
        onUICreated() {
            this._btnBack = this.getButton("btnBack").asButton;
            this._labUser = this.getChild("labUser").asLabel;
            this._text = this.getChild("text").asTextField;
            this._menuCtrl = this.getController("menu");
            this._mediator = new HomeMediator(this);
            this._btnBack.onClick(this, this.backHandler);
            this._labUser.title = Model.User.userData.uid;
            this._text.text = "我是玩家：" + Model.User.userData.username;
            this._menuCtrl.on(fgui.Events.STATE_CHANGED, this, () => {
                ViewManager.instance.open(HomeView, Math.floor(Math.random() * 100).toString());
            });
        }
        opening() {
            console.log("反复打开界面HomeView，data：", this.data);
            this._mediator.sendNotification(UserModel.EVENT_RENAMETEST, this.data);
        }
        backHandler() {
            this.close();
            ViewManager.instance.open(LoginView);
        }
    }

    class GameSocket extends Laya.Socket {
        constructor() {
            super();
            this._byte = new Laya.Byte();
            this._byte.endian = Laya.Byte.LITTLE_ENDIAN;
            this.endian = Laya.Byte.LITTLE_ENDIAN;
        }
        connect(host, port, isTLS = false) {
            this._host = host;
            this._port = port;
            let url = (!isTLS ? "ws://" : "wss://") + host + ":" + port;
            super.connectByUrl(url);
        }
        _onError(event = null) {
            console.error("Socket IO Error: ", event);
        }
        onConnected(call, callback) {
            this.on(Laya.Event.OPEN, call, callback);
        }
        onSocketClose(caller, callback) {
            this.on(Laya.Event.CLOSE, caller, callback);
        }
        onMessage(caller, callback) {
            this.on(Laya.Event.MESSAGE, caller, callback);
        }
        sendMsg(msg) {
            let by = new Laya.Byte();
            by.endian = Laya.Byte.LITTLE_ENDIAN;
            this._byte.writeArrayBuffer(by.buffer);
            this.send(this._byte.buffer);
            this._byte.clear();
        }
        get host() {
            return this._host;
        }
        get port() {
            return this._port;
        }
        close() {
            this.offAll(Laya.Event.OPEN);
            this.offAll(Laya.Event.ERROR);
            this.offAll(Laya.Event.MESSAGE);
            this.offAll(Laya.Event.CLOSE);
            this.cleanSocket();
            this._byte = null;
            this._host = null;
            this._port = null;
        }
    }

    class NetManager extends Laya.EventDispatcher {
        static get instance() {
            if (!this._instance)
                this._instance = new NetManager();
            return this._instance;
        }
        constructor() {
            super();
        }
        connect(host, port, caller = null, complete = null, isTLS = false) {
            if (this._gameSocket) {
                console.warn("重复发起WebSocket连接请求");
                return;
            }
            this._gameSocket = new GameSocket();
            this._gameSocket.connect(host, port, isTLS);
            this._gameSocket.onConnected(this, () => {
                complete.call(caller);
            });
            this._gameSocket.onSocketClose(this, () => {
                console.log("Socket连接关闭");
            });
        }
        close() {
            this._gameSocket.close();
            this._gameSocket = null;
        }
    }

    class LoginMediator extends Mediator {
        constructor(view) {
            super(view);
            this._mediatorName = "LoginMediator";
            ViewManager.registerMediator(this);
        }
        eventList() {
            return [
                UserModel.EVENT_LOGINSUCCESS
            ];
        }
        onEvent(eventName, data) {
            if (eventName == UserModel.EVENT_LOGINSUCCESS) {
                this.view.close();
                ViewManager.instance.open(HomeView);
            }
        }
        login(username) {
            NetManager.instance.connect("localhost", 2333, this, () => {
                console.log("23333333333333");
            });
        }
    }

    class LoginView extends BaseView {
        constructor() {
            super();
            this._packageName = "Login";
            this._compName = "Login";
            this._closeClearRes = true;
        }
        onUICreated() {
            this._text = this.getText("text");
            this._inputUsername = this.getInput("inputUsername");
            this._btnStart = this.getButton("btnStart");
            this._mediator = new LoginMediator(this);
            this._text.text = "Hello World";
            this._btnStart.onClick(this, this.startHandler);
        }
        startHandler() {
            this.mediator.login(this._inputUsername.text);
        }
        get mediator() {
            return this._mediator;
        }
    }

    class TestTemplate {
        get id() {
            return this._id;
        }
        get name() {
            return this._name;
        }
        get hp() {
            return this._hp;
        }
        decode(data) {
            this._id = data.id;
            this._name = data.name;
            this._hp = data.hp;
        }
    }

    class JsonTemplateMap {
        static initialize() {
            this._templates.set(this.TEST_JSON, TestTemplate);
        }
        static getTemplateClass(name) {
            return this._templates.get(name);
        }
        static getJsonResArr() {
            let res = [];
            let keys = [...this._templates.keys()];
            for (let i = 0; i < keys.length; i++) {
                res.push({ url: "res/config/" + keys[i], type: Laya.Loader.JSON, jsonFileName: keys[i] });
            }
            return res;
        }
    }
    JsonTemplateMap.TEST_JSON = "test.json";
    JsonTemplateMap._templates = new Map();

    class JsonTemplate {
        static get instance() {
            if (!this._instance) {
                this._instance = new JsonTemplate();
            }
            return this._instance;
        }
        initialize() {
            this._templates = new Map();
            JsonTemplateMap.initialize();
            let arr = JsonTemplateMap.getJsonResArr();
            Laya.loader.load(arr, Laya.Handler.create(this, (data) => {
                for (let i = 0; i < arr.length; i++) {
                    let json = Laya.loader.getRes(arr[i].url);
                    if (json) {
                        this.decodeJson(arr[i].jsonFileName, json, JsonTemplateMap.getTemplateClass(arr[i].jsonFileName));
                    }
                }
            }));
        }
        decodeJson(name, json, template) {
            let arr = [];
            for (let key in json) {
                let obj = new template();
                obj.decode(json[key]);
                arr.push(obj);
            }
            this._templates.set(name, arr);
            console.log(this.getTemplate(JsonTemplateMap.TEST_JSON, "id", 1003));
        }
        getTemplates(name) {
            return this._templates.get(name);
        }
        getTemplate(name, property, value) {
            let arr = this._templates.get(name);
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][property] && arr[i][property] == value) {
                    return arr[i];
                }
            }
            return null;
        }
        getTemplateList(name, property, value) {
            let list = [];
            let arr = this._templates.get(name);
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][property] && arr[i][property] == value) {
                    list.push(arr[i]);
                }
            }
            return list;
        }
    }

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError = true;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            JsonTemplate.instance.initialize();
            Model.initialize();
            Laya.stage.addChild(fgui.GRoot.inst.displayObject);
            ViewManager.instance.open(LoginView);
            console.log("测试Protobuf: ", com.tingtong.server.game.proto.LoginType.ACCOUNT);
        }
    }
    new Main();

}());
