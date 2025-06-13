import axios from 'axios';

const apiAxios = axios.create({
    baseURL: 'http://localhost:8080',
});

// apiAxios.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');

//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     },
// );

const getBlogDetailByBlogId = async (blogId) => {
    const response = await apiAxios.get(`/blogs/${blogId}`);

    return response.data;
};

const likeOrUnlikeBlogAPI = async (isLiked, blogId) => {
    if (isLiked) {
        // 관심 해제
        const response = await apiAxios.delete(`/blogs/${blogId}/likes`);
    } else {
        // 관심 등록
        const response = await apiAxios.post(`/blogs/${blogId}/likes`, null);
    }
};

const editIntroduce = async (introduce, blogId) => {
    const body = {
        introduce,
    };
    const response = await apiAxios.put(`/blogs/${blogId}`, body);
    return response.data;
};

const getBlogIdByToken = async () => {
    const response = await apiAxios.get(`/blogs/me`);
    return response.data;
};

const updatePost = async (postId, payload) => {
    const response = await apiAxios.patch(`/posts/${postId}`, payload);
    return response.data;
};

const createPost = async (blogId, payload) => {
    const response = await apiAxios.post(`/blogs/${blogId}/posts`, payload);
    return response.data;
};

const saveImage = async (postId, image) => {
    const formData = new FormData();
    formData.append('multipartFile', image);
    const response = await apiAxios.post(`/posts/${postId}/images`, formData);

    return response.data;
};


const deleteImage = async (imageId) => {
    const response = await apiAxios.delete(`/images/${imageId}`);
    return response.data;
};

const fetchBoardDataByBoardId = async (postId) => {
    const result = await apiAxios.get(`/posts/${postId}`);

    return result.data;
};

const getBoardDetailWithLike = async (boardId) => {
    const result = await apiAxios.get(`/boards/${boardId}?includeLike=true`);

    return result.data;
};

export {
    getBlogDetailByBlogId,
    likeOrUnlikeBlogAPI,
    editIntroduce,
    fetchBoardDataByBoardId,
    getBoardDetailWithLike,
    getBlogIdByToken,
    updatePost,
    deleteImage,
    saveImage,
    createPost,
};
