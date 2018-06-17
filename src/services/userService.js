import { getData, putData } from "./fetchServices";
import { endpoints, requestHeader } from "../shared/constants";
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
            aboutShort: "Traders and brothers Rodney and Derek Trotter work from the streets of London buying what they can from the auctions and flogging it down it the market",
            about: aboutInputValue,
            avatarUrl: photoUrl,
            postsCount: 0,
            commentsCount:0
        }
        return putData(endpoints.editProfileEndpoint, data)
    }

    uploadImage(imgFile) {
        return  fetch(endpoints.upload, {
            body:imgFile,
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: requestHeader,
            method: 'POST',
            mode: 'cors'
        })
            .then(response => response.json())
    }
}

export const userService = new UserService();