/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navigation from '../Navbar/Navigation'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import home from '../../assets/home3.png'
import anime from '../../assets/Animation - 1740313135831.gif'
import Footer from '../footer/Footer'

const Home = () => {
  const text = "Welcome to My Blog!";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 100); // Typing speed (milliseconds)
      return () => clearTimeout(timeout);
    }
  }, [index]);
  return (
    <>


  <div className='home-page mb-5'> 
        <Navigation />  
    <Container  className=''> 
      <Col md={10} xs={12}>
        <div className='d-flex justify-content-center align-items-center m-5'>
          <h1 className="typing ">{displayText}<span className="cursor">|</span></h1>
        </div>
      </Col>
      {/* Wrap columns in a Row */}
      <Row>
        <Col md={5} xs={10} className='m-3 para p-3' style={{textAlign:"justify"}}>
        <h3 >&quot;Blogging is not just about writing, it&apos;s about sharing your voice with the world.&quot; 🚀 </h3>
          <p>
            A blogger site is a dynamic, user-friendly platform designed for individuals to share their
            ideas, stories, 
            and expertise. It features a clean, modern interface that combines easy navigation with engaging design
            elements such as cover photos, animated effects, and interactive layouts. This digital space not only 
            allows bloggers to publish their thoughts seamlessly through a content management system but also 
            encourages community building through integrated social sharing and multimedia support. Whether its
            through personal narratives, insightful articles, or creative projects, a blogger site serves as a
            virtual canvas for self-expression and connection with a wider audience.
          </p>
        </Col>
        <Col md={5} xs={12} className='mobile-only'>
        <Image src={home} thumbnail/> 
        </Col>
      </Row>
    </Container>
    
  </div>
    </>
  )
}

export default Home