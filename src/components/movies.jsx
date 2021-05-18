import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
const Movies = () => {
  let [movies, setMovies] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:5000/api/allassets",
    }).then((data) => {
      console.log("yesss....", data.data);
      setMovies(data.data);
    });
  }, []);
  console.log(movies);
  return (
    <>
      <p className="title font-weight-bold">Watch Next TV & Movies</p>
      <div className="video">
      {movies?.videos.map((each,i)=>{
          return (
          <div className="col-md-3" style={{textAlign:'center'}}>
            <Link to={`/watch/${each}`}>
            <img className="image" src="images/play-button.png" alt="" />
            </Link>
           
            <h2 className="movie-name">{each}</h2>
          </div>)
      })}
        
      </div>
    </>
  );
};

export default Movies;
