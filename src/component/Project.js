import React from 'react';

import PrimaryButton from './PrimaryButton';

const Project = ({ project }) => {
    const { project_name, type, image, detial, live_link, technology, client_side, server_side } = project;
    return (
        <div className="card  bg-base-100 lg:shadow-xl lg:border-t-2 border-primary ">
            <figure><img src={image}  alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {project_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='pb-4'>{type}</p>
                <p className='font-bold'>Feature :</p>
                <ul>
                    {detial.map((point, id) => <li key={id}><span className='font-bold'>{id + 1} . </span>{point}</li>)}
                </ul>
                <p className='font-bold'>Technology :</p>
                <ul>
                    {technology.map((point, id) => <li key={id}><span className='font-bold'>{id + 1} . </span>{point}</li>)}
                </ul>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <a href={live_link}><PrimaryButton property={`w-full`}>Live Link</PrimaryButton></a>
                    <a href={client_side}><button className='btn w-full text-white'>Client Side</button></a>
                    {server_side && <a href={server_side}><button className='btn w-full btn-outline btn-success font-bold'>Server Side</button></a>}
                </div>
            </div>
        </div>
    );
};

export default Project;