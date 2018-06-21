import { getData, postData } from "./fetchServices";
import { comments } from "../shared/constants";
import { Comment } from "../entities/Comment";




class CommentService {

    async getSinglePostComments(postId) {
        const url = `${comments}?postId=${postId}`;
        const commentsData = await getData(url);
        return commentsData.map(commentData => new Comment(commentData));
    }

    async postComment(data) {
        const url = comments;
        const commentData = await postData(url,data)
        return new Comment(commentData);
    }
    


}

export const commentService = new CommentService();