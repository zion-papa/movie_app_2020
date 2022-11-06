import React from "react";
//import Home from './routes/Home'
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* //react 버전이 올라가면서 바뀜 component={About} -> elemnet={<About/>} */}
        <Route path="/home">
          <h1>Home</h1>
        </Route>
        <Route path="/home/introduction">
          <h1>Introduction</h1>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
