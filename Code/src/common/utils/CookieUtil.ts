/**
 * Cookie工具类
 */
export default class CookieUtil {
    /**
     * 得到 cookie
     * @param sKey 读取的 cookie 名
     * @returns 
     */
    public static getItem(sKey) {
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    }

    /**
     * 写入 cookie
     * @param sKey 要创建或覆盖的 cookie 的名字
     * @param sValue cookie 的值 
     * @param vEnd 最大年龄的秒数 (一年为 31536e3， 永不过期的 cookie 为Infinity) ，或者过期时间的GMTString格式或Date 对象; 如果没有定义则会在会话结束时过期 (number – 有限的或 Infinity – string, Date object or null)。
     * @param sPath 例如 '/', '/mydir'。 如果没有定义，默认为当前文档位置的路径。(string or null)。路径必须为绝对路径（参见 RFC 2965）。关于如何在这个参数使用相对路径的方法请参见这段。
     * @param sDomain 例如 'example.com'， '.example.com' (包括所有子域名), 'subdomain.example.com'。如果没有定义，默认为当前文档位置的路径的域名部分 (string或null)。
     * @param bSecure cookie 只会被 https 传输 (boolean或null)。
     * @returns 
     */
    public static setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
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

    /**
     * 移除 cookie
     * @param sKey 要移除的 cookie 名
     * @param sPath 例如 '/', '/mydir'。 如果没有定义，默认为当前文档位置的路径。(string or null)。路径必须为绝对路径（参见 RFC 2965）。关于如何在这个参数使用相对路径的方法请参见这段。
     * @param sDomain 例如 'example.com'， '.example.com' (包括所有子域名), 'subdomain.example.com'。如果没有定义，默认为当前文档位置的路径的域名部分 (string或null)。
     * @returns 
     */
    public static removeItem(sKey, sPath, sDomain) {
        if (!sKey || !this.hasItem(sKey)) { return false; }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    }

    /**
     * 检测 cookie 检查一个 cookie 是否存在
     * @param sKey 要检查的 cookie 名
     * @returns 
     */
    public static hasItem(sKey) {
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    }

    /**
     * 得到所有 cookie 的列表
     * @returns 
     */
    public static keys() {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
        return aKeys;
    }
}