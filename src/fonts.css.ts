import { globalFontFace } from "@vanilla-extract/css";

const pretendardName = "Pretendard Variable";

// Pretendard Variable Font with globalFontFace
globalFontFace(pretendardName, {
  src: 'url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.woff2") format("woff2")',
  fontWeight: "45 920",
  fontDisplay: "swap",
});

// Font family stack for theme
export const pretendard = `"${pretendardName}", "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`;
