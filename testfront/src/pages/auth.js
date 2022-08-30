import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { BLOGS_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { useNavigate } from "react-router-dom";

const AuthorizationPage = observer(() => {
    const {users} = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [loginn, setLogin] = useState('');
    const [passwordd, setPassword] = useState('');
    const navigate = useNavigate();

    const log = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(loginn, passwordd);
            } else {
                data = await registration(loginn, passwordd);            
            }
            users.setUser(data);
            users.setIsAuth(true);
            if (isLogin) {
                console.log(users.user);
                navigate(BLOGS_ROUTE);
            } else {
                navigate(LOGIN_ROUTE);
            }
            
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    return (
        <section id="auth-page">
            {isLogin ?
                <div id="login-form" className="lr-form">
                    <h1>Вход</h1>
                    <input type="text" placeholder="Введите login" value={loginn} onChange={e => setLogin(e.target.value)} />

                    <input type="password" placeholder="Введите пароль" value={passwordd} onChange={e => setPassword(e.target.value)} />

                    <button id="btn-login" className="blue-hover-btn" onClick={log}>
                        Войти
                    </button>
                </div> 
                :
                <div id="reg-form" className="lr-form">
                    <h1>Регистрация</h1>
                    <input name="login" type="text" placeholder="Введите login" value={loginn} onChange={e => setLogin(e.target.value)} />

                    <input name="password" type="password" placeholder="Введите пароль" value={passwordd} onChange={e => setPassword(e.target.value)} />

                    <button id="btn-reg" className="blue-hover-btn" onClick={log}>
                        Зарегистрироваться
                    </button>
                </div>
            }
            
        </section>




    );
});

export default AuthorizationPage;

