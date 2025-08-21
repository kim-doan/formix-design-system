// theme.css.ts의 vars 타입을 명시적으로 정의
export interface ThemeVars {
  elevation: {
    overlay: string;
  };
  color: {
    semantic: {
      static: {
        white: string;
        black: string;
      };
      primary: {
        normal: string;
        strong: string;
        heavy: string;
      };
      label: {
        normal: string;
        strong: string;
        neutral: string;
        alterNative: string;
        assistive: string;
        disable: string;
      };
      background: {
        normal: string;
        alternative: string;
        elevatedNormal: string;
        elevatedAlternative: string;
      };
      interaction: {
        inactive: string;
        disable: string;
      };
      line: {
        normal: string;
        neutral: string;
        alternative: string;
        solidNormal: string;
        solidNeutral: string;
        solidAlternative: string;
      };
      status: {
        positive: string;
        cautionary: string;
        negative: string;
      };
      accent: {
        background: {
          redOrange: string;
          lime: string;
          cyan: string;
          lightBlue: string;
          violet: string;
          purple: string;
          pink: string;
        };
        foreground: {
          red: string;
          redOrange: string;
          orange: string;
          lime: string;
          green: string;
          cyan: string;
          lightBlue: string;
          blue: string;
          violet: string;
          purple: string;
          pink: string;
        };
      };
      inverse: {
        primary: string;
        background: string;
        label: string;
      };
      fill: {
        normal: string;
        strong: string;
        alterNative: string;
      };
      meterial: {
        dimmer: string;
      };
    };
    palette: {
      common: Record<100 | 0, string>;
      neutral: Record<99 | 95 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 22 | 20 | 15 | 10 | 5, string>;
      coolNeutral: Record<99 | 98 | 97 | 96 | 95 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 25 | 22 | 20 | 17 | 15 | 10 | 7 | 5, string>;
      blue: Record<99 | 95 | 90 | 80 | 70 | 65 | 60 | 55 | 50 | 45 | 40 | 30 | 20 | 10, string>;
      red: Record<99 | 95 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10, string>;
      green: Record<99 | 95 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10, string>;
      orange: Record<99 | 95 | 90 | 80 | 70 | 60 | 50 | 40 | 39 | 30 | 20 | 10, string>;
      redOrange: Record<99 | 95 | 90 | 80 | 70 | 60 | 50 | 48 | 40 | 30 | 20 | 10, string>;
      lime: Record<99 | 95 | 90 | 80 | 70 | 60 | 50 | 40 | 37 | 30 | 20 | 10, string>;
      cyan: Record<99 | 95 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10, string>;
      lightBlue: Record<99 | 95 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10, string>;
      violet: Record<99 | 95 | 90 | 80 | 70 | 60 | 50 | 45 | 40 | 30 | 20 | 10, string>;
      purple: Record<99 | 95 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10, string>;
      pink: Record<99 | 95 | 90 | 80 | 70 | 60 | 50 | 46 | 40 | 30 | 20 | 10, string>;
      opacity: Record<0 | 5 | 8 | 12 | 16 | 22 | 28 | 35 | 43 | 52 | 61 | 74 | 88 | 97 | 100, string>;
    };
    elevation: {
      shadow: {
        normal: string;
        emphasize: string;
        strong: string;
        heavy: string;
      };
    };
  };
  font: {
    body: string;
  };
  typography: {
    display1: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    display2: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    title1: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    title2: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    title3: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    heading1: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    heading2: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    headline1: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    headline2: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    body1Normal: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    body1Reading: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    body2Normal: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    body2Reading: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    label1Normal: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    label1Reading: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    label2: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    caption1: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    caption2: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
  };
}