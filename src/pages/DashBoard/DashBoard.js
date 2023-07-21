import React from "react";
import Layout from "../../partials/Layout";
import BasicTable from "../../table/BasicTable";
import { HEAD_TABLE, BODY_TABLE } from "../../utils/constans";
import { useAppStore } from "../../AppStore";
import { CircularProgress, Box } from "@material-ui/core";

export const DashBoard = () => {
  const [VALUE] = useAppStore();
  return (
    <Layout title="Обзор">
      {VALUE.loading ? (
        <BasicTable
          headTable={HEAD_TABLE}
          bodyTable={BODY_TABLE}
          maxTemperature={VALUE?.data.daily?.temperature_2m_max}
          miTemperature={VALUE?.data.daily?.temperature_2m_min}
          rain={VALUE?.data.hourly?.rain}
        />
      ) : (
        <Box className="UILoader">
          <CircularProgress color="primary" size="200px" thickness={4} />
        </Box>
      )}
    </Layout>
  );
};
