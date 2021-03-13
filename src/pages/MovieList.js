import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { getMovies } from '../services/movieAPI';
import './MovieList.css';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    getMovies().then((res) => {
      this.setState({
        movies: res,
      });
    }).catch((error) => console.log(error));
  }

  render() {
    const { movies } = this.state;
    if (movies.length < 1) return <Loading />;
    return (
      <div data-testid="movie-list">
        <header>
          MyFilmes
          <div>
            <Link className="addFilme" to="/movies/new">ADICIONAR FILME</Link>
            <a className="addFilme" href="https://www.linkedin.com/in/eugabrielcastro/" target="_black">LINKEDIN</a>
            <a className="addFilme" href="https://github.com/GabriellCastro" target="_black">GITHUB</a>
          </div>
        </header>
        <div className="container">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}
export default MovieList;
