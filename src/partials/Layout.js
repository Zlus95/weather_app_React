import React from "react";
import { Box, Typography } from "@material-ui/core";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";

const Layout = ({ children, title }) => {
  return (
    <Box display="flex" flexWrap="nowrap" width={1} height={1} overflow="auto">
      <Box width={1} height={1} display="flex" flexDirection="column">
        <Header title={title} />
        <Box className="UIBoxPadding">
          <Typography>Средние показатели погоды</Typography>
        </Box>
        <NavigationMenu />
        <Box
          width={1}
          height={1}
          display="flex"
          flexDirection="column"
          className="UIBoxPadding"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
