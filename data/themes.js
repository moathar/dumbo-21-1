import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

export const themeDark = createTheme({
  status: {
    danger: orange[500]
  },
  palette: {
    mode: "dark"
  }
});

export const themeLight = createTheme({
  status: {
    danger: orange[500]
  },
  palette: {
    mode: "light"
  }
});

// we could've use an array and look up the themes based on the mode through an interface function.
