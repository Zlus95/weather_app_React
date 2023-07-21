import React from "react";
import { Typography, Box } from "@material-ui/core";

export default function Header({ title }) {
  return (
    <Box className="UIHeader">
      <Box>
        <Typography className="UIHeaderTypography" variant="h3" color="inherit">
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
