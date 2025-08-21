export * from "./components";
import { vars as themeVars } from "./theme.css";
import type { ThemeVars } from "./theme.types";

export const vars = themeVars as ThemeVars;
export type { ThemeVars };
