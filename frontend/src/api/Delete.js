import React from 'react';

import axios from 'axios';
import axiosInstance from 'utils/axiosInstance';

export const deletePost = async id => {
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i += 1) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === `${name}=`) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const csrftoken = getCookie('csrftoken');
  const url = `/api/notes/${id}/`;

  const response = await axiosInstance.delete(url, {
    headers: {
      'X-CSRFToken': csrftoken,
    },
  });
  return response.data;
};
