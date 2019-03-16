import React, { Component } from 'react';

import { Players } from '../api/players.js';
 
// Player component - represents a single todo item
class Player extends Component {
  

    toggleChecked() {
      // Set the checked property to the opposite of its current value
      Players.update(this.props.player._id, {
        $set: { checked: !this.props.player.checked },
      });
    }
   
    deleteThisPlayer() {
      Players.remove(this.props.player._id);
    }
  
  

  render() {
      // Give tasks a different className when they are checked off,
      // so that we can style them nicely in CSS
      console.log("Estamos en render de players")
      const playerClassName = this.props.player.checked ? 'checked' : '';
      
      return (
        <tr>
          <th scope="row">{this.props.pos}</th>
          <td>{this.props.player.text}</td>
          <td>{this.props.player.ptos}</td>
        </tr>  

        
      );
    }
}

export default Player;

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