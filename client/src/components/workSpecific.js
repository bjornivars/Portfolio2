import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

const WorkClick = (props) => {
    const { name, type, brief, imageUrl, colorText, colorImage, iconText, iconImage, prototypeText, prototypeImage, developImage, developText, websiteUrl } = props;
    return (
        <>
            <div>
                <Link to='/work' className=' [ back ] '>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        size='lg'
                        className=' [ back-arrow ] '
                    />
                    <span className=' [ back-arrow-text ] '>Back</span>
                </Link>
            </div>
            <div className=' [ col-10 col-tablet-12 col-mobile-10 m-auto ] '>
                <div className=' [ specific ] '>
                    <div className=' [ specific-box col-12 ] '>
                        <h1 className=' [ specific-box-header ] '>{name} - {type}</h1>
                        <p dangerouslySetInnerHTML={{ __html: brief }} className=' [ project-container-p col-8 col-tablet-12 cursive  col-mobile-12 ] ' />
                        <img className=' [ col-12 m-auto col-mobile-11 specific-box-img ] ' src={imageUrl} alt={name} />
                        <div className=' [ col-2 m-auto ] '>
                            <img className=' [ col-12 divider ] ' src={require('./../assets/Icons/workSplitter.png')} alt='divider' />
                        </div>
                        <div className=' [ col-12 m-auto ] '>
                            <h3 className=' [ specific-box-subheader m-auto col-8 col-tablet-12 col-mobile-12 slab ] '>Design</h3>
                            <h4 className=' [ specific-box-subheader m-auto col-8 col-tablet-12 col-mobile-12 slab ] '>Colors</h4>
                            <img className=' [ specific-box-subimg col-8 col-tablet-12 d-flex m-auto col-mobile-11 ] ' src={colorImage} alt='Color Pallette' />
                            <p dangerouslySetInnerHTML={{ __html: colorText }} className=' [ project-container-p m-auto col-8 col-tablet-12 col-mobile-12  ] ' />

                            <h4 className=' [ specific-box-subheader m-auto col-8 col-tablet-12 col-mobile-12 slab ] '>Icons / illustrations</h4>
                            <img className=' [ specific-box-subimg col-8 col-tablet-12 d-flex m-auto col-mobile-11 ] ' src={iconImage} alt='Icons' />
                            <p dangerouslySetInnerHTML={{ __html: iconText }} className=' [ project-container-p m-auto col-8 col-tablet-12 col-mobile-12 m-auto ] ' />

                            <div className=' [ col-2 m-auto ] '>
                                <img className=' [ col-12 divider ] ' src={require('./../assets/Icons/workSplitter.png')} alt='divider' />
                            </div>
                            <h4 className=' [ specific-box-subheader m-auto col-8 col-tablet-12 col-mobile-12 slab ] '>Prototype and Layout</h4>
                            <img className=' [ specific-box-subimg col-8 col-tablet-12 d-flex m-auto col-mobile-11 ] ' src={prototypeImage} alt='Prototype and Layout' />
                            <p dangerouslySetInnerHTML={{ __html: prototypeText }} className=' [ project-container-p m-auto col-8 col-tablet-12 col-mobile-12  ] ' />

                            <div className=' [ col-2 m-auto ] '>
                                <img className=' [ col-12 divider ] ' src={require('./../assets/Icons/workSplitter.png')} alt='divider' />
                            </div>

                            <h3 className=' [ specific-box-subheader m-auto col-8 col-tablet-12 col-mobile-12 slab ] '>Development</h3>
                            <img className=' [ specific-box-subimg col-8 col-tablet-12 d-flex m-auto col-mobile-11 ] ' src={developImage} alt='Icons' />
                            <p dangerouslySetInnerHTML={{ __html: developText }} className=' [ project-container-p m-auto col-8 col-tablet-12 col-mobile-12  ] ' />

                            <div className=' [ col-2 m-auto ] '>
                                <img className=' [ col-12 divider ] ' src={require('./../assets/Icons/workSplitter.png')} alt='divider' />
                            </div>

                            <h3 className=' [ specific-box-subheader m-auto col-8 col-tablet-12 col-mobile-12 slab ] '>Check out the final result!</h3>
                            <a href={websiteUrl} target='_blank' rel="noopener noreferrer">
                                <img className=' [ specific-box-subimg col-8 col-tablet-12 d-flex m-auto col-mobile-11 ] ' src={imageUrl} alt='Icons' />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WorkClick;