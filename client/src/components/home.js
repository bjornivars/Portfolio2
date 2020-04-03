import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedinIn,
    faInstagram,
    faTwitter,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';



const HomePage = () => {

    return (
        <div>
            <div className='logo-img col-12 col-mobile-12 d-flex jc-center'>
                <img className='col-6 col-mobile-12 ' src={require('./../assets/Logos/BIS_logoWhite_logoPNG.png')} alt='logo' />
            </div>
            <div className='subhead col-8 col-mobile-12 m-auto'>
                <div className='subhead-design'>
                    <span className='subhead-span'>Design</span>
                </div>
                <div className='subhead-develop'>
                    <span className='subhead-span'>Development</span>
                </div>
                <div className='subhead-ux'>
                    <span className='subhead-span'>UX / UI</span>
                </div>
            </div>
            <div className='social col-4 col-mobile-8 m-auto d-flex jc-between'>
                <div className='social-fb'>
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                        size='lg'
                        className='col-mobile-6' />
                </div>
                <div className='social-insta'>
                    <FontAwesomeIcon
                        icon={faInstagram}
                        size='lg'
                        className='col-mobile-6'
                    />
                </div>
                <div className='social-twitter'>
                    <FontAwesomeIcon
                        icon={faTwitter}
                        color='white'
                        size='lg'
                        className='col-mobile-6'
                    />
                </div>
                <div className='subhead-facebook'>
                    <FontAwesomeIcon
                        icon={faFacebook}
                        color='white'
                        size='lg'
                        className='col-mobile-6'
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage;