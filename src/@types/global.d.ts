declare global {
  interface Window {
    myAPI: Sandbox;
  }
}

export interface Sandbox {
  initData: () => { text: string; title: string; mode: Mode };
  mdToggle: () => {};
  sendText: (text) => {};
  onGetText: (listener: (event, text) => void) => void;
  removeGetText: () => void;
}
