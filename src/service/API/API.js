import axios from 'axios';
const key = '037637c92dbb2c5df8386bba9376d18a';
const page = 1;

export function fetchTrandMovie() {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US&page=${page}`
  ).then((response) => {
      return response.data;
    });
};

export function fetchDetailsMovie(moviesId) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${moviesId}?api_key=${key}&language=en-US`
  ).then((response) => {
      return response.data;
    });
};

export function fetchActors(moviesId) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=${key}&language=en-US`)
    .then((response) => {
      return response.data;
    });
}

export function fetchReview(moviesId) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=${key}&language=en-US`)
    .then((response) => {
      return response.data;
    });
}

export function fetchQuery(search) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${search}`
    )
    .then((response) => {
      return response.data;
    });
}






