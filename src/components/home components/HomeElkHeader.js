import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/solident.png"

export function HomeElkHeader () {
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
                <li><Link to='/'>Strona główna</Link></li>
                <li><Link to='/'>O nas</Link></li>
                <li><Link to='/'>Zakres zabiegów</Link></li>
                <li><Link to='/'>Cennik</Link></li>
                <li><Link to='/'>Kontakt</Link></li>
            </ul>
        </section>
    )
}