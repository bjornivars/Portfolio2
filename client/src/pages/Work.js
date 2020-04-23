import React from 'react';

import WorkPage from './../components/work';
import projects from './../components/projectsArray';

export default function Work() {

    //console.log(projects)
    return (
        <div className=' [ container ] '>
            <div className=' [ container-paddingSide ] '>
                <h1 className=' [ headline ] '>
                    Here are some of my projects <br />
                    during these two years at school.
                </h1>
            </div>
            <> {
                (projects !== undefined) ?
                    projects.map((value, index) => {
                        return <WorkPage key={index}
                            name={value.name}
                            type={value.type}
                            intro={value.intro}
                            id={value.id}
                            imageUrl={value.imageUrl}
                        />
                    }) :
                    <div className=' [ d-flex justify-content-center col-md-3 ] '>
                        <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' className='col-8 col-md-12' alt='loading' />
                    </div>
            }
            </>
        </div>
    )
}