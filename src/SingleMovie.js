import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { API_URL } from './context';

export const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setMovie(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    let searchTimer=setTimeout(()=>{
      setTimeout(() => {
        getMovies(`${API_URL}&i=${id}`);
      }, 1000);
    })
    return ()=> clearTimeout(searchTimer);

  }, [id]);


  return (
    <div className=" mx-auto flex justify-center items-center h-screen  bg-black">
      {movie ? (
        <div className="bg-gray-200 p-4 rounded-lg sm lg:flex justify-center w-1/3 ">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="rounded-lg"
          />
          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-3xl font-bold">{movie.Title}</h1>
            <p className="text-xl">{movie.Year}</p>
            <p className="text-xl">{movie.Genre}</p>
            </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-700">Loading...</p>
        </div>
      )}
    </div>
  );
    
};
