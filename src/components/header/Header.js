import React,{useContext} from 'react';
import {Context} from "../../context";
import './header.css'
import HeaderLevelList from "./Header__level-list";

const Header = () => {
    const {totalPoints} = useContext(Context)
    const headerLevels = ['Разминка','Воробьиные','Лесные','Певчие','Хищные','Морские']
    return (
        <div className="header">
            <div className="header__top-part">
                <h2 className="header__logo">SongBird</h2>
                <h5 className="header__score">Счет: {
                    totalPoints.reduce((acc, rec) => acc + rec)
                }</h5>
            </div>
            <div className="header__bottom-part">
                <HeaderLevelList headerLevels={headerLevels}/>
            </div>
        </div>
    );
};

export default Header;