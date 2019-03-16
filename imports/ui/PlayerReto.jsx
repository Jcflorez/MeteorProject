import React, { Component } from 'react';

import { Players } from '../api/players.js';

 
// Player component - represents a single todo item
class PlayerReto extends Component {
  
  render() {
      // Give tasks a different className when they are checked off,
      // so that we can style them nicely in CSS
      return (
        <option value={this.props.player.text}>{this.props.player.text}</option>
      );
    }
}

export default PlayerReto;

/*
<li className={playerClassName}>
          <button className="delete" onClick={this.deleteThisPlayer.bind(this)}>
            &times;
          </button>
   
          <input
            type="checkbox"
            readOnly
            checked={!!this.props.player.checked}
            onClick={this.toggleChecked.bind(this)}
          />
          <span className="text">{this.props.pos} {this.props.player.text} - {this.props.player.ptos}</span>
        </li>
          */