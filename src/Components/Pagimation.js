import React from 'react'
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {getPage} from '../redux/action/moviesAction'

const Pagimation = () => {
  // data return an object start with 0 and data.selected return the value 
  
  const [pageCount, setPageCount] = useState(0);
  const pages = useSelector((state)=>state.pageCount)

  const dispatch = useDispatch();
  useEffect(()=>{
    setPageCount(pages)
  },[])

  
  // const getPageOfMovies = async (page)=>{
  //   dispatch(getPage(page))
  // }
  
  
  const handlePageClick=(data)=>{
    dispatch(getPage(data.selected+1));
  }


  return (
    <>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center my-5"}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </>
  )
}

export default Pagimation;
