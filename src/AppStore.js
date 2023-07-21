import React, { createContext, useContext, useState, useEffect } from "react";

const AppStoreContext = createContext();

export const AppStoreProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2022-07-01&end_date=2023-06-30&hourly=temperature_2m,rain&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FMoscow"
    )
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setLoading(true))
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return (
    <AppStoreContext.Provider
      value={[
        {
          data,
          loading,
        },
        {},
      ]}
    >
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = () => useContext(AppStoreContext);
