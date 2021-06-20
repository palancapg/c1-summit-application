import React from 'react';
import './Footer.css';

/**
 * 
 *  File        : Footer.js
 * 
 *  Description : This component of the application creates the object that is used as the footer in the web application.
 *                This component is imported into App.js.
 *
 *  Author      : Phillip Palanca 
 * 
 *  @returns    Object structure shown on web application's footer
 * 
 */

function Footer(props) { 
    return(
        <div className="footer">
            <img className="footer-Image" src="./images/footerImage.png" alt="Sunny Day Movie Search"></img> 
        </div>
    )
}

export default Footer;