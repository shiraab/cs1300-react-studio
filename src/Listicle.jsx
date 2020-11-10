// import { isMobile } from 'react-device-detect';
import React, { Component } from 'react';
import ListItem from './ListItem.jsx';

export default class Listicle extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.items);
    return (
      <div className="list">
        {this.props.items.map(item => <ListItem data={item}/>)}
      </div>
    );
  }

}
