import React from 'react';
import PropTypes from 'prop-types';

export default class ApplicationLayout extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

}

ApplicationLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
