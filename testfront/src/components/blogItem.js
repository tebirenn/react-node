import React from "react";
import {useNavigate} from "react-router-dom";

import calendarImg from '../assets/calendar.svg';
import eyeImg from '../assets/eye.svg';
import commentImg from '../assets/comment.svg';
import blogImg from '../assets/blog.svg';
import personImg from '../assets/person.svg';
import threeDotsImg from '../assets/three_dots.svg';

import { BLOGS_ROUTE } from "../utils/consts";

const BlogItem = ({blog}) => {
    const navigate = useNavigate();
    return (
        <div className="blog-item"  key={blog.id}>
            <img src={ process.env.REACT_APP_API_URL + blog.img } alt="" />

            <div className="blog-title">
                <h2>{blog.title}</h2>
                <span>
                    <img src={ threeDotsImg } alt="" />
                    <p>Еще</p>
                    <div className="blog-dropdown">
                        <a href="" onClick={() => navigate(BLOGS_ROUTE + '/' + blog.id)}>Редактировать</a>
                        <a href="">Удалить</a>
                    </div>
                </span>
            </div>
            
            <p className="blog-item-desc">
                {blog.description}
            </p>
            <div className="blog-icons">
                <span>
                    <img src={ calendarImg } alt="" />
                    <p>{blog.createdAt.toString().slice(0, 10)}</p>
                </span>
                <span>
                    <img src={ eyeImg } alt="" />
                    <p>21</p>
                </span>
                <span>
                    <img src={ commentImg } alt="" />
                    <p>4</p>
                </span>
                <span>
                    <img src={ blogImg } alt="" />
                    <p>Веб-разработка</p>
                </span>
                <span>
                    <img src={ personImg } alt="" />
                    <p>tebirenn</p>
                </span>
            </div>
        </div>    
    );
};

export default BlogItem;