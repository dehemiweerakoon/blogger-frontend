/* eslint-disable no-unused-vars */
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import youtube from '../../assets/youtube.png';
import facebook from '../../assets/facebook (1).png'
import twitter from '../../assets/twitter (1).png'
import home from '../../assets/home.png';
import blog from '../../assets/blog-list.png'
import update from '../../assets/update.png';
const Footer = () => {
  return (
  <Container fluid className='mt-5 p-4  text-white' style={{backgroundColor:"#718bab"}}>
    <Row>
    <Col  md={12}className='text-center'>
    <h5>© 2022 Company, Inc.All rights reserved.</h5>
    </Col>
    <Col md={12}>
      <h4></h4>
    </Col>
    <div >
    < hr style={{height: "3px", backgroundColor:"white" , border: "none"}}/>
    </div>
    <Col md={8}>
    <div className='d-flex  flex-row justify-content-start'>
        <ul style={{listStyle:"none"}}>
            <li><Image src={home} className='m-1'/>home</li>
            <li><Image src={blog} className='m-1'/>Blog List</li>
            <li><Image src={update} className='m-1'/>Update Blog</li>
        </ul>
    </div>
    </Col>
    <Col md={4} className='d-flex justify-content-end align-items-center'>
    <Image src={youtube} className='m-1'/>
    <Image src={facebook} className='m-1'/>
    <Image src={twitter} className='m-1'/>
  
    </Col> 
    </Row>
  </Container>
  
  )
}

export default Footer