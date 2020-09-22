import React from 'react'
import albumCover from '../assets/albumCover.jpg'
import organKeys from '../assets/organKeys.JPG'
import { Icon, Grid, Image, Label, Segment} from 'semantic-ui-react'

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <Grid>
            <Grid.Column>
            <Segment className='ep' raised>
                <Label color='red'>
                Available Now!
                </Label>
                <Image src={albumCover} alt='album cover' style={{width: 500}} />

            </Segment>
            </Grid.Column>
            </Grid>
            <div className='social-div'>
                <Segment>
                <Icon className='socials' name='instagram' size='big'/>
                <Icon className='socials' name='facebook' size='big' color='blue' />
                <Icon className='socials' name='spotify' size='big' color='green' />
                <Icon className='socials' name='apple' size='big' />
                </Segment>
            </div>
            

        </div>
    )
}

export default Home