import React from 'react';
import axios from 'axios';
import axiosInstance from 'utils/axiosInstance';

const error = '에러';
export const getPosts = async () => {
  const response = await axiosInstance.get('/api/notes/');
  if (response.status === 200) {
    return response.data;
  }
  return error;
};

export const getPostById = async id => {
  const response = await axiosInstance.get(`/api/notes/${id}`);
  if (response.status === 200) {
    return response.data;
  }
  return error;
};

// export const getImages = async () => {
//     const response = await axios.get('http://127.0.0.1:8000/images/images/')
//     return response.data
// }
