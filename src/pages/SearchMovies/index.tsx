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
            query: value
        });
    };

    const onPageChange = (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        setSearchParams({
            ...searchParams,
            page: value
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
                <FormControl
                    type="number"
                    placeholder="Page"
                    className="mr-sm-2"
                    {...register('page')}
                    value={searchParams.get('page') ?? '1'}
                    onInput={onPageChange}
                />
            </Form>
        </Layout>
    )
}

export {SearchMovies};