import React, { createContext, useContext, useState, useEffect } from "react";

const AppStoreContext = createContext();

export const AppStoreProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2022-07-01&end_date=2023-06-30&hourly=temperature_2m,rain"
    )
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <AppStoreContext.Provider
      value={[
        {
          data,
          isLoading,
        },
        {},
      ]}
    >
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = () => useContext(AppStoreContext);
