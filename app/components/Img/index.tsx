/**
 *
 * Img.react.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React, { PropTypes } from 'react';

// We require the use of src and alt, only enforced by react in dev mode
interface IImgProps {
  src: string,
  alt: string,
  className?: string,
}

class Img extends React.Component<IImgProps, {}> {
  render() {
    return (
      <img className={this.props.className} src={this.props.src} alt={this.props.alt}/>
    );
  }
}

export default Img;
