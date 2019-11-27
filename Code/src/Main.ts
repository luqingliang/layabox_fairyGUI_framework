import GameConfig from "./GameConfig";
import LoginView from "./game/login/LoginView";
import ViewManager from "./common/mvc/view/ViewManager";
import JsonTemplate from "./common/templates/core/JsonTemplate";
import { GameModel, Model } from "./common/mvc/model/Model";
import JsonTemplateMap from "./common/templates/core/JsonTemplateMap";
import WordFilter from "./common/utils/WordFilter";
class Main {
	constructor() {
		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = GameConfig.scaleMode;
		Laya.stage.screenMode = GameConfig.screenMode;
		Laya.stage.alignV = GameConfig.alignV;
		Laya.stage.alignH = GameConfig.alignH;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (GameConfig.stat) Laya.Stat.show();
		Laya.alertGlobalError = true;
		
		//先加载公共包
		fgui.UIPackage.loadPackage("res/fgui/Common", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded(): void {
		WordFilter.initlize(Laya.Handler.create(this, () => {
			console.log("敏感字库初始化完成");
		}));
		JsonTemplate.instance.initialize(Laya.Handler.create(this, () => {
			console.log("测试读Json配置表", JsonTemplate.instance.getTemplate(JsonTemplateMap.TEST_JSON, "id", 1003));
		}));

		GameModel.initialize();

		Laya.stage.addChild(fgui.GRoot.inst.displayObject);

		ViewManager.instance.open(LoginView);
		console.log("测试Protobuf: ", Model.protocol.LoginType.ACCOUNT);
	}
}
//激活启动类
new Main();
