import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const HelloTitle = ({ greeting }) => (
  <div className="Hello">
    <h1 className="Hello__title">
      {greeting} <em>fillet</em>.
    </h1>
  </div>
);

HelloTitle.propTypes = {
  greeting: PropTypes.string,
};

HelloTitle.defaultProps = {
  greeting: 'Hello',
};

export default HelloTitle;
