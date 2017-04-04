"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class List extends React.Component {
  
  render () {
      return (
        <div>
            <h4>This is a list of some things</h4>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
            </ul>
        </div>
      );
 	}
}


List.propTypes = {};

List.defaultProps = {};

export default connect(
  (state) => ({

  }),
)(List);
