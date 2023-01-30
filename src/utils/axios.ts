import axios from 'axios'

const api = axios.create({
    baseURL: 'https://conectadas-app-default-rtdb.firebaseio.com/',
    params: {
        api_key: "prueba-api-key"
    }
})

export {api}