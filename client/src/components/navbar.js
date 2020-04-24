import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [showMore, setShowMore] = useState(false);

    const handleOpenClick = () => {
        setShowMore(true);
    }
    const handleCloseClick = () => {
        setShowMore(false);
    }

    const mobileLogo = require('./../assets/Logos/BIS_logoEmblemWhite.png');
    const desktopLogo = require('./../assets/Logos/BIS_logoWide.png');

    return (
        <div>
            <nav className=' [ navbar ] '>
                <div className=' [ d-flex jc-between ] '>
                    <Link to='/'><img className=' [ navbar-nav-img col-2 col-mobile-4 ] '
                        srcSet={`${mobileLogo} 700w, ${desktopLogo} 1280w`}
                        sizes="(max-width: 600px) 700px,
                                1200px"
                        src={mobileLogo}
                        alt='logo' /></Link>
                    <button className=' [ navbar-burger-btn ] ' type='button' onClick={(showMore !== true) ? handleOpenClick : handleCloseClick}>
                        <FontAwesomeIcon icon={(showMore !== true) ? faBars : faTimes} className=' [ col-mobile-6 ] ' />
                    </button>
                </div>

                <div className={(showMore !== true) ? ' [ d-none ] ' : ' [ d-block col-md-12 text-center ] '}>
                    <ul className=' [ navbar-nav ] '>
                        <li className=' [ navbar-nav-li ] '>
                            <Link className=' [ navbar-nav-a ] ' to='/' onClick={handleCloseClick}>{'Home'}</Link>
                        </li>
                        <li className=' [ navbar-nav-li ] '>
                            <Link className=' [ navbar-nav-a ] ' to='/work' onClick={handleCloseClick}>{'Work'}</Link>
                        </li>
                        <li className=' [ navbar-nav-li ] '>
                            <Link className=' [ navbar-nav-a ] ' to='/cv' onClick={handleCloseClick}>{'CV'}</Link>
                        </li>
                        <li className=' [ navbar-nav-li ] '>
                            <Link className=' [ navbar-nav-a ] ' to='/about' onClick={handleCloseClick}>{'About'}</Link>
                        </li>
                        <li className=' [ navbar-nav-li ] '>
                            <Link className=' [ navbar-nav-a ] ' to='/contact' onClick={handleCloseClick}>{'Contact'}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar; 
