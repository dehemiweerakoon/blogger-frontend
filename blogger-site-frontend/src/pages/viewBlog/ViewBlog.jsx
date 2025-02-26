/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Navigation from '../Navbar/Navigation'
import Footer from '../footer/Footer'
import {getRequest} from '../../services/ApiSerives'
import { useParams } from 'react-router-dom'
const ViewBlog = () => {

    const {id} = useParams();
    const [images, setImages] = useState([]);
    const [blog,setBlog] = useState("");
  

    const getBlogs = async()=>{
        const response = await getRequest(`/file/${id}`);
        setImages(response.data);
        // get the response /// 
        //

        
    }
    const getDetails=async()=>{
        try{
               const response = await getRequest(`/blog/${id}`);
        if(response.status==200){
            //
            setBlog(response.data);
        }
        }catch(except){
            console.error(except.getMessage());
        }
     
    }
    useEffect(()=>{
        getBlogs();
        getDetails();
    },[])
  return (
    <>
  <div className='m-0 p-0'>
  <div className='mb-5'> 
        <Navigation />  
        <Container > 
            <Row>
                <Col md={10} className='d-flex justify-content-center mb-5'>
                <h2>{blog.title}</h2>
                </Col>
                <Col md={10} xs={12}className='d-flex justify-content-center'> 
                <Image  key="" src={`data:image/png;base64,${images[0]}`}/>
                </Col>
                <Col md={10} className='mt-5' style={{textAlign:"justify"}}>
                {blog.content}
                </Col>
                <Col md={3} className='d-flex justify-content-center mt-5'>
                {images && images.slice(1).map((image, index) => (
                        <Image key={index} src={`data:image/png;base64,${image}`} alt={`Image ${index}`} />
                    ))}
                </Col>

                <Col  md={10}className='mt-5 d-flex justify-content-end'>
                <h6>Author : </h6><h6 style={{fontWeight:"200"}}>{blog.user_id}</h6>
                </Col>
            </Row>
        </Container>
    </div>
    </div>
    </>
  )
}

export default ViewBlog