import React, { useContext, useEffect } from "react";
import Categories from "../components/categories";
import { Context } from "..";
import BlogItem from "../components/blogItem";
import { observer } from "mobx-react-lite";
import { fetchBlogs } from "../http/blogAPI";
import { useNavigate } from "react-router-dom";
import { NEW_BLOG_ROUTE } from "../utils/consts";

const BlogsPage = observer(() => {
    const {blogs} = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBlogs().then(data => blogs.setBlogs(data));
    }, []);

    return (
        <section id="blogs-page">
            <div className="main-info">
                <div className="blogs">
                <div className="main-title">
                    <h1>Все блоги</h1>
                    <a href="" onClick={() => navigate(NEW_BLOG_ROUTE)} className="blue-hover-btn">
                        Новый блог
                    </a>
                </div>

                {blogs.blogs.map(blog =>
                    <BlogItem key={blog.id} blog={blog} />
                )}
                </div>
            </div>

            <Categories />
        </section>
    );
});

export default BlogsPage;