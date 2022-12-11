import React, { useEffect, useState } from 'react';
import Project from '../../component/Project';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    
    return (
        <section id='myprojects' className='py-20 bg-orange-100'>
            <p className='text-center text-3xl lg:text-5xl font-bold uppercase'>All My Projects</p>
            <div className='grid grid-cols-1  gap-12 p-5 lg:p-20'>
                {projects.map(project => <Project key={project.id} project={project} ></Project>)}
            </div>
        </section>
    );
};

export default MyProjects;