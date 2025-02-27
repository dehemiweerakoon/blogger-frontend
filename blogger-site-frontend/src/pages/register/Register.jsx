/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import facebook from '../../assets/facebook.png'
import google from '../../assets/social.png'
import twitter from '../../assets/twitter.png'
import {Button, Col, Container, FloatingLabel, Form, Image, Row} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
 
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [error,setError] = useState("");

    const login = async()=>{
        const data = {
            "username":username,
            "email":email,
            "password":password,
            
        }
        console.log(data);
        try{
               const response = await axios.post('http://localhost:8080/auth/register',data);
        if(response.status===401){
            console.log("Incorrect username or password.... hi")
            setError("Incorrect username or password");
            return;
        }
        sessionStorage.setItem('token',response.data.token);
        sessionStorage.setItem('username',response.data.username);
        sessionStorage.setItem('user_id',response.data.id);
        axios.defaults.headers.common['Authorization'] =`Bearer ${response.data.token}`;
        navigate('/home')
        }catch(ex){
            //
            console.error("Access Denied....")
            setError("Incorrect username or password")
        }
     
    }

  return (
    <>

<Container fluid className="vh-100 d-flex justify-content-center align-items-center page">
<Row className='bg-white rounded p-3 bg-opacity-50'>
    <Col md={12} className="">
    <Row className='text-center'>
        <h2>Login</h2>
    </Row>
    <Row>
    <Form onSubmit={login}>
        <Row>
            <Form.Group>
                <Form.Label >Username</Form.Label>
        <Form.Control  type="text" placeholder="Type your username" className='mb-3  border-0 border-bottom rounded-pill' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label >Email</Form.Label>
        <Form.Control  type="email" placeholder="Type your email" className='mb-3  border-0 border-bottom rounded-pill' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Type your password"  className='rounded-pill' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </Form.Group>
        </Row>
    </Form>
    <Button type='submit' className="rounded-pill mt-4 mb-1" style={{backgroundColor:"#4b0082",border:'#4b0082'}} onClick={login}>Login</Button>
</Row>
<Row>
    <Col className='text-end'>
       <Link to={'/'} style={{color:"black",textDecoration:'none'}}><p>forgot password</p></Link>
    </Col>
</Row>
<Row className='justify-content-center mb-5'>
  <Col xs={2} sm={1} className=" mb-3 mb-sm-0">
    <Image src={facebook} />
  </Col>
  <Col xs={2} sm={1} className="mb-3 mb-sm-0">
    <Image src={google} />
  </Col>
  <Col xs={2} sm={1} className="">
    <Image src={twitter} />
  </Col>
</Row>

<Row className='mt-5 text-center'>
        <Col>
        <Link to={'/register'}  style={{color:"black",textDecoration:"none"}}> Not a user ? Register </Link>
        </Col>
</Row>
<Row>
    <Col className='text-center text-primary'>
    {
        error && <><h6>{error}</h6></>
    }
    </Col>
</Row>
</Col>
</Row>
</Container>

    </>
  )
}

export default Register