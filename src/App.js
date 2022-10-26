import React from "react";
//import PropTypes from "prop-types";


class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }



  /* 생명주기 확인 
  constructor(props) {
    super(props);
    console.log('hello');
  }

  componentDidMount(){
    console.log('component rendered');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  state = {
    count: 0,
  };

  add = () => {
    //console.log('add');
    this.setState(current => ({
      count: current.count + 1,
    }));
  }
  minus = () => {
    //console.log('minus');
    this.setState(current => ({
      count: current.count + 1,
    }));
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
  */
}


/*
function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: '김치',
    image: 'https://steemitimages.com/DQmUCKzQx9R5UTHwm91PwyUv236V1SJeJXFaN8C5sJW4GEM/2c77e779b5a5caa8d129a105a34e677a093927.jpg',
    rating : 5,
  },
  {
    id: 2,
    name: '삼겹살',
    image: 'https://mp-seoul-image-production-s3.mangoplate.com/mango_pick/uker6u9xhkr1m8.jpg',
    rating : 5,
  },
  {
    id: 3,
    name: '비빔밥',
    image: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/S9Y/image/76pr0EfQi6R21MMIyzefN9hiqIU.jpg',
    rating : 5,
  },
  {
    id: 4,
    name: '돈까스',
    image: 'http://mbcmall.imbc.com/store/__icsFiles/afieldfile/2018/12/27/001_1.jpg',
    rating : 5,
  },
  {
    id: 5,
    name: '김밥',
    image: 'https://www.tsunagulocal.com/wp-content/uploads/2021/02/pixta_65991015_M.jpg',
    rating : 5,
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish =>
        (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};
*/

export default App;
