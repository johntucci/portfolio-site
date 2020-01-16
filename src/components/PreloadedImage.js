/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

export default class PreloadedImage extends Component {
   state = { fullImageLoaded: false };
   constructor() {
      super();
      this.onImageLoaded = this.onImageLoaded.bind(this);
   }
   onImageLoaded() {
      this.setState({ fullImageLoaded: true });
   }
   render() {
      const noImages = { images: undefined };
      if (this.state.fullImageLoaded) {
         return (
            <img
               src={this.props.images[1]}
               {...{ ...this.props, ...noImages }}
            />
         );
      } else {
         return (
            <>
               <img
                  src={this.props.images[1]}
                  onLoad={this.onImageLoaded}
                  hidden
               />
               <div className="blur-image">
                  <img
                     src={this.props.images[0]}
                     {...{ ...this.props, ...noImages }}
                  />
                  ;
               </div>
            </>
         );
      }
   }
}
