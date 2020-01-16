import ProfileImage from '../img/profile.jpg';
import ProfileImageSM from '../img/small/profile.jpg';
import React from 'react';
import PreloadedImage from './PreloadedImage';

export default function AboutMe() {
   return (
      <div className="container-fluid justify-content-center">
         <div className="row">
            <div className="col-sm-auto col-xs-12 text-center">
               <PreloadedImage
                  images={[ProfileImageSM, ProfileImage]}
                  alt="My face"
                  className="shadow"
                  style={{
                     borderRadius: '.25rem',
                     width: '100%',
                     minWidth: '200px',
                     maxWidth: '230px'
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
