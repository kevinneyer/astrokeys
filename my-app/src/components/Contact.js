import React from 'react'
import { useState } from 'react'
import { Header, Segment, Form, Button } from 'semantic-ui-react'

const Contact = () => {

    const [firstName, setFirstName] = useState('')
    const [lasttName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    return(
        <div>
            <Header size='huge' textAlign='center' >Want to stay up to date?</Header>
            <Header size='medium' textAlign='center' >Join our mailing list!(or something like that)</Header>
            <Segment>
            <Form >
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='First name' />
                    <Form.Input fluid label='Last name' placeholder='Last name' />
                </Form.Group>
                <Form.Input fluid label='email address' placeholder='music@funk.com' />
                <Button color='black'>Submit!</Button>    
            </Form>
            </Segment>
        </div>
    )
}

export default Contact