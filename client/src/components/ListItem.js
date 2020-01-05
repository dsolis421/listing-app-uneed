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
        <span className="product-status">{this.props.status}</span>
        <p>{this.props.name}</p>
        <br/>
        <span className="product-anchor">
          <i className="fal fa-link"></i>
        </span>
        <a href="/">{this.props.producturl}</a>
      </div>
    );
  }
}
export default ListItem;
