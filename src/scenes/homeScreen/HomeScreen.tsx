import "./homeScreen.css";
import Home from "./home/Home";
import requests from "../../axios/requests";
import MovieRow from "../../components/MovieRow/MovieRow";
import { v4 as uuidV4 } from "uuid";

const HomeScreen = () => {
  const moviesRows = [
    {
      id: uuidV4(),

      title: "Netflix Originals",
      fetchURL: requests.fetchNetflixOriginals,
      isLargePoster: true,
    },
    {
      id: uuidV4(),

      title: "Trending Now",
      fetchURL: requests.fetchTrending,
      isLargePoster: true,
    },
    {
      id: uuidV4(),

      title: "Top Rated",
      fetchURL: requests.fetchTopRated,
      isLargePoster: true,
    },
    {
      id: uuidV4(),

      title: "Action Movies",
      fetchURL: requests.fetchActionMovies,
      isLargePoster: true,
    },

    {
      id: uuidV4(),

      title: "Horror Movies",
      fetchURL: requests.fetchHorrorMovies,
      isLargePoster: true,
    },

    {
      id: uuidV4(),

      title: "Romance Movies",
      fetchURL: requests.fetchRomanceMovies,
      isLargePoster: true,
    },

    {
      title: "Comedy Movies",
      fetchURL: requests.fetchComedyMovies,
      isLargePoster: true,
    },
    {
      title: "Documentaries",
      fetchURL: requests.fetchDocumentaries,
      isLargePoster: true,
    },
  ];

  return (
    <div className="homeScreen">
      <Home />
      <div>
        {moviesRows.map(({ title, fetchURL, id, isLargePoster }) => (
          <MovieRow
            key={`${id}-${title}`}
            title={title}
            fetchURL={fetchURL}
            isLargePoster={isLargePoster}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
