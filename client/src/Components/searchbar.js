import React from 'react'


const Searchbar = ({getSearchterm})=> {
        return (
     <div className="col-5 search">
     <input className="form-control mr-sm-2" onChange={event => getSearchterm(event.target.value)} />
     </div>
        )
    

};


export default Searchbar;