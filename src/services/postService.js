import { getData } from "./fetchServices";
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

    getVideoPost(id) {
        const url = `${endpoints.videoPosts}/${id}`;
        return getData(url)
            .then(postData => {
                return new VideoPost(postData);
            })
    }

    getImagePost(id) {
        const url = `${endpoints.imagePosts}/${id}`;
        return getData(url)
            .then(postData => {
                return new ImagePost(postData);
            })
    }

    getTextPost(id) {
        const url = `${endpoints.textPosts}/${id}`;
        return getData(url)
            .then(postData => {
                return new TextPost(postData);
            })
    }
}

export const postService = new PostService();