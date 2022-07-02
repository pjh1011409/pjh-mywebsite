import axios from 'axios'

export const addPost = async () => {
    const response = await axios.get('http://127.0.0.1:8000/review/')
    return response.data
}
