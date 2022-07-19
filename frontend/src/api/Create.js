import axios from 'axios'

export const createPost = async (data) => {
    const response = await axios.post(`http://127.0.0.1:8000/api/notes/`, data)
    return response.data
}
