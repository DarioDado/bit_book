const login = "https://bitbookapi.azurewebsites.net/api/login";
const register = "https://bitbookapi.azurewebsites.net/api/register";
const comments = "https://bitbookapi.azurewebsites.net/api/Comments";
const imagePosts = "https://bitbookapi.azurewebsites.net/api/ImagePosts";
const postsCount = "https://bitbookapi.azurewebsites.net/api/posts/count";
const posts = "https://bitbookapi.azurewebsites.net/api/Posts";
const profile = "https://bitbookapi.azurewebsites.net/api/profile";
const editProfileEndpoint = "https://bitbookapi.azurewebsites.net/api/Profiles";
const users = "https://bitbookapi.azurewebsites.net/api/users";
const textPosts = "https://bitbookapi.azurewebsites.net/api/TextPosts";
const upload = "https://bitbookapi.azurewebsites.net/api/upload";
const videoPosts = "https://bitbookapi.azurewebsites.net/api/VideoPosts";


export const requestHeader = {
    "Content-Type": "application/json",
    "Key": "bitbookdev",
    

}


export { login, register, comments, imagePosts, postsCount, posts, profile, editProfileEndpoint, users, textPosts, upload, videoPosts }