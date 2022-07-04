import { BrowserWindow, dialog, ipcMain } from "electron";

import { nodeApi } from "./nodeApi";

/**
 * 传参的一个类型
 */
interface registerPyloadEventsProps {
  api: ReturnType<typeof nodeApi>;
  mainWindow: BrowserWindow;
}

export const pyloadEvents = {
  close(obj: registerPyloadEventsProps) {
    const { mainWindow } = obj;
    mainWindow.close();
  },
  startMediaServe(obj: registerPyloadEventsProps, url: string) {
    console.log("startMediaServe", url);
  },
  dialog() {
    dialog
      .showOpenDialog({
        properties: ["openFile", "multiSelections"],
        title: "选择文件",
        message: "message",
      })
      .then((e) => {
        console.log("用户选择的文件", e);
      });
  },
};

export type pyloadEventTypes = keyof typeof pyloadEvents;
/**
 * 处理web端事件
 */
export function registerPyloadEvents(
  type: pyloadEventTypes,
  obj: registerPyloadEventsProps,
  callback: (obj: registerPyloadEventsProps, ...args: any[]) => void
) {
  ipcMain.on(type, (event: Electron.IpcMainEvent, ...args) => {
    callback(obj, ...args);
  });
}
