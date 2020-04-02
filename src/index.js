import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import MovieItem from './Components/Movie/MovieItem'

const movie ={
  title : 'cinema',
  vote_average : 10,
  image : 'https://ic.pics.livejournal.com/alex_delarg/43136584/99375/99375_original.jpg'
}

function Image(props) {
  return (
    <img className="Poster" src={props.src} alt={props.alt} title={props.title}/>
  )
}
function MovieItem(props){
  console.log('props = ', props);
  const { data: {title,  vote_average, image} } = props // прикол
  
  return (
    <div>
      <Image src={image} alt={title} title={title}/>
    <p>
      Name: {title}
    </p>
    <p>
  Vote Avarage:  {vote_average}
    </p>
    </div>

  )
}

function App() {
  return (
    <div className="App">
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
