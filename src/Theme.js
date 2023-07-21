export const vars = {
  global: {},
};

export const palettes = {
  black: {
    ...vars,

    primarySpacing: 16,

    primary: "#0B92B7",

    defaultBackground: "#000000",

    global: {},
  },
};

export const templateTheme = (vars) => ({
  spacing: (factor) => factor * 0.5 * vars.primarySpacing,
  palette: {
    type: "dark",
    primary: {
      main: vars.primary,
    },
    background: {
      main: vars.primaryBackground,
      default: vars.defaultBackground,
    },
  },
  typography: {
    h3: {
      fontSize: "1.5rem",
      margin: "unset",
      fontWeight: "normal",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "html, body, #root": {
          height: "100vh",
        },
        ".UIHeader": {
          background: vars.primary,
        },
        ".UIHeaderTypography": {
          padding: 16,
        },
        ".UIBoxPadding": {
          padding: vars.primarySpacing,
        },
        ".UITableCell": {
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100px",
          whiteSpace: "nowrap",
        },
        ".UILoader": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "16px",
        },
        ...vars.global,
      },
    },
  },
});
