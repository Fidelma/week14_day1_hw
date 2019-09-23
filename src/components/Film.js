import React, {Component} from 'react';
import '../Film.css';

class Film extends Component {
  render(){
    return (
      <>
      <div className="film"><a href={this.props.link}>{this.props.name}</a></div>
      </>
    );
  }
}

export default Film;
