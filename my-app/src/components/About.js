import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import stairwell from '../assets/stairwell.jpg'

const About = () => {
    return(
        <div>
            {/* <Header size='huge' textAlign='center '>Astro Keys</Header> */}
            <div className='about-container'>
            <Image className='about-pic' src={stairwell} size='medium' circular/>
           
            <Header size='medium' textAlign='center' >Founded in 2018 by three suave dudes, their organ funk music will rock your socks off.</Header>
            </div>
        </div>
    )
}

export default About