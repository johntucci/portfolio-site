import React from 'react';
import './App.css';

import {
   Container,
   Navbar,
   Nav,
   Jumbotron,
   Media,
   Card,
   Row,
   Col,
   Button
} from 'react-bootstrap';

function ListCard() {
   return (
      <Col>
         <Card className="text-white mb-4 shadow">
            <Card.Img
               className="img-fluid"
               src="https://leeklopfers.de/static/Ecommerce-e20614dfbb0018658da9df1a1e1513d8.jpeg"
            />
            <Card.ImgOverlay>
               <Card.Title>Project Name</Card.Title>
               <Card.Text>Visit here</Card.Text>
            </Card.ImgOverlay>
         </Card>
      </Col>
   );
}

function Title(props) {
   return (
      <div className="my-5">
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
            background: '#4bb7ff',
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

function ContactForm() {
   return (
      <form className="form-horizontal mb-5">
         <fieldset>
            <div className="form-group">
               <label className="col control-label" for="textinput">
                  Name
               </label>
               <div className="col">
                  <input
                     id="textinput"
                     name="textinput"
                     type="text"
                     placeholder="Your full name"
                     className="form-control input-md"
                  />
               </div>
            </div>

            <div className="form-group">
               <label className="col control-label" for="textinput">
                  Email
               </label>
               <div className="col">
                  <input
                     id="textinput"
                     name="textinput"
                     type="text"
                     placeholder="Your email address"
                     className="form-control input-md"
                  />
               </div>
            </div>

            <div className="form-group">
               <label className="col control-label" for="textarea">
                  Message
               </label>
               <div className="col">
                  <textarea
                     className="form-control"
                     id="textarea"
                     name="textarea"
                     style={{ minHeight: '12rem' }}
                  ></textarea>
               </div>
            </div>

            <div className="form-group">
               <Col>
                  <Button size="lg" type="submit" style={{ width: '100%' }}>
                     Submit
                  </Button>
               </Col>
            </div>
         </fieldset>
      </form>
   );
}

function Logo() {
   return (
      <span>
         &lt; <span style={{ color: '#4bb7ff' }}>John Santucci</span> /&gt;
      </span>
   );
}

function App() {
   return (
      <div>
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
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">About Me</Nav.Link>
                  <Nav.Link href="#link">Projects</Nav.Link>
                  <Nav.Link href="#link">Contact</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
         <Jumbotron fluid className="d-flex align-items-center main-hero">
            <Container className="text-center">
               <span>
                  <span className="font-weight-bold">Hello.</span>
                  <br />
                  <span>You can call me John</span>
               </span>
            </Container>
         </Jumbotron>
         <Title l1="Here's a little bit" l2="About me" />
         <div className="mb-4 container-xl">
            <Media>
               <img
                  width={200}
                  height={200}
                  src="https://media.licdn.com/dms/image/C5603AQGLK25fZ01ccQ/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=kPB2SSp7W2YjqRw2c7jAt3qIAHBrGSbsbwj_JpZr3c4"
                  alt="My face"
                  className="mr-3 shadow"
                  style={{ borderRadius: '.25rem' }}
               />
               <Media.Body className="text-center">
                  <h5>Nice To Meet You</h5>
                  <p>
                     Cras sit amet nibh libero, in gravida nulla. Nulla vel
                     metus scelerisque ante sollicitudin commodo. Cras purus
                     odio, vestibulum in vulputate at, tempus viverra turpis.
                     Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                     lacinia congue felis <a href="/">[More ...]</a>
                  </p>
               </Media.Body>
            </Media>
            <Title l1="And These Are" l2="My Projects" />

            <Row className="py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
               <ListCard />
               <ListCard />
               <ListCard />
               <ListCard />
            </Row>
         </div>
         <ParallaxImage src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress" />
         <Title l1="You can directly" l2="Contact me" />

         <Container fluid>
            <ContactForm />
         </Container>

         <Container fluid className="text-center mb-4">
            <h1>
               <Logo />
               <Underline />
            </h1>
         </Container>

         <footer className="text-center bg-light" style={{ padding: '20px' }}>
            <Container>Copyright © 2020 John Santucci</Container>
         </footer>
      </div>
   );
}

export default App;
