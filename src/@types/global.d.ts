declare global {
  interface Window {
    myAPI: Sandbox;
  }
}

export interface Sandbox {
  initData: () => Promise<void | { text: string; title: string; mode: Mode }>;
}
