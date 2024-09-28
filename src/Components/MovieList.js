
import React from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap';
import Pagimation from './Pagimation'
import { useSelector, useDispatch } from 'react-redux';
import {getEntireMovies} from '../redux/action/moviesAction'
import { useState, useEffect } from 'react';

const MovieList = ({ getPageOfMovies, pageCount}) => {

  const [movies, setMovies] = useState([]);
  // const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getEntireMovies())
  },[])
  
  const dataMovies = useSelector((state)=>state.movies)

  useEffect(()=>{
    setMovies(dataMovies);
  }, [dataMovies])

  
  return (
    <Row className='mt-5'>
        {movies.length >= 1 ? (movies.map(item=>{
            return (

                <CardMovie key={item.id} item={item} />
            )
        })):<h2 className='text-center p-s'> No Movies Found...</h2>}

        {movies.length >= 1 ? (<Pagimation pageCount={pageCount} getPageOfMovies={getPageOfMovies}/>):null}
      
    </Row>
  )
}

export default MovieList;
