import React from 'react'
import albumCover from '../assets/albumCover.jpg'
import organKeys from '../assets/organKeys.JPG'
import { Icon, Grid, Image, Label, Segment} from 'semantic-ui-react'

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
           
          
            <Segment className='ep' raised >
                <Label color='red'>
                Available Now!
                </Label>
                <Image className='ep-image' src={albumCover} alt='album cover' centered  />

            </Segment>
           
            <div className='social-div'>
                <Segment>
                <a href='https://www.instagram.com/theastrokeys/' target='_blank'><Icon className='socials' name='instagram' size='big' color='black'/></a>
                <a href='https://www.facebook.com/pg/TheAstroKeys/about/?ref=page_internal' target='_blank'><Icon className='socials' name='facebook' size='big' color='blue' /></a>
                <a href='https://open.spotify.com/album/0OpEKaIDNyWPhwQmjlQlvs?si=d3vvmiO7S5OwkqY6S5njfA' target='_blank'><Icon className='socials' name='spotify' size='big' color='green' /></a>
                <a href='https://music.apple.com/us/album/astro-keys-ep/1523101481' target='_blank'><Icon className='socials' name='apple' size='big' color='black'/></a>
                </Segment>
            </div>
            

        </div>
    )
}

export default Home