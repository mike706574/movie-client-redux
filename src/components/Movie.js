import React from 'react';
import PropTypes from 'prop-types';

const renameKeys = movie => {
  return {title: movie.title,
          users: movie.users,
          releaseDate: movie['release-date'],
          tmdbId: movie['tmdb-id'],
          imdbId: movie['imdb-id']};
};

const UserBadge = props => {
  return (
    <span className='badge badge-default pull-right ml-1'>
      <i className="fa fa-check-square-o"></i>{'\u00A0'}
      <i className="fa icon-check-empty"></i>{'\u00A0'}
      {props.user}
    </span>
  );
};

const UserBadges = props => {
  if(!props.users || props.users.length === 0) {
    return null;
  }

  const style = {position: 'absolute', bottom: '1.4em', right: '1em'};

  const items = props.users.map(user => {
    return <UserBadge user={user} />;
  });

  return <div style={style}>{items}</div>;
};

const Movie = props => {
  const {dispatch, movie} = props,
        {title, releaseDate, tmdbId, imdbId, users} = renameKeys(movie),
        tmdbUrl = `http://www.imdb.com/title/${tmdbId}`,
        imdbUrl = `https://www.themoviedb.org/movie/${imdbId}`;

  return (
    <div style={{width: '20rem', margin: '0.75rem'}}
         key={movie.title}
         className='card'>
      <img style={{display: 'block', width: '20rem'}}
           className='card-img-top'
           alt={title}
           src='http://via.placeholder.com/300x169' />
      <div className='card-block'>
        <h4 className='card-title'>{title}{'\u00A0'}{'\u00A0'}

        </h4>
        <h6 className='card-subtitle mb-2 text-muted'>{releaseDate}</h6>
        <p className='card-text'></p>
        <a className='card-link' href={tmdbUrl}>themoviedb</a>
        <a className='card-link' href={imdbUrl}>IMDb</a>
        <UserBadges users={users} />
      </div>
    </div>
  );
};

Movie.propTypes = {
  dispatch: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
};

export default Movie;
