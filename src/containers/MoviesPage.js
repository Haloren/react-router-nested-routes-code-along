// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MoviesShow';

const MoviesPage = ({ match, movies }) => (
  <div>
    {/* {console.log(movies)} */}
    <MoviesList movies={movies} />
    <Route exact path={match.url} render={() => <h3>Choose a movie from the list above</h3>} />
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} /> }></Route>
  </div>
)

export default MoviesPage
