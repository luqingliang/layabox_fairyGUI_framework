(function () {
    'use strict';

    class EventCenter {
        constructor() {
            this._listeners = {};
        }
        dispatcher(etype, data = null) {
            if (this._listeners[etype] != null) {
                let handlers = this._listeners[etype];
                const len = handlers.length;
                for (let i = len - 1; i >= 0; i--) {
                    let handler = handlers[i];
                    handler.eventHandler(etype, data);
                }
            }
        }
        addListener(etype, handler) {
            if (this._listeners[etype] == null) {
                this._listeners[etype] = [];
            }
            else {
                if (this._listeners[etype].indexOf(handler) != -1) {
                    return;
                }
            }
            this._listeners[etype].push(handler);
        }
        removeListener(etype, handler) {
            if (this._listeners[etype] != null) {
                let index = this._listeners[etype].indexOf(handler);
                if (index >= 0) {
                    this._listeners[etype].splice(index, 1);
                }
            }
        }
    }
    EventCenter.inst = new EventCenter();

    class UIBase extends fgui.Window {
        constructor(packageName, pageName, layerType, modal = false, isVertical = false) {
            super();
            this._openData = null;
            this._openCallback = null;
            this._initialized = false;
            this._opened = false;
            this._isVertical = false;
            this._modalLayerColor = null;
            this._extensions = new Map();
            this._datas = [];
            this._eventTypes = new Set();
            this._forceFullScreen = false;
            this.name = pageName;
            this._pageName = pageName;
            this._packageName = packageName;
            this._layerType = layerType;
            this.modal = modal;
            this._isVertical = isVertical;
        }
        onInit() {
            for (let [key, value] of this._extensions) {
                fgui.UIObjectFactory.setExtension(key, value);
            }
            const UIobj = fgui.UIPackage.createObject(this._packageName, this._pageName);
            this.contentPane = !UIobj ? null : UIobj.asCom;
            if (!this.contentPane) {
                this.close();
                return;
            }
            this.sortingOrder = this._layerType;
            this._initialized = true;
            this.Start();
        }
        Start() { }
        onShown() {
            this._opened = true;
            if (this.isDisposed || !this._initialized) {
                return;
            }
            if (this._isVertical) {
                this.setVertical();
            }
            else {
                this.setHorizontal();
            }
            this.onResize();
            Laya.stage.on(Laya.Event.RESIZE, this, this.onResize);
            if (this._layerType === LayerType.PopWindow || this._layerType === LayerType.Tips) {
                fgui.GRoot.inst.modalLayer.onClick(this, this.onClickModalLayer);
            }
            if (this.modal) {
                if (this._modalLayerColor) {
                    fgui.GRoot.inst.modalLayer.displayObject.graphics.clear();
                    fgui.GRoot.inst.modalLayer.drawRect(0, null, this._modalLayerColor);
                }
                fgui.GRoot.inst.modalLayer.sortingOrder = this.sortingOrder - 1;
            }
            this.updateUI(this._openData);
            if (this._openCallback) {
                Laya.timer.callLater(this, () => {
                    this._openCallback.run();
                    this._openCallback = null;
                });
            }
        }
        updateUI(data) { }
        onHide() {
            Laya.timer.clearAll(this);
            Laya.stage.off(Laya.Event.RESIZE, this, this.onResize);
            this._opened = false;
            this._openData = null;
            this.beforeClose();
            this.removeObs();
            this.removeEvents(...this._eventTypes.keys());
            if (this._layerType === LayerType.PopWindow || this._layerType === LayerType.Tips) {
                fgui.GRoot.inst.modalLayer.offClick(this, this.onClickModalLayer);
            }
            if (this.modal && this._modalLayerColor && this._modalLayerColor !== fgui.UIConfig.modalLayerColor) {
                fgui.GRoot.inst.modalLayer.displayObject.graphics.clear();
                fgui.GRoot.inst.modalLayer.drawRect(0, null, fgui.UIConfig.modalLayerColor);
            }
        }
        updateFrame(s, ms) { }
        updateDB(cmd, data) { }
        eventHandler(eventType, data) { }
        addEvents(...eventTypes) {
            for (let type of eventTypes) {
                EventCenter.inst.addListener(type, this);
                if (!this._eventTypes.has(type)) {
                    this._eventTypes.add(type);
                }
            }
        }
        removeEvents(...eventTypes) {
            for (let type of eventTypes) {
                EventCenter.inst.removeListener(type, this);
                if (this._eventTypes.has(type)) {
                    this._eventTypes.delete(type);
                }
            }
        }
        addObs(...datas) {
            for (let obs of datas) {
                if (!this._datas.includes(obs)) {
                    obs.addObserver(this);
                    this._datas.push(obs);
                }
            }
        }
        removeObs() {
            for (let obs of this._datas) {
                obs.removeObserver(this);
            }
            this._datas.length = 0;
        }
        setExtension(url, classs) {
            this._extensions.set(url, classs);
        }
        beforeClose() { }
        close(isDispos = true) {
            UIManager.inst.closePage(this, isDispos);
        }
        goBack() {
            if (this._layerType === LayerType.Scenes || this._layerType === LayerType.Float) {
                return false;
            }
            this.close();
            return true;
        }
        onResize() {
            if (this._layerType <= LayerType.Interface || this._forceFullScreen) {
                this.makeFullScreen();
            }
            else {
                this.center();
            }
        }
        onClickModalLayer() {
            let firstWindow = UIManager.inst.getTopPopWindow();
            if (firstWindow == this) {
                this.close();
            }
        }
        get layerType() {
            return this._layerType;
        }
        get opened() {
            return this.isShowing && this._opened;
        }
        get packageName() {
            return this._packageName;
        }
        get pageName() {
            return this._pageName;
        }
        set openData(data) {
            this._openData = data;
        }
        get openData() {
            return this._openData;
        }
        set openCallback(callback) {
            this._openCallback = callback;
        }
        set modalLayerColor(color) {
            this._modalLayerColor = color;
        }
        set forceFullScreen(val) {
            this._forceFullScreen = val;
        }
        setHorizontal() {
            if (Laya.stage.screenMode == Laya.Stage.SCREEN_HORIZONTAL) {
                return;
            }
            const width = Laya.stage.width;
            const height = Laya.stage.height;
            Laya.stage.width = height;
            Laya.stage.height = width;
            Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        }
        setVertical() {
            if (Laya.stage.screenMode == Laya.Stage.SCREEN_VERTICAL) {
                return;
            }
            const width = Laya.stage.width;
            const height = Laya.stage.height;
            Laya.stage.width = height;
            Laya.stage.height = width;
            Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        }
        onDisposed() { }
        dispose() {
            if (this.isDisposed) {
                return;
            }
            this.onDisposed();
            super.dispose();
        }
    }

    var DataUpdateType;
    (function (DataUpdateType) {
        DataUpdateType[DataUpdateType["PoseDataUpdate"] = 1] = "PoseDataUpdate";
        DataUpdateType[DataUpdateType["ActionDataUpdate"] = 2] = "ActionDataUpdate";
        DataUpdateType[DataUpdateType["ActionResultDataUpdate"] = 3] = "ActionResultDataUpdate";
        DataUpdateType[DataUpdateType["ArenaHomeDateUpdate"] = 10] = "ArenaHomeDateUpdate";
        DataUpdateType[DataUpdateType["ArenaEnterBattle"] = 11] = "ArenaEnterBattle";
        DataUpdateType[DataUpdateType["ArenaMatchSuccess"] = 12] = "ArenaMatchSuccess";
        DataUpdateType[DataUpdateType["ArenaRecordUpdate"] = 13] = "ArenaRecordUpdate";
        DataUpdateType[DataUpdateType["ArenaResultUpdate"] = 14] = "ArenaResultUpdate";
        DataUpdateType[DataUpdateType["ArenaConnected"] = 15] = "ArenaConnected";
        DataUpdateType[DataUpdateType["ArenaDisconnected"] = 16] = "ArenaDisconnected";
    })(DataUpdateType || (DataUpdateType = {}));
    var GameEventType;
    (function (GameEventType) {
        GameEventType[GameEventType["GameStart"] = 1] = "GameStart";
        GameEventType[GameEventType["GamePause"] = 2] = "GamePause";
        GameEventType[GameEventType["GameResume"] = 3] = "GameResume";
        GameEventType[GameEventType["GameOver"] = 4] = "GameOver";
        GameEventType[GameEventType["GameExit"] = 5] = "GameExit";
        GameEventType[GameEventType["GameGuideStart"] = 6] = "GameGuideStart";
        GameEventType[GameEventType["GameGuideFinish"] = 7] = "GameGuideFinish";
        GameEventType[GameEventType["GameGuideOver"] = 8] = "GameGuideOver";
        GameEventType[GameEventType["GameProcessUpdate"] = 9] = "GameProcessUpdate";
    })(GameEventType || (GameEventType = {}));
    var ActionType;
    (function (ActionType) {
        ActionType[ActionType["JumpRope"] = 1] = "JumpRope";
        ActionType[ActionType["Squat"] = 2] = "Squat";
        ActionType[ActionType["JumpingJack"] = 3] = "JumpingJack";
        ActionType[ActionType["ArmCircles"] = 4] = "ArmCircles";
        ActionType[ActionType["Plank"] = 5] = "Plank";
        ActionType[ActionType["SitUp"] = 6] = "SitUp";
        ActionType[ActionType["PushUp"] = 7] = "PushUp";
        ActionType[ActionType["Running"] = 8] = "Running";
        ActionType[ActionType["SitAndReach"] = 9] = "SitAndReach";
        ActionType[ActionType["front"] = 10] = "front";
        ActionType[ActionType["up"] = 11] = "up";
        ActionType[ActionType["down"] = 12] = "down";
        ActionType[ActionType["left"] = 13] = "left";
        ActionType[ActionType["right"] = 14] = "right";
        ActionType[ActionType["close"] = 15] = "close";
        ActionType[ActionType["Jump"] = 16] = "Jump";
    })(ActionType || (ActionType = {}));
    var NativeEventType;
    (function (NativeEventType) {
        NativeEventType["MovementsDataType"] = "movementsDataType";
        NativeEventType["GameReady"] = "gameReady";
        NativeEventType["GameGuideFinish"] = "gameGuideFinish";
        NativeEventType["GameLifeValue"] = "gameLifeValue";
        NativeEventType["GameStart"] = "gameStart";
        NativeEventType["GameOver"] = "gameOver";
        NativeEventType["IntoBox"] = "intoBox";
        NativeEventType["NavigateBack"] = "navigateBack";
        NativeEventType["ImgBase64"] = "imgBase64";
        NativeEventType["EyesEvent"] = "eyesEvent";
        NativeEventType["GameTransitionComplete"] = "gameTransitionComplete";
        NativeEventType["GameArenaReady"] = "gameArenaReady";
        NativeEventType["GameCountDownOver"] = "gameCountDownOver";
    })(NativeEventType || (NativeEventType = {}));
    var ActionDataType;
    (function (ActionDataType) {
        ActionDataType["BaseActionPointData"] = "BaseActionPointData";
        ActionDataType["BaseActionData"] = "BaseActionData";
        ActionDataType["ActionResultData"] = "ActionResultData";
    })(ActionDataType || (ActionDataType = {}));
    class MonitorCmd {
    }
    MonitorCmd.PlayBaskcketball = 'PlayBaskcketball';
    MonitorCmd.BasketBallIn = 'BasketBallIn';
    MonitorCmd.BasketBallReset = 'BasketBallReset';
    MonitorCmd.SetGuideMask = 'SetGuideMask';

    var PosePoint;
    (function (PosePoint) {
        PosePoint[PosePoint["nose"] = 0] = "nose";
        PosePoint[PosePoint["left_eye_inner"] = 1] = "left_eye_inner";
        PosePoint[PosePoint["left_eye"] = 2] = "left_eye";
        PosePoint[PosePoint["left_eye_outer"] = 3] = "left_eye_outer";
        PosePoint[PosePoint["right_eye_inner"] = 4] = "right_eye_inner";
        PosePoint[PosePoint["right_eye"] = 5] = "right_eye";
        PosePoint[PosePoint["right_eye_outer"] = 6] = "right_eye_outer";
        PosePoint[PosePoint["left_ear"] = 7] = "left_ear";
        PosePoint[PosePoint["right_ear"] = 8] = "right_ear";
        PosePoint[PosePoint["mouth_left"] = 9] = "mouth_left";
        PosePoint[PosePoint["mouth_right"] = 10] = "mouth_right";
        PosePoint[PosePoint["left_shoulder"] = 11] = "left_shoulder";
        PosePoint[PosePoint["right_shoulder"] = 12] = "right_shoulder";
        PosePoint[PosePoint["left_elbow"] = 13] = "left_elbow";
        PosePoint[PosePoint["right_elbow"] = 14] = "right_elbow";
        PosePoint[PosePoint["left_wrist"] = 15] = "left_wrist";
        PosePoint[PosePoint["right_wrist"] = 16] = "right_wrist";
        PosePoint[PosePoint["left_pinky"] = 17] = "left_pinky";
        PosePoint[PosePoint["right_pinky"] = 18] = "right_pinky";
        PosePoint[PosePoint["left_index"] = 19] = "left_index";
        PosePoint[PosePoint["right_index"] = 20] = "right_index";
        PosePoint[PosePoint["left_thumb"] = 21] = "left_thumb";
        PosePoint[PosePoint["right_thumb"] = 22] = "right_thumb";
        PosePoint[PosePoint["left_hip"] = 23] = "left_hip";
        PosePoint[PosePoint["right_hip"] = 24] = "right_hip";
        PosePoint[PosePoint["left_knee"] = 25] = "left_knee";
        PosePoint[PosePoint["right_knee"] = 26] = "right_knee";
        PosePoint[PosePoint["left_ankle"] = 27] = "left_ankle";
        PosePoint[PosePoint["right_ankle"] = 28] = "right_ankle";
        PosePoint[PosePoint["left_heel"] = 29] = "left_heel";
        PosePoint[PosePoint["right_heel"] = 30] = "right_heel";
        PosePoint[PosePoint["left_foot_index"] = 31] = "left_foot_index";
        PosePoint[PosePoint["right_foot_index"] = 32] = "right_foot_index";
    })(PosePoint || (PosePoint = {}));
    class PosePart {
    }
    PosePart.RightHand = [PosePoint.right_wrist, PosePoint.right_pinky, PosePoint.right_index, PosePoint.right_thumb];
    PosePart.leftHand = [PosePoint.left_wrist, PosePoint.left_pinky, PosePoint.left_index, PosePoint.left_thumb];
    PosePart.leftFoot = [PosePoint.left_ankle, PosePoint.left_heel, PosePoint.left_foot_index];
    PosePart.rightFoot = [PosePoint.right_ankle, PosePoint.right_heel, PosePoint.right_foot_index];
    PosePart.leftInstep = [PosePoint.left_ankle, PosePoint.left_foot_index];
    PosePart.rightInstep = [PosePoint.right_ankle, PosePoint.right_foot_index];
    PosePart.shoulders = [PosePoint.left_shoulder, PosePoint.right_shoulder];
    PosePart.hips = [PosePoint.left_hip, PosePoint.right_hip];
    PosePart.knees = [PosePoint.left_knee, PosePoint.right_knee];
    class PoseLine {
    }
    PoseLine.line1 = [PosePoint.left_wrist, PosePoint.left_elbow,];
    PoseLine.line2 = [PosePoint.left_shoulder, PosePoint.left_elbow,];
    PoseLine.line3 = [PosePoint.left_shoulder, PosePoint.right_shoulder,];
    PoseLine.line4 = [PosePoint.left_shoulder, PosePoint.left_hip,];
    PoseLine.line5 = [PosePoint.left_hip, PosePoint.left_knee,];
    PoseLine.line6 = [PosePoint.left_knee, PosePoint.left_ankle,];
    PoseLine.line7 = [PosePoint.right_wrist, PosePoint.right_elbow,];
    PoseLine.line8 = [PosePoint.right_elbow, PosePoint.right_shoulder,];
    PoseLine.line9 = [PosePoint.right_shoulder, PosePoint.right_hip,];
    PoseLine.line10 = [PosePoint.right_hip, PosePoint.right_knee,];
    PoseLine.line11 = [PosePoint.right_knee, PosePoint.right_ankle,];
    class AIPoint {
    }

    class GameConfig {
    }
    GameConfig.width = 1280;
    GameConfig.height = 720;
    GameConfig.scaleMode = "fixedauto";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.isTest = false;
    GameConfig.logDebug = false;

    class DataBase {
        constructor() {
            this._observers = [];
        }
        addObserver(observer) {
            if (this._observers.indexOf(observer) == -1) {
                this._observers.push(observer);
            }
        }
        removeObserver(observer) {
            const index = this._observers.indexOf(observer);
            if (index > -1) {
                this._observers.splice(index, 1);
            }
        }
        sendNotification(cmd, data = null) {
            const len = this._observers.length;
            for (let i = len - 1; i >= 0; i--) {
                const obs = this._observers[i];
                if (!obs) {
                    this._observers.splice(i, 1);
                    continue;
                }
                if (obs instanceof fgui.GObject && (!obs.visible || obs.isDisposed)) {
                    continue;
                }
                obs.updateDB(cmd, data);
            }
        }
    }

    class CookieUtil {
        static getItem(sKey) {
            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        }
        static setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                return false;
            }
            var sExpires = "";
            if (vEnd) {
                switch (vEnd.constructor) {
                    case Number:
                        sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                        break;
                    case String:
                        sExpires = "; expires=" + vEnd;
                        break;
                    case Date:
                        sExpires = "; expires=" + vEnd.toUTCString();
                        break;
                }
            }
            document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
            return true;
        }
        static removeItem(sKey, sPath, sDomain) {
            if (!sKey || !this.hasItem(sKey)) {
                return false;
            }
            document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
            return true;
        }
        static hasItem(sKey) {
            return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
        }
        static keys() {
            var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
            for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
                aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
            }
            return aKeys;
        }
    }

    class CommonData extends DataBase {
        constructor() {
            super();
            this._userId = CookieUtil.getItem("Account");
        }
        get userId() {
            return this._userId;
        }
        set userId(id) {
            this._userId = id;
        }
        get gameStartData() {
            return this._gameStartData;
        }
        set gameStartData(data) {
            this._gameStartData = data;
        }
    }

    class MathUtil {
        static getRandom(min, max) {
            return Math.floor(Math.random() * (max + 1 - min)) + min;
        }
        static toDecimal(num, decimalLeng) {
            return num.toFixed(decimalLeng);
        }
        static getDistance(x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        }
        static getPToPDistance(point1, point2) {
            return point1.distance(point2.x, point2.y);
        }
        static getIntersection(a, b, c, d) {
            let res = new Laya.Point();
            var area_abc = (a.x - c.x) * (b.y - c.y) - (a.y - c.y) * (b.x - c.x);
            var area_abd = (a.x - d.x) * (b.y - d.y) - (a.y - d.y) * (b.x - d.x);
            if (area_abc * area_abd >= 0) {
                return null;
            }
            var area_cda = (c.x - a.x) * (d.y - a.y) - (c.y - a.y) * (d.x - a.x);
            var area_cdb = area_cda + area_abc - area_abd;
            if (area_cda * area_cdb >= 0) {
                return null;
            }
            var t = area_cda / (area_abd - area_abc);
            var dx = t * (b.x - a.x), dy = t * (b.y - a.y);
            res.x = a.x + dx;
            res.y = a.y + dy;
            return res;
        }
        static percent(pList) {
            let total = 0;
            for (var k in pList) {
                total = total + pList[k];
            }
            let rand = Math.ceil(Math.random() * total);
            let pit = 0;
            for (var k in pList) {
                pit = pit + pList[k];
                if (rand <= pit) {
                    return k;
                }
            }
            return 0;
        }
        static getRotationPoint(p, center, angle) {
            let newPoint = new Laya.Point(p.x - center.x, center.y - p.y);
            const l = (-angle * Math.PI) / 180;
            const cosv = Math.cos(l);
            const sinv = Math.sin(l);
            let newX = ((newPoint.x - 0) * cosv - (newPoint.y - 0) * sinv + 0);
            let newY = ((newPoint.x - 0) * sinv + (newPoint.y - 0) * cosv + 0);
            newPoint.setTo(center.x + newX, center.y + (-newY));
            return newPoint;
        }
        static getRightTriangleAngle(A, B, C) {
            let AC = this.getPToPDistance(A, C);
            let BC = this.getPToPDistance(B, C);
            let tanA = BC / AC;
            let ang = Math.atan(tanA);
            return ang * 180 / Math.PI;
        }
        static getAngleHorizontal(x1, y1, x2, y2) {
            let res = Math.atan((y2 - y1) / (x2 - x1)) * 180 / Math.PI;
            if (x1 >= x2 && y1 >= y2) {
                res = Math.abs(res);
            }
            else if (x1 < x2 && y1 < y2) {
                res = Math.abs(res) - 180;
            }
            else if (x1 > x2 && y1 < y2) {
                res = res;
            }
            else if (x1 < x2 && y1 >= y2) {
                res = res - 180;
            }
            else if (x1 == x2 && y1 < y2) {
                res = -Math.abs(res);
            }
            return res;
        }
        static getLinePointByX(pA, pB, pC) {
            var A = pA.y - pB.y;
            var B = pB.x - pA.x;
            var C = pA.x * (pB.y - pA.y) - pA.y * (pB.x - pA.x);
            pC.y = (A * pC.x + C) / (-B);
            return pC;
        }
        static getLinePointByY(pA, pB, pC) {
            var A = pA.y - pB.y;
            var B = pB.x - pA.x;
            var C = pA.x * (pB.y - pA.y) - pA.y * (pB.x - pA.x);
            pC.x = (B * pC.y + C) / (-A);
            return pC;
        }
    }

    class ColliderUtil {
        static pointHitCircle(center, r, target) {
            let len = Math.sqrt(Math.pow(center.x - target.x, 2) + Math.pow(center.y - target.y, 2));
            if (len < r) {
                return true;
            }
            return false;
        }
        static circleHitCircle(center1, r1, center2, r2) {
            let len = Math.sqrt(Math.pow(center1.x - center2.x, 2) + Math.pow(center1.y - center2.y, 2));
            if (len < r1 + r2) {
                return true;
            }
            return false;
        }
        static pointHitRect(point, rect) {
            if (point.x >= rect.x && point.x <= rect.x + rect.width && point.y >= rect.y && point.y < rect.y + rect.height) {
                return true;
            }
            return false;
        }
        static circleHitRect(center, r, rect) {
            let newRect = new Laya.Rectangle(rect.x - r, rect.y, rect.width + 2 * r, rect.height);
            if (this.pointHitRect(center, { x: newRect.x, y: newRect.y, width: newRect.width, height: newRect.height })) {
                return true;
            }
            newRect.x = rect.x;
            newRect.y = rect.y - r;
            newRect.width = rect.width;
            newRect.height = rect.height + r * 2;
            if (this.pointHitRect(center, { x: newRect.x, y: newRect.y, width: newRect.width, height: newRect.height })) {
                return true;
            }
            let vertex = new Laya.Point(rect.x, rect.y);
            if (this.pointHitCircle(center, r, vertex)) {
                return true;
            }
            vertex.setTo(rect.x + rect.width, rect.y);
            if (this.pointHitCircle(center, r, vertex)) {
                return true;
            }
            vertex.setTo(rect.x, rect.y + rect.height);
            if (this.pointHitCircle(center, r, vertex)) {
                return true;
            }
            vertex.setTo(rect.x + rect.width, rect.y + rect.height);
            if (this.pointHitCircle(center, r, vertex)) {
                return true;
            }
            return false;
        }
        static LineHitLine(lineAp1, lineAp2, lineBp1, lineBp2) {
            let num1 = (lineAp2.x - lineAp1.x) * (lineBp1.x - lineAp1.x) - (lineAp2.y - lineAp1.y) * (lineBp1.y - lineAp1.y);
            let num2 = (lineAp2.x - lineAp1.x) * (lineBp2.x - lineAp1.x) - (lineAp2.y - lineAp1.y) * (lineBp2.y - lineAp1.y);
            if (num1 > 0 && num2 < 0) {
                return true;
            }
            if (num2 > 0 && num1 < 0) {
                return true;
            }
            return false;
        }
        static lineHitRect(point1, point2, rect) {
            let LineBP1 = { x: rect.x, y: rect.y };
            let LineBP2 = { x: rect.x + rect.width, y: rect.y + rect.height };
            let LineCP1 = { x: rect.x, y: rect.y + rect.height };
            let LineCP2 = { x: rect.x + rect.width, y: rect.y };
            if (MathUtil.getIntersection(point1, point2, LineBP1, LineBP2) || MathUtil.getIntersection(point1, point2, LineCP1, LineCP2)) {
                return true;
            }
            return false;
        }
    }
    class RectInfo {
    }

    class MainData extends DataBase {
        constructor() {
            super();
            this._poseDataArr = [];
            this._realHeight = Laya.Browser.onIOS ? Laya.stage.height : Laya.stage.width / GameConfig.height * GameConfig.height;
            this.setPoseData();
            this.setActionData();
            this.setActionResultData();
        }
        setPoseData() {
            if (GameConfig.isTest) {
                Laya.timer.frameLoop(1, this, () => {
                    this.sendNotification(DataUpdateType.PoseDataUpdate);
                });
                return;
            }
            Laya.Browser.window.setPoseData = (data) => {
                this.parsePointData(data);
                this.sendNotification(DataUpdateType.PoseDataUpdate);
            };
        }
        setActionData() {
            Laya.Browser.window.setActionData = (data) => {
                this.sendNotification(DataUpdateType.ActionDataUpdate, data);
            };
        }
        setActionResultData() {
            if (GameConfig.isTest) {
                Laya.timer.loop(1000, this, () => {
                    const data = { result: 10 };
                    this.sendNotification(DataUpdateType.ActionResultDataUpdate, data);
                });
                return;
            }
            Laya.Browser.window.setActionResultData = (data) => {
                this.sendNotification(DataUpdateType.ActionResultDataUpdate, data);
            };
        }
        parsePointData(data) {
            let arr = data.landmarks.split(",").map((val, index) => {
                if ((index & 1) === 0) {
                    return +val * Laya.stage.width;
                }
                else {
                    return +val * Laya.stage.height;
                }
            });
            this._poseDataArr.push(arr);
        }
        getPartPos(part) {
            if (GameConfig.isTest) {
                return Laya.Point.create().setTo(Laya.stage.mouseX, Laya.stage.mouseY);
            }
            let res = new Laya.Point();
            const len = this._poseDataArr.length;
            if (len > 0) {
                let arr = this._poseDataArr[len - 1];
                res.x = arr[part * 2];
                res.y = arr[part * 2 + 1];
            }
            return res;
        }
        exitGame() {
            this._poseDataArr.length = 0;
        }
        hitUIPanel(UIComp, center, r) {
            let scorePanel = UIComp.getChild("scorePanel");
            let timePanel = UIComp.getChild("timePanel");
            let levelPanel = UIComp.getChild("levelPanel");
            let rect = new Laya.Rectangle(scorePanel.x, scorePanel.y, scorePanel.width, scorePanel.height);
            if (ColliderUtil.circleHitRect(center, r, rect)) {
                return true;
            }
            rect.setTo(timePanel.x, timePanel.y, timePanel.width, timePanel.height);
            if (ColliderUtil.circleHitRect(center, r, rect)) {
                return true;
            }
            rect.setTo(levelPanel.x, levelPanel.y, levelPanel.width, levelPanel.height);
            if (ColliderUtil.circleHitRect(center, r, rect)) {
                return true;
            }
            return false;
        }
    }

    var GameData;
    (function (GameData) {
    })(GameData || (GameData = {}));
    class DataDrive {
        static init() {
            if (GameConfig.debug || GameConfig.stat) {
                Laya.Browser.window.GameData = GameData;
            }
            GameData.common = new CommonData();
            GameData.main = new MainData();
        }
    }

    class UI_CompBird extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompBird"));
        }
        onConstruct() {
            this.ani0 = (this.getChild("ani0"));
            this.ani1 = (this.getChild("ani1"));
            this.ani2 = (this.getChild("ani2"));
        }
    }
    UI_CompBird.URL = "ui://8p08ilxicq0p1y";

    class CompBird extends UI_CompBird {
        onConstruct() {
            super.onConstruct();
        }
        playAni() {
            Laya.Tween.to(this.ani0, { x: -1000, y: -1000 }, 3000, null);
            Laya.Tween.to(this.ani1, { x: 1000, y: -1200 }, 3000, null);
            Laya.Tween.to(this.ani2, { x: 1000, y: -800 }, 3000, null);
        }
    }

    class SpineTempletManager {
        constructor() {
            this.spineTemplets = new Map();
            this.onLoading = new Map();
        }
        static get inst() {
            if (!this._inst) {
                this._inst = new SpineTempletManager();
            }
            Laya.Browser.window["spineTempletMap"] = this._inst.spineTemplets;
            return this._inst;
        }
        createUIAnim(name, module, gameName, cb) {
            if (this.onLoading.has(name)) {
                if (cb) {
                    this.onLoading.get(name).callBackArr.push(cb);
                }
                return;
            }
            if (!this.spineTemplets.has(name)) {
                let tpd = new SpineTempletData();
                let sptp = new Laya.SpineTemplet(Laya.SpineVersion.v3_8);
                tpd.templet = sptp;
                tpd.name = name;
                if (cb) {
                    tpd.callBackArr = [cb];
                }
                else {
                    tpd.callBackArr = [];
                }
                this.onLoading.set(name, tpd);
                sptp.on(Laya.Event.COMPLETE, this, this.parseComplete, [tpd]);
                sptp.on(Laya.Event.ERROR, this, this.onError, [tpd]);
                if (gameName) {
                    sptp.loadAni("res/sk/" + module + "/" + gameName + "/" + name + "/" + name + ".json");
                }
                else {
                    sptp.loadAni("res/sk/" + module + "/" + name + "/" + name + ".json");
                }
                return;
            }
            if (cb) {
                Laya.timer.callLater(this, (name) => {
                    if (this.spineTemplets.has(name)) {
                        let sk = this.spineTemplets.get(name).getSkeleton();
                        let res = cb.runWith(sk);
                    }
                    else {
                        cb.runWith(null);
                    }
                }, [name]);
            }
        }
        getSpineTemplets() {
            return this.spineTemplets;
        }
        parseComplete(tdata, Templet) {
            if (this.onLoading.has(tdata.name)) {
                this.onLoading.delete(tdata.name);
            }
            if (!tdata || !tdata.templet) {
                if (Templet) {
                    Templet.destroy();
                }
                return;
            }
            this.spineTemplets.set(tdata.name, tdata);
            tdata.loadEnd();
        }
        onError(tdata, error) {
            console.error("加载动画出错", error);
            if (!tdata || !tdata.templet) {
                return;
            }
            if (this.onLoading.has(tdata.name)) {
                this.onLoading.delete(tdata.name);
            }
            if (tdata.callBackArr.length > 0) {
                for (let i = 0; i < tdata.callBackArr.length; i++) {
                    const cb = tdata.callBackArr[i];
                    if (cb) {
                        cb.once = true;
                        cb.runWith(null);
                    }
                }
            }
            tdata.destroy();
        }
    }
    class SpineTempletData {
        constructor() {
            this.name = null;
            this.templet = null;
            this.callBackArr = [];
        }
        getSkeleton() {
            if (this.templet) {
                let sk = this.templet.buildArmature();
                return sk;
            }
            return null;
        }
        loadEnd() {
            if (this.callBackArr.length > 0) {
                for (let i = 0; i < this.callBackArr.length; i++) {
                    const cb = this.callBackArr[i];
                    if (cb) {
                        cb.once = true;
                        cb.runWith(this.getSkeleton());
                        cb.recover();
                    }
                }
            }
            this.callBackArr = [];
        }
        destroy() {
            this.callBackArr = [];
            if (this.templet) {
                this.templet.destroy();
                this.templet = null;
            }
        }
    }

    class SpineAni extends Laya.Sprite {
        constructor(skName, module, gameName, complete) {
            super();
            if (skName) {
                this.loadAni(skName, module, gameName, complete);
            }
        }
        loadAni(skName, module, gameName, complete) {
            this._complete = complete;
            SpineTempletManager.inst.createUIAnim(skName, module, gameName, Laya.Handler.create(this, this.parseComplete));
        }
        parseComplete(sk) {
            this._sk = sk;
            this.addChild(this._sk);
            this._sk.on(Laya.Event.STOPPED, this, this.onStop);
            if (this._complete) {
                this._complete.run();
                this._complete = null;
            }
            return 99;
        }
        setSkXY(x, y) {
            this._sk.x = x;
            this._sk.y = y;
        }
        play(actName, loop, lighter, scaleX, scaleY, startTime) {
            if (this._sk) {
                if (lighter) {
                    this._sk.blendMode = Laya.BlendMode.LIGHTER;
                }
                if (startTime) {
                    this._sk.play(actName, loop, false, startTime);
                }
                else {
                    this._sk.play(actName, loop, true);
                }
                if (scaleX || scaleY) {
                    this._sk.scale(scaleX, scaleY, true);
                }
            }
        }
        changeSkin(name) {
            if (this._sk) {
                this._sk.showSkinByName(name);
            }
        }
        stop() {
            if (this._sk) {
                this._sk.stop();
            }
        }
        paused() {
            if (this._sk) {
                this._sk.paused();
            }
        }
        playbackRate(speed) {
            if (this._sk) {
                this._sk.playbackRate(speed);
            }
        }
        onStopped(caller, func, params = null, once = true) {
            if (once) {
                this._onceStopCallBack = Laya.Handler.create(caller, func, params, once);
            }
            else {
                this._stopCallBack = Laya.Handler.create(caller, func, params, once);
            }
        }
        offStopped() {
            if (this._stopCallBack) {
                this._stopCallBack.recover();
                this._stopCallBack = null;
            }
            if (this._onceStopCallBack) {
                this._onceStopCallBack.recover();
                this._onceStopCallBack = null;
            }
        }
        onStop() {
            if (this._onceStopCallBack) {
                let handler = this._onceStopCallBack;
                this._onceStopCallBack = null;
                handler.run();
            }
            if (this._stopCallBack) {
                this._stopCallBack.run();
            }
        }
        destroy() {
            if (this._sk) {
                this._sk.offAllCaller(this);
                this._sk.stop();
                this._sk.removeSelf();
                this._sk.destroy(true);
                this._sk = null;
            }
            if (this._complete) {
                this._complete.recover();
                this._complete = null;
            }
            if (this._onceStopCallBack) {
                this._onceStopCallBack.recover();
                this._onceStopCallBack = null;
            }
            if (this._stopCallBack) {
                this._stopCallBack.recover();
                this._stopCallBack = null;
            }
            super.destroy(true);
        }
    }

    class CompClimbingRole extends Laya.Sprite {
        constructor() {
            super();
            this._step = null;
            this._updateXTime = 0;
            this._roleState = 0;
            this._r = 30;
            this._onJump = false;
            this._jumpUpTime = 200;
            this._lastJumpTime = 0;
        }
        init(obj, storeyHeight, complete) {
            this._contentPane = obj;
            this._jumpHeight = storeyHeight * 2 - 100;
            this._role = new SpineAni("leopard", "climbingman", null, Laya.Handler.create(this, () => {
                this.setState(0);
                complete.run();
            }));
            this.addChild(this._role);
            this._role.y = -35;
            obj.displayObject.addChild(this);
            this.pos(Laya.stage.width / 2, -300);
        }
        rebirth() {
            if (this._step) {
                this.offTheStep();
            }
            this.pos(Laya.stage.width / 2, -300);
        }
        updateX(x) {
            const now = Date.now();
            const speed = (x - this.x) / (now - this._updateXTime);
            this._updateXTime = now;
            this.x = x;
            if (this._step) {
                if (this.x < 0 - this._r || this.x > this._step.width + this._r) {
                    this.offTheStep();
                }
            }
            else {
                if (this.x < this._r) {
                    this.x = this._r;
                }
                else if (this.x > this._contentPane.width - this._r) {
                    this.x = this._contentPane.width - this._r;
                }
            }
            this.setState(this.getMoveState(speed));
        }
        getMoveState(speed) {
            let state = 0;
            if (speed !== 0) {
                switch (this._roleState) {
                    case 13:
                        state = speed < 0 ? 13 : 11;
                        break;
                    case 14:
                        state = speed < 0 ? 12 : 14;
                        break;
                    default:
                        state = speed < 0 ? 7 : 8;
                }
            }
            return state;
        }
        updateY(yIncreased, steps) {
            if (this._onJump) {
                return false;
            }
            let realY = this.y;
            if (!this._step) {
                this.y += yIncreased;
                for (let obj of steps) {
                    if (obj.collision(this.x - this._r, this.y) || obj.collision(this.x + this._r, this.y)) {
                        this.onTheStep(obj);
                        break;
                    }
                }
            }
            else {
                realY = this._step.y;
                for (let obj of steps) {
                    if (!obj.isActive) {
                        continue;
                    }
                }
            }
            if (realY > this._contentPane.height + 180) {
                return true;
            }
            return false;
        }
        onTheStep(step) {
            this.setState(this.getJumpState(1));
            this.removeSelf();
            step.displayObject.addChild(this);
            this.x = this.x - step.x;
            this.y = 0;
            this._step = step;
            step.onRoleStandUp();
        }
        setState(state) {
            if (state === this._roleState) {
                return;
            }
            this._roleState = state;
            this._role.offStopped();
            switch (state) {
                case 0:
                    this._role.playbackRate(1);
                    this._role.play("animation", true);
                    break;
                case 1:
                    this._role.playbackRate(2);
                    this._role.play("jump", false);
                    this._role.onStopped(this, this.setState, [0]);
                    break;
                case 2:
                    this._role.playbackRate(2);
                    this._role.play("left_jump", false);
                    this._role.onStopped(this, this.setState, [13]);
                    break;
                case 3:
                    this._role.playbackRate(2);
                    this._role.play("right_jump", false);
                    this._role.onStopped(this, this.setState, [14]);
                    break;
                case 4:
                    this._role.playbackRate(3);
                    this._role.play("jump2", false);
                    this._role.onStopped(this, this.setState, [0]);
                    break;
                case 5:
                    this._role.playbackRate(3);
                    this._role.play("left_jump2", false);
                    this._role.onStopped(this, this.setState, [13]);
                    break;
                case 6:
                    this._role.playbackRate(3);
                    this._role.play("right_jump2", false);
                    this._role.onStopped(this, this.setState, [14]);
                    break;
                case 7:
                    this._role.playbackRate(3);
                    this._role.play("left1", false);
                    this._role.onStopped(this, this.setState, [13]);
                    break;
                case 8:
                    this._role.playbackRate(3);
                    this._role.play("right1", false);
                    this._role.onStopped(this, this.setState, [14]);
                    break;
                case 9:
                    this._role.playbackRate(3);
                    this._role.play("left3", false);
                    this._role.onStopped(this, this.setState, [0]);
                    break;
                case 10:
                    this._role.playbackRate(3);
                    this._role.play("right3", false);
                    this._role.onStopped(this, this.setState, [0]);
                    break;
                case 11:
                    this._role.playbackRate(3);
                    this._role.play("left3", false);
                    this._role.onStopped(this, () => {
                        this._role.play("right1", false);
                        this._role.onStopped(this, this.setState, [14]);
                    });
                    break;
                case 12:
                    this._role.playbackRate(3);
                    this._role.play("right3", false);
                    this._role.onStopped(this, () => {
                        this._role.play("left1", false);
                        this._role.onStopped(this, this.setState, [13]);
                    });
                    break;
                case 13:
                    this._role.playbackRate(1);
                    this._role.play("left2", true);
                    break;
                case 14:
                    this._role.playbackRate(1);
                    this._role.play("right2", true);
                    break;
            }
        }
        offTheStep() {
            if (this._step) {
                this.removeSelf();
                this._contentPane.displayObject.addChild(this);
                this.x = this._step.x + this.x;
                this.y = this._step.y;
                this._step = null;
            }
        }
        jump() {
            if (this._onJump) {
                return;
            }
            let now = Date.now();
            if (now - this._lastJumpTime < this._jumpUpTime * 2) {
                return;
            }
            this._onJump = true;
            this._lastJumpTime = now;
            this.offTheStep();
            this.setState(this.getJumpState(0));
            Laya.Tween.to(this, { y: this.y - this._jumpHeight }, this._jumpUpTime, null, Laya.Handler.create(this, () => {
                this._onJump = false;
            }));
        }
        getJumpState(type) {
            let res;
            switch (this._roleState) {
                case 13:
                case 2:
                case 5:
                case 7:
                case 12:
                    res = type === 0 ? 2 : 5;
                    break;
                case 14:
                case 3:
                case 6:
                case 8:
                case 11:
                    res = type === 0 ? 3 : 6;
                    break;
                default:
                    res = type === 0 ? 1 : 4;
                    break;
            }
            return res;
        }
        get stageY() {
            if (this._step) {
                return this._step.y;
            }
            return this.y;
        }
    }

    class CompClouds {
        constructor(context) {
            this._movingClouds = new Set();
            this._context = context;
            Laya.timer.loop(1000, this, this.updateTime);
        }
        updateTime() {
            if ([...this._movingClouds.keys()].length < 2) {
                this.startANewMove();
            }
        }
        startANewMove() {
            let index = MathUtil.getRandom(0, 5);
            while (this._movingClouds.has(index)) {
                index = MathUtil.getRandom(0, 5);
            }
            this._movingClouds.add(index);
            let obj = this._context["cloud" + index];
            if (obj.x < 0) {
                Laya.Tween.to(obj, { x: Laya.stage.width + 10 }, MathUtil.getRandom(3000, 5000), null, Laya.Handler.create(this, () => {
                    this._movingClouds.delete(index);
                }));
            }
            else if (obj.x > Laya.stage.width) {
                Laya.Tween.to(obj, { x: 0 - obj.width }, MathUtil.getRandom(3000, 5000), null, Laya.Handler.create(this, () => {
                    this._movingClouds.delete(index);
                }));
            }
        }
        beforeClose() {
            Laya.timer.clear(this, this.updateTime);
        }
    }

    class CompDangerousNotice {
        constructor(self) {
            this._self = self;
            this.hideDangerous();
        }
        showDangerous() {
            if (this._self.visible === false) {
                this._self.visible = true;
                this._self.dangerous.play(null, -1);
                Laya.timer.frameLoop(1, this, this.moveProgress);
            }
        }
        moveProgress() {
            this._self.imgProgress.x += 5;
            if (this._self.imgProgress.x >= 0) {
                this._self.imgProgress.x = -(this._self.imgProgress.width - Laya.stage.width);
            }
        }
        hideDangerous() {
            Laya.timer.clear(this, this.moveProgress);
            this._self.visible = false;
            this._self.dangerous.stop();
            this._self.imgProgress.x = -(this._self.imgProgress.width - Laya.stage.width);
        }
    }

    class UI_CompScoreUIPanel extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompScoreUIPanel"));
        }
        onConstruct() {
            this.lifeValue = this.getController("lifeValue");
            this.textScore = (this.getChild("textScore"));
            this.heart2 = (this.getChild("heart2"));
            this.heart1 = (this.getChild("heart1"));
            this.heart0 = (this.getChild("heart0"));
            this.heart3 = (this.getChild("heart3"));
            this.heart4 = (this.getChild("heart4"));
        }
    }
    UI_CompScoreUIPanel.URL = "ui://8p08ilxifkdmr";

    class CompScoreUI extends UI_CompScoreUIPanel {
        onConstruct() {
            super.onConstruct();
        }
        init(lifeValue, score = 0) {
            this._life = lifeValue;
            this.score = score;
            this.lifeValue.selectedIndex = this._life;
            this.textScore.text = this.score.toString();
        }
        deductLife() {
            this._life--;
            let obj = this.getChild("heart" + this._life);
            if (obj) {
                obj.ani.setPlaySettings(null, null, 1, null, Laya.Handler.create(this, () => {
                    obj.ani.visible = false;
                }));
                obj.ani.playing = true;
            }
        }
        get life() {
            return this._life;
        }
        set score(score) {
            if (score != this._score) {
                this._score = score;
                this.textScore.text = this._score.toString();
            }
        }
        get score() {
            return this._score;
        }
    }

    class UI_CompSpeedUp extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompSpeedUp"));
        }
        onConstruct() {
            this.left0 = (this.getChild("left0"));
            this.left1 = (this.getChild("left1"));
            this.left2 = (this.getChild("left2"));
            this.left3 = (this.getChild("left3"));
            this.left4 = (this.getChild("left4"));
            this.left5 = (this.getChild("left5"));
            this.left6 = (this.getChild("left6"));
            this.left7 = (this.getChild("left7"));
            this.right7 = (this.getChild("right7"));
            this.right6 = (this.getChild("right6"));
            this.right5 = (this.getChild("right5"));
            this.right4 = (this.getChild("right4"));
            this.right3 = (this.getChild("right3"));
            this.right2 = (this.getChild("right2"));
            this.right1 = (this.getChild("right1"));
            this.right0 = (this.getChild("right0"));
        }
    }
    UI_CompSpeedUp.URL = "ui://8p08ilxijzlc2k";

    class CompSpeedUp extends UI_CompSpeedUp {
        constructor() {
            super(...arguments);
            this._leftMovingLines = new Set();
            this._leftIdleLines = new Set();
            this._rightMovingLines = new Set();
            this._rightIdleLines = new Set();
            this._speed = 500;
            this._createInterval = 600;
            this._lastCreateTime = 0;
            this._paused = false;
        }
        onConstruct() {
            super.onConstruct();
            this.resetLines(Laya.stage.width);
        }
        start() {
            Laya.timer.frameLoop(1, this, this.updateFrame);
        }
        updateFrame() {
            if (this._paused) {
                return;
            }
            const dt = Laya.timer.delta / 1000;
            this.doMove(dt, this._leftMovingLines, this._leftIdleLines, "left");
            this.doMove(dt, this._rightMovingLines, this._rightIdleLines, "right");
            const now = Date.now();
            if (now - this._lastCreateTime > this._createInterval) {
                const partWidth = Laya.stage.width / 6;
                this.createLine(this._leftIdleLines, this._leftMovingLines, MathUtil.getRandom(partWidth, partWidth * 2), "left");
                this.createLine(this._rightIdleLines, this._rightMovingLines, MathUtil.getRandom(partWidth * 4, partWidth * 5), "right");
                this._lastCreateTime = now;
            }
        }
        createLine(idleLines, movingLines, x, name) {
            let arr = [...idleLines.keys()];
            if (arr.length > 0) {
                let obj = this[name + arr[0]];
                obj.x = x;
                idleLines.delete(arr[0]);
                movingLines.add(arr[0]);
            }
        }
        doMove(dt, movingLines, idleLines, name) {
            for (let index of movingLines) {
                let obj = this[name + index];
                obj.y -= dt * this._speed;
                if (obj.y < 0 - obj.height) {
                    movingLines.delete(index);
                    obj.y = Laya.stage.height;
                    idleLines.add(index);
                }
            }
        }
        stop() {
            Laya.timer.clear(this, this.updateFrame);
            this.resetLines(Laya.stage.height);
        }
        set paused(val) {
            this._paused = val;
        }
        resetLines(y) {
            this._leftIdleLines.clear();
            this._leftMovingLines.clear();
            this._rightIdleLines.clear();
            this._rightMovingLines.clear();
            for (let i = 0; i < 8; i++) {
                this["left" + i].y = y;
                this["right" + i].y = y;
                this._leftIdleLines.add(i);
                this._rightIdleLines.add(i);
            }
        }
    }

    class UI_CompSteps extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompSteps"));
        }
        onConstruct() {
            this.bg = (this.getChild("bg"));
            this.underLand = (this.getChild("underLand"));
        }
    }
    UI_CompSteps.URL = "ui://8p08ilxilgl11";

    class UI_CompBigCrystal extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompBigCrystal"));
        }
        onConstruct() {
            this.img = (this.getChild("img"));
        }
    }
    UI_CompBigCrystal.URL = "ui://8p08ilxicq0p2g";

    class UI_CompBigStone extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompBigStone"));
        }
        onConstruct() {
            this.img = (this.getChild("img"));
        }
    }
    UI_CompBigStone.URL = "ui://8p08ilxicq0p28";

    class UI_CompColumn extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompColumn"));
        }
        onConstruct() {
            this.img = (this.getChild("img"));
        }
    }
    UI_CompColumn.URL = "ui://8p08ilxicq0p24";

    class UI_CompEggs extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompEggs"));
        }
        onConstruct() {
            this.img = (this.getChild("img"));
        }
    }
    UI_CompEggs.URL = "ui://8p08ilxicq0p2b";

    class UI_CompFire extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompFire"));
        }
        onConstruct() {
            this.ani = (this.getChild("ani"));
        }
    }
    UI_CompFire.URL = "ui://8p08ilxicq0p1u";

    class UI_CompFlowers extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompFlowers"));
        }
        onConstruct() {
            this.ani = (this.getChild("ani"));
        }
    }
    UI_CompFlowers.URL = "ui://8p08ilxicq0p1w";

    class UI_CompSmallCrystal extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompSmallCrystal"));
        }
        onConstruct() {
            this.img = (this.getChild("img"));
        }
    }
    UI_CompSmallCrystal.URL = "ui://8p08ilxicq0p2f";

    class UI_CompSmallStone extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompSmallStone"));
        }
        onConstruct() {
            this.img = (this.getChild("img"));
        }
    }
    UI_CompSmallStone.URL = "ui://8p08ilxicq0p27";

    class UI_CompThorns extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompThorns"));
        }
        onConstruct() {
            this.img = (this.getChild("img"));
        }
    }
    UI_CompThorns.URL = "ui://8p08ilxicq0p2c";

    class UI_CompTreasure extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompTreasure"));
        }
        onConstruct() {
            this.img = (this.getChild("img"));
        }
    }
    UI_CompTreasure.URL = "ui://8p08ilxicq0p2i";

    class UI_CompTree extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompTree"));
        }
        onConstruct() {
            this.img = (this.getChild("img"));
        }
    }
    UI_CompTree.URL = "ui://8p08ilxicq0p22";

    class UI_CompTrees extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompTrees"));
        }
        onConstruct() {
            this.img = (this.getChild("img"));
        }
    }
    UI_CompTrees.URL = "ui://8p08ilxicq0p21";

    class StepDecorations {
        constructor() {
            this._decorations = new Map();
            this._decorations.set(186, UI_CompBigCrystal);
            this._decorations.set(156, UI_CompBigStone);
            this._decorations.set(223, CompBird);
            this._decorations.set(101, UI_CompColumn);
            this._decorations.set(203, UI_CompEggs);
            this._decorations.set(90, UI_CompFire);
            this._decorations.set(138, UI_CompFlowers);
            this._decorations.set(86, UI_CompSmallCrystal);
            this._decorations.set(53, UI_CompSmallStone);
            this._decorations.set(286, UI_CompThorns);
            this._decorations.set(178, UI_CompTreasure);
            this._decorations.set(68, UI_CompTree);
            this._decorations.set(151, UI_CompTrees);
        }
        static get instance() {
            if (!this._instance) {
                this._instance = new StepDecorations();
            }
            return this._instance;
        }
        addDecorations(step) {
            let res = [];
            let width = step.width;
            let obj = this.createDecorations(width);
            let x = MathUtil.getRandom(0, width - obj.width);
            obj.x = x;
            obj.y = 0 - obj.height;
            step.addChild(obj);
            let left = x;
            let right = step.width - x - obj.width;
            if (left > right) {
                width = x;
            }
            else {
                width = width - x - obj.width;
            }
            res.push(obj);
            if (MathUtil.getRandom(1, 99) > 49) {
                let obj1 = this.createDecorations(width);
                if (obj1) {
                    if (left > right) {
                        x = MathUtil.getRandom(0, obj.x - obj1.width);
                    }
                    else {
                        x = MathUtil.getRandom(obj.x + obj.width, step.width - obj1.width);
                    }
                    obj1.x = x;
                    obj1.y = 0 - obj1.height;
                    step.addChild(obj1);
                    res.push(obj1);
                }
            }
            return res;
        }
        createDecorations(width) {
            const arr = [];
            for (let [key, value] of this._decorations) {
                if (key <= width) {
                    arr.push(value);
                }
            }
            return arr.length < 1 ? null : arr[MathUtil.getRandom(0, arr.length - 1)].createInstance();
        }
    }

    class CompSteps extends UI_CompSteps {
        constructor() {
            super(...arguments);
            this._landConfig = {
                leftWidth: 129,
                rightWidth: 143,
                margins: 20,
            };
            this._isFirstStandUp = true;
        }
        onConstruct() {
            super.onConstruct();
        }
        init(parent, widthPercent) {
            this.width = parent.width * widthPercent;
            this.x = MathUtil.getRandom(0, parent.width - this.width);
            this.y = 0 - this.height;
            this.createUanderLand();
            this._decorations = StepDecorations.instance.addDecorations(this);
            parent.addChild(this);
            this.visible = true;
        }
        updatePos(moveLength) {
            if (!this.visible) {
                return;
            }
            if (this.y > this.parent.height + 200) {
                this.recover();
            }
            this.y += moveLength;
        }
        collision(x, y) {
            if (x >= this.x && x <= this.x + this.width && y >= this.y && y < this.y + this.height) {
                return true;
            }
            return false;
        }
        createUanderLand() {
            this.underLand.leftLand.visible = false;
            this.underLand.rightLand.visible = false;
            this.underLand.leftLand.width = this._landConfig.leftWidth;
            this.underLand.rightLand.width = this._landConfig.rightWidth;
            this.underLand.x = 0;
            if (this.width <= this._landConfig.rightWidth + this._landConfig.margins * 2) {
                this.underLand.leftLand.x = this._landConfig.margins;
                this.underLand.leftLand.width = this.width - this._landConfig.margins * 2;
            }
            else if (this.width <= this._landConfig.rightWidth + this._landConfig.margins * 4) {
                this.underLand.rightLand.visible = true;
                this.underLand.rightLand.x = this._landConfig.margins;
                this.underLand.rightLand.width = this.width - this._landConfig.margins * 2;
            }
            else if (this.width <= this._landConfig.leftWidth + this._landConfig.rightWidth + this._landConfig.margins * 2) {
                this.underLand.leftLand.visible = true;
                this.underLand.rightLand.visible = true;
                this.underLand.leftLand.x = this._landConfig.margins;
                this.underLand.rightLand.x = this.width - this._landConfig.margins - this._landConfig.rightWidth;
            }
            else {
                this.underLand.leftLand.visible = true;
                this.underLand.rightLand.visible = true;
                let r = (this.width - this._landConfig.leftWidth - this._landConfig.rightWidth - this._landConfig.margins * 2) / 2;
                this.underLand.leftLand.width = this._landConfig.leftWidth + r;
                this.underLand.rightLand.width = this._landConfig.rightWidth + r;
                this.underLand.leftLand.x = this._landConfig.margins;
                this.underLand.rightLand.x = this.width - this._landConfig.margins - this.underLand.rightLand.width;
            }
        }
        onRoleStandUp() {
            if (this._isFirstStandUp) {
                this._isFirstStandUp = false;
                for (let obj of this._decorations) {
                    if (obj["playAni"]) {
                        obj.playAni();
                    }
                }
            }
        }
        get isActive() {
            return this.visible;
        }
        recover() {
            this.visible = false;
            this._isFirstStandUp = true;
            for (let obj of this._decorations) {
                obj.dispose();
            }
            this._decorations.length = 0;
            this.removeFromParent();
        }
    }

    class ClimbingMan extends UIBase {
        constructor() {
            super("climbingman", "ClimbingMan", LayerType.Scenes, false, true);
            this._stepsList = [];
            this._gameTime = 0;
            this._score = 0;
            this._level = 0;
            this._rebirthTime = 0;
            this._lastStep = null;
            this._config = {
                lifeValue: 3,
                storeyHeight: 250,
                roleDropSpeed: 550,
                rebirthTime: 1000,
                levelInfo: [
                    { speed: 150, width: 0.5 },
                    { speed: 200, width: 0.4 },
                    { speed: 250, width: 0.35 },
                    { speed: 300, width: 0.3 },
                    { speed: 350, width: 0.25 },
                ]
            };
            this.setExtension(CompScoreUI.URL, CompScoreUI);
            this.setExtension(CompSteps.URL, CompSteps);
            this.setExtension(CompBird.URL, CompBird);
            this.setExtension(CompSpeedUp.URL, CompSpeedUp);
        }
        Start() {
            this._role = new CompClimbingRole();
            this._scoreUI = this.contentPane.scoreUI;
            this._dangerousNotice = new CompDangerousNotice(this.contentPane.compDangerous);
            this._compClouds = new CompClouds(this.contentPane);
            this._compSpeedUp = this.contentPane.speedUp;
            Laya.stage.on(Laya.Event.KEY_DOWN, this, (e) => {
                if (e.nativeEvent["key"] == "ArrowLeft") {
                    this._role.updateX(this._role.x - 10);
                }
                else if (e.nativeEvent["key"] == "ArrowRight") {
                    this._role.updateX(this._role.x + 10);
                }
                else if (e.nativeEvent["key"] == " ") {
                    this._role.jump();
                }
            });
        }
        updateDB(cmd, data) {
            switch (cmd) {
                case DataUpdateType.PoseDataUpdate:
                    this.updateRolePos();
                    break;
                case DataUpdateType.ActionDataUpdate:
                    this.setRoleAction(data);
                    break;
            }
        }
        eventHandler(eventType, data) {
            switch (eventType) {
                case GameEventType.GameStart:
                    this.gameStart();
                    break;
                case GameEventType.GamePause:
                    this._compSpeedUp.paused = true;
                    break;
                case GameEventType.GameResume:
                    this._compSpeedUp.paused = false;
                    break;
            }
        }
        updateUI(data) {
            this.addObs(GameData.main);
            this._role.init(this.contentPane, this._config.storeyHeight, Laya.Handler.create(this, () => {
                this.gameStart();
            }));
        }
        gameStart() {
            this._gameTime = 0;
            this._score = 0;
            this._scoreUI.init(this._config.lifeValue);
            this._compSpeedUp.start();
        }
        updateFrame(s, ms) {
            const now = Date.now();
            const moveLength = this.levelInfo.speed * s;
            for (let obj of this._stepsList) {
                obj.updatePos(moveLength);
            }
            let isDeath = this._role.updateY(this._config.roleDropSpeed * s, this._stepsList);
            if (now - this._rebirthTime > this._config.rebirthTime && isDeath) {
                this._rebirthTime = Date.now();
                this._scoreUI.deductLife();
                this._dangerousNotice.hideDangerous();
                this._role.rebirth();
            }
            this.createSteps();
            if (Laya.stage.height - this._role.stageY < 300) {
                this._dangerousNotice.showDangerous();
            }
            else {
                this._dangerousNotice.hideDangerous();
            }
            this._gameTime += ms;
            if (this._scoreUI.life <= 0) {
                this.gameOver();
            }
        }
        updateRolePos() {
            this._role.updateX(this.roleCenterX);
        }
        setRoleAction(data) {
            if (data.actionId == ActionType.Jump) {
                this._role.jump();
            }
        }
        createSteps() {
            const info = this.levelInfo;
            if (!this._lastStep || this._lastStep.y > this._config.storeyHeight) {
                let obj = this.createObj();
                obj.init(this.contentPane, info.width);
                this._lastStep = obj;
            }
        }
        createObj() {
            for (let obj of this._stepsList) {
                if (!obj.isActive) {
                    return obj;
                }
            }
            let comp = CompSteps.createInstance();
            this._stepsList.push(comp);
            return comp;
        }
        gameOver() {
            this.close();
        }
        get roleCenterX() {
            let l2 = GameData.main.getPartPos(PosePoint.left_hip);
            let r2 = GameData.main.getPartPos(PosePoint.right_hip);
            return (l2.x + r2.x) / 2;
        }
        get levelInfo() {
            return this._config.levelInfo[this._level];
        }
        beforeClose() {
            this._dangerousNotice.hideDangerous();
            this._compSpeedUp.stop();
            this._compClouds.beforeClose();
        }
    }

    class DialogWindow extends UIBase {
        constructor() {
            super("common", "DialogWindow", LayerType.PopWindow, true);
        }
        static showDialog(text, btnName = null, confirmHandler = null, cancelHandler = null) {
            UIManager.inst.openUI(UIType.DialogWindow, { text: text, btnName: btnName, confirmHandler: confirmHandler, cancelHandler: cancelHandler });
        }
        static closeDialog() {
            UIManager.inst.closeUI(UIType.DialogWindow);
        }
        static isShowing() {
            return UIManager.inst.isShowing(UIType.DialogWindow);
        }
        Start() {
            this.contentPane.btnConfirm.onClick(this, this.onClickConfirm);
            this.contentPane.btnCancel.onClick(this, this.onClickCancel);
        }
        updateUI(data) {
            if (data) {
                if (data.confirmHandler) {
                    this._confirmHandler = data.confirmHandler;
                }
                if (data.cancelHandler) {
                    this._cancelHandler = data.cancelHandler;
                }
                if (data.text) {
                    this.contentPane.textContent.text = data.text;
                }
                if (data.btnName && data.btnName.length === 2) {
                    this.contentPane.btnConfirm.title = data.btnName[0];
                    this.contentPane.btnCancel.title = data.btnName[1];
                }
            }
        }
        onClickConfirm() {
            this.close();
            if (this._confirmHandler) {
                this._confirmHandler.run();
                this._confirmHandler = null;
            }
        }
        onClickCancel() {
            this.close();
            if (this._cancelHandler) {
                this._cancelHandler.run();
                this._cancelHandler = null;
            }
        }
    }

    class MainUI extends UIBase {
        constructor() {
            super("main", "Main", LayerType.Interface);
        }
        Start() {
            this.contentPane.btnAlert.onClick(this, this.onClickAlert);
            this.contentPane.btnEnterGame.onClick(this, this.onClickEnterGame);
        }
        onClickAlert() {
        }
        onClickEnterGame() {
            UIManager.inst.openUI(UIType.ClimbingMan);
        }
    }

    class UI_CompDangerousProgress extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompDangerousProgress"));
        }
        onConstruct() {
            this.imgProgress = (this.getChild("imgProgress"));
            this.imgProgress_2 = (this.getChild("imgProgress"));
            this.imgProgress_3 = (this.getChild("imgProgress"));
        }
    }
    UI_CompDangerousProgress.URL = "ui://8p08ilxi81s31q";

    class UI_CompUnderLand extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompUnderLand"));
        }
        onConstruct() {
            this.rightLand = (this.getChild("rightLand"));
            this.leftLand = (this.getChild("leftLand"));
        }
    }
    UI_CompUnderLand.URL = "ui://8p08ilxi81s31t";

    class UI_CompDecorativeStrip extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompDecorativeStrip"));
        }
        onConstruct() {
            this.isRight = this.getController("isRight");
        }
    }
    UI_CompDecorativeStrip.URL = "ui://8p08ilxifkdm7";

    class UI_CompDangerous extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompDangerous"));
        }
        onConstruct() {
            this.imgProgress = (this.getChild("imgProgress"));
            this.dangerous = this.getTransition("dangerous");
        }
    }
    UI_CompDangerous.URL = "ui://8p08ilxifkdma";

    class UI_CompHeart extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "CompHeart"));
        }
        onConstruct() {
            this.ani = (this.getChild("ani"));
        }
    }
    UI_CompHeart.URL = "ui://8p08ilxifkdmq";

    class UI_ClimbingMan extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("climbingman", "ClimbingMan"));
        }
        onConstruct() {
            this.speedUp = (this.getChild("speedUp"));
            this.cloud0 = (this.getChild("cloud0"));
            this.cloud2 = (this.getChild("cloud2"));
            this.cloud1 = (this.getChild("cloud1"));
            this.cloud3 = (this.getChild("cloud3"));
            this.cloud4 = (this.getChild("cloud4"));
            this.cloud5 = (this.getChild("cloud5"));
            this.compDangerous = (this.getChild("compDangerous"));
            this.scoreUI = (this.getChild("scoreUI"));
        }
    }
    UI_ClimbingMan.URL = "ui://8p08ilxiph4w0";

    class climbingmanBinder {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(UI_CompDangerousProgress.URL, UI_CompDangerousProgress);
            fgui.UIObjectFactory.setExtension(UI_CompUnderLand.URL, UI_CompUnderLand);
            fgui.UIObjectFactory.setExtension(UI_CompFire.URL, UI_CompFire);
            fgui.UIObjectFactory.setExtension(UI_CompFlowers.URL, UI_CompFlowers);
            fgui.UIObjectFactory.setExtension(UI_CompBird.URL, UI_CompBird);
            fgui.UIObjectFactory.setExtension(UI_CompTrees.URL, UI_CompTrees);
            fgui.UIObjectFactory.setExtension(UI_CompTree.URL, UI_CompTree);
            fgui.UIObjectFactory.setExtension(UI_CompColumn.URL, UI_CompColumn);
            fgui.UIObjectFactory.setExtension(UI_CompSmallStone.URL, UI_CompSmallStone);
            fgui.UIObjectFactory.setExtension(UI_CompBigStone.URL, UI_CompBigStone);
            fgui.UIObjectFactory.setExtension(UI_CompEggs.URL, UI_CompEggs);
            fgui.UIObjectFactory.setExtension(UI_CompThorns.URL, UI_CompThorns);
            fgui.UIObjectFactory.setExtension(UI_CompSmallCrystal.URL, UI_CompSmallCrystal);
            fgui.UIObjectFactory.setExtension(UI_CompBigCrystal.URL, UI_CompBigCrystal);
            fgui.UIObjectFactory.setExtension(UI_CompTreasure.URL, UI_CompTreasure);
            fgui.UIObjectFactory.setExtension(UI_CompDecorativeStrip.URL, UI_CompDecorativeStrip);
            fgui.UIObjectFactory.setExtension(UI_CompDangerous.URL, UI_CompDangerous);
            fgui.UIObjectFactory.setExtension(UI_CompHeart.URL, UI_CompHeart);
            fgui.UIObjectFactory.setExtension(UI_CompScoreUIPanel.URL, UI_CompScoreUIPanel);
            fgui.UIObjectFactory.setExtension(UI_CompSpeedUp.URL, UI_CompSpeedUp);
            fgui.UIObjectFactory.setExtension(UI_CompSteps.URL, UI_CompSteps);
            fgui.UIObjectFactory.setExtension(UI_ClimbingMan.URL, UI_ClimbingMan);
        }
    }

    class UI_ProcessLife extends fgui.GProgressBar {
        static createInstance() {
            return (fgui.UIPackage.createObject("common", "ProcessLife"));
        }
        onConstruct() {
            this.img = this.getController("img");
            this.barBg = (this.getChild("barBg"));
        }
    }
    UI_ProcessLife.URL = "ui://wkgp8jzc89hi9o";

    class UI_DialogWindow extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("common", "DialogWindow"));
        }
        onConstruct() {
            this.btnConfirm = (this.getChild("btnConfirm"));
            this.btnCancel = (this.getChild("btnCancel"));
            this.textContent = (this.getChild("textContent"));
        }
    }
    UI_DialogWindow.URL = "ui://wkgp8jzcg5vsjq";

    class UI_FloatScore extends fgui.GLabel {
        static createInstance() {
            return (fgui.UIPackage.createObject("common", "FloatScore"));
        }
        onConstruct() {
            this.state = this.getController("state");
            this.title1 = (this.getChild("title1"));
            this.show = this.getTransition("show");
        }
    }
    UI_FloatScore.URL = "ui://wkgp8jzcjhc40";

    class commonBinder {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(UI_ProcessLife.URL, UI_ProcessLife);
            fgui.UIObjectFactory.setExtension(UI_DialogWindow.URL, UI_DialogWindow);
            fgui.UIObjectFactory.setExtension(UI_FloatScore.URL, UI_FloatScore);
        }
    }

    class UI_Main extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("main", "Main"));
        }
        onConstruct() {
            this.btnEnterGame = (this.getChild("btnEnterGame"));
            this.btnAlert = (this.getChild("btnAlert"));
        }
    }
    UI_Main.URL = "ui://1w640g96cesm0";

    class mainBinder {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(UI_Main.URL, UI_Main);
        }
    }

    var UIType;
    (function (UIType) {
        UIType[UIType["ClimbingMan"] = 35] = "ClimbingMan";
        UIType[UIType["Main"] = 101] = "Main";
        UIType[UIType["DialogWindow"] = 301] = "DialogWindow";
    })(UIType || (UIType = {}));
    class UIRegister {
        static init(cb) {
            const uc = new Map();
            uc.set(UIType.Main, MainUI);
            uc.set(UIType.ClimbingMan, ClimbingMan);
            uc.set(UIType.DialogWindow, DialogWindow);
            UIManager.inst.init(uc, cb);
            fgui.UIConfig.bringWindowToFrontOnClick = false;
            this.bindAll();
        }
        static bindAll() {
            commonBinder.bindAll();
            mainBinder.bindAll();
            climbingmanBinder.bindAll();
        }
    }
    var LayerType;
    (function (LayerType) {
        LayerType[LayerType["Scenes"] = 0] = "Scenes";
        LayerType[LayerType["Interface"] = 99] = "Interface";
        LayerType[LayerType["Window"] = 199] = "Window";
        LayerType[LayerType["PopWindow"] = 299] = "PopWindow";
        LayerType[LayerType["Tips"] = 499] = "Tips";
        LayerType[LayerType["Float"] = 599] = "Float";
    })(LayerType || (LayerType = {}));

    class UIManager {
        constructor() {
            this._uiClasss = new Map();
            this._uiObjects = new Map();
        }
        static get inst() {
            if (!this._inst) {
                this._inst = new UIManager();
            }
            return this._inst;
        }
        init(uiClasss, cb) {
            this._uiClasss = uiClasss;
            Laya.stage.addChild(fgui.GRoot.inst.displayObject);
            Laya.timer.frameLoop(1, this, this.updateFrame);
            if (cb) {
                cb.run();
            }
        }
        updateFrame() {
            for (let [key, value] of this._uiObjects) {
                if (value.opened) {
                    value.updateFrame(Laya.timer.delta / 1000, Laya.timer.delta);
                }
            }
        }
        isShowing(type) {
            const uiObj = this._uiObjects.get(type);
            return uiObj ? uiObj.opened : false;
        }
        openUI(type, openData = null, openCallback = null) {
            if (!this._uiClasss.has(type)) {
                console.error("没有录入UI type");
                return null;
            }
            let view = null;
            if (this._uiObjects.has(type)) {
                view = this._uiObjects.get(type);
            }
            else {
                const classs = this._uiClasss.get(type);
                view = new classs();
                view.uiType = type;
                this._uiObjects.set(type, view);
            }
            view.openData = openData;
            view.openCallback = openCallback;
            if (view.opened) {
                view.updateUI(openData);
                return view;
            }
            fgui.UIPackage.loadPackage("res/fgui/" + view.packageName + "/" + view.packageName, Laya.Handler.create(this, () => {
                fgui.GRoot.inst.showWindow(view);
            }));
            return view;
        }
        closeUI(type, isDispos = true) {
            let page = this.getUI(type);
            if (page) {
                this.closePage(page, isDispos);
            }
        }
        closePage(page, isDispos = true) {
            const type = page.uiType;
            const tview = this._uiObjects.get(type);
            if (tview) {
                fgui.GRoot.inst.hideWindow(tview);
                if (isDispos) {
                    this.destroyPage(page);
                }
            }
            else {
                if (!page.isDisposed) {
                    this.destroyPage(page);
                }
            }
        }
        destroyPage(page) {
            if (this._uiObjects.has(page.uiType)) {
                this._uiObjects.delete(page.uiType);
            }
            page.dispose();
        }
        getUI(type) {
            let page = this._uiObjects.get(type);
            if (page && page.opened) {
                return page;
            }
            return null;
        }
        getTopPopWindow() {
            const cnt = fgui.GRoot.inst.numChildren;
            for (let i = cnt - 1; i >= 0; i--) {
                let g = fgui.GRoot.inst.getChildAt(i);
                if (g instanceof UIBase && g.layerType === LayerType.PopWindow) {
                    return g;
                }
            }
            return null;
        }
        exitGame() {
            Laya.timer.clear(this, this.updateFrame);
        }
    }

    class GameControl {
        constructor() { }
        static get inst() {
            if (!this._inst) {
                this._inst = new GameControl();
            }
            return this._inst;
        }
        start() {
            fgui.UIPackage.loadPackage(["res/fgui/common/common"], Laya.Handler.create(this, () => {
                UIRegister.init(Laya.Handler.create(this, this.initGame));
            }));
        }
        initGame() {
            DataDrive.init();
            UIManager.inst.openUI(UIType.Main);
        }
        reloadGame() {
            Laya.Browser.window.location.reload();
            console.debug("重新进入游戏---------------");
        }
        exitGame() {
            UIManager.inst.exitGame();
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
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            if (!GameConfig.logDebug) {
                Laya.Browser.window.console["log"] = () => { };
                Laya.Browser.window.console["error"] = () => { };
                Laya.Browser.window.console["debug"] = () => { };
                Laya.Browser.window.console["info"] = () => { };
            }
            GameControl.inst.start();
        }
    }
    new Main();

}());
//# sourceMappingURL=bundle.js.map
