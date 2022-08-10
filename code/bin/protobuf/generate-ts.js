var fs = require("fs");
var path = require("path");

const projectName = "aimaster";
const url = path.resolve('./');
const gamePath = url.slice(0, url.indexOf(projectName) + projectName.length);
const codeTextMap = new Map();

function main() {
    console.log("当前项目路径：" + gamePath);
    let fileNames = fs.readdirSync(gamePath + "/bin/protobuf/protofile");
    let fileCount = fileNames.length;
    console.log("总共有" + fileNames.length + "个文件需要处理");

    console.log("开始解析proto文件并生成ts代码......");
    for (let name of fileNames) {
        const file = fs.readFileSync(gamePath + "/bin/protobuf/protofile/" + name);
        const modelName = name[0].toUpperCase() + name.substring(1, name.indexOf(".")) + "Model";
        const codeText = generateTsCode(modelName, file.toString());
        codeTextMap.set(modelName, codeText);
    }

    console.log("开始写入到文件中......");
    for (let [name, text] of codeTextMap) {
        if (!text) {
            continue;
        }
        createTsFile(name, text, (err) => {
            fileCount--;
            if (fileCount <= 0) {
                console.log("程序执行完毕");
            }
        });
    }
}

/**
 * 生成ts代码
 * @param {string} modelName 
 * @param {string} protoString 
 */
function generateTsCode(modelName, protoString) {
    const strLines = protoString.split("\n");

    let codeStr = `import SocketManager from "../SocketManager";\n`;
    codeStr += `import ModelBase from "./base/ModelBase";\n\n`;
    codeStr += `/**\n * 此文件为自动生成，请不要手动修改 \n */\n`;
    codeStr += `export default class ${modelName} extends ModelBase {\n`;
    codeStr += `    private static _inst: ${modelName};\n`;
    codeStr += `    public static get inst(): ${modelName} {\n`;
    codeStr += `        if (!this._inst) {\n`;
    codeStr += `            this._inst = new ${modelName}();\n`;
    codeStr += `        }\n`;
    codeStr += `        return this._inst;\n`;
    codeStr += `    }\n\n`;
    codeStr += `    constructor() {\n`;
    codeStr += `        super(); \n\n`;

    // const msgPattern = new RegExp(/^message.+{/, "gm");
    // const matchArr = protoString.match(msgPattern);
    const msgMap = new Map();

    codeStr += `        // 注册消息号跟消息的对应关系\n`;

    const lineLength = strLines.length;
    for (let i = 0; i < lineLength; i++) {
        let str = strLines[i];
        if (str.indexOf("message") > -1 && (str.indexOf("Req") > -1 || str.indexOf("Rsp") > -1)) {
            str = str.replace("message", "");
            str = str.replace("{", "");
            str = str.replace(/(^\s*)|(\s*$)/g, "");
            let name = str.slice(0, str.length - 3);
            if (!msgMap.has(name)) {
                let comment = null;
                if (i > 0 && strLines[i - 1].length > 0 && strLines[i - 1][0] === "/") {
                    comment = strLines[i - 1];
                    codeStr += `        ${comment}`;
                }
                msgMap.set(name, comment);
                codeStr += `        SocketManager.inst.registMessage(gameProto.ArenasMessageEnum.${name}, "${name}"); \n`;
            }
        }
    }
    if (msgMap.size < 1) {
        return null;
    }

    codeStr += `\n`;

    codeStr += `        // 注册消息跟model的对应关系\n`;
    for (let [name, comment] of msgMap) {
        codeStr += `        SocketManager.inst.registCMDModel(gameProto.ArenasMessageEnum.${name}, this); \n`;
    }
    codeStr += `    }\n\n`;

    for (const [name, comment] of msgMap) {
        codeStr += `    /**\n`;
        if (comment) {
            const reg = new RegExp("/", "g");
            codeStr += `     * ${comment.replace(reg, "")}`;
        }
        codeStr += `     * @param {gameProto.I${name}Req} msg \n`;
        codeStr += `     * @param {Laya.Handler} callBack \n`;
        codeStr += `     */\n`;
        codeStr += `    public send${name}ReqMsg(msg: gameProto.I${name}Req, callBack: Laya.Handler = null): void { \n`;
        codeStr += `        this.sendMessage(gameProto.ArenasMessageEnum.${name}, msg, callBack); \n`;
        codeStr += `    }\n\n`;
    }
    codeStr += `}`;
    return codeStr;
}

/**
 * 创建并写入ts文件
 * @param {string} fileName 
 * @param {string} codeString 
 * @param {Function} callBack
 */
function createTsFile(fileName, codeString, callBack) {
    const fileSrc = gamePath + "/src/net/msg/" + fileName + ".ts";
    fs.writeFile(fileSrc, codeString, (err) => {
        if (err) {
            console.error("文件" + fileSrc + "写入失败：", err);
        } else {
            console.error("文件" + fileSrc + "写入成功");
        }
        callBack(err);
    });
}

main();