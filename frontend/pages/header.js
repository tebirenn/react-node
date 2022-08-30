import React from 'react';
import searchImg from '../images/search.svg';
import avatarImg from '../images/avatar.png';
import { BrowserRouter } from 'react-router-dom';

export default function Header () {
  return (
    <header className="header container">
        <div className="header-logo">
            <a href="">Decode Blog</a>	
        </div>
        <div className="header-search">
            <input type="text" className="input-search" placeholder="Поиск по блогам"/>
            <button className="button button-search">
                <img src={ searchImg.src } alt=""/>	
                {/* <Image src="../images/search.svg" width="10px" height="10px" /> */}
                Найти
            </button>
        </div>
        <div className="button-group">
            <a href="/register" className="button">Регистрация</a>
            <a href="/login" className="button">Вход</a>
        </div>
        {/* <img src={ avatarImg.src } alt='' className='header-avatar' /> */}
    </header>
  );
}