import { createTheme, responsiveFontSizes } from "@material-ui/core";

// colors
const primary = "#ffffff";
const secondary = "#000000";
const black = "#343a40";
const background = "transparent";
const warningLight = "rgba(253, 200, 69, .3)";
const warningMain = "rgba(253, 200, 69, .5)";
const warningDark = "rgba(253, 200, 69, .7)";

// border
const borderWidth = 2;
const borderColor = "rgba(0, 0, 0, 0.13)";

// breakpoints
const xl = 1440;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;

// spacing
const spacing = 8;

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    common: {
      red: "#CC0001",
      black,
      darkBlack: "#000000",
      green: "#12B200",
      white: "#FFFFFF",
      gray: "#CBCBCB",
      blue: "#0000FF",
      facebookblue: "#3B5997",
      dullText: "#FFECEB",
      dullCard: "#F7F7F7",
      hrColor: "#DEDEDE",
      demandHigh: "#CB4FC9",
      demandWarm: "#E78232",
    },
    warning: {
      light: warningLight,
      main: warningMain,
      dark: warningDark,
    },
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    background: {
      default: background,
    },
    spacing,
  },
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xl,
      lg,
      md,
      sm,
      xs,
    },
  },
  overrides: {
    BorderStyle: {
      style: {
        minWidth: "97px",
      },
    },
  },
  border: {
    borderColor: borderColor,
    borderWidth: borderWidth,
    radiusSize: {
      radius2: {
        borderRadius: "2px",
      },
      radius5: {
        borderRadius: "5px",
      },
      radius10: {
        borderRadius: "10px",
      },
      radius20: {
        borderRadius: "20px",
      },
    },
  },
  typography: {
    primary: {
      fontFamily: "'Roboto Slab', sans-serif",
    },
    secondary: {
      fontFamily: "'Roboto', sans-serif",
    },
    fontWeight: {
      light: 300,
      medium: 400,
      regular: 500,
      semiBold: 600,
      bold: "bold",
    },
    fontSize: {
      size8: 8,
      size10: 10,
      size12: 12,
      size14: 14,
      size15: 15,
      size16: 16,
      size18: 18,
      size20: 20,
      size22: 22,
      size24: 24,
      size27: 27,
      size28: 28,
      size34: 34,
      size35: 35,
      size54: 54,
      size50: 50,
      size13half: 13.5,
    },
    useNextVariants: true,
  },
});

export default responsiveFontSizes(theme);
