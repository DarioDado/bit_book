import { getData, postData } from "./fetchServices";
import { posts, textPosts, imagePosts, videoPosts, postsCount} from "../shared/constants";
import { TextPost, ImagePost, VideoPost } from "../entities/Post";


class PostService {
    getPosts() {
        const url = posts;
        return getData(url)
            .then(postsData => {
                return postsData.map(postData => {
                    if (postData.type === "text") {
                        return new TextPost(postData);
                    } else if (postData.type === "image") {
                        return new ImagePost(postData);
                    } else {
                        return new VideoPost(postData);
                    }
                });
            });
    }

    getPostsPagination(top, skip) {
        const url = posts;
        return getData(`${url}?$top=${top}&$skip=${skip}`)
            .then(postsData => {
                return postsData.map(postData => {
                    if (postData.type === "text") {
                        return new TextPost(postData);
                    } else if (postData.type === "image") {
                        return new ImagePost(postData);
                    } else {
                        return new VideoPost(postData);
                    }
                });
            });
    }

    submitTextPosts(textPost) {
        const url = textPosts;
        const data = {
            text: textPost,
            dateCreated: new Date(),
            userId: 747,
            userDisplayName: "Pera Peric",
            type: "text",
            commentsNum: 0
        }
        return postData(url, data)
    }

    submitImagePosts(imgUrl) {
        const url = imagePosts;
        const data = {
            imageUrl: imgUrl,
            dateCreated: new Date(),
            userId: 747,
            userDisplayName: "Pera Peric",
            type: "image",
            commentsNum: 0
        }
        return postData(url, data)
    }

    submitVideoPosts(videoUrl) {
        const url = videoPosts;
        const data = {
            videoUrl: videoUrl,
            dateCreated: new Date(),
            userId: 747,
            userDisplayName: "Pera Peric",
            type: "video",
            commentsNum: 0
        }
        return postData(url, data)
    }

    getVideoPost(id) {
        const url = `${videoPosts}/${id}`;
        return getData(url)
            .then(postData => {
                return new VideoPost(postData);
            })
    }

    getImagePost(id) {
        const url = `${imagePosts}/${id}`;
        return getData(url)
            .then(postData => {
                return new ImagePost(postData);
            })
    }

    getTextPost(id) {
        const url = `${textPosts}/${id}`;
        return getData(url)
            .then(postData => {
                return new TextPost(postData);
            })

    }

    getPostsCount() {
        const url = postsCount;
        return getData(url)
    }
}

export const postService = new PostService();
