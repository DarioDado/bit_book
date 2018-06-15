import Moment from 'moment';

export class User {
    constructor(userData) {
        this.userId = userData.userId;
        this.name = userData.name;
        this.email = userData.email;
        this.aboutShort = userData.aboutShort;
        this.about = userData.about;
        this.lastPostDate = userData.lastPostDate ? new Date(userData.lastPostDate) : null;
        this.avatarUrl = userData.avatarUrl ? userData.avatarUrl : "https://proseawards.com/wp-content/uploads/2015/08/no-profile-pic.png";
        this.postsCount = userData.postsCount;
        this.commentsCount = userData.commentsCount;
    }

    getTimeFromLastPost = () => {
        
    }
}