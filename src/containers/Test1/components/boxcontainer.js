"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Box from './box';

class BoxContainer extends React.Component {
  
  render () {
      return (
        <div className="testBox">
          <h4>These are some boxes critical to innovation</h4>

          {/* Put these in components in case 
          something else was going to be added */}
          <Box name="Box 1" />
          <Box name="Box 2" />
          <Box name="Box 3" />
        </div>
      );
 	}
}

export default connect(
  (state) => ({

  }),
)(BoxContainer);
