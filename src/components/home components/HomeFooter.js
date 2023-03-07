import facebookIcon from "../../assets/facebook.png"
import React from "react";

export function HomeFooter () {
    return (

        <div className='footer-container'>
            <div className='footer-text'>
                <h2>SoliDent © 2023</h2>
            </div>
            <div className='footer-text'>
                <h2>Polub nas</h2>
                <a href='https://www.facebook.com/SoliDentPL/?ref=aymt_homepage_panel'>
                    <img className='facebook-logo' src={facebookIcon} alt='facebook' />
                </a>
            </div>
        </div>
    )
}