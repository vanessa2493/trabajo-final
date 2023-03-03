import {Layout, PostCard} from "../../components";
import React from "react";
import "./styles.scss"
import {useEffect, useState} from "react";
import { servicesUser } from "../../services/users";
import {Col, Row} from "react-bootstrap";
import {PostType, User} from "../../types";

const Dashboard = () =>{

    const [user, setUser] = useState<User>();

    const userId = "-NN-MQaZ3yflds21sV0q"

    useEffect(() => {

        const fetchUser = async () => {
            const userData = await servicesUser.getUserById(userId);
            setUser(userData);
        };
        fetchUser();

    }, []);


    return(
        <Layout page="Home" hideNav>
            <Col className="post-card-container">
                {user?.posts.map((post: PostType) => (
                    <Row className="post-card">
                        <PostCard id="1"
                                  movieId={post.movieId}
                                  date={post.date}
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