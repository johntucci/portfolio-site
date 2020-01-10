import React from 'react';
import { Col, Button } from 'react-bootstrap';

export default function ContactForm() {
   return (
      <form className="form-horizontal mb-5">
         <fieldset>
            <div className="form-group">
               <label className="col control-label" htmlFor="textinput">
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
               <label className="col control-label" htmlFor="textinput">
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
               <label className="col control-label" htmlFor="textarea">
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
