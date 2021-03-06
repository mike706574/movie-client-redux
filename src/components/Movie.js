import React from 'react';
import PropTypes from 'prop-types';
import {sendUnwatched, sendWatched} from '../actions';

const UserBadge = props => {
  const username = props.username,
        name = props.name,
        {id, watched} = props.movie,
        style = {cursor: 'default',
                 MozUserSelect: 'none',
                 WebkitUserSelect: 'none',
                 msUserSelect: 'none'};

  let className = 'fa fa-square-o',
      action = sendWatched;

  if(watched.includes(username)) {
    className = 'fa fa-check-square-o';
    action = sendUnwatched;
  }

  return (
    <span className='badge badge-default pull-right ml-1'
          style={style}
          onClick={e => props.dispatch(action(id, username))}>
      <i className={className}></i>{'\u00A0'}
      {name}
    </span>
  );
};

const UserBadges = props => {
  const style = {position: 'absolute', bottom: '1.4em', right: '1em'};

  return (
    <div style={style}>
      <UserBadge name='Mike'
                 username='mike'
                 movie={props.movie}
                 dispatch={props.dispatch} />
      <UserBadge name='Abby'
                 username='abby'
                 movie={props.movie}
                 dispatch={props.dispatch} />
    </div>
  );
};

const Movie = props => {
  const {dispatch, movie} = props,
        title = movie.title,
        description = movie.description,
        releaseDate = movie['release-date'],
        imdbId = movie['imdb-id'],
        tmdbId = movie['tmdb-id'],
        imdbUrl = `http://www.imdb.com/title/${imdbId}`,
        tmdbUrl = `https://www.themoviedb.org/movie/${tmdbId}`,
        backdropPath = movie['backdrop-path'] ?
          "http://image.tmdb.org/t/p/w300" + movie['backdrop-path'] :
          "http://via.placeholder.com/300x169";

  return (
    <div style={{width: '20rem', margin: '0.75rem'}}
         key={movie.title}
         className='card'>

      <img style={{display: 'block', width: '20rem'}}
           className='card-img-top'
           alt={title}
           src={backdropPath} />
      <div className='card-block'>
        <h4 className='card-title'>{title}{'\u00A0'}{'\u00A0'}

        </h4>
        <h6 className='card-subtitle mb-2 text-muted'>{releaseDate}</h6>
        <p className='card-text'>{description}</p>
        <a className='card-link' href={tmdbUrl}>themoviedb</a>
        <a className='card-link' href={imdbUrl}>IMDb</a>
        <UserBadges dispatch={dispatch} movie={movie} />
      </div>
    </div>
  );
};

Movie.propTypes = {
  dispatch: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
};

export default Movie;
