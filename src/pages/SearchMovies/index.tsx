import { Layout } from "../../components";
import React, { useState, useEffect } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { serviceMovies } from "../../services/movies";

const SearchMovies = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState("1");
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const q = searchParams.get("query");
        const p = searchParams.get("page");
        if (q !== null) {
            setQuery(q);
        }
        if (p !== null) {
            setPage(p);
        }
    }, [searchParams]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);
        setSearchParams({ query: value, page: "1" });
        serviceMovies.search(value, "1");
    };

    const onPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPage(value);
        setSearchParams({ ...searchParams, page: value });
        serviceMovies.search(query, value);
    };

    return (
        <Layout page={"SearchMovies"}>
            <Form>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    value={query}
                    onChange={handleSearch}
                />
                <FormControl
                    type="number"
                    placeholder="Page"
                    className="mr-sm-2"
                    value={page}
                    onChange={onPageChange}
                />
            </Form>
        </Layout>
    );
};

export { SearchMovies };
