export const mode = {
  NormalEditor: "NormalEditor",
  MDEditor: "MDEditor",
  MDViewer: "EMDViewer",
} as const;

export type Mode = typeof mode[keyof typeof mode]; // 'r' | 'w' | 'x'

export type Data = {
  text: string;
  title: string;
  mode: Mode;
  setText: (text: string) => void;
};
