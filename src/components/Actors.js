import React from "react";
import { actors } from "../data";




function Actors() {
  
  const renderedActors = actors.map(a => {

    const aMovies = a.movies.map(movie => <li key={movie}>{movie}</li>)
    
    return (
      <div key={a.name}>
        <h2>{a.name}</h2>
        <ul>
          {aMovies}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {renderedActors}
    </div>
  )

}


export default Actors;
