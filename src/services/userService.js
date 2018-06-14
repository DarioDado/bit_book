import { getData } from "./fetchServices";
import { endpoints } from "../shared/constants";
import { User } from "../entities/User";




class UserService {

    getSingleUser(userId) {
        const url = `${endpoints.users}/${userId}`;
        return getData(url)
            .then(userData => new User(userData));
    }
    


}

export const userService = new UserService();