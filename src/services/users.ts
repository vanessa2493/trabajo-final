import {api} from "../utils/axios";
import {SignupType} from "../types";

const add = async (userPrueba: SignupType) =>{

    const response = await api.post('/users.json', userPrueba)

    return response.data
}

const getAll = async () => {

    const response = await api.get('users.json')
    return response.data

}

const getUser = async (userId: string) => {
    const response = await api.get(`/users/${userId}.json`)
    return response.data
}

const getMovies = async (userId: string) => {
    const response = await api.get(`/users/${userId}.json`)
    return response.data.movies
}
//add movie to an array
const addMovie = async (userId: string, movieId: string) => {
    const user = await getUser(userId);
    let updatedUser;
    if (!user.movies) {
        updatedUser = {
            ...user,
            movies: [movieId]
        };
    } else {
        updatedUser = {
            ...user,
            movies: [...user.movies, movieId]
        };
    }
    const response = await api.patch(`/users/${userId}.json`, updatedUser);
    return response.data;
}

const removeMovie = async (userId: string, movieId: string) => {
    const user = await getUser(userId);
    const updatedUser = {
        ...user,
        movies: user.movies.filter((movie: string) => movie !== movieId)
    };
    const response = await api.patch(`/users/${userId}.json`, updatedUser);
    return response.data;
}

export const servicesUser = {add, getAll, getMovies, addMovie}