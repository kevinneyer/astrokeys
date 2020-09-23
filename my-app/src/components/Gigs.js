import React from 'react'
import { useState } from 'react'
import { Header } from 'semantic-ui-react'

const Gigs  = () => {

    const [gigs, setGigs] = useState([])

    return(
        <div>
            <Header size='huge' textAlign='center '>Astro Keys</Header>

            {gigs.length > 0 ? gigs.map( gig => 
            gig.name)
        :
        <Header size='huge' textAlign='center '>Come back to see next gigs!</Header>
        }
        </div>
    )
}

export default Gigs