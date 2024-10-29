import axios from "axios";

const movieBaseurl = 'https://api.themoviedb.org/3';
const apikey = '62ff4b209c3054dc068ec699a329b12c'
const genreurl = 'https://api.themoviedb.org/3/discover/movie?api_key=62ff4b209c3054dc068ec699a329b12c'

const get_trendingall = axios.get(movieBaseurl+'/trending/all/day?api_key=' + apikey)

const get_trendingmovie = axios.get(movieBaseurl+'/trending/movie/day?api_key=' + apikey)
const getgenremovies = (id)=>
    axios.get(genreurl+"&with_genres="+id + '&sort_by=popularity.desc')

export default {
    get_trendingall,
    get_trendingmovie,
    getgenremovies
}