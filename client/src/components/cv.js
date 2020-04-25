import React from 'react';
import Fade from 'react-reveal/Fade';

//import { Link } from 'react-router-dom';

const CvPage = () => {
    return (
        <div>
            <div className=' [ cv col-12 col-tablet-12 col-mobile-12 ] '>
                <Fade bottom>
                    <div className=' [ cv-container col-10 col-tablet-12 col-mobile-11 ] '>
                        <div className=' [ cv-container-company col-5 col-tablet-12 col-mobile-12 ] '>
                            <h4 className=' [ col-12 col-tablet-12 col-mobile-12 wordWrap ] '>ELKJØP NORDIC AS</h4>
                            <h5>2019 - PRESENT</h5>
                        </div>
                        <div className=' [ cv-container-proffession col-6 col-tablet-12 col-mobile-12 ] '>
                            <h3>SALES</h3>
                            <h5 className=' [ col-12 col-tablet-12 col-mobile-12 ] '><a className=' [ purple ] ' href="https://www.elkjop.no/" target="_blank" rel="noopener noreferrer">https://www.elkjop.no/</a> </h5>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className=' [ cv-container col-10 col-tablet-12 col-mobile-11 ] '>
                        <div className=' [ cv-container-company col-5 col-tablet-12 col-mobile-12 ] '>
                            <h4 className='[ col-12 col-tablet-12 col-mobile-12 wordWrap ] '>PRIMA ASSISTANSE</h4>
                            <h5>2018 - 2020</h5>
                        </div>
                        <div className='[ cv-container-proffession col-6 col-tablet-12 col-mobile-12 ] '>
                            <h3>HEALTH CARE WORKER</h3>
                            <h5 className='[ col-12 col-tablet-12 col-mobile-12 ]  '><a className='purple' href="https://prima-assistanse.no/" target="_blank" rel="noopener noreferrer">https://prima-assistanse.no/</a> </h5>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className=' [ cv-container col-10 col-tablet-12 col-mobile-11 ] '>
                        <div className=' [ cv-container-company col-5 col-tablet-12 col-mobile-12 ] '>
                            <h4 className=' [ col-12 col-tablet-12 col-mobile-12 wordWrap ] '>LYKKELITEN BARNEHAGE</h4>
                            <h5>2017</h5>
                        </div>
                        <div className='[ cv-container-proffession col-6 col-tablet-12 col-mobile-12 ] '>
                            <h3>KINDERGARDEN ASSISTANT</h3>
                            <h5 className=' [ col-12 col-tablet-12 col-mobile-11 ] '><a className=' [ purple ] ' href="https://www.barnehagefakta.no/barnehage/1018584/lykkeliten-barnehage" target="_blank" rel="noopener noreferrer">Lykkeliten Barnehage</a> </h5>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='cv-container col-10 col-tablet-12 col-mobile-11'>
                        <div className='cv-container-company col-5 col-tablet-12 col-mobile-12'>
                            <h4 className='[ col-12 col-tablet-12 col-mobile-12 wordWrap ] '>NORWEGIAN ARMED FORCES</h4>
                            <h5>2016 - 2017</h5>
                        </div>
                        <div className='[ cv-container-proffession col-6 col-tablet-12 col-mobile-12 ] '>
                            <h3>SECURITY AND PROTECTION</h3>
                            <h5 className='[ col-12 col-tablet-12 col-mobile-12 ]  '><a className='purple' href="https://forsvaret.no/" target="_blank" rel="noopener noreferrer">https://forsvaret.no/</a> </h5>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className=' [ cv-container col-10 col-tablet-12 col-mobile-11 ] '>
                        <div className=' [ cv-container-company col-5 col-tablet-12 col-mobile-12 ] '>
                            <h4 className='[ col-12 col-tablet-12 col-mobile-12 wordWrap ] '>ÅLESUND KOMMUNE</h4>
                            <h5>2014 - 2017</h5>
                        </div>
                        <div className='[ cv-container-proffession col-6 col-tablet-12 col-mobile-12 ] '>
                            <h3>HEALTH CARE WORKER</h3>
                            <h5 className='[ col-12 col-tablet-12 col-mobile-12 ]  '><a className=' [ purple ] ' href="https://alesund.kommune.no/" target="_blank" rel="noopener noreferrer">https://alesund.kommune.no/</a> </h5>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className=' [ cv-container col-10 col-tablet-12 col-mobile-11 ] '>
                        <div className=' [ cv-container-company col-4 col-tablet-12 col-mobile-12 ] '>
                            <h4 className='[ col-12 col-tablet-12 col-mobile-12 wordWrap ] '>NORGESGRUPPEN</h4>
                            <h5>2012 - 2016</h5>
                        </div>
                        <div className='[ cv-container-proffession col-6 col-tablet-12 col-mobile-12 ] '>
                            <h3>PART-TIME EMPLOYEE</h3>
                            <h5 className='[ col-12 col-tablet-12 col-mobile-12 ]  '><a className=' [ purple ] ' href="https://www.norgesgruppen.no/" target="_blank" rel="noopener noreferrer">https://www.norgesgruppen.no/</a> </h5>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default CvPage;
