/**
 * 处理渲染进程消息
 */
import { contextBridge, ipcRenderer } from "electron";

import { pyloadEventTypes } from "./pyloadHandle";

// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// import { IpcRendererEvent } from "electron";

const preloadApi: Record<pyloadEventTypes, (...args: string[]) => void> = {
  close() {
    ipcRenderer.send("close");
  },
  startMediaServe(url: string) {
    ipcRenderer.send("startMediaServe", url);
  },
  dialog() {
    ipcRenderer.send("dialog");
  },
};

contextBridge.exposeInMainWorld("electronAPI", preloadApi);
