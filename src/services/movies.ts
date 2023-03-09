import {apiMovies} from "../utils/axios";



const search = async (query: string, page: string) => {
    try {
        const response = await apiMovies.get('/search/movie', {params: {query, page}})
        return response.data;
    } catch (error) {
        throw new Error();
    }
};

const getMovieById = async (id?: string) => {
    try {
        const response = await apiMovies.get(`/movie/${id}`)
        return response.data;
    } catch (error) {
        throw new Error();
    }
}


export const serviceMovies = { search, getMovieById };