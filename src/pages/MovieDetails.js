import React, { Component } from 'react';
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';
import './MovieDetails.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
    };

    this.deleteMovieId = this.deleteMovieId.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    getMovie(params.id).then((res) => {
      this.setState({
        movie: res,
      });
    }).catch((error) => console.log(error));
  }

  deleteMovieId() {
    const { match } = this.props;
    const { params } = match;
    deleteMovie(params.id);
  }

  render() {
    // Change the condition to check the state
    const { movie } = this.state;
    if (movie.length < 1) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div className="containerDetails" data-testid="movie-details">
        <div><Link className="linkButton" to="/">VOLTAR</Link></div>
        <img style={ { width: '100%' } } alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link className="linkButton" to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link className="linkButton" to="/" onClick={ this.deleteMovieId }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
