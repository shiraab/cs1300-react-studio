import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import classnames from 'classnames';

export default class ListItem extends React.Component {

  constructor(props) {
    super(props);
    this.likeColor = this.likeColor.bind(this);

    this.state = {
      liked: false,
    }
  }

  likeColor() {
    if (!this.state.liked) {
      this.setState({liked: true});
    } else {
      this.setState({liked: false})
    }
  }

  render() {
    console.log(isMobile);
    return (
      <div className={ classnames('listitem', { 'mobile': isMobile, 'border': this.state.liked })} style={{backgroundColor: this.props.data}}>
        <p>{this.props.data}</p>
        <button onClick={this.likeColor}>{this.state.liked ? 'Unlike this color': 'Like this color'}</button>
        {this.state.liked && <p className='liked'>Liked!</p>}
      </div>
    );
  }

}
