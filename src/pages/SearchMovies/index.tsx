import {Layout} from "../../components";
import React from "react";
import {Button, Form, FormControl} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";
import {MoviePayload} from "../../types";
import {serviceMovies} from "../../services/movies";

const SearchMovies = () => {

    const {register, handleSubmit} = useForm<MoviePayload>()
    const [searchParams, setSearchParams] = useSearchParams();

    const onSubmit = (data: MoviePayload) => {
        serviceMovies.search(data.query, data.page);
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const queryParams = Object.fromEntries(searchParams.entries());
        queryParams.query = e.target.value;
        setSearchParams(new URLSearchParams(queryParams));
    }

    return (
        <Layout page={'SearchMovies'}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    {...register('query')}
                    value={searchParams.get('query') ?? ''}
                    onChange={handleSearch}
                />
                {/*<FormControl*/}
                {/*    type="number"*/}
                {/*    placeholder="Page"*/}
                {/*    className="mr-sm-2"*/}
                {/*    {...register('page')}*/}
                {/*    value={searchParams.get('page') ?? '1'}*/}
                {/*    onChange={(e) => {*/}
                {/*        setSearchParams({...searchParams, page: e.target.value});*/}
                {/*    }}*/}
                {/*/>*/}
                <Button variant="outline-success" type="submit">Search</Button>
            </Form>
        </Layout>
    )
}

export {SearchMovies};