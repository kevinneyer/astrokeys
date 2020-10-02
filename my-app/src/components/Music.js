import React from 'react'
import { Icon, Grid, Image, Label, Segment } from 'semantic-ui-react'
import albumCover from '../assets/albumCover.jpg'

const Music = () => {
    return(
        <div>   
            <div className='ep'>
               {/* <Segment inverted raised padded >
                <Label ribbon color='red'>
                Available Now!
                </Label>
                <Image className='ep-image' src={albumCover} alt='album cover' centered  />

            </Segment> */}

           {/* <iframe src='https://music.apple.com/us/album/one-done/1523101481?i=1523101482' allow ></iframe>  */}
           {/* <iframe src="https://open.spotify.com/embed/track/2X3lptabEwckBqZjBJ6fTy" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
           <iframe src="https://open.spotify.com/embed/track/5bHQNQILSfaaKCMJPLzYBe" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
           <iframe src="https://open.spotify.com/embed/album/0OpEKaIDNyWPhwQmjlQlvs" className='spotify'frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
           <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:2QpJRvjN1GP9nNv4Xb6MYx&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0" allowtransparency="true"></iframe>

            </div>  
        </div>
    )
}

export default Music 