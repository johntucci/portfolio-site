import React, { Component } from 'react';

import LaptopImage from './img/laptop.jpg';
import ShoppingImage from './img/shopping.jpg';
import GraphsImage from './img/graphs.jpg';
import ContactMeImage from './img/phone-on-table.jpg';
import ProfileImage from './img/profile.jpg';

import ContactForm from './components/ContactForm';
import ProjectCard from './components/ProjectCard';

import { Container, Navbar, Nav, Jumbotron, Row } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';

const config = {
   firstName: 'Nick',
   lastName: 'Santucci',
   accentColor: '#4bb7ff',
   animationsFireOnce: true
};

function NavBar() {
   return (
      <Navbar
         expand="lg"
         style={{ position: 'absolute', background: '#ffffff', width: '100%' }}
      >
         <Navbar.Brand
            href="#landing"
            style={{
               // fontFamily: 'Courier New, Monospace',
               fontSize: '1.5rem'
            }}
         >
            <Logo />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link href="#landing">Home</Nav.Link>
               <Nav.Link href="#about-me">About Me</Nav.Link>
               <Nav.Link href="#my-projects">Projects</Nav.Link>
               <Nav.Link href="#contact-me">Contact</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}

function MainHero() {
   return (
      <Jumbotron
         fluid
         className="d-flex align-items-center main-hero"
         style={{ backgroundColor: config.accentColor }}
         id="landing"
      >
         <Container className="text-center">
            <span>
               <span className="font-weight-bold" data-aos="fade-up">
                  Hello.
               </span>
               <br />
               <span
                  data-aos="fade-up"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="600"
               >
                  You can call me {config.firstName}
               </span>
            </span>
         </Container>
      </Jumbotron>
   );
}

function Title(props) {
   return (
      <div className="my-5" data-aos="fade-up">
         <Container fluid className="text-center">
            <h2 className="text-capitalize" style={{ fontSize: '1.5rem' }}>
               {props.l1}
            </h2>
            <h2 className="text-uppercase font-weight-bold">{props.l2}</h2>
            <Underline />
         </Container>
      </div>
   );
}
function Underline() {
   return (
      <div
         style={{
            width: '6rem',
            height: '0.2rem',
            background: config.accentColor,
            margin: '0.5rem auto'
         }}
      />
   );
}
function ParallaxImage(props) {
   return (
      <div
         style={{
            backgroundImage: `url(${props.src})`,
            height: '38vh',
            width: '100%',

            backgroundAttachment: 'fixed',
            // backgroundPosition: 'center',
            backgroundRepeat: props.repeat ? 'repeat' : 'no-repeat',
            backgroundSize: 'cover'
         }}
      />
   );
}

function Logo() {
   return (
      <span className="logo">
         &lt;{' '}
         <span style={{ color: config.accentColor }}>
            {config.firstName} {config.lastName}
         </span>{' '}
         /&gt;
      </span>
   );
}

function Spacer({ height = '6rem' }) {
   return (
      <div
         style={{
            width: '100%',
            height: height
         }}
      />
   );
}

function AboutMe() {
   return (
      <div className="container-fluid justify-content-center">
         <div className="row">
            <div className="col-sm-auto col-xs-12 text-center">
               <img
                  src={ProfileImage}
                  alt="My face"
                  className="shadow"
                  style={{
                     borderRadius: '.25rem',
                     width: '100%',
                     maxWidth: '200px'
                  }}
                  data-aos="fade-right"
               />
            </div>
            <div className="col-sm col-xs-12 my-4" data-aos="fade-up">
               <span className="text-center">
                  <h5>Nice To Meet You</h5>
                  <p>
                     Cras sit amet nibh libero, in gravida nulla. Nulla vel
                     metus scelerisque ante sollicitudin commodo. Cras purus
                     odio, vestibulum in vulputate at, tempus viverra turpis.
                     Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                     lacinia congue felis.
                  </p>
               </span>
            </div>
         </div>
      </div>
   );
}

function Dot(props) {
   const even = {
      // border: '.3rem solid ' + config.accentColor
      background: '#fff'
   };
   const odd = {
      background: config.accentColor
   };
   return (
      <div
         style={{
            width: '4rem',
            height: '4rem',
            borderRadius: '100%',
            ...(props.order % 2 === 0 ? even : odd)
         }}
         className="m-4 shadow"
         data-aos={props.anim ? props.anim : 'zoom-in'}
         data-aos-delay={200 * props.order}
      />
   );
}

export default class App extends Component {
   componentDidMount() {
      AOS.init({
         delay: 100,
         once: config.animationsFireOnce,
         duration: 600
         // disable: 'mobile'
      });
   }
   componentWillUpdate() {
      AOS.refresh();
   }
   render() {
      return (
         <div>
            <NavBar />
            <MainHero />
            <div className="mb-4 container-xl">
               <Spacer height="10vh" />
               <div style={{ minHeight: '95vh' }}>
                  <div id="about-me"></div>
                  <Title l1="Here's a little bit" l2="About me" />
                  <Spacer height="20vh" />

                  <AboutMe />

                  <Spacer height="25vh" />
                  <div className="d-flex justify-content-around">
                     <div className="flex-grow-1 d-flex justify-content-center">
                        <Dot order={1} anim="fade-right" />
                        <Dot order={2} />
                        <Dot order={3} anim="fade-left" />
                     </div>
                  </div>
               </div>

               <div style={{ minHeight: '105vh' }}>
                  <Spacer height="15vh" />

                  <div id="my-projects"></div>

                  <Title l1="These Are" l2="My Projects" />
                  <Spacer height="8vh" />

                  <Row className="py-5 row-cols-1 row-cols-sm-2 row-cols-lg-3">
                     <ProjectCard
                        name="My Portfolio"
                        link="#landing"
                        gitLink="https://github.com"
                        techStack={['react', 'bootstrap']}
                        image={LaptopImage}
                        samePage={true}
                     />
                     <ProjectCard
                        name="E-Commerce"
                        link="https://example.com"
                        gitLink="https://github.com"
                        techStack={['react', 'express', 'mongodb']}
                        image={ShoppingImage}
                     />

                     <ProjectCard
                        name="Admin Panel"
                        link="https://example.com"
                        gitLink="https://github.com"
                        techStack={['express', 'passport', 'mysql']}
                        image={GraphsImage}
                     />
                  </Row>
               </div>
            </div>
            <ParallaxImage src={ContactMeImage} />
            <div id="contact-me"></div>
            <Title l1="Interested? You can" l2="Contact me" />

            <div
               className="container-lg"
               data-aos="fade-down"
               data-aos-delay="500"
            >
               <ContactForm />
            </div>
            <Spacer height="15vh" />

            <Container fluid className="text-center mb-4" data-aos="zoom-in">
               <h1
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ cursor: 'pointer' }}
               >
                  <Logo />
                  <Underline />
               </h1>
            </Container>
            <Spacer height="10vh" />

            <footer
               className="text-center bg-light"
               style={{ padding: '20px' }}
            >
               <Container>
                  Copyright © 2020 {config.firstName} {config.lastName}
               </Container>
            </footer>
         </div>
      );
   }
}
