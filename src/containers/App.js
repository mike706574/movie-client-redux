import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AlphabetNavigation from '../components/AlphabetNavigation';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import Error from '../components/Error';

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

    const movieItems = movies.map(movie => {
      return <li key={movie.name}>{movie.name}</li>;
    });

    return (
      <div className='container'>
        <h1>Movies</h1>
        <p>Movie count: {movies.length}</p>
        <Filter dispatch={dispatch}
                value={filterText}></Filter>
        <Pagination dispatch={dispatch}
                    pageNumber={pageNumber}
                    pageCount={pageCount}
                    itemCount={movies.length}></Pagination>
        <AlphabetNavigation dispatch={dispatch}
                            letter={letter}></AlphabetNavigation>
        <p>Displaying {movies.length} of {movieCount} movies.</p>
        <ul>{movieItems}</ul>
      </div>
    );
  }
}

const matchesFilter = (filterText, name) => {
  if(filterText) {
    return Boolean(name.match(new RegExp(filterText, 'i')));
  }
  return true;
};

const matchesLetter = (letter, name) => {
  return name.toUpperCase().startsWith(letter);
};

const mapStateToProps = state => {
  const pageSize = 5,
        {movies, pageNumber, letter, filterText} = state,
        filteredMovies = movies.filter(movie => {
          return matchesFilter(filterText, movie.name) &&
            matchesLetter(letter, movie.name);
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
