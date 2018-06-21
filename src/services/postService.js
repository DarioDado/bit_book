import { posts, textPosts, imagePosts, videoPosts, postsCount } from "../shared/constants";
import { getData, postData, deleteData } from "./fetchServices";
import { TextPost, ImagePost, VideoPost } from "../entities/Post";
import { validationService } from "./ValidationService";


class PostService {

    async getPosts() {
        const url = posts;
        const postsData = await getData(url)

        const allPosts = postsData.map(postData => {
            if (postData.type === "text") {
                return new TextPost(postData);
            } else if (postData.type === "image") {
                return new ImagePost(postData);
            } else {
                return new VideoPost(postData);
            }
        });

        return allPosts.filter(post => {
            if (post.type === "video") {
                if (!validationService.isNotValidVideo(post.videoUrl)) {
                    return post;
                }
            } else {
                return post;
            }
        })
    }

    async getPostsLimitNum(top, skip) {
        const url = posts;
        const postsData = await getData(`${url}?$orderby=DateCreated desc&$top=${top}&$skip=${skip}`)

        const allPosts = postsData.map(postData => {
            if (postData.type === "text") {
                return new TextPost(postData);
            } else if (postData.type === "image") {
                return new ImagePost(postData);
            } else {
                return new VideoPost(postData);
            }
        });

        return allPosts.filter(post => {
            if (post.type === "video") {
                if (!validationService.isNotValidVideo(post.videoUrl)) {
                    return post;
                }
            } else {
                return post;
            }
        })
    }

    submitTextPosts(textPost) {
        const url = textPosts;
        const data = {
            text: textPost,
            type: "text"
        }
        return postData(url, data)
    }

    submitImagePosts(imgUrl) {
        const url = imagePosts;
        const data = {
            imageUrl: imgUrl,
            type: "image"
        }
        return postData(url, data)
    }

    submitVideoPosts(videoUrl) {
        const url = videoPosts;
        const data = {
            videoUrl: videoUrl,
            type: "video"
        }
        return postData(url, data)
    }

    async getVideoPost(id) {
        const url = `${videoPosts}/${id}`;
        const postData = await getData(url)
        return new VideoPost(postData);
    }

    async getImagePost(id) {
        const url = `${imagePosts}/${id}`;
        const postData = await  getData(url);
        return new ImagePost(postData);
    }

    async getTextPost(id) {
        const url = `${textPosts}/${id}`;
        const postData = await getData(url)
        return new TextPost(postData);
    }


    getPostsCount() {
        const url = postsCount;
        return getData(url)
    }

    deletePost(id) {
        const url = `${posts}/${id}`;
        return deleteData(url);

    }
}

export const postService = new PostService();
