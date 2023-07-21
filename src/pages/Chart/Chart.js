import React from "react";
import Layout from "../../partials/Layout";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getChartOptions } from "./chartOptions";
import { useAppStore } from "../../AppStore";
import { BODY_TABLE } from "../../utils/constans";
import { CircularProgress, Box } from "@material-ui/core";

const getTemperature = (arrayMax, start, end) => {
  const sliceArrayMax = arrayMax?.slice(start, end);
  const maxTemperature = sliceArrayMax?.reduce(
    (acc, val, _, arr) => acc + val / arr.length,
    0
  );
  return Math.round(maxTemperature);
};

export const Chart = () => {
  const [VALUE] = useAppStore();

  const maxTemperatureArray = Object.entries(BODY_TABLE).map(([_, val]) =>
    getTemperature(VALUE?.data.daily?.temperature_2m_max, val?.start, val?.end)
  );
  const minTemperatureArray = Object.entries(BODY_TABLE).map(([_, val]) =>
    getTemperature(VALUE?.data.daily?.temperature_2m_min, val?.start, val?.end)
  );

  const options = getChartOptions(maxTemperatureArray, minTemperatureArray);
  return (
    <Layout title="График">
      {VALUE.loading ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <Box className="UILoader">
          <CircularProgress color="primary" size="200px" thickness={4} />
        </Box>
      )}
    </Layout>
  );
};
