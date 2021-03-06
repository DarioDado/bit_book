
import { getData, putData, uploadImage } from "./fetchServices";
import { users, profile, editProfileEndpoint, upload } from "../shared/constants";

import { User } from "../entities/User";
import { storageService } from "./storageService";


class UserService {

    getLoggedInUser = () => {
        return new User(storageService.getData('loggedInUser'));
    }

    getUsers = () => {
        const url = users;
        return getData(url)
            .then(usersData => {
                return usersData.map(userData => new User(userData))
            })
    }

    getUser = (id) => {
        const url = `${users}/${id}`;
        return getData(url)
            .then(userData => new User(userData))
    }

    getSearchedUsers = (inputString) => {
        const url = users;
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
        const url = `${users}/${userId}`;
        return getData(url)
            .then(userData => new User(userData));
    }

    getMyProfile() {
        const url = profile;
        return getData(url)
            .then(myProfileData => new User(myProfileData))
    }

    updateMyProfile(nameInputValue, aboutInputValue, photoUrl) {
        const loggedInUser = this.getLoggedInUser();
        const data = {
            name: nameInputValue,
            email: loggedInUser.email,
            aboutShort: aboutInputValue,
            about: aboutInputValue,
            avatarUrl: photoUrl
        }
        return putData(editProfileEndpoint, data)
    }

    uploadImage(imgFile) {
        const formData = new FormData();
        formData.append('file', imgFile);

        return uploadImage(upload, formData)
    }
}

export const userService = new UserService();
