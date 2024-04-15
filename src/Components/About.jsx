import React from 'react'
import Aboutt from './About.png'

function About() {
  return (
    <>
    <div className="about">
        <div className="left">
            <img src={Aboutt} alt="" width={"700px"} />
        </div>
        <div className="right">
            <h1>What We Do</h1>
            <p>At UnityInnovates, we're pioneering a revolutionary platform that bridges the gap between NGOs and businesses, fostering collaboration and social impact like never before. Our innovative platform empowers NGOs to amplify their causes and businesses to fulfill their corporate social responsibility, all in one unified space. NGOs can post movements, initiatives, and campaigns, while businesses can advertise job vacancies, internships, and volunteer opportunities. Together, we're redefining the landscape of corporate social engagement, driving unity, and catalyzing positive change. Join us on our journey toward a more interconnected and purpose-driven world with UnityInnovates.</p>
        </div>
    </div>
    </>
  )
}

export default About