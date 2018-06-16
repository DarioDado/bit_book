import { getData, putData } from "./fetchServices";
import { endpoints } from "../shared/constants";
import { User } from "../entities/User";




class UserService {

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

    updateMyProfile(nameInputValue, aboutInputValue, photoUrl){
        const data = {
            name: nameInputValue,
            email: "blabla@bla.com",
            aboutShort: "",
            about: aboutInputValue,
            avatarUrl: photoUrl,
            postsCount: 0,
            commentsCount:0
        }
        return putData(endpoints.editProfileEndpoint, data)
        .then(response => console.log(response))
    }
}

export const userService = new UserService();