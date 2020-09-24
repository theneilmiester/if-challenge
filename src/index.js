import React from "react";
import ReactDOM from "react-dom";
import RootStore from 'stores/RootStore';
import App from "./App";
export const StoreContext = React.createContext();

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StoreContext.Provider value={RootStore}>
    <App />
  </StoreContext.Provider>,
  rootElement
);
