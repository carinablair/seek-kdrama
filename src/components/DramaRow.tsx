import React from "react";
import Thumbnail from "./Thumbnail";

export interface DramaRowProps{
    dramas: Drama[];
}

export interface Drama{
    imageUrl: string;
    title: string;  
}

export const DramaRow: React.FC<DramaRowProps> = (props) => {
    
    return ( 
    <>
    {props.dramas.map(drama => <Thumbnail imageUrl={drama.imageUrl} title={drama.title}/>)}
    </>
    );
};

export default DramaRow;


