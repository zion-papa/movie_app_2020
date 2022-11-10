import React from "react";
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
    return (
        <div className="nav">
            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            a 태그 대신 Link 컴포넌트 사용하는 것이 react 특징, 화면 전체를 새로고침 안하고 필요한 부분만 변경되게 해줌 */}
            {/* 여기부터 신기 ㅋ 브라우저에서는 a태그로 바뀜 */}
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
        </div>
    );
}

export default Navigation;