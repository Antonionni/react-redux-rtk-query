import React from 'react';


const Preloader: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-full h-full absolute">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Preloader;