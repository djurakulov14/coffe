import React from "react";


const Box = (props) => {



    return ( 
        <div className="box">
            <img src="/images/types.png" alt="" />
            <h4>{props.title}</h4>
            <p>{props.country}</p>
            <p>{props.price} $</p>
        </div>
     );
}
 
export default Box;