import React from 'react';
import ListItem from './ListItem';
import '../style/NeedList.css';

function NeedList() {
  return (
    <div className="need-list">
      <ListItem/>
      <ListItem/>
      <ListItem/>
    </div>
  );
}

export default NeedList;
