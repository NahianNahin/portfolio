import React from 'react';
import PrimaryButton from './PrimaryButton';

const Project = ({ project }) => {
    const { project_name, type, image } = project;
    return (
        <div className="card  bg-base-100 shadow-xl border-t-2 border-primary ">
            <figure><img src={image} className="pt-10" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {project_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='pb-4'>{type}</p>
                <PrimaryButton>Explore</PrimaryButton>
            </div>
        </div>
    );
};

export default Project;