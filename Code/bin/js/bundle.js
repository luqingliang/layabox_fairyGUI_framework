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
        constructor() {
            this._eventDispatcher = new Laya.EventDispatcher();
        }
        static get instance() {
            if (!this._instance) {
                this._instance = new Observer();
            }
            return this._instance;
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
            this._isModal = false;
            this.data = null;
        }
        onUILoaded() {
            this.createUI();
        }
        createUI() {
            this.view = fgui.UIPackage.createObject(this._packageName, this._compName).asCom;
            if (this._isModal) {
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
        onUICreated() {
        }
        opening() {
        }
        addToParent() {
            fgui.GRoot.inst.addChild(this.view);
            this.setSize();
            Laya.stage.on(Laya.Event.RESIZE, this, this.setSize);
            this.opening();
        }
        setSize() {
            if (this.view) {
                this.view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height, false);
                this.view.center();
            }
        }
        removeFromParent() {
            this.view.removeFromParent();
            this.dispose();
        }
        getChild(name) {
            return this.view.getChild(name);
        }
        getButton(name) {
            return this.view.getChild(name).asButton;
        }
        getText(name) {
            return this.view.getChild(name).asTextField;
        }
        getInput(name) {
            return this.view.getChild(name).asTextInput;
        }
        getLabel(name) {
            return this.view.getChild(name).asLabel;
        }
        getList(name) {
            return this.view.getChild(name).asList;
        }
        getController(name) {
            return this.view.getController(name);
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
            Laya.stage.off(Laya.Event.RESIZE, this, this.setSize);
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
            if (this._modalLayer) {
                this._modalLayer.removeFromParent();
                this._modalLayer.dispose();
                this._modalLayer = null;
            }
            this.view.dispose();
            this.view = null;
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

    var Model;
    (function (Model) {
        Model.protocol = com.tingtong.server.game.proto;
    })(Model || (Model = {}));
    class GameModel {
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
            if (eventName == UserModel.EVENT_RENAMETEST) {
                this.view.rename(data);
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

    class ItemTemplate {
        get id() {
            return this._id;
        }
        get itemName() {
            return this._itemName;
        }
        get icon() {
            return this._icon;
        }
        get stackingCount() {
            return this._stackingCount;
        }
        decode(data) {
            this._id = data.id;
            this._itemName = data.itemName;
            this._itemType = data.itemType;
            this._itemQuality = data.itemQuality;
            this._stackingCount = data.stackingCount;
            this._canSell = data.canSell;
            this._canUse = data.canUse;
            this._part1 = data.part1;
            this._part2 = data.part2;
            this._icon = data.icon;
            this._specialEffects = data.specialEffects;
            this._getWay = data.getWay;
            this._itemDec = data.itemDec;
        }
    }

    class JsonTemplateMap {
        static initialize() {
            this._templates.set(this.TEST_JSON, TestTemplate);
            this._templates.set(this.ITEM_JSON, ItemTemplate);
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
    JsonTemplateMap.ITEM_JSON = "item.json";
    JsonTemplateMap._templates = new Map();

    class JsonTemplate {
        static get instance() {
            if (!this._instance) {
                this._instance = new JsonTemplate();
            }
            return this._instance;
        }
        initialize(complete = null) {
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
                if (complete)
                    complete.run();
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

    class BagView extends BaseView {
        constructor() {
            super();
            this._packageName = "Bag";
            this._compName = "Bag";
            this._closeClearRes = true;
        }
        onUICreated() {
            this.view._btnBack.onClick(this, () => {
                this.close();
            });
            this.view._itemList.on(fgui.Events.CLICK_ITEM, this, this.onClickItem);
            this.view._itemList.itemRenderer = Laya.Handler.create(this, this.itemListHandler, null, false);
            this.view._itemList.setVirtual();
        }
        itemListHandler(index, obj) {
            let itemJson;
            if (index < this._itemArr.length) {
                itemJson = this._itemArr[index];
            }
            else {
                let randomNum = Math.floor(Math.random() * this._itemArr.length);
                itemJson = this._itemArr[randomNum];
            }
            obj.setData(itemJson);
        }
        onClickItem(index) {
        }
        opening() {
            this._itemArr = JsonTemplate.instance.getTemplates(JsonTemplateMap.ITEM_JSON);
            this.view._itemList.numItems = 10000;
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
            this._mediator = new HomeMediator(this);
            this.view._text.text = "我是玩家：" + Model.User.userData.username;
            this.view._bottom._menu.on(fgui.Events.STATE_CHANGED, this, () => {
                if (this.view._bottom._menu.selectedIndex == 2) {
                    ViewManager.instance.open(BagView);
                }
            });
        }
        opening() {
            console.log("反复打开界面HomeView，data：", this.data);
        }
        rename(name) {
            this.view._text.text = "我是玩家：" + name;
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
            Model.User.login(username);
        }
    }

    class WordFilter {
        static initlize(complete = null) {
            this._wordsList = [];
            let url = "res/config/filterWords.json";
            Laya.loader.load(url, Laya.Handler.create(this, () => {
                let arr = Laya.loader.getRes(url);
                for (let i = 0; i < arr.length; i++) {
                    this._wordsList.push(arr[i].word);
                }
                Laya.loader.clearRes(url);
                if (complete) {
                    complete.run();
                }
            }));
        }
        static filter(str) {
            for (let i = 0; i < this._wordsList.length; i++) {
                let reg = new RegExp(this._wordsList[i], "g");
                if (str.indexOf(this._wordsList[i]) != -1) {
                    str = str.replace(reg, "*");
                }
            }
            return str;
        }
        static makeMap(arr) {
            let result = new Map();
            for (let i = 0; i < arr.length; i++) {
                let str = arr[i];
                let map = result;
                for (let j = 0; j < str.length; j++) {
                    let char = str.charAt(j);
                    if (map.get(char)) {
                        map = map.get(char);
                    }
                    else {
                        if (map.get("isEnd") == true) {
                            map.set("isEnd", (j == str.length - 1) ? true : false);
                        }
                        let node = new Map();
                        node.set("isEnd", true);
                        map.set(char, node);
                        map = node;
                    }
                }
            }
            return result;
        }
        static check(str) {
            let result = false;
            let map = this._wordsMap;
            for (let i = 0; i < str.length; i++) {
                let char = str.charAt(i);
                map = map.get(char);
                if (map) {
                    if (map.get("isEnd") == true) {
                        result = true;
                        break;
                    }
                }
                else {
                    break;
                }
            }
            return result;
        }
    }

    class Login extends fairygui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fairygui.UIPackage.createObject("Login", "Login"));
        }
        onConstruct() {
            this._text = (this.getChild("text"));
            this._btnStart = (this.getChild("btnStart"));
            this._inputUsername = (this.getChild("inputUsername"));
        }
    }
    Login.URL = "ui://wgdhhfkrr71t0";

    class LoginBinder {
        static bindAll() {
            fairygui.UIObjectFactory.setPackageItemExtension(Login.URL, Login);
        }
    }

    class LoginView extends BaseView {
        constructor() {
            super();
            LoginBinder.bindAll();
            this._packageName = "Login";
            this._compName = "Login";
            this._closeClearRes = true;
        }
        onUICreated() {
            this._mediator = new LoginMediator(this);
            this.view._text.text = "Hello World";
            this.view._btnStart.onClick(this, this.startHandler);
        }
        startHandler() {
            let name = this.view._inputUsername.text;
            let newStr = WordFilter.filter(name);
            if (newStr != name) {
                console.error("含有敏感词，请重新输入！");
                return;
            }
            this.mediator.login(name);
        }
        get mediator() {
            return this._mediator;
        }
    }

    class Home extends fairygui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fairygui.UIPackage.createObject("Home", "Home"));
        }
        onConstruct() {
            this._text = (this.getChild("text"));
            this._bottom = (this.getChild("bottom"));
        }
    }
    Home.URL = "ui://4h44hmx7empj3";

    class HomeTop extends fairygui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fairygui.UIPackage.createObject("Home", "HomeTop"));
        }
        onConstruct() {
            this._labUser = (this.getChild("labUser"));
        }
    }
    HomeTop.URL = "ui://4h44hmx7eu8o6";

    class HomeBottom extends fairygui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fairygui.UIPackage.createObject("Home", "HomeBottom"));
        }
        onConstruct() {
            this._menu = this.getController("menu");
        }
    }
    HomeBottom.URL = "ui://4h44hmx7eu8o7";

    class HomeBinder {
        static bindAll() {
            fairygui.UIObjectFactory.setPackageItemExtension(Home.URL, Home);
            fairygui.UIObjectFactory.setPackageItemExtension(HomeTop.URL, HomeTop);
            fairygui.UIObjectFactory.setPackageItemExtension(HomeBottom.URL, HomeBottom);
        }
    }

    class Bag extends fairygui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fairygui.UIPackage.createObject("Bag", "Bag"));
        }
        onConstruct() {
            this._itemList = (this.getChild("itemList"));
            this._btnBack = (this.getChild("btnBack"));
        }
    }
    Bag.URL = "ui://ie8na7w3h3iw0";

    class Item extends fairygui.GButton {
        constructor() {
            super();
        }
        static createInstance() {
            return (fairygui.UIPackage.createObject("Bag", "Item"));
        }
        onConstruct() {
            this._ItemQuality = this.getController("ItemQuality");
            this._showName = this.getController("showName");
            this._effect = (this.getChild("effect"));
            this._textNum = (this.getChild("textNum"));
        }
    }
    Item.URL = "ui://ie8na7w3h3iw1";

    class BagBinder {
        static bindAll() {
            fairygui.UIObjectFactory.setPackageItemExtension(Bag.URL, Bag);
            fairygui.UIObjectFactory.setPackageItemExtension(Item.URL, Item);
        }
    }

    class ItemIcon extends Item {
        setData(config) {
            this.icon = "res/icon/item/" + config.icon + ".png";
            this._textNum.text = config.stackingCount > 99999999 ? "99999999" : config.stackingCount.toString();
            this.title = config.itemName;
        }
    }

    class CommonBinder {
        static bindAll() {
        }
    }

    class SceneManager {
        static initialize() {
            this.bindFgui();
        }
        static bindFgui() {
            CommonBinder.bindAll();
            LoginBinder.bindAll();
            HomeBinder.bindAll();
            BagBinder.bindAll();
            fairygui.UIObjectFactory.setPackageItemExtension(Item.URL, ItemIcon);
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
            fgui.UIPackage.loadPackage("res/fgui/Common", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            WordFilter.initlize(Laya.Handler.create(this, () => {
                console.log("敏感字库初始化完成");
            }));
            JsonTemplate.instance.initialize(Laya.Handler.create(this, () => {
                console.log("测试读Json配置表", JsonTemplate.instance.getTemplate(JsonTemplateMap.TEST_JSON, "id", 1003));
            }));
            GameModel.initialize();
            SceneManager.initialize();
            Laya.stage.addChild(fgui.GRoot.inst.displayObject);
            ViewManager.instance.open(LoginView);
            console.log("测试Protobuf: ", Model.protocol.LoginType.ACCOUNT);
        }
    }
    new Main();

}());
