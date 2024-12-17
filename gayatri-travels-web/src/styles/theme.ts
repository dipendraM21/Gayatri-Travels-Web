import type { Theme } from "theme-ui";

export const theme: Theme = {
  fonts: {
    ubuntu: 'Ubuntu',
    Inter: 'Inter',
    roboto: 'Roboto',
    notoSans: 'Noto Sans',
    openSans: 'Open Sans',
    poppins: 'Poppins',
    nunitoSans: 'Nunito Sans',
    dmSans: 'DM Sans',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    demi: 600,
    semiBold: 700,
    extraBold: 900,
    large: 950,
  },
  images: {},
  colors: {
    primaryText: '#303030',
    gray1: '#85878a',
  },
  text: {
    Primary36SemiBold125: {
      color: 'primaryText',
      fontFamily: 'poppins',
      fontWeight: 'semiBold',
      lineHeight: '125%',
      fontSize: [18, 20, 30, 34, 36],
    },
    DMSans16Medium125: {
      color: 'gray1',
      fontFamily: 'dmSans',
      fontWeight: 'medium',
      lineHeight: '125%',
      fontSize: 16,
    },
  },
  buttons: {},

  // breakpoints: ['390px', '768px', '1024px', '1280px', '1366px', '1920px'], TODO CHANGE
};
