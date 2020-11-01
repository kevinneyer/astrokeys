import React from 'react'
import { Icon, Grid, Image, Label, Segment } from 'semantic-ui-react'
import albumCover from '../assets/albumCover.jpg'

const Music = () => {
    return(
        <div>   
            <div className='ep'>
                <iframe src="https://open.spotify.com/embed/album/0OpEKaIDNyWPhwQmjlQlvs" className='spotify'frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:2QpJRvjN1GP9nNv4Xb6MYx&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
            </div>  
        </div>
    )
}

export default Music 