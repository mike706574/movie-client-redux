import React from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';

const Movies = props => {
  const {dispatch, movies} = props;

  const movieItems = movies.map(movie => {
    return <Movie dispatch={dispatch} movie={movie}></Movie>;
  });

  return (
    <div className='row'>
      {movieItems}
    </div>
  );
};

Movies.propTypes = {
  dispatch: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
};

export default Movies;
