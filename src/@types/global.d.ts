declare global {
  interface Window {
    myAPI: Sandbox;
  }
}

export interface Sandbox {
  initData: () => { text: string; title: string; mode: Mode };
  mdToggle: () => {};
  sendData: () => {};
  getData: (listener: (data) => void) => {};
}
