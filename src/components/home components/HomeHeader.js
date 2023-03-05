import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/solident.png"

export function HomeHeader () {
    return (
        <div className='home-header'>
            <div className='home-header__container'>
                <Link to='/'><img className='home-header__logo' src={logo} alt='solident' /></Link>
            </div>
            <div className='home-header__container home-header__nav'>
                <div className='home-header__language'>
                    <a href='#'>PL</a>
                    <p>/</p>
                    <a href='#'>ENG</a>
                </div>
                <nav className='nav'>
                    <a href='#'>Ełk</a>
                    <a href='#'>Wysokie Mazowieckie</a>
                    <a href='#'>Łomża</a>
                </nav>
            </div>
        </div>
    )
}