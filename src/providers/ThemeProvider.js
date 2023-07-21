import React, { useEffect, useState } from "react";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { createTheme, StylesProvider } from "@material-ui/core/styles";
import { templateTheme, palettes } from "../Theme";
import { COLOR } from "../utils/constans";

export const ThemeProvider = (props) => {
  const [palette] = useState(palettes[COLOR]);
  const [theme, setTheme] = useState(
    createTheme(templateTheme(palettes[COLOR]))
  );

  useEffect(() => {
    setTheme(createTheme(templateTheme(palette)));
  }, [palette]);

  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
      </StylesProvider>
      {props.children}
    </MuiThemeProvider>
  );
};
