import React, { Component } from 'react';

import LaptopImage from './img/laptop.jpg';
import ShoppingImage from './img/shopping.jpg';
import GraphsImage from './img/graphs.jpg';
import ContactMeImage from './img/phone-on-table.jpg';

import LaptopImageSM from './img/small/laptop.jpg';
import ShoppingImageSM from './img/small/shopping.jpg';
import GraphsImageSM from './img/small/graphs.jpg';

import Config from './Config';
import ContactForm from './components/ContactForm';
import ProjectCard from './components/ProjectCard';

import { Container, Row } from 'react-bootstrap';

import {
   Spacer,
   Title,
   ParallaxImage,
   Underline,
   Logo,
   Dot
} from './components/Helpers';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';

export default class App extends Component {
   componentDidMount() {
      AOS.init({
         delay: 100,
         once: false,
         duration: 600
         // disable: 'mobile'
      });
      document.title = `${Config.firstName} ${Config.lastName} - Portfolio`;
   }
   componentDidUpdate() {
      AOS.refresh();
   }
   render() {
      return (
         <div>
            <NavBar />
            <HeroSection />
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
                        <Dot
                           color={Config.accentColor}
                           order={1}
                           delay={200}
                           anim="fade-down"
                        />
                        <Dot color="#fff" order={2} delay={0} duration={800} />
                        <Dot
                           color={Config.secondaryColor}
                           order={3}
                           delay={400}
                           anim="fade-up"
                        />
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
                        image={[LaptopImageSM, LaptopImage]}
                        samePage={true}
                     />
                     <ProjectCard
                        name="E-Commerce"
                        link="https://example.com"
                        gitLink="https://github.com"
                        techStack={['react', 'express', 'mongodb']}
                        image={[ShoppingImageSM, ShoppingImage]}
                     />

                     <ProjectCard
                        name="Admin Panel"
                        link="https://example.com"
                        gitLink="https://github.com"
                        techStack={['express', 'passport', 'mysql']}
                        image={[GraphsImageSM, GraphsImage]}
                     />
                  </Row>
               </div>
               <Spacer height="8vh" />
            </div>
            <ParallaxImage src={ContactMeImage} />
            <div id="contact-me"></div>
            <Title l1="Interested? You can" l2="Contact me" />

            <div className="container-lg">
               <ContactForm />
            </div>
            <Spacer height="8vh" />

            <Container
               fluid
               className="text-center mb-4"
               data-aos="zoom-in"
               data-aos-delay="400"
            >
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
                  Copyright © 2020 {Config.firstName} {Config.lastName}
               </Container>
            </footer>
         </div>
      );
   }
}
