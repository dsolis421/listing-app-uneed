import React, { Component } from 'react';
import GotItButton from './GotItButton';
import SampleDeleteButton from './SampleDeleteButton';
import '../style/ListItem.css';

class ListItem extends Component {
  render() {
    return (
      <div className="list-item">
        <div>
          <SampleDeleteButton/>
        </div>
        <div>
          <GotItButton/>
        </div>
        <span className="product-status">Status</span>
        <p>Here's something I need</p>
        <br/>
        <span className="product-anchor">
          <i className="fal fa-link"></i>
        </span>
        <a href="/">Product Anchor</a>
      </div>
    );
  }
}
export default ListItem;
