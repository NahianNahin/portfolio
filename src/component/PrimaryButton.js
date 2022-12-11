import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn bg-gradient-to-r from-primary to-secondary border-0 text-black font-bold rounded-0">{children}</button>
    );
};

export default PrimaryButton;