
import { getData, putData, uploadImage } from "./fetchServices";
import { users, profile, editProfileEndpoint, upload } from "../shared/constants";

import { User } from "../entities/User";
import { storageService } from "./storageService";


class UserService {

    getLoggedInUser = () => {
        return new User(storageService.getData('loggedInUser'));
    }

    getUsers = async () => {
        const url = users;
        const usersData = await getData(url);
        return usersData.map(userData => new User(userData));
    }

    getUser = async id => {
        const url = `${users}/${id}`;
        const userData = await getData(url)
        return new User(userData);
    }

    getSearchedUsers = async inputString => {
        const url = users;
        const usersData = await getData(url)
        const allUsers = usersData.map(userData => new User(userData));
        return allUsers.filter(user => {
            return user.name.toLowerCase().includes(inputString.toLowerCase());
        })
    }

    getMyProfile = async () => {
        const url = profile;
        const myProfileData = await getData(url);
        return new User(myProfileData);
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
