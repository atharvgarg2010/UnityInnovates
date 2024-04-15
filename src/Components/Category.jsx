import React from 'react'
import Catshort from './Catshort'
import business from './Business.png'
import Ngo from './ngoop.png'


function Category() {
    return (
        <>
            <div className="cate">
                <h1 style={{width:"90%"}} className='h1'><span>C</span><span>A</span><span>T</span><span>E</span><span>G</span><span>O</span><span>R</span><span>Y</span></h1>
                <div className="category">
                    <Catshort img={business} link="/business" />
                    <Catshort img={Ngo} link="/NGO" />
                    <Catshort img={Ngo} link="/userposts" />

                </div>
            </div>
        </>
    )
}

export default Category