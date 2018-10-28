import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

// All the following keys are optional.
// We try our best to provide a great default value.
const materialTheme = createMuiTheme({
  palette: {
    primary: {
        main: '#ff4400',
        dark: '#880E4F', //Hover Color
        contrastText: '#EDE7F6', //Text Color
    },
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
  },
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 80px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',// Some CSS
      },
    },
    MuiTypography: {
        body1: {
          color: pink[500],
        },
        h2: {
          color: pink[500],
        },
      }
  },
});

export default materialTheme;