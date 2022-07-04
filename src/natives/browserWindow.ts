import { BrowserWindow, Menu, ipcMain, webContents } from "electron";

/**
 * 自定义菜单栏
 * accelerator 可以自动绑定快捷键
 */
export function registerMenus(mainWindow: BrowserWindow) {
  // 取消菜单栏
  // mainWindow.setMenu(null);

  //   工具
  const template_0 = {
    label: "工具",
    submenu: [
      {
        label: "打开调试工具",
        accelerator: "f12",
        click: () => {
          if (mainWindow.webContents.isDevToolsOpened()) {
            mainWindow.webContents.closeDevTools();
          } else {
            mainWindow.webContents.openDevTools();
          }
        },
      },
      {
        label: "开启全屏模式",
        accelerator: "f11",
        click: () => {
          mainWindow.setFullScreen(!mainWindow.fullScreen);
        },
      },
      {
        label: "刷新",
        accelerator: "f5",
        click: () => {
          mainWindow.webContents.reload();
        },
      },
      {
        label: "强制刷新",
        accelerator: "ctrl+shift+r",
        click: () => {
          mainWindow.webContents.reloadIgnoringCache();
        },
      },
    ],
  };

  //   工具
  const template_1 = {
    label: "pyload",
    submenu: [
      {
        label: "close",
        click: () => {
          mainWindow.webContents.executeJavaScript(
            `window.electronAPI.close();`
          );
        },
      },
      {
        label: "startMediaServe",
        click: () => {
          mainWindow.webContents.executeJavaScript(
            `window.electronAPI.startMediaServe("http://startMediaServe");`
          );
        },
      },
      {
        label: "dialog",
        click: () => {
          mainWindow.webContents.executeJavaScript(
            `window.electronAPI.dialog();`
          );
        },
      },
    ],
  };

  const memu = Menu.buildFromTemplate([template_0, template_1]);
  Menu.setApplicationMenu(memu);
}

/**
 * 网络相关设置
 */
export function registerWebRequest(mainWindow: BrowserWindow) {
  /**
   * 修改请求头
   * 设置CSP (Content Security Policy) 策略
   */
  // mainWindow.webContents.session.webRequest.onHeadersReceived(
  //   (details, callback) => {
  //     delete details.responseHeaders["X-Frame-Options"];
  //     callback({
  //       responseHeaders: {
  //         ...details.responseHeaders,
  //         "Content-Security-Policy": [
  //           `default-src * 'self' 'unsafe-inline' 'unsafe-eval' data: gap: content: https://ssl.gstatic.com;
  //             media-src * blob: 'self' http://* 'unsafe-inline' 'unsafe-eval';
  //             style-src * 'self' 'unsafe-inline';
  //             img-src * 'self' data: content:;
  //             connect-src * blob:;`,
  //         ],
  //       },
  //     });
  //   }
  // );
}
