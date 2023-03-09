import {Layout, PostCard} from "../../components";
import React from "react";
import "./styles.scss"
import {useEffect, useState} from "react";
import { servicesUser } from "../../services/users";
import {Col, Row} from "react-bootstrap";
import {User} from "../../types";

const Dashboard = () =>{

    const [movies, setMovies] = useState<string[]>([]);
    const [user, setUser] = useState<User>();
    const currentDate = new Date();
    const dateString = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;


    const userId = "-NN-MQaZ3yflds21sV0q"

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesData = await servicesUser.getMoviesUser(userId)
            setMovies(moviesData);
        };

        fetchMovies();

        const fetchUser = async () => {
            const userData = await servicesUser.getUserById(userId);
            setUser(userData);
        };
        fetchUser();

    }, []);


    return(
        <Layout page="Home" hideNav>
            <Col className="post-card-container">
                {movies?.map((movieId) => (
                    <Row className="post-card">
                        <PostCard id="1"
                                  movieId={movieId}
                                  date={dateString}
                                  userName={user?.name}
                                  onDelete={() => {console.log("delete")}}
                        />
                    </Row>
                ))}
            </Col>

        </Layout>
    )
}

export {Dashboard}