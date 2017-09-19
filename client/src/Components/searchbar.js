import React from 'react'


const Searchbar = ({getSearchterm})=> {
        return (
        <div> 
            <input onChange={event => getSearchterm(event.target.value)} />
        </div>
        )
    

};


export default Searchbar;