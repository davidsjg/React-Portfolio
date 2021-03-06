import React from "react";
import {Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap';

function Contact() {

    return (
    <>
      <div className="mt-4">
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Message</Form.Label>
    <Form.Control type="text" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </div>
    </>  
    )
}

export default Contact;
