"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { counterUp, counterDown, counterReset } from '../../actions/CounterActions';
import { addCategory, removeCategory } from '../../actions/CategoryActions';

class Test2 extends React.Component {
  constructor(props){
    super(props);
    this.removeCategory = this.removeCategory.bind(this);
  }
  submitCategoryForm(event) {
    event.preventDefault();
    let data = {
      category:event.target.name.value,
    }
    this._inputElement.value = "";
    this.props.sendEvent(data);
    this._inputElement.focus();
  }
  removeCategory(index) {
    let data = {
      index:Number(index.target.dataset.key),
    }
    this.props.removeEvent(data);
  }
  render () {
    const _this = this;
    return (
      <div>
        <h2>Test 2 - Using Redux</h2>
          <h5>This test is designed to test your knowledge of redux props, actions, and reducers.</h5>
        <Link to="/">Go Home</Link>
        
        <div className="body">
          <h3>Task 1</h3>
          <p>Using actions and reducers, add the following functionality to the existing counter:</p>
          <ol>
            <li>Prevent the counter from going below 0 and above 99</li>
            <li>Hook up the button to reset the counter to it's initialized state</li>
          </ol>
          <span>
            <label>Counter Controls &nbsp;</label>
            <button onClick={this.props.down.bind(this)}>-</button>
            <button onClick={this.props.reset.bind()}>RESET</button>
            <button onClick={this.props.up.bind(this)}>+</button>
          </span>
          <h4>Count: {this.props.counter}</h4>
        </div>
        <div className="body">
          <h3>Task 2</h3>
          <p>Using the existing actions/CategoryActions.js and reducers/CategoryReducer.js file, please do the following:</p>
          <ol>
            <li>Add the functionality to add and remove a single specific category</li>
            <li>Hook up your new "add" functionality to the existing form, and clear out the form on submission</li>
            <li>Hook up your new "remove" functionality to the existing list, by allowing users to click on a category name to remove it</li>
          </ol>
          <br />
          <h4>Categories: </h4>
          {this.props.categories.map((cat, i) => {
            return <p onClick={_this.removeCategory} data-key={i} key={i}> - {cat}</p>
          })}
          <div>
            <form onSubmit={this.submitCategoryForm.bind(this)}>
              <input ref={(a) => this._inputElement = a} type="text" name="name" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Test2.propTypes = {
  categories: React.PropTypes.array,
};

Test2.defaultProps = {
  categories: []
};

export default connect(
  (state) => ({
    counter: state.counter,
    categories: state.categories
  }),
  (dispatch) => ({
    up: () => dispatch(counterUp()),
    down: () => dispatch(counterDown()),
    reset: () => dispatch(counterReset()),
    sendEvent:(data) => dispatch(addCategory(data)),
    removeEvent:(index) => dispatch(removeCategory(index)),
  })
)(Test2);
