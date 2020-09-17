import React from 'react'
import {albumCover} from '../images/albumCover.jpg'
import {Icon} from 'semantic-ui-react'

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <img src={albumCover} alt='album cover' />
                <Icon name='instagram' size='big'/>
                <Icon name='facebook' size='big' color='blue' />
                <Icon name='spotify' size='big' color='green' />
                <Icon name='apple' size='big' />
        </div>
    )
}

export default Home