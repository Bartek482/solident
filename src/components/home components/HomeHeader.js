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
                    <Link className='header-button__hover button-active' to='/'>PL</Link>
                    <p>/</p>
                    <Link className='header-button__hover' to='/'>EN</Link>
                </div>
                <nav className='header-nav'>
                    <Link className='header-button__hover' to='/'>Ełk</Link>
                    <Link className='header-button__hover' to='/'>Wysokie Mazowieckie</Link>
                    <Link className='header-button__hover' to='/'>Łomża</Link>
                </nav>
            </div>
        </div>
    )
}