import axios from 'axios'
import axiosInstance from 'utils/axiosInstance'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'



export const getPosts = async () => {
    
    
    const response = await axiosInstance.get('/api/notes/')
    if(response.status === 200){
        return response.data

    }
}

export const getPostById = async (id) => {
    const response = await axiosInstance.get(`/api/notes/${id}`)
    if(response.status === 200){
        return response.data

    }
}


// export const getImages = async () => {
//     const response = await axios.get('http://127.0.0.1:8000/images/images/')
//     return response.data
// }