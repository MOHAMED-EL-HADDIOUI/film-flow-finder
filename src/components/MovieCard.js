import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const {
    id,
    title,
    poster_path,
    vote_average,
    release_date,
    overview,
  } = movie;

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <Card 
      className="movie-card h-100" 
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="movie-card-image">
        <Card.Img 
          variant="top" 
          src={imageUrl} 
          alt={title}
          className="movie-poster"
        />
        <div className="movie-overlay">
          <div className="movie-rating">
            <span className="rating-value">{vote_average.toFixed(1)}</span>
            <span className="rating-max">/10</span>
          </div>
        </div>
      </div>
      <Card.Body>
        <Card.Title className="movie-title">{title}</Card.Title>
        <Card.Text className="movie-date">
          {new Date(release_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard; 