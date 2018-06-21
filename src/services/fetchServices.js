import { requestHeader, login } from '../shared/constants';
import { storageService } from './storageService';
import axios from 'axios';



export const getHeaders = () => {
    const loggedInUser = storageService.getData('loggedInUser');
    return loggedInUser 
        ? {...requestHeader, sessionID: loggedInUser.sessionId}
        : requestHeader;
}



export const getData = (url) => {
    return axios({
        url,
        cache: 'no-cache',
        headers: getHeaders(),
        method: "GET",
        json: true
    })
        .then(res => res.data);
        
}

export const postData = (url, data) => {
    return axios({
        url,
        data: JSON.stringify(data),
        cache: 'no-cache',
        headers: getHeaders(),
        method: 'POST'
    })
        .then(response => response.data)
}

export const putData = (url, data) => {
    return axios({
        url, 
        data: JSON.stringify(data),
        cache: 'no-cache',
        headers: getHeaders(),
        method: 'PUT'
    })
}

export const deleteData = (url) => {
    return axios({
        url, 
        cache: 'no-cache',
        headers: getHeaders(),
        method: 'DELETE'
    })
        .then(response => response.data)
}


export const uploadImage = (url, formData) => {
    return axios({
        url, 
        data: formData,
        cache: 'no-cache',
        headers: {
            "Key": "bitbookdev",
            "SessionId": "2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE"
        },
        method: 'POST',
    })
        .then(response => response.data)
}
