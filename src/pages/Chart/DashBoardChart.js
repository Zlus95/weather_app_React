import React from "react";
import Layout from "../../partials/Layout";
import { getChartOptions } from "./chartOptions";
import { useAppStore } from "../../AppStore";
import { BODY_TABLE } from "../../utils/constans";
import { CircularProgress, Box } from "@material-ui/core";
import { Chart } from "./Chart";

export const DashBoardChart = () => {
  const [VALUE] = useAppStore();

  const maxTemperatureArray = Object.entries(BODY_TABLE).map(([_, val]) => {
    let temperature = VALUE.data.hourly?.temperature_2m?.slice(
      val.start * 24,
      val.end * 24
    );
    return Math.round(Math.max.apply(null, temperature));
  });

  const minTemperatureArray = Object.entries(BODY_TABLE).map(([_, val]) => {
    let temperature = VALUE.data.hourly?.temperature_2m?.slice(
      val.start * 24,
      val.end * 24
    );
    return Math.round(Math.min.apply(null, temperature));
  });

  const options = getChartOptions(maxTemperatureArray, minTemperatureArray);
  return (
    <Layout title="График">
      {VALUE.loading ? (
        <Chart options={options} />
      ) : (
        <Box className="UILoader">
          <CircularProgress color="primary" size="200px" thickness={4} />
        </Box>
      )}
    </Layout>
  );
};
