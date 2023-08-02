


import React from "react";
import ReactDOM from "react-dom";
import BeforeHeader from "./beforeHeader"; // Подключение BeforeHeader
import Header from "./Header";
import Main from "./main";
import Footer from "./footer";
ReactDOM.render(
  <React.StrictMode>
    {/* Отображение компонентов Header и BeforeHeader */}
    <BeforeHeader />
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);



