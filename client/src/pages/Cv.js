import React from 'react';
import CvPage from './../components/cv';
import CvCoursesPage from './../components/cvCourses';
export default function Cv() {


    return (
        <div className=' [ container ] '>
            <div className=' [ container-paddingSide ] '>
                <h1 className=' [ headline purple ] '>
                    During my life I have done a few <br />
                    different professions..
                </h1>
            </div>
            <CvPage />
            <div className=' [ container-paddingSide ] '>
                <h1 className=' [ headline purple ] '>and aome courses..</h1>
            </div>
            <CvCoursesPage />
        </div>
    )
}