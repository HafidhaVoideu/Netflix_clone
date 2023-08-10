const API_Key = "ca1ea0422203e58c6e80db4e1008b349";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_Key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_Key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_Key}&language=en-US

    `,
  fetchActionMovies: `/discover/movie?api_key=${API_Key}&with_genres=28

    `,
  fetchHorrorMovies: `/discover/movie?api_key=${API_Key}&with_genres=27

    `,

  fetchComedyMovies: `/discover/movie?api_key=${API_Key}&with_genres=35

    `,
  fetchRomanceMovies: `/discover/movie?api_key=${API_Key}&with_genres=10749o
    `,
  fetchDocumentaries: `/discover/movie?api_key=${API_Key}&with_genres=99
    `,
};

export default requests;
