import React from 'react';

const WorkClick = (props) => {
    const { name, type, brief, imageUrl, planningP1, planningP2, planningP3, planningP4, planningImage } = props;
    return (
        <>
            <div className=' [ col-8 col-mobile-10 m-auto ] '>
                <div className=''>
                    <div className=' [ ] '>
                        <img className=' [ col-12 col-mobile-12 ] ' src={imageUrl} alt={name}/>
                        <div className=' [ mt-5 col-12 col-md-6 ] '>
                            <h1 className=''>{name}</h1>
                            <h2>{type}</h2>

                            <h3>Brief</h3>
                            <p dangerouslySetInnerHTML={{__html: brief}} />
                            <h3>Planning and Design</h3>
                            <p> {planningP1}</p>
                            <p>{planningP2}</p>
                            <p>{planningP3}</p>
                            <p>{planningP4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WorkClick;