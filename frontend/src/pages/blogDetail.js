import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { Context } from "..";
import { fetchBlogs, fetchOneBlog, updateBlog } from "../http/blogAPI";
import BlogStore from "../store/blogStore";
import { BLOGS_ROUTE } from "../utils/consts";

const BlogDetailPage = observer(() => {
    const navigate = useNavigate();

    const {blogs} = useContext(Context);

    const [blog, setBlog] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneBlog(id).then(data => setBlog(data));
    }, []);

    const toUpdate = () => {
        const title = document.getElementById('update-title').value;
        const description = document.getElementById('update-desc').value;

        if (title.length > 0 && description.length > 0) {
            updateBlog({id, title, description});
            
            fetchBlogs().then(data => blogs.setBlogs(data));

            navigate(BLOGS_ROUTE);
        } else {
            console.log('empty data error')
        }
    }

    return (
        <section id="blog-detail">
            <h1>Редактировать блог</h1>
            <div className="form">
                <input 
                    id="update-title"
                    className="blog-detail-input-wrap" 
                    type="text" 
                    name="title" 
                    placeholder="Введите заголовок блога..." 
                    defaultValue={blog.title} 
                />

                <input type="file" name="image" id="file" />

                <label id="btn-img" htmlFor="file">
                    Выберите картинку
                </label>

                <textarea 
                    id="update-desc"
                    className="blog-detail-input-wrap" 
                    name="description" 
                    placeholder="Введите описание блога..." 
                    defaultValue={blog.description}
                ></textarea>

                <button id="btn-save" className="blue-hover-btn" onClick={toUpdate}>
                    Сохранить
                </button>
            </div>
        </section>
    );
});

export default BlogDetailPage;