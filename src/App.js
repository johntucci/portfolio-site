import React, { Component } from 'react';

import ContactForm from './components/ContactForm';
import ProjectCard from './components/ProjectCard';

import { Container, Navbar, Nav, Jumbotron, Media, Row } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';

const config = {
   firstName: 'Nick',
   lastName: 'Santucci',
   accentColor: '#4bb7ff',
   animationsFireOnce: false
};

function NavBar() {
   return (
      <Navbar expand="lg">
         <Navbar.Brand
            href="#home"
            style={{
               fontFamily: 'Courier New, Monospace',
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
         <Container className="text-center" data-aos="fade-up">
            <span>
               <span className="font-weight-bold">Hello.</span>
               <br />
               <span>You can call me {config.firstName}</span>
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
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
         }}
      />
   );
}

function Logo() {
   return (
      <span>
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
      <Media className="my-5">
         <img
            width={200}
            height={200}
            src="https://media.licdn.com/dms/image/C5603AQGLK25fZ01ccQ/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=kPB2SSp7W2YjqRw2c7jAt3qIAHBrGSbsbwj_JpZr3c4"
            alt="My face"
            className="mr-3 shadow"
            style={{ borderRadius: '.25rem' }}
            data-aos="fade-right"
         />
         <Media.Body className="text-center" data-aos="fade-up">
            <h5>Nice To Meet You</h5>
            <p>
               Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
               scelerisque ante sollicitudin commodo. Cras purus odio,
               vestibulum in vulputate at, tempus viverra turpis. Fusce
               condimentum nunc ac nisi vulputate fringilla. Donec lacinia
               congue felis <a href="/">[More ...]</a>
            </p>
         </Media.Body>
      </Media>
   );
}

export default class App extends Component {
   componentDidMount() {
      AOS.init({
         delay: 100,
         once: config.animationsFireOnce,
         duration: 600,
         disable: 'mobile'
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
               <div id="about-me"></div>
               <Title l1="Here's a little bit" l2="About me" />
               <Spacer height="10vh" />

               <AboutMe />

               <Spacer height="15vh" />

               <div id="my-projects"></div>

               <Title l1="And These Are" l2="My Projects" />
               <Spacer height="8vh" />

               <Row
                  className="py-5 row-cols-1 row-cols-sm-2 row-cols-md-3"
                  data-aos="fade-up"
               >
                  <ProjectCard
                     name="Example Project"
                     link="https://example.com"
                     gitLink="https://github.com"
                     techStack={['react', 'bootstrap']}
                     image="https://leeklopfers.de/static/Ecommerce-e20614dfbb0018658da9df1a1e1513d8.jpeg"
                  />
                  <ProjectCard
                     name="Example Project"
                     link="https://example.com"
                     gitLink="https://github.com"
                     techStack={['react', 'bootstrap']}
                     image="https://leeklopfers.de/static/Ecommerce-e20614dfbb0018658da9df1a1e1513d8.jpeg"
                  />
                  <ProjectCard
                     name="Example Project"
                     link="https://example.com"
                     gitLink="https://github.com"
                     techStack={['react', 'bootstrap']}
                     image="https://leeklopfers.de/static/Ecommerce-e20614dfbb0018658da9df1a1e1513d8.jpeg"
                  />
                  <ProjectCard
                     name="Example Project"
                     link="https://example.com"
                     gitLink="https://github.com"
                     techStack={['react', 'bootstrap']}
                     image="https://leeklopfers.de/static/Ecommerce-e20614dfbb0018658da9df1a1e1513d8.jpeg"
                  />
                  <ProjectCard
                     name="Example Project"
                     link="https://example.com"
                     gitLink="https://github.com"
                     techStack={['react', 'bootstrap']}
                     image="https://leeklopfers.de/static/Ecommerce-e20614dfbb0018658da9df1a1e1513d8.jpeg"
                  />
               </Row>
            </div>
            <div id="contact-me"></div>
            <ParallaxImage src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress" />
            <Title l1="Interested? You can" l2="Contact me" />

            <div className="container-lg" data-aos="fade-up">
               <ContactForm />
            </div>

            <Container fluid className="text-center mb-4" data-aos="fade-up">
               <h1>
                  <Logo />
                  <Underline />
               </h1>
            </Container>

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
