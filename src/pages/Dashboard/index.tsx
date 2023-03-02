import {Layout, PostCard} from "../../components";
import React from "react";
import "./styles.scss"
import {useEffect, useState} from "react";
import { servicesUser } from "../../services/users";
import {Row} from "react-bootstrap";

const Dashboard = () =>{

    const [movies, setMovies] = useState([]);
    const [user, setUser] = useState(null);

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
            <Row className="movieCardContainer" xs={1} md={3}>
                {movies?.map((movieId) => (
                    <PostCard id="1"
                              movieId={movieId}
                              date={new Date()}
                              userName={user?.name}
                              onDelete={() => {console.log("delete")}}
                    />
                ))}
            </Row>

        </Layout>
    )
}

export {Dashboard}