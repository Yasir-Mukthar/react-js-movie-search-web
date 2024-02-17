import React, { useContext } from 'react'
import { AppContext } from './context'
import { NavLink } from 'react-router-dom'

const Movies = () => {
  const { movies } = useContext(AppContext)

  return (
    <>
      <section className='flex flex-wrap justify-center w-3/4 m-auto gap-4 my-6'>
        {movies && movies.map((movie) => (
          <div key={movie.imdbID} className='rounded-lg hover:scale-95 transition duration-300'>
            <NavLink to={`movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} className='rounded-lg w-full h-5/6' />
              <h3 className='text-2xl mt-3 text-center px-2'>{movie.Title}</h3>
              <h4 className='text-xl'>{movie.Year}</h4>
            </NavLink>
          </div>
        ))}
      </section>
    </>
  )
}

export default Movies
