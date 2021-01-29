import React, { FC } from 'react';

export const DramaSearch: React.FC = () => {

    const searchDramas = async (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <form className="form" onSubmit={searchDramas}>
            <label className="label" htmlFor="query"> Kdrama Name</label>
            <input className="input" type="text" name="query" placeholder="i.e. Crash Landing on You"></input>
            <button className="button" type="submit" >Search</button>
        </form>
    );
}




export default DramaSearch;