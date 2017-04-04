"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Box extends React.Component {
  
  render () {
      return (
        <div className="testBox">
          {this.props.name}
        </div>
      );
 	}
}

Box.propTypes = {
  name: React.PropTypes.string
};

Box.defaultProps = {
  name:"Box 1"
};

export default connect(
  (state) => ({

  }),
)(Box);
