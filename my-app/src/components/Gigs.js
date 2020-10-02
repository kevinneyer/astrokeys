import React from 'react'
import { useState, useEffect } from 'react'
import { Header, Item, Segment } from 'semantic-ui-react'

const Gigs  = () => {

    const [gigs, setGigs] = useState([])

    useEffect(() =>{
       setGigs([{name: 'Guaginos', time: '7:00 - 8:00pm', date: '10/10/2020'}, {name: 'Hooray', time: '7:00 - 8:00pm', date: '10/10/2020'}, {name: 'We Got Gigs', time: '7:00 - 8:00pm', date: '10/10/2020'}]) 
    })

    return(
        <div>
            <Header size='huge' textAlign='center'>Come See Us!</Header>

            {gigs.length > 0 ? gigs.map( gig => 
            <div className='gigs'>
            <Segment raised>
            <Item>
                <Item.Content>
                    <Item.Header>{gig.name}</Item.Header>
                    <Item.Meta>Date: {gig.date}</Item.Meta>
                    <Item.Meta>Time: {gig.time}</Item.Meta>
                    {/* <Item.Description>
                        Date and Time or Something
                    </Item.Description>
                    <Item.Extra>Place Deatils</Item.Extra> */}
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