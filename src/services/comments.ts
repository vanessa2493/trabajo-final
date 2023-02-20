import {api} from "../utils/axios";
import {CommentsType} from "../types";

const add = async (commentPrueba: CommentsType) =>{

    const response = await api.post('/comment.json', commentPrueba)

    return response.data
}

export const servicesComment = {add}