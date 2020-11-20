export const mode = {
  NormalEditor: "NormalEditor",
  MDEditor: "MDEditor",
  EMDViewer: "EMDViewer",
} as const;

export type Mode = typeof mode[keyof typeof mode]; // 'r' | 'w' | 'x'
