export type Direction = "ltr" | "rtl";
export type Sizes = {
  content: number;
  viewport: number;
  scrollbar: {
    size: number;
    paddingStart: number;
    paddingEnd: number;
  };
};

export type ScrollType = "auto" | "always" | "scroll" | "hover";
