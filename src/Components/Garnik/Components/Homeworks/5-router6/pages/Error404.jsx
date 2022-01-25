import React from 'react';
import {Link} from 'react-router-dom'

function Error404() {
    return (
        <>
         <h1>Sorry page is not found</h1>
         <Link to='/'>Go to Home</Link>
        </>
    )
}

export default Error404;
