import React from 'react';
import Header from './header';
import calendarImg from '../images/calendar.svg'
import eyeImg from '../images/eye.svg';
import commentImg from '../images/comment.svg';
import blogImg from '../images/blog.svg';
import personImg from '../images/person.svg';
import threeDotsImg from '../images/three_dots.svg';

import blogMainImg from '../images/image_1.png';
import avatarImg from '../images/avatar.png';

export default function Profile () {
    return (
        <section>
            <Header />
            <div id="profile">
                <div className="main-info">
                    <div className="main-title">
                        <h1>Мои блоги</h1>
                        <a href="">Новый блог</a>
                    </div>
                
                    <div className="blogs">
                        <div className="blog-item">
                            <img src={ blogMainImg.src } alt="" />

                            <div className="blog-title">
                                <h2>Обзор Report Manager от Webix</h2>
                                <span>
                                    <img src={ threeDotsImg.src } alt="" />
                                    <p>Еще</p>
                                    <div className="blog-dropdown">
                                        <a href="">Редактировать</a>
                                        <a href="">Удалить</a>
                                    </div>
                                </span>
                            </div>
                            
                            <p className="blog-item-desc">
                                Осень 2020 года стала плодотворным временем для специалистов Webix. 
                                Команда Webix выпустила восьмую версию библиотеки пользовательского интерфейса Webix с 
                                двумя новыми комплексными виджетами. Первый - зто Scheduler, о котором мы подробно 
                                говорили ранее. Второй виджет - это Gantt chart в JavaScript. Подробную информацию об этом 
                                виджете Вы можете найти в статье. 
                                Ноябрь продолжает тенденцию, и мы спешим поделиться с Вами новым комплексным виджетом 
                                Report Manager. Давайте рассмотрим ег
                            </p>
                            <div className="blog-icons">
                                <span>
                                    <img src={ calendarImg.src } alt="" />
                                    <p>09.06.2002</p>
                                </span>
                                <span>
                                    <img src={ eyeImg.src } alt="" />
                                    <p>21</p>
                                </span>
                                <span>
                                    <img src={ commentImg.src } alt="" />
                                    <p>4</p>
                                </span>
                                <span>
                                    <img src={ blogImg.src } alt="" />
                                    <p>Веб-разработка</p>
                                </span>
                                <span>
                                    <img src={ personImg.src } alt="" />
                                    <p>tebirenn</p>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* <h1>No blogs yet!</h1> */}

                </div>

                <div className="acc-info">
                    <img src={ avatarImg.src } alt="" />
                    <h3>Алан Саудабеков</h3>
                    <p>В основном пишу про веб - <br />разработку и python</p>
                    <p>285 постов за все время</p>
                    <button>Редактировать</button>
                </div>
            </div>
        </section>
    )
}