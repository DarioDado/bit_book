import { getData } from "./fetchServices";
import { endpoints } from "../shared/constants";
import { User } from "../entities/User";




class UserService {

    getUsers = () => {
        const url = endpoints.users;
        return getData(url)
            .then(usersData => {
                return usersData.map(userData => new User(userData))
            })
    }

    getSingleUser(userId) {
        const url = `${endpoints.users}/${userId}`;
        return getData(url)
            .then(userData => new User(userData));
    }

    getMyProfile() {
        const url = endpoints.profile;
        return getData(url)
            .then(myProfileData => new User(myProfileData))
    }
}

export const userService = new UserService();