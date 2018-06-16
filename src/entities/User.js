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
      if (!this.lastPostDate) {
        return "No Posts"
      }
      const milsecFromLastPost = Date.now() - this.lastPostDate.getTime();
      const numOfMilsecInDay = 1000*60*60*24;
      const min = ('0'+this.lastPostDate.getMinutes()).slice(-2);
      const hour = ('0'+this.lastPostDate.getHours()).slice(-2);
      const day = ('0'+this.lastPostDate.getDate()).slice(-2);
      const month = ('0'+(this.lastPostDate.getMonth() + 1)).slice(-2);
      const year = this.lastPostDate.getFullYear();
      if (milsecFromLastPost>numOfMilsecInDay) {
        return `${day}.${month}.${year} ${min}:${hour}`;
      }
      return `at ${hour}:${min}`;
    }
}
