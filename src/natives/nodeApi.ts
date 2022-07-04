import { BrowserWindow, ipcMain } from "electron";

import NodeMediaServer from "node-media-server";
import { getPortPromise } from "portfinder";
import { resolve } from "path";

/**
 * 这个是一个闭包函数，里面封装一些方法
 * electron和web都可以调用
 */
export function nodeApi(mainWindow: BrowserWindow) {
  const main = {
    mediaServer: null as null | NodeMediaServer,
    mediaServerPort: null as null | number,
    mediaServerUrl: null as null | string,
  };

  return {
    /**
     * 创建新的流媒体服务器并且调用客户端渲染
     */
  };
}
