import React from "react";
import Layout from "../../partials/Layout";
import BasicTable from "../../table/BasicTable";
import { HEAD_TABLE, BODY_TABLE } from "../../utils/constans";
import { useAppStore } from "../../AppStore";
import { CircularProgress, Box } from "@material-ui/core";

export const DashBoard = () => {
  const [VALUE] = useAppStore();

  const getWeather = (arrayTemperature, arrayRain) => {
    return Object.entries(BODY_TABLE).map(([_, val]) => {
      let temperature = arrayTemperature?.slice(val.start * 24, val.end * 24);
      let rain = arrayRain?.slice(val.start * 24, val.end * 24);
      return {
        month: val.name,
        data: `${Math.round(Math.max.apply(null, temperature))}°/${Math.round(
          Math.min.apply(null, temperature)
        )}°`,
        rain: `${Math.ceil(
          rain?.reduce((acc, val) => acc + val, 0) / 24
        )} Дней`,
      };
    });
  };

  const bodyTable = getWeather(
    VALUE.data.hourly?.temperature_2m,
    VALUE?.data.hourly?.rain
  );

  return (
    <Layout title="Обзор">
      {VALUE.loading ? (
        <BasicTable
          headTable={HEAD_TABLE}
          bodyTable={bodyTable}
          data={VALUE.data.hourly?.temperature_2m && VALUE?.data.hourly?.rain}
        />
      ) : (
        <Box className="UILoader">
          <CircularProgress color="primary" size="200px" thickness={4} />
        </Box>
      )}
    </Layout>
  );
};
