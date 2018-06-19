import { getData, postData } from "./fetchServices";
import { comments } from "../shared/constants";
import { Comment } from "../entities/Comment";




class CommentService {

    getSinglePostComments(postId) {
        const url = `${comments}?postId=${postId}`;
        return getData(url)
            .then(commentsData => {
                return commentsData.map(commentData => new Comment(commentData));
            });
    }

    postComment(data) {
        const url = comments;
        return postData(url,data)
            .then(commentData => new Comment(commentData));
    }
    


}

export const commentService = new CommentService();