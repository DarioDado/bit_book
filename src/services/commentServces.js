import { getData } from "./fetchServices";
import { endpoints } from "../shared/constants";
import { Comment } from "../entities/Comment";




class CommentService {

    getSinglePostComments(postId) {
        const url = `${endpoints.comments}?postId=${postId}`;
        return getData(url)
            .then(commentsData => {
                return commentsData.map(commentData => new Comment(commentData));
            });
    }
    


}

export const commentService = new CommentService();