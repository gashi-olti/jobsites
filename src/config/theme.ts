import { createElement } from 'react';
import { createTheme, Theme, Components } from '@mui/material';
import { theme as twinTheme } from 'twin.macro';

export const appTheme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: twinTheme`fontFamily.sans`,
    fontWeightRegular: twinTheme`fontWeight.normal`,
    fontWeightMedium: twinTheme`fontWeight.medium`,
    fontWeightBold: twinTheme`fontWeight.bold`,
    h1: {
      fontSize: twinTheme`fontSize.4xl`,
      lineHeight: twinTheme`lineHeight.10`,
      fontWeight: twinTheme`fontWeight.bold`,
    },
    h2: {
      textTransform: 'uppercase',
      fontSize: twinTheme`fontSize.2xl`,
      lineHeight: twinTheme`lineHeight.8`,
      fontWeight: twinTheme`fontWeight.bold`,
    },
    h3: {
      fontSize: twinTheme`fontSize.xl`,
      lineHeight: twinTheme`lineHeight.7`,
      fontWeight: twinTheme`fontWeight.bold`,
    },
    h4: {
      fontSize: twinTheme`fontSize.base`,
      lineHeight: twinTheme`lineHeight.7`,
      fontWeight: twinTheme`fontWeight.bold`,
    },
    h5: {
      fontSize: twinTheme`fontSize.sm`,
      lineHeight: twinTheme`lineHeight.6`,
      fontWeight: twinTheme`fontWeight.bold`,
    },
    h6: {
      fontSize: twinTheme`fontSize.xs`,
      lineHeight: twinTheme`lineHeight.6`,
      fontWeight: twinTheme`fontWeight.bold`,
    },
    subtitle1: {
      fontSize: twinTheme`fontSize.xl`,
      lineHeight: twinTheme`lineHeight.6`,
      fontWeight: twinTheme`fontWeight.light`,
    },
    subtitle2: {
      fontSize: twinTheme`fontSize.base`,
    },
    body1: {
      fontSize: twinTheme`fontSize.base`,
    },
    body2: {
      fontSize: twinTheme`fontSize.xs`,
    },
    caption: {
      fontSize: twinTheme`fontSize.xs`,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1600,
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export const overrides = (theme: Theme): Components => ({
  MuiInputBase: {
    styleOverrides: {
      root: {
        backgroundColor: '#F5F5F7',
      },
      inputSizeSmall: {
        fontSize: twinTheme`fontSize.sm`,
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        border: 'none',
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableFocusRipple: true,
      disableElevation: true,
      variant: 'contained',
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        paddingY: theme.spacing(1),
        contained: {
          color: theme.palette.common.white,
        },
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        '&.MuiMenuItem-root': {
          backgroundColor: theme.palette.common.white,
        },
      },
    },
  },
  MuiTabs: {
    defaultProps: {
      TabIndicatorProps: {
        children: createElement('span', null),
      },
    },
    styleOverrides: {
      indicator: {
        display: 'none',
      },
      root: {
        minHeight: 0,
        borderRadius: twinTheme`borderRadius.md`,
      },
    },
    variants: [
      {
        props: { variant: 'scrollable' },
        style: {
          '.MuiTabs-flexContainer': {
            '& button.Mui-selected': {
              background: theme.palette.grey[300],
              color: theme.palette.grey[700],
            },
          },
        },
      },
      {
        props: { variant: 'fullWidth' },
        style: {
          '.MuiTabs-flexContainer': {
            '& button.Mui-selected': {
              background: theme.palette.grey[300],
              color: theme.palette.grey[700],
            },
          },
        },
      },
      {
        props: { orientation: 'vertical' },
        style: {
          '.MuiTab-root': {
            display: 'flex',
            flexDirection: 'row',
            minHeight: 40,
          },
        },
      },
    ],
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'capitalize',
        minHeight: 0,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
        borderRadius: twinTheme`borderRadius.md`,
        marginTop: 5,
        marginBottom: 5,
        background: theme.palette.grey[100],
        '& > span': {
          alignItems: 'start',
        },
      },
    },
  },
});

export default createTheme({
  ...appTheme,
  components: overrides(appTheme),
});
