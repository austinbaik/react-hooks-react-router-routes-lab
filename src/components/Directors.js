import React from "react";
import { directors } from "../data";

function Directors() {

  // {
  //   name: "Benedict Cumberbatch",
  //   movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
  // },


  const renderedDirectors = directors.map(d => {

    const dMovies = d.movies.map(movie => <li key={movie}>{movie}</li>)
    
    return (
      <div key={d.name}>
        <h2>{d.name}</h2>
        <ul>
          {dMovies}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {renderedDirectors}
    </div>
  )

}

export default Directors;
