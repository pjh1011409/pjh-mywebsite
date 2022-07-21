import axios from 'axios'

export const createPost = async (data) => {

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    let csrftoken = getCookie('csrftoken');
    let url = `http://127.0.0.1:8000/api/notes/`


    const response = await axios.post(url, data, {
        headers: {
            'X-CSRFToken': csrftoken,
        },
    })
    return response.data
}
