import { ALLMOVIES } from '../types/moviesType'
// 2 create reducers

const intialValue = {movies:[], pageCount:0};

export const movieReducers = (state=intialValue, action) => {
    switch (action.type) {
        case ALLMOVIES:
            return {movies: action.data, pageCount: action.pages};
        default:
            return state;    
    }
}