import {Layout} from "../../components";
import React from "react";

const SearchMovies = () => {

    return (
        <Layout page={'SearchMovies'}>
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" />
            </div>
        </Layout>
    )
}

export {SearchMovies};