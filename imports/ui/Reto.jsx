import React, { Component } from 'react';

import { Retos } from '../api/retos.js';
import { Players } from '../api/players.js';
 
// Player component - represents a single todo item
class Reto extends Component {
  toggleChecked() {
      // Set the checked property to the opposite of its current value
      /*db.players.update({idPlayer:"QfoZtNH4WsneNiXE9"},
                          {$inc:
                            {ptos:10}
                          });*/
      console.log("Props en toogleChecked---->", this.props.reto);
      console.log("Props en toogleChecked--1-->", this.props);
      Players.update(this.props.reto.player2, 
                     {$inc: { 10: this.props.player.ptos },
      });
    }



  /*  toggleChecked() {
      // Set the checked property to the opposite of its current value
      Retos.update(this.props.reto._id, {
        $set: { checked: !this.props.reto.checked },
      });
    }*/

    toggleChecked2() {
      // Set the checked property to the opposite of its current value
      Retos.update(this.props.reto._id, {
        $set: { checked: !this.props.reto.checked },
      });
    }
   
    deleteThisReto() {
      Retos.remove(this.props.reto._id);
    }
  
  render() {
      // Give tasks a different className when they are checked off,
      // so that we can style them nicely in CSS
      const retoClassName = this.props.reto.checked ? 'checked' : '';
      return (
        <tr>
          <td>{this.props.nroreto}</td>
          <td>{this.props.reto.player1}</td>
          <td> Vs </td>
          <td>{this.props.reto.player2}</td>
          <td>
            <input type="checkbox" readOnly checked={!!this.props.reto.checked}
                     onClick={this.toggleChecked.bind(this)}
              />
          </td>
          <td>
              <input type="checkbox" readOnly checked={!!this.props.reto.checked}
                     onClick={this.toggleChecked2.bind(this)}
              />
          </td>
          <td>
            <button className="btn btn-danger btn-xs" onClick={this.deleteThisReto.bind(this)}>
              <i className="far fa-trash-alt"></i>
            </button>
          </td>

        </tr>  
      );
    }
}

export default Reto;