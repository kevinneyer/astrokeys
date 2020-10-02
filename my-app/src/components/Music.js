import React from 'react'
import { Icon, Grid, Image, Label, Segment } from 'semantic-ui-react'
import albumCover from '../assets/albumCover.jpg'

const Music = () => {
    return(
        <div>   
            <div className='ep'>
               <Segment inverted raised padded >
                <Label ribbon color='red'>
                Available Now!
                </Label>
                <Image className='ep-image' src={albumCover} alt='album cover' centered  />

            </Segment>
            </div>  
        </div>
    )
}

export default Music 