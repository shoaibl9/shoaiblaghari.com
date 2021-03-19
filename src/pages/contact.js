import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import Layout from '../components/Layout'
import { Card, Form, Button } from 'react-bootstrap'

const ContactCard = styled(Card)`
  display: flex;
  background-color: rgba(255,255,255,0.5);
  left: 20%;
  width: 60%;
  padding: 20px;
`

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    }
  }

  handleChange = (event) => {
    console.log(event);

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true
    });
  }

  render() {
    return(
      <Layout>

        <ContactCard className="mt-3">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name" className="text-white">Full Name</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email" className="text-white">Email</Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message" className="text-white">Message</Form.Label>
              <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}/>
            </Form.Group>

            <Button type="submit" className="d-inline-block" variant="dark" disabled={this.state.disabled}>
              Send
            </Button>

            {this.state.emailSent === true && <p className="d-inline-block ml-3 text-white">Email Sent</p>}
            {this.state.emailSent === false && <p className="d-inline-block ml-3 text-white">Email Not Sent</p>}
          </Form>
        </ContactCard>

      </Layout>
    );
  }

}

export default ContactPage;
