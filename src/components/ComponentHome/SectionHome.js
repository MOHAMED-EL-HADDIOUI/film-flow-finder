import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";

const SectionHome = () => {
  return (
    <div>
      <div className="container">
        <div className="row  ">
          <div className="col">
            <div className="mt-5 border-bottom">
              <h2 className="pb-5">WATCH MOVIES ONLINE</h2>
            </div>
            <div className="mt-4 mb-3 ml-2">
              <Button variant="outline-danger" className="mr-4">
                Top Rate
              </Button>
              <Button variant="outline-danger">New Releases</Button>
              <Button variant="outline-danger" className="ml-4">
                Coming Soon
              </Button>
            </div>
            <MovieList />
          </div>
        </div>
      </div>
    </div>
  );
};

const MovieList = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=572e9f2c533885e3d1f8d9c7071eb429&language=en-US&page=1"
      )
      .then((result) => {
        // console.log(result.data);
        setMovie(result.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const array = movie.map((item, index) => {
    if (index < 12) {
      return (
        <div class="col-md-4 my-5">
          <div class="card" key={item.index}>
            <img
              src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`}
              class="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                vote : {item.vote_average}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted ">
                release: {item.release_date}{" "}
              </h6>
            </div>
          </div>
        </div>
      );
    }
  });

  return <div className="row">{array}</div>;
};

export default SectionHome;
