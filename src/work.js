/*


import React, { Component } from 'react';
import "./Lamp.css";

class Working extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }

  handleClick = () => {
    this.setState({ on: !this.state.on });
    
  };

  

  render() {
    const work = this.state.on ? 'yes' : ' no';
    return (
      <div className="Workin">
        <button 
        onClick={this.handleClick}
        className={work}>{work.toUpperCase()}</button>
        <figure className={work} />
      </div>
    );
  }
}

export default Working;