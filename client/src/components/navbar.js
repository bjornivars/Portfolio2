import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(true);
    }
    const handleSecondClick = () => {
        setShowMore(false);
    }

    return (
        <div>
            <nav className=' [ navbar ] '>
            <div className='d-flex jc-between'>
                <Link to='/'><img className='navbar-nav-img col-2 col-mobile-4' src={require('./../assets/Logos/BIS_logoWide.png')} alt='logo' /></Link>
                <button className='navbar-burger-btn' type='button' onClick={(showMore !== true) ? handleClick : handleSecondClick}>
                    <FontAwesomeIcon icon={faBars} className='col-mobile-6'/>
                </button>
                </div>
                
                <div className={(showMore !== true) ? ' [ d-none ] ' : ' [ d-block col-md-12 text-center ] '}>
                    <ul className=' [ navbar-nav ] '>
                    <li className='navbar-nav-li'>
                            <Link className='navbar-nav-a' to='/' onClick={handleSecondClick}>{'Home'}</Link>
                        </li>
                        <li className='navbar-nav-li'>
                            <Link className='navbar-nav-a' to='/work' onClick={handleSecondClick}>{'Work'}</Link>
                        </li>
                        <li className='navbar-nav-li'>
                            <Link className='navbar-nav-a' to='/cv' onClick={handleSecondClick}>{'CV'}</Link>
                        </li>
                        <li className='navbar-nav-li'>
                            <Link className='navbar-nav-a' to='/about' onClick={handleSecondClick}>{'About'}</Link>
                        </li>
                        <li className='navbar-nav-li'>
                            <Link className='navbar-nav-a' to='/contact' onClick={handleSecondClick}>{'Contact'}</Link>
                        </li>
                        <br />
                        <span className=' [ navbar-nav-a ] ' onClick={handleSecondClick}>X</span>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar; 
