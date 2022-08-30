import React, { useContext } from "react";
import { Context } from "..";
import { createBlog } from "../http/blogAPI";

const NewBlog = () => {
    const {blogs} = useContext(Context);
    const {users} = useContext(Context);

    const addBlog = () => {
        const newTitle = document.getElementById('new-blog-title').value;
        const newDesc = document.getElementById('new-blog-description').value;
        const image = document.getElementById('file').files[0];
        
        createBlog({
            title: newTitle,
            description: newDesc,
            userId: image,
            img: image
        });
    }

    return (
        <section id="newblog-section">
            <h1>Новый блог</h1>
            
            <div className="form">
                <input
                    id="new-blog-title"
                    className="newblog-input-wrap" 
                    type="text" 
                    name="title" 
                    placeholder="Введите заголовок блога..." 
                />

                <input type="file" name="image" id="file" />

                <label id="btn-img" htmlFor="file">
                    Выберите картинку
                </label>

                <textarea
                    id="new-blog-description"
                    className="newblog-input-wrap" 
                    name="description" 
                    placeholder="Введите описание блога..."
                >
                </textarea>

                <button id="btn-create" type="submit" onClick={addBlog}>
                    Создать
                </button>
            </div>
            
        </section>
    );
};

export default NewBlog;

console.log('123');