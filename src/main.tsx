import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./state/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </React.StrictMode>
);
