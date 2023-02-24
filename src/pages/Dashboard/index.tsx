import {Layout, PostCard} from "../../components";
import React from "react";
import "./styles.scss"

const Dashboard = () =>{
    return(
        <Layout page="Home" hideNav>
            <PostCard id="1"

                      title="the wolf"
                      date="10/10/2022"
                      userName="Pancho Villa"
                      image="mi imagen"
                      description="Lorem ipsum"
            />

        </Layout>
    )
}

export {Dashboard}