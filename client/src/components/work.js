import React from 'react';
import Fade from 'react-reveal/Fade';

import { Link } from 'react-router-dom';

const WorkPage = ({ name, type, intro, imageUrl }) => {
    return (
        <div>
            <div className=' [ project ] '>
                <Fade bottom>
                    <div className=' [ project-container ] '>
                        <div className=' [ col-7 col-mobile-11 ] '>
                            <img className=' [ project-container-img col-10 col-mobile-11 ] ' src={imageUrl} alt={name} />
                        </div>
                        <div className=' [ project-container-text col-5 col-mobile-12 ] '>
                            <h2>{name} <br /> {type}</h2>
                            <p className=' [ project-container-p col-10 col-mobile-12 ] '>{intro} </p>
                            <Link className=' [ btn ] ' to={`/workSpecific/${name.toLowerCase()}`}>Read More</Link>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className=' [ col-2 m-auto ] '>
                        <img className=' [ col-12 ] ' src={require('./../assets/Icons/workSplitter.png')} alt='divider' />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default WorkPage;
