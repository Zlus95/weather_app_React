import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <Box p={2}>
      <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid item>
          <Typography variant="h3">Error 404. Страница не найдена.</Typography>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" p={2}>
          <Link to="#" onClick={() => history.goBack()}>
            Назад
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PageNotFound;
