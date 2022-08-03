import axios from 'axios'

export const getPosts = async () => {
    const response = await axios.get('http://222.235.9.74:8000/api/notes/')
    return response.data
}

export const getPostById = async (id) => {
    const response = await axios.get(`http://222.235.9.74:8000/api/notes/${id}`)
    return response.data
}


export const getImages = async () => {
    const response = await axios.get('http://222.235.9.74:8000/images/images/')
    return response.data
}