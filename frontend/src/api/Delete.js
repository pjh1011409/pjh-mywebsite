import axios from 'axios'

export const deletePost = async (id) => {
    const response = await axios.delete(`http://127.0.0.1:8000/api/notes/${id}`)
    return response.data
}
