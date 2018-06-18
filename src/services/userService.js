import { getData, postData } from "./fetchServices";
import { endpoints } from "../shared/constants";
import { User } from "../entities/User";




class UserService {

    getLoggedInUser = () => {
        return JSON.parse(window.localStorage.getItem('loggedInUser'));
    }

    isUserLoggedIn = () => {
        return this.getLoggedInUser() ? true : false;
    }

    login = (data) => {
        const url = endpoints.login;
        return postData(url, data)
            .then(loginData => {
                if (!loginData.error) {
                    window.localStorage.setItem('loggedInUser', JSON.stringify(loginData));
                    return loginData
                }
                return loginData;
            })
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
