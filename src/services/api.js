import axios from 'axios'
//services API
//URL https://blog.coursify.me/wp-json/wp/v2/categories/

//GET - https://api.coursify.me/v1/courses/

// Header - Content-Type = application/json
// Header - Authorization = JiqcQyKo96MVkQxjdi_2

const api = axios.create({
    baseURL: 'https://api.coursify.me/v1'
})
api.interceptors.request.use(async config => {
    const token = "JiqcQyKo96MVkQxjdi_2"
    if (token) {
      config.headers.Authorization = `${token}`;
    };
    return config;
  });

export default api;