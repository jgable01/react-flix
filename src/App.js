import Catalog from "./components/Catalog";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Header from "./components/Header";
import New from "./components/New";
import NotFound from "./components/NotFound";
import { Helmet } from "react-helmet";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>React-Flix</title>
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route exact path="/detail/:movie" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
