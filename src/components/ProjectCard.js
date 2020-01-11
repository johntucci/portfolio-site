import React from 'react';
import { Col, Card } from 'react-bootstrap';

export default function ProjectCard({
   name,
   link,
   gitLink,
   techStack,
   image,
   samePage = false
}) {
   const stacklist = techStack.map((tech) => (
      <span>
         {tech} <br />
      </span>
   ));
   return (
      <Col>
         <Card className="text-white mb-4 shadow" data-aos="zoom-in">
            <Card.Img className="img-fluid" src={image} />
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
                     <i className="lab la-github"></i> Github
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
