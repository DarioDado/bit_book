const login = "http://bitbookapi.azurewebsites.net/api/login";
const register = "http://bitbookapi.azurewebsites.net/api/register";
const comments = "http://bitbookapi.azurewebsites.net/api/Comments";
const imagePosts = "http://bitbookapi.azurewebsites.net/api/ImagePosts";
const postsCount = "http://bitbookapi.azurewebsites.net/api/posts/count";
const posts = "http://bitbookapi.azurewebsites.net/api/Posts";
const profile = "http://bitbookapi.azurewebsites.net/api/profile";
const editProfileEndpoint = "http://bitbookapi.azurewebsites.net/api/Profiles";
const users = "http://bitbookapi.azurewebsites.net/api/users";
const textPosts = "http://bitbookapi.azurewebsites.net/api/TextPosts";
const upload = "http://bitbookapi.azurewebsites.net/api/upload";
const videoPosts = "http://bitbookapi.azurewebsites.net/api/VideoPosts";


export const requestHeader = {
    "Content-Type": "application/json",
    "Key": "bitbookdev",
    

}


export { login, register, comments, imagePosts, postsCount, posts, profile, editProfileEndpoint, users, textPosts, upload, videoPosts }