import React, { useContext } from "react";
import { Context } from "..";
import { NavLink, useNavigate } from "react-router-dom";
import avatarImg from "../assets/avatar.png";
import searchImg from "../assets/search.svg";
import { observer } from "mobx-react-lite";
import { BLOGS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Header = observer(() => {
    const {users} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        users.setUser({});
        users.setIsAuth(false);
    };

    return (
        <header className="header container">
            <a href="" className="header-logo" onClick={() => navigate(BLOGS_ROUTE)}>
                Decode Blog
            </a>
            <div className="header-search">
                <input type="text" className="input-search" placeholder="Поиск по блогам"/>
                <button className="button button-search blue-hover-btn">
                    <img src={ searchImg } alt=""/>	
                    Найти
                </button>
            </div>
            {users.isAuth ?
                <img src={ avatarImg } alt='' className='header-avatar' onClick={() => logOut()} />
                :
                <div className="button-group">
                    <NavLink to={REGISTRATION_ROUTE} className="button blue-hover-btn">
                        Регистрация
                    </NavLink>
                    <NavLink to={LOGIN_ROUTE} className="button blue-hover-btn">
                        Вход
                    </NavLink>
                    {/* <a href="/register" className="button blue-hover-btn">Регистрация</a>
                    <a href="/login" className="button blue-hover-btn">Вход</a> */}
                </div>
            }
        </header>
    );
});

export default Header;