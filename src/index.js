import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/Top";
import reportWebVitals from "./reportWebVitals";
import AlertTemplate from "react-alert-template-basic";
import { Provider as AlertProvider } from "react-alert";
import store from "./store/store";

const option = {
  position: "top right",
  type: "success",
  timeout: 3000,
  offset: "3px",
  transition: "scale",
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...option}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
