import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PrimaryButton from '../../component/PrimaryButton';
import SharedHeader from '../../shared/SharedHeader';


const ProjectDetails = () => {
    const data = useLoaderData();
    const { project_name, type, image_1, image_2, image_3, image_4, detial, live_link, technology, client_side, server_side } = data;
    console.log(data);
    return (
        <div className='hero_section h-full'>
            <SharedHeader></SharedHeader>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 pl-10 pr-10 lg:pt-[100px]'>
                <div className='text-white order-2 lg:order-1'>
                    <p className=' text-3xl text-primary font-bold uppercase py-5'>Project</p>
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
                        {technology.map((point, id) => <li className='inline pr-3' key={id}><span className='font-bold'>{id + 1} . </span>{point}</li>)}
                    </ul>
                    <div className='grid grid-cols-3 gap-4 pt-5'>
                        <a href={live_link}><PrimaryButton property={`w-full`}>Live Link</PrimaryButton></a>
                        <a href={client_side}><button className='btn w-full text-white'>Client Side</button></a>
                        {server_side && <a href={server_side}><button className='btn w-full btn-outline btn-success font-bold'>Server Side</button></a>}
                    </div>
                </div>
                <div className='grid grid-cols-2 order-1 lg:order-2 gap-5'>
                    <img className='w-10/12 rounded-xl shadow-xl' src={image_1} alt="" />
                    <img className='w-10/12 rounded-xl shadow-xl' src={image_2} alt="" />
                    <img className='w-10/12 rounded-xl shadow-xl' src={image_3} alt="" />
                    <img className='w-10/12 rounded-xl shadow-xl' src={image_4} alt="" />
                </div>
            </div>

        </div>
    );
};

export default ProjectDetails;