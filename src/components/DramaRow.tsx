import React from 'react';
import Thumbnail from './Thumbnail';
import Drama from '../model/Drama';

export interface DramaRowProps {
    dramas: Drama[];
}

export const DramaRow: React.FC<DramaRowProps> = (props) => {

    return (
        <ul style={{ display: 'flex', listStyle: 'none' }}>
            {props.dramas.map(drama => <li style={{ margin: 10 }}><Thumbnail imageUrl={drama.imageUrl} title={drama.title} /></li>)}
        </ul>
    );
};

export default DramaRow;


