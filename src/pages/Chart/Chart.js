import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const Chart = ({ options }) => {
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};
