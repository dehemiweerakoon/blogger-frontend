/* eslint-disable no-unused-vars */
import Navigation from '../Navbar/Navigation';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import {getRequest} from '../../services/ApiSerives'
import { Link } from 'react-router-dom'
const UpdateBlog = () => {
    const [blogs,setBlogs] = useState([]);
    const user_id = sessionStorage.getItem("user_id");

    const getBlogs = async()=>{
        const response = await getRequest(`/blog/user/${user_id}`);
        setBlogs(response.data);
        console.log(response.data);
    }
    useEffect(()=>{
        getBlogs();
    },[])
  return (
    <>
  <div className='m-0 p-0'>
  <div className='mb-5'> 
        <Navigation />  
        <Container  className=''> 
        <Row>
          <Col md={10}>
          <h1>Update blogs</h1>
          </Col>
        {
                            blogs &&
                            blogs.map((blog,index)=>{
                                return(
                                    
                                    <Col key={index} md={10} className='mt-5 rounded shadow-lg p-3 mb-5'>
                                        <Card >
                                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                        <Card.Body className=''>
                                            <Card.Title><h2>{blog.title}</h2> </Card.Title>
                                            <Card.Text style={{textAlign:"justify"}}>
                                            {blog.content.split(' ').slice(0,50).join(' ')}
                                            ...
                                            </Card.Text> 
                                          <Link to={`/blog/update/${blog.id}`}><Button  className='mt-5 rounded-pill' style={{backgroundColor:"#4870a4",border:"#4870a4"}}>Edit Blog</Button></Link>  
                                        </Card.Body>
                                        </Card>
                                    </Col>
                                 
                                )
                            })
                        }
        </Row>
        </Container>
    </div>
    </div>
    </>
  )
};

export default UpdateBlog;