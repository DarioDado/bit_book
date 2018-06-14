export class Comment {
    constructor(commentData) {
        this.id = commentData.id;
        this.dateCreated = commentData.dateCreated;
        this.postId = commentData.postId;
        this.body = commentData.body;
        this.authorName = commentData.authorName;
        this.authorId = commentData.authorId;
    }
}