import React from "react";
import { Provider } from "react-redux";
import { Store } from "../store";

export const Main = () => (
  <Provider store={Store}>
    <div>Dashboard go here</div>
  </Provider>
);
