import React from 'react';
import { Link } from 'react-router-dom';

const WorkPage = () => {
    return (
        <div>
            <div className='project'>
                <div className='project-container'>
                    <div className='project-container-img col-7 col-mobile-12'>
                        <img className='col-10 col-mobile-12' src={require('./../assets/ProjectImages/infotech.png')} alt='Project Infotech' />
                    </div>
                    <div className='project-container-text col-5 col-mobile-12'>
                        <h2>INFOTECH <br /> Website Redesign</h2>
                        <p className='project-container-p col-10 col-mobile-12'>Infotech AS is a company located
                        in Bergen, Norway. During the first
                        year of my studies, we were asked to
                        do a redesign of their website. </p>
                        <Link className='btn' to=''>Read More</Link>
                    </div>
                </div>
                <div className='col-2 m-auto'>
                    <img className='col-12' src={require('./../assets/Icons/workSplitter.png')} alt='divider' />
                </div>
                <div className='project-container row-reverse '>
                    <div className='project-container-text col-5 col-mobile-12'>
                        <h2>LETHA <br /> E-commerce example</h2>
                        <p className='project-container-p col-10 col-mobile-12'>
                            This was an e-commerce website
                            example from my first year of
                            school.
                         </p>
                        <Link className='btn' to=''>Read More</Link>
                    </div>
                    <div className='project-container-img col-7 col-mobile-12 order'>
                        <img className='col-10 col-mobile-12' src={require('./../assets/ProjectImages/letha.png')} alt='Project Infotech' />
                    </div>
                </div>
                <div className='col-2 m-auto'>
                    <img className='col-12' src={require('./../assets/Icons/workSplitter.png')} alt='divider' />
                </div>
                <div className='project-container'>
                    <div className='project-container-img col-7 col-mobile-12'>
                        <img className='col-10 col-mobile-12' src={require('./../assets/ProjectImages/GameOfDragons.png')} alt='Project Infotech' />
                    </div>
                    <div className='project-container-text col-5 col-mobile-12'>
                        <h2>Game Of  Dragons
                        <br /> Board Game</h2>
                        <p className='project-container-p col-10 col-mobile-12'>
                            Game Of Dragons was a project where
                            I made a Game of Thrones themed
                            Board Game. The game is built with
                            HTML, CSS and JavaScript.
                         </p>
                        <Link className='btn' to=''>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkPage;
