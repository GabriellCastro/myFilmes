import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <div className="card" data-testid="movie-card">
        <img style={ { width: '100%' } } src={ imagePath } alt={ title } />
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
