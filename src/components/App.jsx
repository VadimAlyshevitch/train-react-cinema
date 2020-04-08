import React from "react";
import { moviesData } from '../moviesData'
import MovieItem from '../components/MovieItem'
// import {API_URL, API_KEY_3} from '../utils/api'

// console.log(moviesData)
 



class App extends React.Component {

  constructor() {
    super()




    this.state = {
      movies : moviesData,
      moviesWillWatch : []
    }
  }


  // componentDidMount(){
  //   console.log('didMount');
  //   fetch(`${API_URL}/diskover/movie?${API_KEY_3}`).then((response)=>{
  //     return response.json()
  //   }).then((data)=> {
  //     this.setState({
  //       movies : data.results
  //     })
  //   })

  // }
   removeMovie = movie => {

    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id
    })
  
    this.setState({
      movies : updateMovies
    })
  
  }

  removeMovieWillWatch = movie => {

    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item) {
      return item.id !== movie.id
    })
  
    this.setState({
      moviesWillWatch : updateMoviesWillWatch
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
                removeMovieWillWatch={this.removeMovieWillWatch}
                />
             </div>
               )
            })
          }
         

        </div>
      </div>
      <div className="col-3">
            <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
            <ul className="list-group">
              {this.state.moviesWillWatch.map(movie => (
                <li key={movie.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </li>
              ))}
            </ul>
        </div>
     </div>
    </div>
       
          
    )
  }
}



export default App;
