import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AlphabetNavigation from './AlphabetNavigation';
import Filter from './Filter';
import Pagination from './Pagination';
import Error from './Error';
import Movies from './Movies';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    error: PropTypes.object,
    letter: PropTypes.string.isRequired,
    pageNumber: PropTypes.number.isRequired,
    filterText: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired
  }

  render() {
    const {error, dispatch, letter, pageCount, pageNumber,
           movies, filterText, movieCount} = this.props;

    if(error) {
      return <Error error={this.props.error} />;
    }

    return (
      <div className='container'>
        <h1>Movies</h1>
        <AlphabetNavigation dispatch={dispatch}
                            letter={letter}></AlphabetNavigation>
        <Filter dispatch={dispatch}
                value={filterText}></Filter>
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

const matchesFilter = (filterText, title) => {
  if(filterText) {
    return Boolean(title.match(new RegExp(filterText, 'i')));
  }
  return true;
};

const matchesLetter = (letter, title) => {
  return title.toUpperCase().startsWith(letter);
};

const mapStateToProps = state => {
  const pageSize = 5,
        {movies, pageNumber, letter, filterText} = state,
        filteredMovies = movies.filter(movie => {
          return matchesFilter(filterText, movie.title) &&
            matchesLetter(letter, movie.title);
        }),
        pageCount = Math.floor(filteredMovies.length / pageSize) + 1,
        low = (pageNumber - 1) * pageSize,
        high = low + pageSize;

  return {...state,
          pageCount: pageCount,
          movieCount: movies.length,
          movies: filteredMovies.slice(low, high)};
};

export default connect(mapStateToProps)(App);
