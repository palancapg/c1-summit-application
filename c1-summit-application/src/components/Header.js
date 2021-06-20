import React from 'react';
import './Header.css';

/**
 * 
 *  File        : Header.js
 * 
 *  Description : This component of the application creates the object that is used as the header in the web application.
 *                This component is imported into App.js.
 *
 *  Author      : Phillip Palanca 
 * 
 *  @returns    Object structure shown on web application's header  
 * 
 */

function Header() { 
    return(
        <div className="header">
            <img className="header-Image" src="./images/headerImage.png" alt="Sunny Day Movie Search"></img>    
         </div>
    )
}

export default Header;