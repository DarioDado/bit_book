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

    register = data => {
      const url = endpoints.register;
      return postData(url, data);
    }

}

export const authService = new AuthService();
