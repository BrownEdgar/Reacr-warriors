import React from 'react'

 function Chil(props) {
    return (
        <div>
            <h1>{props.data.join("-")}</h1>
        </div>
    )
}

export default Chil