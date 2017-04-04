"use strict";
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Generator extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: []
    };
  }

  addItem(e) {
    e.preventDefault();
    const itemArray = this.state.items;
    itemArray.push(this._inputElement.value);
    this.setState({
      items: itemArray
    });
    this._inputElement.value = "";
  }
  
  render () {
      return (
        <div className="generator">
          <h4>This is a generator that generates some things</h4>
          <form onSubmit={this.addItem.bind(this)}>
            <input name="newThing" ref={(a) => this._inputElement = a} placeholder="enter thing"></input>
            <button type="submit">Add</button>
            <ul>
              {this.state.items.map((text, i)=>{
                return <li key={i}>{text}</li>
              })}
            </ul>
          </form>
        </div>
      );
 	}
}

export default connect(
  (state) => ({

  }),
)(Generator);
