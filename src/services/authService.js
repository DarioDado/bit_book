import { storageService } from "./storageService";
import { postData } from "./fetchServices";
import { endpoints } from "../shared/constants";

class AuthService {

    isUserLoggedIn = () => {
        return storageService.getData('loggedInUser') ? true : false;
    }

    login = (data) => {
        const url = endpoints.login;
        return postData(url, data)
            .then(loginData => {
                if (!loginData.error) {
                    storageService.saveData('loggedInUser', loginData);
                    return loginData
                }
                return loginData;
            })
    }

}

export const authService = new AuthService();
