import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#383838',
      main: '#121212',
      dark: '#000000',
      contrastText: '#a7a7a7',
    },
    secondary: {
      light: '#fffc7d',
      main: '#f2c94c',
      dark: '#bc9914',
      contrastText: '#000000',
    },
  },
  overrides: {
    MuiTypography: {
      body2: {
        fontSize: '2.125rem'
      }
    },
    MuiIconButton: {
      root: {
        color: '#a7a7a7',
      },
    },
    MuiButton: {
      root: {
        color: '#a7a7a7',
      },
    },
    MuiSvgIcon: {
      root: {
        color: '#a7a7a7',
      },
    },
  },
});

export default theme;
