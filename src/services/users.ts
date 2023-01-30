import {api} from "../utils/axios";
import {User} from "../types";

const add = async (userPrueba: User) =>{

    const response = await api.post('/users.json', userPrueba)

    return response.data
}

const getAll = async () => {

    const response = await api.get('users.json')
    return response.data

}
export const servicesUser = {add, getAll}