import React from 'react';
import PropTypes from 'prop-types';

const Movie = props => {
    const {dispatch, movie} = props,
          {title, releaseDate, tmdbId, imdbId} = movie,
          tmdbUrl = `http://www.imdb.com/title/${tmdbId}`,
          imdbUrl = `https://www.themoviedb.org/movie/${tmdbId}`;

    return (
        <div style={{width: '22rem', margin: '0.75rem'}}
             className='card'>
          <img style={{display: 'block', width: '22rem'}}
               className='card-img-top'
               alt={title}
               src='http://via.placeholder.com/300x169' />
          <div className='card-block'>
            <h4 className='card-title'>{title}</h4>
            <h6 className='card-subtitle mb-2 text-muted'>{releaseDate}</h6>
            <p className='card-text'></p>
            <a className='card-link' href={tmdbUrl}>themoviedb</a>
            <a className='card-link' href={imdbUrl}>IMDb</a>
          </div>
        </div>
    );
};

Movie.propTypes = {
    dispatch: PropTypes.func.isRequired,
    movie: PropTypes.object.isRequired
};

export default Movie;
