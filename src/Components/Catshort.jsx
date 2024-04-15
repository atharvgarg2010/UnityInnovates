import React from 'react'
import { Link } from 'react-router-dom'
// import img from './Business.png'
function Catshort(props) {
    return (
        <>
            <div className="catshort">
                <img src={props.img} alt="" width={"250px"} />
                <Link className="logout-wrapper" to={props.link} style={{textDecoration:"none"}}>
                    <b style={{ color: "#3a5b22" }} className="logout">Read More</b>
                </Link>
            </div>
        </>
    )
}

export default Catshort