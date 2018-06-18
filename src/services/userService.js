import { getData, postData } from "./fetchServices";
import { endpoints } from "../shared/constants";
import { User } from "../entities/User";
import { storageService } from "./storageService";




class UserService {

    getLoggedInUser = () => {
        return new User(storageService.getData('loggedInUser'));
    }

    getUsers = () => {
        const url = endpoints.users;
        return getData(url)
            .then(usersData => {
                return usersData.map(userData => new User(userData))
            })
    }

    getUser = (id) => {
        const url = `${endpoints.users}/${id}`;
        return getData(url)
            .then(userData => new User(userData))
    }

    getSearchedUsers = (inputString) => {
      const url = endpoints.users;
      return getData(url)
          .then(usersData => {
            return usersData.map(userData => new User(userData))
          })
          .then(users => {
            return users.filter(user => {
              return user.name.toLowerCase().includes(inputString.toLowerCase());
            })
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
