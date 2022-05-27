import React from "react";
import { movies } from "../data";


// {
//   title: "Doctor Strange",
//   time: 115,
//   genres: ["Action", "Adventure", "Fantasy"],
// },


function Movies() {

  // const renderedMovies = movies.map(movie => movie.genres.map(genre =>{



  //   return (
  //     <div>
  //       <h2>Name: {movie.title}</h2>

  //       Time: {movie.time}

  //       <ul>Genres: {genre}</ul>

  //     </div>


  //   )
  // }))


  const renderedMovies = movies.map(movie => {
    const renderedGenre = movie.genres.map(genre => <li key={genre}>Genres: {genre}</li>)

    return (
      <div key={movie.name}>
        <h2>Name: {movie.title}</h2>
        Time: {movie.time}
        {renderedGenre}


      </div>


    )
  })





  return (
    <div>
      <h1>Movies Page</h1>
      {renderedMovies}
    </div>

  )
}

export default Movies;
