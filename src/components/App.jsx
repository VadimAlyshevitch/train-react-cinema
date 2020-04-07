import React from "react";
import { moviesData } from '../moviesData'
import MovieItem from '../components/MovieItem'

console.log(moviesData)
 



class App extends React.Component {

  constructor() {
    super()




    this.state = {
      movies : moviesData,
      moviesWillWatch : []
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

  addMovieWillWatch = movie => {
    // this.state.moviesWillWatch.push(movie)
    //создать новую ссылку и в нее поместить с предыдущего состояния создать ссылку этого массива [...]

    const updateMoviesWillWatch = [...this.state.moviesWillWatch]
    // в полученную ссылку запушить выбранный фильм
    updateMoviesWillWatch.push(movie)

   //  и после этого уже задать сетстейт
   this.setState({
    moviesWillWatch : updateMoviesWillWatch
   })
  }

  render(){
    return(
    <div className="container">
      <div className="row">
      <div className="col-9">
        <div className="row">
          
          {
            this.state.movies.map((movie)=>{
            return (
            <div className="col-6 mb-4" key={movie.id}>
                < MovieItem
                
                movie={movie}
                removeMovie={this.removeMovie}
                addMovieWillWatch={this.addMovieWillWatch}
                />
             </div>
            )
          })}
         

        </div>
      </div>
          <div className="col-3">
        <p>Will Watch: {this.state.moviesWillWatch.length}</p>
          </div>
     </div>
    </div>
       
          
    )
  }
}



export default App;
