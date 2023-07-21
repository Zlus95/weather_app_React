import React from "react";
import Navigation from "./partials/Navigation";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider";
import { AppStoreProvider } from "./AppStore";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppStoreProvider>
          <Navigation />
        </AppStoreProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
