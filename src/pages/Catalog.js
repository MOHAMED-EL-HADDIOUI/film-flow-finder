import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Form, Button, Breadcrumb } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import "../styles/Global.css";

const Catalog = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming",
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            language: "en-US",
            page: 1,
          },
        }
      );
      setMovies(response.data.results);
      setError(null);
    } catch (err) {
      setError("Failed to fetch movies. Please try again later.");
      console.error("Error fetching movies:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="catalog-page fade-in">
      <div className="catalog-header" style={{ background: "var(--primary-dark)" }}>
        <Container fluid className="py-5 text-center text-white">
          <h3 className="text-uppercase mb-3">Browse Our Movies</h3>
          <h1 className="display-4 fw-bold">Movie Catalog</h1>
        </Container>
      </div>

      <Container className="py-5">
        <Breadcrumb className="py-3">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Catalog</Breadcrumb.Item>
        </Breadcrumb>

        <Row className="mb-5">
          <Col>
            <h2 className="section-title">Watch Movies Online</h2>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Form onSubmit={handleSearch} className="d-flex justify-content-center">
              <Form.Control
                type="text"
                placeholder="Search for movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="me-2"
                style={{ maxWidth: "400px" }}
              />
              <Button variant="danger" type="submit" className="btn-modern">
                Search
              </Button>
            </Form>
          </Col>
        </Row>

        {loading ? (
          <div className="text-center py-5">
            <div className="loading-spinner mx-auto"></div>
            <p className="mt-3 text-muted">Loading movies...</p>
          </div>
        ) : error ? (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        ) : (
          <div className="grid-container">
            {filteredMovies.map((movie) => (
              <div key={movie.id} className="fade-in">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Catalog;
