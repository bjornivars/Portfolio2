import React from 'react';
import Fade from 'react-reveal/Fade';
import guardPdf from './../assets/Courses/vekterkurs.pdf';
import firstAidPdf from './../assets/Courses/firstAid.pdf';

//import { Link } from 'react-router-dom';

const CvCoursesPage = () => {
    return (
        <div>
            <div className=' [ cv col-12 col-mobile-12 ] '>
                <Fade bottom>
                    <div className=' [ cv-container col-10 col-mobile-11 ] '>
                        <div className=' [ cv-container-company col-5 col-mobile-12 ] '>
                            <h4 className=' [ col-12 col-mobile-12 wordWrap ] '>NOKAS</h4>
                            <h5>2016</h5>
                        </div>
                        <div className=' [ cv-container-proffession col-6 col-mobile-12 ] '>
                            <h3 className=' [ wordWrap ] ' >SECURITY TRAINING LEVEL 1</h3>
                            <h5 className=' [ col-12 col-mobile-12 ] '><a className=' [ purple ] ' href={guardPdf} target="_blank" rel="noopener noreferrer">PDF</a> </h5>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='[ cv-container col-10 col-mobile-11 ]'>
                        <div className='[ cv-container-company col-5 col-mobile-12 ]'>
                            <h4 className='[ col-12 col-mobile-12 wordWrap ]'>NORSK RESUSCIATASJONSRÅD</h4>
                            <h5>2018</h5>
                        </div>
                        <div className=' [ cv-container-proffession col-6 col-mobile-12 ] '>
                            <h3 className=' [ wordWrap ] '>FIRST AID COURSE</h3>
                            <h5 className='[ col-12 col-mobile-12 ] '><a className=' [ purple ] ' href={firstAidPdf} target="_blank" rel="noopener noreferrer">PDF</a> </h5>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default CvCoursesPage;
