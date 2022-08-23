import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store} from "./app/store";
import {Provider} from "react-redux";
/*import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyA6Frh5G9j9M_jPSlCiMLjXJLhwfvldic0",
    authDomain: "online-shop-43a14.firebaseapp.com",
    projectId: "online-shop-43a14",
    storageBucket: "online-shop-43a14.appspot.com",
    messagingSenderId: "1070128734891",
    appId: "1:1070128734891:web:c5789b53c421dea7120dee",
 /!*   measurementId: "G-B5VRYL9TLJ"*!/
};

firebase.initializeApp(firebaseConfig);*/




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
      </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
