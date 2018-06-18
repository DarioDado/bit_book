import { getData, putData } from "./fetchServices";
import { endpoints, requestHeader } from "../shared/constants";
import { User } from "../entities/User";


class UserService {

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

    updateMyProfile(nameInputValue, aboutInputValue, photoUrl){
        const data = {
            name: nameInputValue,
            email: "blabla@bla.com",
            aboutShort: "Traders and brothers Rodney and Derek Trotter work from the streets of London buying what they can from the auctions and flogging it down it the market",
            about: aboutInputValue,
            avatarUrl: photoUrl
        }
        return putData(endpoints.editProfileEndpoint, data)
    }

    uploadImage(imgFile) {
        const formData = new FormData();
        formData.append('file', imgFile);

        return  fetch(endpoints.upload, {
            body: formData,
            cache: 'no-cache',
            headers: {
                "Key": "bitbookdev",
                "SessionId": "2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE"
            },
            method: 'POST',
        })
            .then(response => response.json())
    }
}

export const userService = new UserService();
