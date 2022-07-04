interface electronAPI {
  // close: () => void;
  // runWindowsCmd: (cmd) => void;
  // rtmp: (cmd) => void;

  // openDevTools: () => void;
  // log: (callback: (event: any, arg: string) => void) => void;

  startMediaServer: (url: string) => void;
}

declare interface Window {
  electronAPI: electronAPI;
  flvjs: any;
}
