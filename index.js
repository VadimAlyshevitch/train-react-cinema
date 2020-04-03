import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import MovieItem from './Components/Movie/MovieItem'

const movie ={
  title : 'cinema',
  vote_average : 10,
  image : 'https://ic.pics.livejournal.com/alex_delarg/43136584/99375/99375_original.jpg',
  owervie : 'sdfghjkl;oiuytdfg dfghjkl.ftyuj ftyujnvfgyjbjkmjkgdrhj'
}

function Image(props) {
  return (
    <img className="Poster" src={props.src} alt={props.alt} title={props.title}/>
  )
}
class MovieItem extends React.Component {
  constructor(){
    super()

    this.state = {
      show : false,
      like : false
    }
  }

  toggleVue = () => {
    this.setState({
      show : !this.state.show
    })
  }

  addLike = () => {
    this.setState({
      like : !this.state.like
    })
  }

  render(){
    // console.log('props = ', props);
    const { data: {title,  vote_average, image, owervie} } = this.props // прикол
    
    return (
      <div className="Main-page">
        <Image src={image} alt={title} title={title}/>
      <p>
        Name: {title}
      </p>
      <p>
    Vote Avarage:  {vote_average}
      </p>
      <div className="Deskription-buttons">
      <button type="button" onClick={this.toggleVue}>
       {this.state.show ? 'Hide Deskription' : 'Show Desckription'}
        </button>
    <button type="button" class={this.state.like ? "btn--like" : ''} onClick={this.addLike}> Add Like </button>
      </div>
      {this.state.show ? <p>{owervie}</p> : null}
      </div>
  
    )
  }

}

function App() {
  return (
    <div className="App">
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
