import { requestHeader, login } from '../shared/constants';
import { storageService } from './storageService';
import axios from 'axios';



export const getHeaders = () => {
    const loggedInUser = storageService.getData('loggedInUser');
    return loggedInUser 
        ? {...requestHeader, sessionID: loggedInUser.sessionId}
        : requestHeader;
}



export const getData = async (url) => {
    const res = await axios({
        url,
        cache: 'no-cache',
        headers: getHeaders(),
        method: "GET",
        json: true
    })
    return res.data;
}

export const postData = async (url, data) => {
    const res = await axios({
        url,
        data: JSON.stringify(data),
        cache: 'no-cache',
        headers: getHeaders(),
        method: 'POST'
    })
    return res.data;
}

export const putData = async (url, data) => {
    const res = await axios({
        url, 
        data: JSON.stringify(data),
        cache: 'no-cache',
        headers: getHeaders(),
        method: 'PUT'
    })
    return res;
}

export const deleteData = async (url) => {
    const res = await axios({
        url, 
        cache: 'no-cache',
        headers: getHeaders(),
        method: 'DELETE'
    })
    return res.data;
}


export const uploadImage = async (url, formData) => {
    const res = await axios({
        url, 
        data: formData,
        cache: 'no-cache',
        headers: {
            "Key": "bitbookdev",
            "SessionId": "2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE"
        },
        method: 'POST',
    })
    return res.data;
}
