import React from 'react';
import { Link } from 'react-router-dom';

import PrimaryButton from './PrimaryButton';

const Project = ({ project }) => {
    const { id, project_name, image_1, live_link, } = project;
    return (
        <div className="card  bg-base-100 lg:shadow-xl lg:border-t-2 border-primary ">
            <figure><img className='h-[300px]' src={image_1} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {project_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className='grid grid-cols-1  gap-4'>
                    <a href={live_link}><PrimaryButton property={`w-full`}>Live Link</PrimaryButton></a>
                    <Link to={`/project/${id}`}><button className='btn w-full text-white'>Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Project;