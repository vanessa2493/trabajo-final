import React from "react";
import {Card, Button, Image, Row} from "react-bootstrap";
import {MovieType} from "../../types";

interface Props {
    movie: MovieType
    onClick: () => void
}

const MovieCard: React.FC<Props> = ({ movie, onClick }) => {
    return (
        <Card>
            <Row xs={3}>
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={`poster-${movie.title}`}
                    fluid
                />
            </Row>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
                <Button variant="primary" onClick={onClick}>Compartir</Button>
            </Card.Body>
        </Card>
    );
};

export { MovieCard };
