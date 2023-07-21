import React from "react";
import { Box, Tabs, Tab } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

export default function NavigationMenu() {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={value}
        onChange={handleChange}
      >
        <Tab to={"/"} component={Link} label="Обзор" value={"/"} />
        <Tab to={"/chart"} component={Link} label="График" value={"/chart"} />
      </Tabs>
    </Box>
  );
}
