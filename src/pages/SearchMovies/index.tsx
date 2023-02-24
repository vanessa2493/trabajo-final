import {Layout, MovieCard} from "../../components";
import React, { useState, useEffect } from "react";
import {Col, Form, FormControl, Row} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { serviceMovies } from "../../services/movies";
import {MovieType} from "../../types";

const SearchMovies = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState("1");
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState<MovieType[]>();
    const [totalPages, setTotalPages] = useState<number>();

    useEffect(() => {
        serviceMovies
            .search(
                searchParams.get("query") ?? query,
                searchParams.get("page") ?? '1'
            )
            .then((data)=> {
                setMovies(data.results);
                setTotalPages(data.total_pages);
            });
    }, [searchParams, query, page]);


    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);
        setSearchParams({ query: value, page: "1" });
    };

    const onPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPage(value);
        setSearchParams({ ...searchParams, query, page: value });
    };

    const generatePageNumbers = (page: number, totalPages: number) => {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    };

    return (
        <Layout page={"SearchMovies"}>
            <Form>
                <Row>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        value={query}
                        onChange={handleSearch}
                    />
                </Row>
                <Row xs={1} md={5} className="g-4">
                    {movies?.map((movie) => (
                        <MovieCard
                            movie={movie}
                            onClick={()=>(console.log("hola juan carlo"))}
                        />
                    ))}
                </Row>
                <Row>
                    <Col>
                        Pagination
                        <FormControl
                            type="number"
                            placeholder="Page"
                            className="mr-sm-2"
                            value={page}
                            onChange={onPageChange}

                        />
                    </Col>
                </Row>
            </Form>
        </Layout>
    );
};

export { SearchMovies };
