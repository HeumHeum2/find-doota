import baseStyled, { ThemedStyledInterface } from "styled-components";
import Bright from "./bright";
import Dark from "./dark";
import Media from "./media";

export const defaultTheme = Bright;
export const darkTheme = Dark;
export const media = Media;

const theme = {
  color: defaultTheme,
  media: media,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
