import React from "react";
import { Link } from "react-router-dom";

export function HomeBody () {
    return (
        <div className='home-body'>
            <Link className='home-body__city elk' to='/elk'>
                <h1>Ełk</h1>
            </Link>
            <Link className='home-body__city wysokie' to='/wysokie-mazowieckie'>
                <h1>Wysokie Mazowieckie</h1>
            </Link>
            <Link className='home-body__city lomza' to='/lomza'>
                <h1>Łomża</h1>
            </Link>
        </div>
    )
}