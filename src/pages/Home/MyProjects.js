import React, { useEffect, useState } from 'react';
import Project from '../../component/Project';

const MyProjects = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    return (
        <section id='myprojects' className='py-20 bg-orange-100'>
            <p className='text-center text-6xl font-bold uppercase'>All My Projects</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 p-20'>
                {project.map(project => <Project key={project.id} project={project} ></Project>)}
            </div>
        </section>
    );
};

export default MyProjects;