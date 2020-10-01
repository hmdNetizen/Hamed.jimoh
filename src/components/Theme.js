import { createMuiTheme } from "@material-ui/core/styles";

const carafe = "#523A28";
const brown = "#A47551";
const tan = "#D0B49F";
const sandDollar = "#E4D4C8";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: carafe,
    },
    secondary: {
      main: brown,
    },
    common: {
      gold: carafe,
      brown: brown,
      tan: tan,
      dollar: sandDollar,
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  body1: {
    fontSize: "1.2rem",
  },
  body2: {
    fontSize: "1rem",
  },
  overrides: {
    MuiListItemText: {
      primary: {
        fontSize: "2rem",
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: "3rem",
      },
    },
  },
});

export default Theme;
