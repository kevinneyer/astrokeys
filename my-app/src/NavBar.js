import React from 'react'
import { Menu, Grid, GridColumn } from 'semantic-ui-react'
import { BrowserRouter as Router, Link} from "react-router-dom"


const NavBar = () => {
    return(
        <div>
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

            {/* <Grid columns={5}>
                <GridColumn>Home</GridColumn>
                <GridColumn>About</GridColumn>
                <GridColumn>Gigs</GridColumn>
                <GridColumn>Music</GridColumn>
                <GridColumn>Contact</GridColumn>
            </Grid> */}


        </div>
    )
}

export default NavBar