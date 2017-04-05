"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Quake from './quake';
import axios from 'axios';


class Earthquakes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quakes: []
    };
  }

  componentDidMount() {
    axios.get(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson`)
    .then(res => {
      const quakes = res.data.features;
      this.setState({ quakes });
    })
    .catch(function (error) {
      console.log(error);
      alert(error);
    });
  }

  render () {
      return (
        <div className="quakes">
        <table className="table">
          <thead>
            <tr>
              <th>Place</th>
              <th>Magnitude</th>
              <th>Time</th>
              </tr>
          </thead>
          <tbody>
           {this.state.quakes.map(quake =>
              <Quake key={quake.id} data={quake} />
            )}
           </tbody>
         </table>
        </div>
      );
 	}
}

export default connect(
  (state) => ({}),
)(Earthquakes);
