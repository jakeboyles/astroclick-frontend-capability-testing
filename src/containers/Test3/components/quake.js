"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import moment from 'moment';

class Quake extends React.Component {

  render () {
      return (
          <tr>
            <td>{this.props.data.properties.place}</td>
            <td>{this.props.data.properties.mag}</td>
            <td>{moment(this.props.data.properties.time).fromNow()}</td>
          </tr>
      );
 	}
}

Quake.propTypes = {
  data: React.PropTypes.object
};

Quake.defaultProps = {
  data:{}
};

export default connect(
  (state) => ({}),
)(Quake);
