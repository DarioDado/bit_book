export class Post {
    constructor(postData) {
        this.id = postData.id;
        this.dateCreated = postData.dateCreated;
        this.userId = postData.userId;
        this.userDisplayName = postData.userDisplayName;
        this.type = postData.type;
        this.commentsNum = postData.commentsNum;
    }
}

export class ImagePost extends Post {
    constructor(postData) {
        super(postData);
        this.imageUrl = postData.imageUrl;
    }
}
export class VideoPost extends Post {
    constructor(postData) {
        super(postData);
        this.videoUrl = postData.videoUrl.replace("watch?v=", "embed/");
    }
}
export class TextPost extends Post {
    constructor(postData) {
        super(postData);
        this.text = postData.text;
    }
}
