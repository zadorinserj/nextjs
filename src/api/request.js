import axios from 'axios';

export function request({ headers = {}, ...params }) {
    return axios({
        headers: {
            ...headers,
        },
        ...params,
    }).catch((error) => error.response);
}
