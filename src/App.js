import React from "react";

import "./App.css";
import {
  Footer,
  Blog,
  Feature,
  Header,
  Possiblity,
  Whatgpt3,
} from "./containers";

import { Action, Brand, Navbar } from "./components";
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Feature />
      <Possiblity />
      <Action />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
