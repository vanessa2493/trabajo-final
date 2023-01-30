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
export const servicesUser = {add, getAll}