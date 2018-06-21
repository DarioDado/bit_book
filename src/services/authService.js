import { storageService } from "./storageService";
import { postData } from "./fetchServices";
import { login, register } from "../shared/constants";

class AuthService {

    isUserLoggedIn = () => {
        return storageService.getData('loggedInUser') ? true : false;
    }

    login = async (data) => {
        const url = login;
        const loginData = await postData(url, data)
        if (!loginData.error) {
            storageService.saveData('loggedInUser', loginData);
            return loginData
        }
        return loginData;
    }

    register = async data => {
        const url = register;
        const res = await postData(url, data);
        return res;
    }

}

export const authService = new AuthService();
