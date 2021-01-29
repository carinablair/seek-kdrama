import React from 'react';
import Drama from '../model/Drama';
import DramaRow from './DramaRow';
import Heading from './Heading';

export interface SectionProps {
    sectionName: string;
    dramas: Drama[];
}


export const Section: React.FC<SectionProps> = (props) => {
    return (
        <>
            <Heading heading={props.sectionName} />
            <DramaRow dramas={props.dramas} />

        </>

    );

};

export default Section;
