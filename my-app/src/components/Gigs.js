import React from 'react'
import { useState, useEffect } from 'react'
import { Header, Item, Segment } from 'semantic-ui-react'

const Gigs  = () => {

    const [gigs, setGigs] = useState([])

    useEffect(() =>{
       setGigs([{name: 'Guaginos'}, {name: 'Hooray'}, {name: 'We Got Gigs'}]) 
    })

    return(
        <div>
            <Header size='huge' textAlign='center '>Astro Keys</Header>

            {gigs.length > 0 ? gigs.map( gig => 
            <div className='gigs'>
            <Segment>
            <Item>
                <Item.Content>
                    <Item.Header>{gig.name}</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                        Date and Time or Something
                    </Item.Description>
                    <Item.Extra>Place Deatils</Item.Extra>
                </Item.Content>
            </Item>
            </Segment>
            </div>)
        :
        <Header size='huge' textAlign='center '>Come back to see next gigs!</Header>
        }
        </div>
    )
}

export default Gigs