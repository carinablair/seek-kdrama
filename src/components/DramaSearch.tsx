import React, { FC } from 'react';

export const DramaSearch: React.FC = () => {
    return (
        <form className="form">
            <label className="label" htmlFor="query"> Kdrama Name</label>
            <input className="input" type="text" name="query" placeholder="i.e. Crash Landing on You"></input>
            <button className="button" type="submit" >Search</button>
        </form>
    );
}




export default DramaSearch;