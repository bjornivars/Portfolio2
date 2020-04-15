import React from 'react';
import AboutPage from './../components/about';

export default function About() {
    return (
        <div className=' [ container ] '>
            <div className=' [ container-paddingSide ] '>
                <h1 className=' [ headline orange ] '>
                    Hello, I´m Bjørn-Ivar! <br />
                    Designer, Developer, Creative.</h1>
            </div>
            <AboutPage />
        </div>
    )
}