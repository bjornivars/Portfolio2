import React from 'react';
import { Link } from 'react-router-dom';


const WorkClick = (props) => {
    const { name, type, brief, imageUrl, colorText, colorImage, iconText, iconImage, prototypeText, prototypeImage, developImage, developText, websiteUrl } = props;
    return (
        <>
            <div className=' [ col-8 col-mobile-10 m-auto ] '>
                <div className=' [ specific ] '>
                    <div className=' [ specific-box col-12 ] '>
                        <h1 className=' [ specific-box-header ] '>{name} - {type}</h1>
                        <p dangerouslySetInnerHTML={{ __html: brief }} className=' [ project-container-p cursive ] ' />
                        <img className=' [ col-12 m-auto col-mobile-11 ] ' src={imageUrl} alt={name} />
                        <div className=' [ col-12 m-auto ] '>
                            <h3 className=' [ specific-box-subheader ] '>Design</h3>
                            <h4 className=' [ specific-box-subheader ] '>Colors</h4>
                            <img className=' [ col-8 m-auto col-mobile-11 ] ' src={colorImage} alt='Color Pallette' />
                            <p dangerouslySetInnerHTML={{ __html: colorText }} className='project-container-p' />

                            <h4 className=' [ specific-box-subheader ] '>Icons</h4>
                            <img className=' [ col-8 m-auto col-mobile-11 ] ' src={iconImage} alt='Icons' />
                            <p dangerouslySetInnerHTML={{ __html: iconText }} className='project-container-p' />


                            <h4 className=' [ specific-box-subheader ] '>Prototype and Layout</h4>
                            <img className=' [ col-8 m-auto col-mobile-11 ] ' src={prototypeImage} alt='Prototype and Layout' />
                            <p dangerouslySetInnerHTML={{ __html: prototypeText }} className='project-container-p' />

                            <h3 className=' [ specific-box-subheader ] '>Development</h3>
                            <img className=' [ col-8 m-auto col-mobile-11 ] ' src={developImage} alt='Icons' />
                            <p dangerouslySetInnerHTML={{ __html: developText }} className='project-container-p' />

                            <h3 className=' [ specific-box-subheader ] '>Check out the final result!</h3>
                            <a href={websiteUrl} target='_blank' >
                                <img className=' [ col-8 m-auto col-mobile-11 ] ' src={imageUrl} alt='Icons' />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WorkClick;