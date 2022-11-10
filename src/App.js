import React from "react";
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'
import Detail from './routes/Detail'
import Navigation from './components/Navigation'

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Routes>
        {/* react-router-dom 버전 변경점 5v component -> 6v element */}
        {/* exact 안써도 되된다함 path뒤에 /* 추가하면 됨 */}
        {/* path에 따라 누적으로 보여주는 예제는 v6으로 찾지 못함 ㅠ 다음시간에... */}
        {/* https://11001.tistory.com/176. https://velog.io/@soryeongk/ReactRouterDomV6 */}
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-detail" element={<Detail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
