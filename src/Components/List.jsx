import React from 'react'

function List(props) {
    return (
        <li>
            <h3 style={{display:'flex', alignItems:"center"}}><img src={props.img} style={{margin:"0px 20px 0px 0px", height:"100px"}} alt="" />{props.heading}</h3>
            <p>{props.desc}</p>
        </li>
    )
}

export default List