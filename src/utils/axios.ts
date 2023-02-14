import axios from 'axios'

const api = axios.create({
    baseURL: 'https://conectadas-app-default-rtdb.firebaseio.com/',
    params: {
        api_key: "AIzaSyAekPyTLVZ_sfmMG3Jwow7NLM3AsE0NRbY"
    }
})

const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key : "43ad0d95e2030ad50425751d383c8ce0"
    }
})

export { api, apiMovies }
