import React, { Component } from 'react';
import { Col, Card } from 'react-bootstrap';

export default class ProjectCard extends Component {
   state = { fullImageLoaded: false };
   onImageLoaded() {
      this.setState({ fullImageLoaded: true });
   }
   render() {
      const {
         name,
         link,
         gitLink,
         techStack,
         image,
         samePage = false
      } = this.props;
      const stacklist = techStack.map((tech) => (
         <span key={tech}>
            {tech} <br />
         </span>
      ));
      let imageJSX = (
         <>
            <div className="blur-image">
               <img
                  className="card-img img-fluid"
                  style={{ minHeight: '200px' }}
                  src={image[0]}
                  alt={name}
               />
            </div>
            <img
               src={image[1]}
               onLoad={this.onImageLoaded.bind(this)}
               alt={name}
               hidden
            />
         </>
      );
      if (this.state.fullImageLoaded) {
         imageJSX = (
            <>
               <img
                  className="card-img img-fluid blur"
                  src={image[1]}
                  alt={name}
               />
            </>
         );
      }
      return (
         <Col>
            <Card className="text-white mb-4 shadow" data-aos="zoom-in">
               {imageJSX}
               <Card.ImgOverlay className="card-hover d-flex align-items-center justify-content-center text-center">
                  <div>
                     <h2>{name}</h2>
                     <h2 className="outgoing-link">
                        <a
                           href={link}
                           target={samePage ? '' : '_blank'}
                           rel="noopener noreferrer"
                           className="text-white"
                        >
                           <i className="las la-external-link-alt"></i>
                        </a>
                     </h2>
                  </div>

                  <div id="bottom-left">
                     <a
                        href={gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                     >
                        <span id="desktop-text">
                           <i className="lab la-github"></i> Github
                        </span>
                        <span id="mobile-icon">
                           <i className="lab la-github"></i>
                        </span>
                     </a>
                  </div>
                  <div id="bottom-right" className="text-right">
                     {stacklist}
                  </div>
               </Card.ImgOverlay>
            </Card>
         </Col>
      );
   }
}
