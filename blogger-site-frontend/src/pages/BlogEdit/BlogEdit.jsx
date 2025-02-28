/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navigation from '../Navbar/Navigation'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import blo from '../../assets/blo.png';
import { ToastContainer, toast } from 'react-toastify'
import { putRequest } from '../../services/ApiSerives';
export const BlogEdit = () => {

 const {id} = useParams();
 const [title,setTitle] = useState("");
 const [content,setContent] = useState("");
 const [message,setMessage] = useState("");

 const notify = () => toast.success("Updated Successfully");

 const updateBlog =async()=>{
 
   try{
       const data = {
        "id":parseInt(id),
        "title":title,
        "content":content,
        "user":{
            "id":1
        }
    }
    const response = await putRequest("/blog",data);
    if(response.status===200){
        //
        notify()
        setMessage("Updated Blog Successfully");
        setTitle("");
        setContent("");
    }
   }catch(ex){
    setMessage(ex);
   }
}

  return (
   <>
<div className='m-0 p-0'>
  <div className='mb-2'> 
        <Navigation />
        <Col md={12}className='mb-5 d-flex justify-content-center'>
            <Image src={blo} width={"100"}  />
            </Col>  
        <Container  className='rounded p-5' style={{backgroundColor:"#daf1ff"}}> 
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
            <Form.Control type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </Col>
            <Col md={2}>
            <Form.Label>Blog Content</Form.Label>
            </Col>
            <Col md={19}>
            <Form.Control as="textarea" rows={25} value={content} onChange={(e)=>{setContent(e.target.value)}}/>
            </Col>
           <Col className='d-flex justify-content-end'>
           <Button className='mt-5' style={{backgroundColor:"#025b8e",color:"white"}} onClick={updateBlog}>Update Blog</Button>
           </Col>
        </Form>
        </Col>
    </Row>
        </Container>
        </div>
        </div>
        <ToastContainer />
   </>
  )
}
