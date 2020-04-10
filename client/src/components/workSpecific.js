import React from 'react';

const WorkClick = (props) => {
    const { name, type, brief, imageUrl, planningText, planningImage } = props;
    return (
        <>
            <div className=' [ col-8 col-mobile-10 m-auto ] '>
                <div className=' [ specific ] '>
                        <div className=' [ specific-box col-12 ] '>
                            <h1 className=' [ specific-box-header ] '>{name} - {type}</h1>
                            <p dangerouslySetInnerHTML={{__html: brief}} className='project-container-p '/>
                            <img className='col-12' src={imageUrl} alt={name} />
                            <div className=' [ col-8 m-auto ] '>
                            <h3>Planning and Design</h3>
                            <p dangerouslySetInnerHTML={{__html: planningText}} className='project-container-p'/>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}
export default WorkClick;