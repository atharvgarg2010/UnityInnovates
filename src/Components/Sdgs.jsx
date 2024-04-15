import React from 'react'
import List from './List'
import Nopoverty from './Nopoverty.png'
import Decent from './Decent.png'
import Partner from './partner.png'



function Sdgs() {
    return (
        <div className="sdgs">
            <div className="headingsdg">
                <h1>The Sustainable Development Goals We Cover</h1>
                <p>The Sustainable Development Goals (SDGs) are a universal call to action to end poverty, protect the planet, and ensure that all people enjoy peace and prosperity by 2030. They address various global challenges, including poverty, inequality, climate change, environmental degradation, peace, and justice. With 17 interconnected goals, the SDGs provide a framework for governments, businesses, NGOs, and individuals to work together towards a more sustainable and equitable future for all.</p>
            </div>
            <div className="listsdg">
                <ol role="list" className='list'>    
                <List heading = "No Poverty"  desc = "By supporting NGOs like Smile India Trust, we contribute to SDG 1: No Poverty. Through initiatives like providing education, vocational training, and microloans, they empower individuals and communities to lift themselves out of poverty, creating a more equitable society for all." img = {Nopoverty} />     
                <List heading = "Decent Work and Economic Growth"  desc = "Through initiatives like fair labor practices, skill development programs, and job creation, businesses like Tata Power  contribute to SDG 8: Decent Work and Economic Growth, fostering inclusive prosperity and sustainable employment opportunities for all." img = {Decent} />     
                <List heading = "Partnership For The Goals"  desc = "At our platform, we embody SDG 17: Partnership for Goals by facilitating collaborations between businesses and NGOs. By connecting job vacancies with skilled individuals and enabling NGOs to raise funds, we actively contribute to sustainable development and global goals. Join us in driving positive change together!" img = {Partner} />     

                </ol>
            </div>
        </div>
    )
}

export default Sdgs