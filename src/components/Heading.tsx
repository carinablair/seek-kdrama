import React from 'react';

export interface HeadingProps {
    heading: string;
}

export const Heading: React.FC<HeadingProps> = (props) => {
    return (
        <div className='col'>
            <h1>{props.heading}</h1>
        </div>
    );
};

export default Heading;