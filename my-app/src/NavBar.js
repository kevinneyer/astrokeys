import React from 'react'
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Link} from "react-router-dom"


const NavBar = () => {
    return(
        <div className='navbar'>
            <Router>
                    <Menu widths={5} text >
                    <Menu.Item
                    className='nav'
                    name='Home'
                    href='/'>
                    {/* <Link to="/">Home</Link> */}
                    Home
                    </Menu.Item>
                    
                    <Menu.Item
                    className='nav'
                    name='About'
                    href='/about'>
                    {/* <Link to="/about">About</Link> */}
                    About
                    </Menu.Item>

                    <Menu.Item
                    className='nav'
                    name='Gigs'
                    href='/gigs'
                    >
                    Gigs
                    </Menu.Item>
                    <Menu.Item
                    className='nav'
                    name='Music'
                    href='/music'
                    >
                    Music
                    </Menu.Item>
                    <Menu.Item
                    className='nav'
                    name='Contact'
                    href='/contact'
                    >
                    Contact
                    </Menu.Item>
                </Menu>
                

            </Router>
        
            {/* <Segment raised>
            <Grid >
                <Grid.Column className='navbar'><a href='/'>Home</a></Grid.Column>
                <Grid.Column className='navbar'>About</Grid.Column>
                <Grid.Column className='navbar'>Gigs</Grid.Column>
                <Grid.Column className='navbar'>Music</Grid.Column>
                <Grid.Column className='navbar'>Contact</Grid.Column>
            </Grid>
            </Segment> */}


        </div>
    )
}

export default NavBar