import { createMuiTheme } from "@material-ui/core/styles";

const carafe = "#523A28";
const brown = "#A47551";
const tan = "#D0B49F";
const sandDollar = "#E4D4C8";
const darkBrown = "#423125";

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
      darkBrown: darkBrown,
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",

    h2: {
      fontSize: "2.75rem",
      fontWeight: 700,
      color: tan,
    },
    h4: {
      fontSize: "2.25rem",
      fontWeight: 700,
      color: tan,
    },
    h5: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: tan,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: tan,
    },
    body1: {
      fontSize: "1.2rem",
    },
    body2: {
      fontSize: "1rem",
    },
    btn: {
      textTransform: "none",
      color: "#fff",
    },
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
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiGrid: {
      "spacing-xs-3": {
        width: "100%",
      },
    },
    MuiCssBaseline: {
      "@global": {
        html: {
          scrollBehavior: "smooth",
        },
      },
    },
  },
});

export default Theme;
