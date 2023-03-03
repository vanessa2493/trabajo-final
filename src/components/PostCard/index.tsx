import React, { FC, useState, useEffect } from "react";
import { Card, Row, Col, Image, Badge, Button } from "react-bootstrap";
import { CommentsForm } from "../CommentsForm";
import { MovieType } from "../../types";
import { serviceMovies } from "../../services/movies";
import "./styles.scss";

type Props = {
    id: String;
    movieId?: string;
    date: string;
    userName?: string;
    onDelete?: (id: string) => void;
};

const PostCard: FC<Props> = ({
                                 movieId,
                                 date,
                                 userName,
                                 onDelete
                             }) => {
    const [movie, setMovie] = useState<MovieType>();

    useEffect(() => {
        const fetchMovie = async () => {
            const movieData = await serviceMovies.getMovieById(movieId);
            setMovie(movieData);
        };
        fetchMovie();
    }, [movieId]);


    return (
        <Card className="post-car">
            <Row>
                <Col>
                    <Row>
                        <Image
                            className="post-image"
                            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                            alt={`poster-${movie?.title}`}
                            fluid
                        />
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Card.Body>
                            <Card.Title className="card-title">
                                <span>{userName}</span>
                                <Badge>{date ? date.toString() : ""}</Badge>
                            </Card.Title>

                            <Card.Text>
                                <h4>{movie?.title}</h4>
                                <p>{movie?.overview}</p>
                            </Card.Text>
                        </Card.Body>
                    </Row>
                </Col>
            </Row>
                <div>
                    <CommentsForm></CommentsForm>
                </div>

                <Card.Footer>
                    <Button variant="danger">
                        Eliminar
                    </Button>
                </Card.Footer>

        </Card>
    );
};

export { PostCard };
