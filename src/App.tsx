import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from "./layouts";
import Main from "./pages/Main";

export const WeatherContext = createContext({
  weatherState: [],
  setWeatherState: () => {},
});

const App: React.FC = (): JSX.Element => {
  return (
    <WeatherContext.Provider
      value={{ weatherState: [], setWeatherState: () => [] }}
    >
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Layout>
        <ToastContainer />
      </Router>
    </WeatherContext.Provider>
  );
};

export default App;
