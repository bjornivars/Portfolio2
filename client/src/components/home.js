import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';



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
        <Zoom top delay={100}>
            <div className='logo-img col-12 col-mobile-12 text-center'>
                <img className='col-6 col-mobile-12 m-auto' src={require('./../assets/Logos/BIS_logoWhite_logoPNG.png')} alt='logo' />
            </div>
        </Zoom>
            <div className='subhead col-8 col-mobile-12 m-auto'>
            <Bounce left delay={750}>
                <div className='subhead-design'>
                    <span className='subhead-span'>Design</span>
                </div>
                <div className='subhead-develop'>
                    <span className='subhead-span'>Development</span>
                </div>
                <div className='subhead-ux'>
                    <span className='subhead-span'>UX / UI</span>
                </div>
            </Bounce>
            </div>
            <Fade delay={1250}>
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
            </Fade>
        </div>
    )
}

export default HomePage;