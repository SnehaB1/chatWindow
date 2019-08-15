import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import BasicRoutes from "./routes";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store/configureStore";
import './index.css';

const storeInfo = store();

const InitializeApp = () => {
    return (
      <Provider store={storeInfo.store}>
        <PersistGate loading={null} persistor={storeInfo.persistor}>
          <BasicRoutes />
        </PersistGate>
      </Provider>
    );
  };

ReactDOM.render(InitializeApp(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
