import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to ="/profile" activeClassName={s.activeLink}>Сериалы</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to ="/dialogs" activeClassName={s.activeLink} >Фильмы</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to ="/show" activeClassName={s.activeLink} >Шоу</NavLink>
        </div>
        <div className={s.item}>
            <a>Мультфильмы</a>
        </div>
        <div className={s.item}>
            <a>Подборки</a>
        </div>
        <div className={s.item}>
            <a>ТВ</a>
        </div>
        <div className={s.item}>
            <a>Блог</a>
        </div>
    </nav>
}

export default Navbar;