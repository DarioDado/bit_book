import { getData, postData } from "./fetchServices";
import { endpoints } from "../shared/constants";
import { TextPost, ImagePost, VideoPost } from "../entities/Post";




class PostService {
    getPosts() {
        const url = endpoints.posts;
        return getData(url)
            .then(postsData => {
                return postsData.map(postData => {
                    if(postData.type === "text") {
                        return new TextPost(postData);
                    } else if(postData.type === "image") {
                        return new ImagePost(postData);
                    } else {
                        return new VideoPost(postData);
                    }
                });
            });
    }
}

export const postService = new PostService();