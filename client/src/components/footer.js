import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div>
            <div className=' [ footer col-12 col-mobile-12 ] '>
                <div className=' [ footer-imgBox col-12 text-center ] '>
                    <img className=' [ footer-imgBox-img col-1 ] ' alt='footer logo' src={require('./../assets/Logos/BIS_logoEmblemWhite.png')} />
                </div>
                <ul className=' [ footer-ul ] '>
                    <li className=' [ footer-li ] '>
                        <Link className=' [ footer-li-a ] ' to='/'>{'Home'}</Link>
                    </li>
                    <li className=' [ footer-li ] '>
                        <Link className=' [ footer-li-a ] ' to='/work'>{'Work'}</Link>
                    </li>
                    <li className=' [ footer-li ] '>
                        <Link className=' [ footer-li-a ] ' to='/cv'>{'CV'}</Link>
                    </li>
                    <li className=' [ footer-li ] '>
                        <Link className=' [ footer-li-a ] ' to='/about'>{'About'}</Link>
                    </li>
                    <li className=' [ footer-li ] '>
                        <Link className=' [ footer-li-a ] ' to='/contact'>{'Contact'}</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;