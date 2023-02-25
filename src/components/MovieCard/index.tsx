import React from "react";
import {Card, Button, Image, Row} from "react-bootstrap";
import {MovieType} from "../../types";
import "./styles.scss";

interface Props {
    movie: MovieType
    onClick: () => void
}

const MovieCard: React.FC<Props> = ({ movie, onClick }) => {
    return (
        <Card className="movieCard">
            <Row >
                <Image
                    className='movieImage'
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={`poster-${movie.title}`}
                    fluid
                />
            </Row>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text className = "movieDescription">{movie.overview}</Card.Text>
                <Button variant="primary" onClick={onClick}>Compartir</Button>
            </Card.Body>
        </Card>
    );
};

export { MovieCard };
