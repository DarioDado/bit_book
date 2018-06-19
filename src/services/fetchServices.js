import { requestHeader } from '../shared/constants';
import { storageService } from './storageService';



const getHeaders = () => {
    const loggedInUser = storageService.getData('loggedInUser');
    return loggedInUser 
        ? {...requestHeader, sessionID: loggedInUser.sessionId}
        : requestHeader;
}


export const getData = (url) => {
    return fetch(url, {
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: getHeaders(),
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
        headers: getHeaders(),
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
        headers: getHeaders(),
        method: 'PUT',
        mode: 'cors'
    })
}

export const deleteData = (url) => {
    return fetch(url, {
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: getHeaders(),
        method: 'DELETE',
        mode: 'cors'
    })
        .then(response => response.json())
}
