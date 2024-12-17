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
    primary: '#297189',
    primary2: '#5143d9',
    secondary: '#00C6B7',
    disableDarkBlue: '#00C6B7',
    bgDisable: '#efeff0',
    txtDisable: '#ADAF8B',
    orange: '#fc790dd9',
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
    DMSans16MRegular125: {
      color: 'gray1',
      fontFamily: 'dmSans',
      fontWeight: 'regular',
      lineHeight: '125%',
      fontSize: 16,
    },
    DMSans16MDemi125: {
      color: 'white',
      fontFamily: 'dmSans',
      fontWeight: 'demi',
      lineHeight: '125%',
      fontSize: [14, 15, 16, 17, 18],
    },
    // 
  },
  buttons: {
    primary: {
      background: '#fc790dd9',
      padding: '8px 16px',
      borderRadius: '4px',
      color: 'white',
      ':focus': {
        border: '1px solid #00C6B7',
      },
      ':active': {
        backgroundColor: 'secondary',
      },
      ':disabled': {
        backgroundColor: 'bgDisable',
        color: 'txtDisable !important',
        cursor: 'not-allowed',
      },
    },
  },
  forms: {
    primaryInput: {
      borderRadius: 8,
      border: '1px solid #c5c5c7',
      p: '8px 16px',
      color: '#2e4244',
      outlineColor: '#00C6B7',
      fontFamily: 'notoSans',
      fontSize: 16,
      lineHeight: '125%',
      fontWeight: 'medium',
      boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.20)',
      backgroundColor: 'transparent',
      ':disabled': {
        backgroundColor: 'grey1',
        color: 'muted',
      },
      ':focus': {
        border: '1px solid #00C6B7',
      },
      '::placeholder': {
        color: 'gray1',
        fontFamily: 'dmSans',
        fontWeight: 'regular',
        lineHeight: '125%',
        fontSize: 16,
      }
    },
  }

  // breakpoints: ['390px', '768px', '1024px', '1280px', '1366px', '1920px'], TODO CHANGE
};
