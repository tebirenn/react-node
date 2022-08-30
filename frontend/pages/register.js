import React from 'react';
import Header from "./header";
import { BrowserRouter } from 'react-router-dom';

export default function Register () {
    return (
        <section>
            <Header />
            <div id="register-form" className="lr-form">
                <h1>Регистрация</h1>
                <input type="text" placeholder="Введите email" />
                <input type="text" placeholder="Введите полное имя" />
                <input type="text" placeholder="Введите пароль" />
                <input type="text" placeholder="Подтвердите пароль" />
                <a href="/profile" id="btn-create">Зарегистрироваться</a>
            </div>
        </section>
    )
}