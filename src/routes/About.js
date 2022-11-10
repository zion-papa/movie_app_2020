import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                교재가 나온지 2년도 안 된 사이에 방법이 바껴서 document를 찾아봐야해요.<br />
                css에 .about__container span:first-child에 fontsize 20px 되어있음
            </span>
            <span>
                .about__container span:last-child에 display: block;margin-top: 10px; 설정<br />
                마지막 자식에 위 css 적용
            </span>


        </div>

    );
}

export default About;