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
    submitTextPosts(textPost) {
        const url = endpoints.textPosts;
        const data = {
            text: textPost,
            dateCreated: new Date(),
            userId: 747,
            userDisplayName: "Pera Peric",
            type: "text",
            commentsNum:0
        }
        return postData(url, data)
    }

    submitImagePosts(imgUrl) {
        const url = endpoints.imagePosts;
        const data = {
            imageUrl: imgUrl,
            dateCreated: new Date(),
            userId: 747,
            userDisplayName: "Pera Peric",
            type: "image",
            commentsNum:0
        }
        return postData(url, data)
    }

    submitVideoPosts(videoUrl) {
        const url = endpoints.videoPosts;
        const data = {
            videoUrl: videoUrl,
            dateCreated: new Date(),
            userId: 747,
            userDisplayName: "Pera Peric",
            type: "video",
            commentsNum:0
        }
        return postData(url, data)
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
