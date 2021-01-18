import React from 'react';
import Thumbnail from './Thumbnail';
import './DramaRow.css';

export interface DramaRowProps {
    dramas: Drama[];
}

export interface Drama {
    imageUrl: string;
    title: string;
}

export const DramaRow: React.FC<DramaRowProps> = (props) => {

    return (
        <ul style={{ display: 'flex', listStyle: 'none' }}>
            {props.dramas.map(drama => <li style={{ margin: 10 }}><Thumbnail imageUrl={drama.imageUrl} title={drama.title} /></li>)}
        </ul>
    );
};

export default DramaRow;


