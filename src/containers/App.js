import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AlphabetNavigation from '../components/AlphabetNavigation';
import Error from '../components/Error';
import Movies from '../components/Movies';
import Pagination from '../components/Pagination';
import TitleFilter from '../components/TitleFilter';
import UserFilter from '../components/UserFilter';

class App extends Component {
  static propTypes = {
    // Injected by React Router
    children: PropTypes.node,

    dispatch: PropTypes.func.isRequired,
    error: PropTypes.object,
    letter: PropTypes.string.isRequired,
    pageNumber: PropTypes.number.isRequired,
    titleFilterText: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired
  }

  render() {
    const {error, fetching, errorMessage, dispatch, letter,
           pageCount, userFilters, pageNumber, movies,
           titleFilterText, movieCount} = this.props;

    if(fetching) {
        return (
          <div className='container'>
            <h1>Movies</h1>
            <p>Fetching...</p>
          </div>
        );
    }

    if(errorMessage) {
      return <p>{errorMessage}</p>;
    }

    if(error) {
      return <Error error={this.props.error} />;
    }

    return (
      <div className='container'>
        <h1>Movies</h1>
        <AlphabetNavigation dispatch={dispatch}
                            letter={letter}></AlphabetNavigation>
        <UserFilter dispatch={dispatch}
                    userFilters={userFilters}></UserFilter>
        <TitleFilter dispatch={dispatch}
                     value={titleFilterText}></TitleFilter>
        <Pagination dispatch={dispatch}
                    pageNumber={pageNumber}
                    pageCount={pageCount}
                    itemCount={movies.length}></Pagination>

        <p>Displaying {movies.length} of {movieCount} movies.</p>
        <Movies dispatch={dispatch} movies={movies} />
      </div>
    );
  }
}

const matchesFilter = (titleFilterText, title) => {
  if(titleFilterText) {
    return Boolean(title.match(new RegExp(titleFilterText, 'i')));
  }
  return true;
};

const matchesLetter = (letter, movieLetter) => {
  return letter.toUpperCase() === movieLetter.toUpperCase();
};

const matchesUserFilter = (movie, username, value) => {
  switch(value) {
    case 'either':
      return true;
    case 'unwatched':
      return !movie.watched.includes(username);
    case 'watched':
      return movie.watched.includes(username);
    default:
      throw new Error(`Invalid user filter value for user ${username}: ${value}.`);
  }
}

const getPageCount = (pageSize, items) => {
  const count = items.length,
        fullPageCount = (count / pageSize),
        hasPartialPage = (count % pageSize);
  return Math.floor(fullPageCount + (hasPartialPage ? 1 : 0));
};

const mapStateToProps = state => {
  const pageSize = 12,
        {fetching, errorMessage, movies, pageNumber, letter,
         titleFilterText, userFilters} = state.app;

  const filteredMovies = movies.filter(movie => {
          return matchesLetter(letter, movie.letter) &&
            matchesFilter(titleFilterText, movie.title) &&
            matchesUserFilter(movie, 'mike', userFilters.mike) &&
            matchesUserFilter(movie, 'abby', userFilters.abby);
        }),
        pageCount = getPageCount(pageSize, filteredMovies),
        low = (pageNumber - 1) * pageSize,
        high = low + pageSize;

  return {pageNumber,
          letter,
          titleFilterText,
          userFilters,
          fetching,
          errorMessage: errorMessage,
          pageCount: pageCount,
          movieCount: filteredMovies.length,
          movies: filteredMovies.slice(low, high)};
};

export default connect(mapStateToProps)(App);
