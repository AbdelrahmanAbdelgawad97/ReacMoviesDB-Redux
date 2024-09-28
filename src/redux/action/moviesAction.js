import { ALLMOVIES, movieApi } from '../types/moviesType';
import axios from 'axios';

export const getEntireMovies = ()=>{
    return async (dispatch) =>{
        const res = await axios.get(movieApi)
        dispatch({type: ALLMOVIES, data: res.data.results , pages: res.data.total_pages})
    }
}

export const getMovieSearch = (word)=>{
    return async (dispatch) =>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1d21a7c6e01bb2a4b1d445dbddc1fd22&query=${word}&language=en`)
        dispatch({type: ALLMOVIES, data: res.data.results , pages: res.data.total_pages})
    }
}

export const getPage = (page)=>{
    return async (dispatch) =>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1d21a7c6e01bb2a4b1d445dbddc1fd22&language=en-US&page=${page}`)
        dispatch({type: ALLMOVIES, data: res.data.results , pages: res.data.total_pages})
    }
}




