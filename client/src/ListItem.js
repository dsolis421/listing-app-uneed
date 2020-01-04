import React, { Component } from 'react';
import GotItButton from './GotItButton';
import SampleDeleteButton from './SampleDeleteButton';
import '../style/ListItem.css';

class ListItem extends Component {
  render() {
    return (
      <div className="list-item">
        <p>Here's something I need</p>
        <GotItButton/>
        <SampleDeleteButton/>
      </div>
    );
  }
}
export default ListItem;
