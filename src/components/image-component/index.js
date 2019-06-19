import React from 'react';
// import PropTypes from 'prop-types';

import './style.scss';

import componentImage from './images/component.jpg';

const ImageComponent = () => (
  <div className="ImageComponent ImageComponent--centralized">
    <img role="presentation" src={componentImage} />
  </div>
);

ImageComponent.propTypes = {};
ImageComponent.defaultProps = {};

export default ImageComponent;
