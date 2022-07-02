import axios from 'axios'

export const getPosts = async () => {
    const response = await axios.get('http://127.0.0.1:8000/review/')
    return response.data
}

export const getPostById = async (id) => {
    const response = await axios.get(`http://127.0.0.1:8000/review/${id}`)
    return response.data
}
