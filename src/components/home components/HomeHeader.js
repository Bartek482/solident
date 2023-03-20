import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/solident.png"

export function HomeHeader () {
    return (
        <section className="top-nav">
            <div>
                <Link to='/'><img className='home-header__logo' src={logo} alt='solident' /></Link>
            </div>
            <input id="menu-toggle" type="checkbox"/>
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li><Link to='/elk'>Ełk</Link></li>
                <li><Link to='/wysokie-mazowieckie'>Wysokie Mazowieckie</Link></li>
                <li><Link to='/lomza'>Łomża</Link></li>
            </ul>
        </section>
    )
}