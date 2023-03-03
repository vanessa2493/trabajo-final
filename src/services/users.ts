import {api} from "../utils/axios";
import {SignupType, PostType} from "../types";

const add = async (userPrueba: SignupType) =>{

    const response = await api.post('/users.json', userPrueba)

    return response.data
}

const getAll = async () => {

    const response = await api.get('users.json')
    return response.data

}

const getUserById = async (userId: string) => {
    const response = await api.get(`/users/${userId}.json`)
    return response.data
}

const getMoviesUser = async (userId: string) => {
    const response = await api.get(`/users/${userId}.json`)
    return response.data.movies
}

//add movie to an array
const addMovieUser = async (userId: string, post: PostType) => {
    const user = await getUserById(userId);
    let updatedUser;
    if (!user.posts) {
        updatedUser = {
            ...user,
            posts: [post]
        };
    } else {
        updatedUser = {
            ...user,
            posts: [...user.posts, post]
        };
    }
    const response = await api.patch(`/users/${userId}.json`, updatedUser);
    return response.data;
}

const removeMovieUser = async (userId: string, movieId: string) => {
    const user = await getUserById(userId);
    const updatedUser = {
        ...user,
        movies: user.movies.filter((movie: string) => movie !== movieId)
    };
    const response = await api.patch(`/users/${userId}.json`, updatedUser);
    return response.data;
}

export const servicesUser = {add, getAll, getMoviesUser, addMovieUser, removeMovieUser, getUserById}