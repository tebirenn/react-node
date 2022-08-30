import React from 'react';
import Header from "./header";

export default function Login () {
    return (
        <section>
            <Header />

            <div id="login-form" className="lr-form">
                <h1>Вход</h1>
                <input type="text" placeholder="Введите email" />
                <input type="password" placeholder="Введите пароль" />
                <a href="/profile" id="btn-create">Войти</a>
            </div>
        </section>
    );
}