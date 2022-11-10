import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom'

const saveStateValues = (year, title, summary, poster, genres) => {
    localStorage.setItem(year, title, summary, poster, genres);
}

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            {/* v5->v6 변경점 to에 state 안됨  */}
            {/* https://velog.io/@gyrbs22/React-React-router-dom-V6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EA%B4%80%EB%A0%A8-%EC%9C%A0%EC%9D%98%EC%82%AC%ED%95%AD */}
            {/* 전달할 data를 웹스토리지에 임시저장하거나, 별도의 server 및 함수를 통해 전달하는 등 별도의 매개장치를 통해 진행해야 한다. */}
            {/* localStorage에 저장하는 방법 사용, 브라우저 안에 스토리지 인 것 같음 */}
            <Link to={{ pathname: '/movie-detail' }}
                onClick={()=>saveStateValues(year, title, summary, poster, genres)}>

                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => {
                            return <li key={index} className="movie__genre">{genre}</li>;
                        })}
                    </ul>
                </div>
            </Link>
        </div>
    );
}

Movie.prototype = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;