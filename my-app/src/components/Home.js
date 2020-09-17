import React from 'react'
import {albumCover} from '../images/albumCover.jpg'

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <img src={ albumCover } alt='album cover' />
        </div>
    )
}

export default Home