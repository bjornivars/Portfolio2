import React from 'react';
import Fade from 'react-reveal/Fade';


const AboutPage = () => {
    return (
        <div>
            <div className='about col-12'>
                <Fade bottom>
                    <div className='about-container col-12 '>
                        <img className='col-4 col-mobile-10 m-auto about-container-img' src={require('./../assets/About/imgOfMe.png')} alt='Image of me' />

                        <div className='about-container-text col-6 col-mobile-12'>
                            <h2>Student at Noroff</h2>
                            <p className='about-container-p lightgrey col-10 col-mobile-12'>I have studied Frontend Development
                            for two years at Noroff School of Technology.
                            This study included HTML & Scss, JS and
                        React. </p>
                            <p className='about-container-p lightgrey col-10 col-mobile-12'>During these two years UX & UI Design has
                            also been an important part. I therefore
                            love to create user-friendly websites that
                        anyone can use no matter what.  </p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default AboutPage;