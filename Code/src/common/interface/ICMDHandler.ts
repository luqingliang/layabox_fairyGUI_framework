export interface ICMDHandler {
    /**
     * 解析socket消息
     * @param cmd 
     * @param content 
     */
    dealBufferMessage(cmd: number, content: Uint8Array): any;
}