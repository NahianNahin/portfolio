import React from 'react';

const PrimaryButton = ({ children, property }) => {
    return (
        <button className={`${property} btn bg-gradient-to-r from-primary to-secondary border-0 text-black font-bold rounded-0`}>{children}</button>
    );
};

export default PrimaryButton;