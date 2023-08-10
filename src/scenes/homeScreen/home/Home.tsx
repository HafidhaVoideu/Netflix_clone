import { useEffect, useState } from "react";
import "./home.css";
import axios from "../../../axios/axios";
import requests from "../../../axios/requests";
import { MovieType } from "../../../Typescript_Types/types";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BsPlayCircle, BsHeart } from "react-icons/bs";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

const Home = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  async function fetchMovie() {
    const request = await axios.get(requests.fetchNetflixOriginals);

    setMovies(request.data.results.slice(1, 6));
    return request;
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  const truncate = (lines: string, n: number) => {
    return lines?.length > n ? lines.substring(0, n - 1) + "..." : lines;
  };

  return (
    <section className="home">
      <Carousel
        autoPlay
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler) => {
          return (
            <button
              onClick={onClickHandler}
              className="home__navigation-btn  home__navigation-btn--left "
            >
              <IoMdArrowDropleft />
            </button>
          );
        }}
        renderArrowNext={(onClickHandler) => {
          return (
            <button
              onClick={onClickHandler}
              className="home__navigation-btn  home__navigation-btn--right "
            >
              <IoMdArrowDropright />
            </button>
          );
        }}
      >
        {movies.map((movie) => (
          <div key={movie.id}>
            <div className="overlay" />
            <img
              className="home__img"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt={movie.original_name || movie.title || movie.name}
            />

            <article className="home__info">
              <h1 className="home__title">
                {movie?.title || movie?.name || movie?.original_name}
              </h1>

              <p className="home__des">{truncate(movie?.overview, 250)}</p>

              <div className="home__btns">
                <button className="home__btn home__btn--flex  ">
                  <span> Play</span>
                  <BsPlayCircle />
                </button>
                <button className="home__btn home__btn--flex">
                  <span>Gems</span>

                  <BsHeart />
                </button>
              </div>
            </article>
            <div className="home--fadeBottom" />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Home;
