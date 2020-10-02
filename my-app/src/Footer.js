import React from 'react'
import {Grid, Icon, Menu} from 'semantic-ui-react'

const Footer = () =>{
    return(
        <div>
            <div className='social-div'>
                <Menu widths={1} fixed='bottom' text>
                <Grid  verticalAlign='centered' > 
                <a href='https://www.instagram.com/theastrokeys/' target='_blank'><Icon className='socials' name='instagram' size='big' color='black'/></a>
                <a href='https://www.facebook.com/pg/TheAstroKeys/about/?ref=page_internal' target='_blank'><Icon className='socials' name='facebook' size='big' color='blue' /></a>
                <a href='https://open.spotify.com/album/0OpEKaIDNyWPhwQmjlQlvs?si=d3vvmiO7S5OwkqY6S5njfA' target='_blank'><Icon className='socials' name='spotify' size='big' color='green' /></a>
                <a href='https://music.apple.com/us/album/astro-keys-ep/1523101481' target='_blank'><Icon className='socials' name='apple' size='big' color='black'/></a>
                <a href="mailto:theastrokeys@gmail.com" target='_blank'><Icon className='socials' name='mail' size='big' color='black' /></a>
                </Grid>
                </Menu>
            </div>
        </div>
    )
}

export default Footer