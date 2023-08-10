import axios from "../../axios/axios";
import { MovieType } from "../../Typescript_Types/types";
import "./movieRow.css";

import { useState, useEffect } from "react";

type MovieRowsProps = {
  title: string;
  fetchURL: string;
  isLargePoster?: boolean;
};

const MovieRow = ({
  title,
  fetchURL,
  isLargePoster = false,
}: MovieRowsProps) => {
  const [movies, setMovies] = useState<MovieType[]>([] as MovieType[]);

  const base_url = "https://image.tmdb.org/t/p/original";
  async function fetchMoviesGenre() {
    const request = await axios.get(fetchURL);
    setMovies(request.data.results);
    return request;
  }
  useEffect(() => {
    fetchMoviesGenre();
  }, []);

  return (
    <section className="row">
      <h1 className="row__title"> {title}</h1>

      <div className="row__posters">
        {movies?.map(
          (movie: MovieType) =>
            ((isLargePoster && movie.poster_path) ||
              (!isLargePoster && movie.backdrop_path)) && (
              <img
                src={`${base_url}${
                  isLargePoster ? movie.poster_path : movie.backdrop_path
                }`}
                key={movie.id}
                className={`row__poster  ${
                  isLargePoster && "row__poster--big"
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </section>
  );
};

export default MovieRow;
