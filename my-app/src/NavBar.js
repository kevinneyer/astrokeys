import React from 'react'
import { Menu, Grid, Segment} from 'semantic-ui-react'
import { BrowserRouter as Router, Link} from "react-router-dom"


const NavBar = () => {
    return(
        <div >
            <Router>
                <Menu widths='5' inverted >
                    <Menu.Item
                    name='Home'>
                    <Link to="/">Home</Link>
                    </Menu.Item>
                    
                    <Menu.Item
                    name='About'>
                    <Link to="/about">About</Link>
                    </Menu.Item>

                    <Menu.Item
                    name='Gigs'
                    />
                    <Menu.Item
                    name='Music'
                    />
                    <Menu.Item
                    name='Contact'
                    />
                </Menu>
            </Router>
            <Segment raised>
            <Grid >
                <Grid.Column className='navbar'>Home</Grid.Column>
                <Grid.Column className='navbar'>About</Grid.Column>
                <Grid.Column className='navbar'>Gigs</Grid.Column>
                <Grid.Column className='navbar'>Music</Grid.Column>
                <Grid.Column className='navbar'>Contact</Grid.Column>
            </Grid>
            </Segment>


        </div>
    )
}

export default NavBar