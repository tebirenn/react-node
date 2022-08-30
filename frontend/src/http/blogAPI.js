import { $authHost, $host } from ".";

export const createBlog = async (blog) => {
    const {data} = await $authHost.post('api/blog', blog);
    return data;
}

export const fetchBlogs = async () => {
    const {data} = await $host.get('api/blog');
    return data;
}

// export const deleteBlog = async (login, password) => {
//     const {data} = await $host.post('api/user/login', {login, password});
//     localStorage.setItem('token', data.token);
//     return jwtDecode(data.token);
// }

export const updateBlog = async (blog) => {
    const {data} = await $authHost.put('api/blog', blog);
    return data;
}

export const fetchOneBlog = async (id) => {
    const {data} = await $host.get('api/blog/' + id);
    return data;
}