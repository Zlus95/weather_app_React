import React from "react";
import Layout from "../../partials/Layout";
import { getChartOptions } from "./chartOptions";
import { useAppStore } from "../../AppStore";
import { months } from "../../utils/constans";
import { CircularProgress, Box } from "@material-ui/core";
import { Chart } from "./Chart";

export const DashBoardChart = () => {
  const [VALUE] = useAppStore();

  const temperatures =
    VALUE.data.hourly?.time?.reduce((acc, val, ind) => {
      const monthIndex = new Date(val).getMonth();
      const monthName = months[monthIndex];
      if (!acc[monthName]) {
        acc[monthName] = [VALUE.data.hourly?.temperature_2m[ind]];
        return acc;
      }
      acc[monthName].push(VALUE.data.hourly?.temperature_2m[ind]);
      return acc;
    }, {}) || {};

  const chartData = Object.entries(temperatures).reduce(
    (acc, [key, value]) => {
      acc.categories.push(key);
      acc.max.push(Math.round(Math.max.apply(null, value)));
      acc.min.push(Math.round(Math.min.apply(null, value)));
      return acc;
    },
    { max: [], min: [], categories: [] }
  );
  const options = getChartOptions(chartData);

  return (
    <Layout title="График">
      {!VALUE.isLoading ? (
        <Chart options={options} />
      ) : (
        <Box className="UILoader">
          <CircularProgress color="primary" size="200px" thickness={4} />
        </Box>
      )}
    </Layout>
  );
};
