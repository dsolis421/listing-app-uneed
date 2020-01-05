import axios from 'axios';
import React from 'react';
import ListItem from './ListItem';
import '../style/NeedList.css';

class NeedList extends React.Component {
  constructor() {
    super();

    this.state = {
      needList: []
    };
  }

  loadList() {
    console.log('retrieving games');
    axios.get('/api/needlist')
    .then(list => {
      console.log('got list',list.data);
      this.setState({
        needList: list.data
      });
    })
    .catch(err => console.log("failed to load list",err));
  }

  componentDidMount() {
    this.loadList();
  }

  render(){
    return (
      <div className="need-list">
        {this.state.needList.length > 0 ? this.state.needList.map(item => {
          return (
            <ListItem key={item._id}
              id={item._id}
              status={item.status}
              name={item.name}
              producturl={item.producturl}/>
            )
          }) : (<p>No items to list</p>)
        }
      </div>
    );
  }
}

export default NeedList;
