import {CustomPagination, Layout, MovieCard} from "../../components";
import React, { useState, useEffect } from "react";
import {Form, FormControl, Row} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { serviceMovies } from "../../services/movies";
import {MovieType} from "../../types";
import "./styles.scss";

const SearchMovies = () => {
    const [query, setQuery] = useState("");
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
    }, [searchParams, query]);


    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);
        setSearchParams({ query: value, page: "1" });
    };

    return (
        <Layout page={"SearchMovies"} hideAside={true}>
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
                <Row className="movieCardContainer" xs={1} md={3}>
                    {movies?.map((movie) => (
                        <MovieCard
                            movie={movie}
                            onClick={()=>(console.log("hola juan carlo"))}
                        />
                    ))}
                </Row>
                <Row className = "pagination">
                    <CustomPagination
                        currentPage={parseInt(searchParams.get("page") ?? "1")}
                        totalPages={totalPages ?? 0}
                        onChangePage={(pageNumber) =>
                            setSearchParams({
                                ...searchParams,
                                query: searchParams.get("query") ?? query,
                                page: pageNumber.toString(),
                            })
                        }
                    />
                </Row>
            </Form>
        </Layout>
    );
};

export { SearchMovies };
