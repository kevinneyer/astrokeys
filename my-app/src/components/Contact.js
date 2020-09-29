import React from 'react'
import { useState } from 'react'
import { Header, Segment, Form, Button } from 'semantic-ui-react'

const Contact = () => {

    const [firstName, setFirstName] = useState('')
    const [lasttName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
   
    return(
        <div className='mailing-list'>
            <Header size='huge' textAlign='center' >Want to stay up to date?</Header>
            <Header size='medium' textAlign='center' >Join our mailing list!(or something like that)</Header>
            <Segment>
            <Form >
                <Form.Group widths='equal'>
                    <Form.Input onChange={firstNameHandler} fluid label='First name' placeholder='First name' />
                    <Form.Input onChange={lastNameHandler} fluid label='Last name' placeholder='Last name' />
                </Form.Group>
                <Form.Input onChange={emailHandler} fluid label='email address' placeholder='music@funk.com' />
                <Button color='black'>Submit!</Button>    
            </Form>
            </Segment>
        </div>
    )
}

export default Contact