import React from "react";

export interface ThumbnailProps {
    imageUrl: string;
    title: string;
}

export const Thumbnail: React.FC<ThumbnailProps> = (props) => {

    return (<>
        <img
            style={{ width: 200 }}
            src={props.imageUrl}
            alt={`${props.title} poster`} />
        <div style={{ fontFamily: 'sans-serif' }}>
            {props.title}
        </div>
    </>

    );


};

export default Thumbnail;
