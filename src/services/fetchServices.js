import { requestHeader } from '../shared/constants';

export const getData = (url) => {
    return fetch(url, {
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: requestHeader,
        method: 'GET',
        mode: 'cors'
    })
        .then(res => res.json())
}


export const postData = (url, data) => {
    return fetch(url, {
        body: JSON.stringify(data),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: requestHeader,
        method: 'POST',
        mode: 'cors'
    })
        .then(response => response.json())
}

export const putData = (url, data) => {
    return fetch(url, {
        body: JSON.stringify(data),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: requestHeader,
        method: 'PUT',
        mode: 'cors'
    })
        .then(response => response.json())
}


export const deleteData = (url) => {
    return fetch(url, {
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: requestHeader,
        method: 'DELETE',
        mode: 'cors'
    })
        .then(response => response.json())
}
