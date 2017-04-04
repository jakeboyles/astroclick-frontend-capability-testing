"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import List from './components/list';
import Generator from './components/Generator';
import BoxContainer from './components/boxcontainer';

class Test1 extends React.Component {
  render () {
      return (
        <div className="clearfix">
          <h1>Test 1 - React Components</h1>
          <h5>This test is designed to guage your understanding of React Containers and Components, how they are imported and exported, and when they are necessary.</h5>
          <h5>The goal is simple, break down the the rendered JSX code within the "Test 1" container into smaller components. Please use the smallest component structure that feels reasonable to you, and be able to defend that decision.</h5>
          <Link to="/">Go Home</Link>
          <div className="body">
            <List />
            <Generator />
            <BoxContainer />
          </div>
        </div>
      );
 	}
}

export default connect(
  (state) => ({

  }),
)(Test1);
