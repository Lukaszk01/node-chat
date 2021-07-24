import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onIdSubmit(idRef.current.value)
  }

  function createNewId() {
    onIdSubmit(uuidV4())
  }
  document.body.style = "linear-gradient(<angle>, color1 color1-stop-at, color2 color2-start-at);";
  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>   
        <Button type="submit" className="mr-2 ml-3 mt-3 btn btn-success" style={{ marginRight: '5px'}}>Login</Button>
        <Button className="ml-3 mt-3" onClick={createNewId} variant="success">Create A New Id</Button>
      </Form>
    </Container>
  )
}