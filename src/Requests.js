const key = 'e0148551c1404fbc353f9b19afed2cc4';

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    requestSearch: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false`,
    requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`
};

export default requests;
