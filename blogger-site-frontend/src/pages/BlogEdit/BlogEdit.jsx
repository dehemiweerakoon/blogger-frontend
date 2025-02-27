/* eslint-disable no-unused-vars */
import React from 'react'
import Navigation from '../Navbar/Navigation'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
export const BlogEdit = () => {

 const blog_id = useParams();
 /// params are used here e

  return (
   <>
<div className='m-0 p-0'>
  <div className='mb-2'> 
        <Navigation />  
        <Container  className=''> 
    <Row>
        <Col md={10} className='mb-5 d-flex justify-content-center'>
            <h2>Update Blog</h2>
            </Col>
        <Col md={10}>
        <Form>
            <Col md={2}>
            <Form.Label>Blog Title</Form.Label>
            </Col>
            <Col md={6}>
            <Form.Control type='text'/>
            </Col>
            <Col md={2}>
            <Form.Label>Blog Content</Form.Label>
            </Col>
            <Col md={19}>
            <Form.Control as="textarea" rows={25}/>
            </Col>
            <Button>Update Blog</Button>
        </Form>
        </Col>
    </Row>
        </Container>
        </div>
        </div>
   </>
  )
}
