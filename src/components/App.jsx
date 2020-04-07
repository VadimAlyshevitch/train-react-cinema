import React from "react";
import { moviesData } from '../moviesData'
import MovieItem from '../components/MovieItem'

console.log(moviesData)
 



class App extends React.Component {

  constructor() {
    super()




    this.state = {
      movies : moviesData
    }
  }

   removeMovie = movie => {

    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id
    })
  
    this.setState({
      movies : updateMovies
    })
  
  }

  render(){
    return(
        <div>{
          this.state.movies.map((movie)=>{
          return <MovieItem
           key={movie.id}
           movie={movie}
           removeMovie={this.removeMovie}
           />
          })}
          </div>
          
    )
  }
}



export default App;
