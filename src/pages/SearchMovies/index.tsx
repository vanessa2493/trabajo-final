import {Layout} from "../../components";
import React from "react";
import {Form, FormControl} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";
import {MoviePayload} from "../../types";
import {serviceMovies} from "../../services/movies";

const SearchMovies = () => {

    const {register, handleSubmit} = useForm<MoviePayload>()
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (data: MoviePayload) => {
        serviceMovies.search(data.query, data.page);
    }

    const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        setSearchParams({
            ...searchParams,
            query: value,
            page: '1', // Restablecer la página a 1 al cambiar la consulta
        });
    };

    return (
        <Layout page={'SearchMovies'}>
            <Form onChange={handleSubmit(handleSearch)}>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    {...register('query')}
                    value={searchParams.get('query') ?? ''}
                    onInput={onInputChange}
                />
            </Form>
        </Layout>
    )
}

export {SearchMovies};