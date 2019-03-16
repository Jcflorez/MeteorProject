import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Retos } from '../api/retos.js';
import { Players } from '../api/players.js';

import Reto from './Reto.jsx';
import PlayerReto from './PlayerReto.jsx';
import Player from './Player.jsx';
import AccountsUIWrapper from '/imports/ui/AccountsUIWrapper';
 
// App component - represents the whole app
class AppReto extends Component {
	  	handleSubmit(event) {
	    event.preventDefault();
	 
	    // Find the text field via the React ref
	    const player1 = ReactDOM.findDOMNode(this.refs.player1).value.trim();
	    const player2 = ReactDOM.findDOMNode(this.refs.player2).value.trim();
	    //const idPlayer2_wj = this.props.players._id;
	    console.log("Props en handleSubmit2: ", this.props);
	    Retos.insert({
	      player1,
	      player2,
	      idPlayer1:Meteor.userId(),
	      createdAt: new Date(), // current time
	    });
	 
	    // Clear form
	    ReactDOM.findDOMNode(this.refs.player1).value = '';
	    ReactDOM.findDOMNode(this.refs.player2).value = '';
  	}
 
  renderRetos() {
  	var b = 1;
  	return this.props.retos.map((reto) => (
      <Reto nroreto={b++} key={reto._id} reto={reto} />
    ));
  }
  	
 handleSubmitPlayer(event) {
	 	    event.preventDefault();
	 
	    // Find the text field via the React ref
	    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
	   // const ptos = ReactDOM.findDOMNode(this.refs.ptos).value.trim();
	    const ptos = 10;
	 
	    Players.insert({
	      text,
	      ptos,
	      createdAt: new Date(), // current time
	      idPlayer:Meteor.userId(),
	      username:Meteor.user().username,
	    });
	 
	    // Clear form
	    ReactDOM.findDOMNode(this.refs.textInput).value = '';
	    ReactDOM.findDOMNode(this.refs.ptos).value = '';
  	}

  renderPlayers() {
  	var a =1;
    return this.props.players.map((player) => (
        <Player  pos={a++} key={player._id} player={player}/>
        ));
	  }
  renderPlayers1() {
  	console.log("Render PlayerReto: ");
    return this.props.players.map((player) => (
        <PlayerReto key={player._id} player={player}/>
        ));
	  }

  render() {
  	const  { currentUser } = this.props;
   	console.log("Usuarios en render Principal", this.props, "--> ",this.props.currentUser )
    return (
 	<div className = "container">  
	  <AccountsUIWrapper />
		  <div className="row">
		    <div className="col-md-6">
		      <div className="form-group">
		        <label className="text text-center">
		        	<h3>Registro de Jugadores</h3>
		        </label>
	    		{ currentUser ? (
		          	<form className="form-group" onSubmit={this.handleSubmitPlayer.bind(this)} >
				        <div className="input-group">
					        <input type="text" ref="textInput" readonly = "readonly" value={this.props.currentUser.username} placeholder="Nick Name Jugador" required className="form-control"/>
					        <span className="input-group-addon text-bold"> 
				 	   			<button className="btn btn-xs btn-primary" id="button">Enviar</button>
				 	   		</span>
				        </div>
				  	</form>
				) :null }
		      </div>
		    </div>
	    <div className="col-md-6">
	      <div className="form-group">
	        <label className="text text-center text-white"><h3>Registro de Retos</h3></label>
	    	{ currentUser ? (
	          	<form className="form-group" onSubmit={this.handleSubmit.bind(this)} >
			      <div className="input-group">
				     <input type="text" readonly = "readonly" value = {this.props.currentUser.username} ref="player1" placeholder="Nombre Jugador-1" required className="form-control"/>
				     <span className="input-group-addon form-group text-bold"> Vs </span>
				     <select className="form-control" type="text" ref="player2">
				     		{this.renderPlayers1()}
				        </select>
			 	     <span className="input-group-addon">
			 	     	<button className="btn btn-xs btn-info" id="button1">Enviar</button>
			 	     </span>
			      </div>
		  		</form>
			) :null }
	      </div>
       </div>
      </div>

	  <div className = "container">   	
		  <div className="row">
			<div className = "col-md-6 md-6">
		        <h2>Lista de Jugadores</h2>
				<table className = "table">
					<thead>
				        <tr>
				        	<th>Posicion</th>
				        	<th>Nombre Jugador</th>
				        	<th>Puntos</th>
				        </tr>
		      		</thead>
		      		<tbody>
	      				{this.renderPlayers()}			
	      			</tbody>
				</table>
			</div>

			<div className = "col-md-6 md-6">
		    	<h2>Lista de Retos</h2>
		    	<table className = "table table-dark mr-5 mt-5">
					<thead>
				        <tr>
				        	<th> Reto </th>
				        	<th>Jugador - 1</th>
				        	<th> Vs</th>
				        	<th>Jugador - 2</th>
				        	<th> Win Player-1 </th>
				        	<th> Win Player-2 </th>
				        	<th>Eliminar</th>
				        </tr>
		      		</thead>
		      		<tbody>
	      				{this.renderRetos()}			
	      			</tbody>
				</table>
				
			</div>
		  </div>
	  </div>	
    </div>
    );
  }
}
export default withTracker(() => {
  return {
    retos: Retos.find({}, { sort: { createdAt: -1 } }).fetch(),
    players: Players.find({}, { sort: { ptos: -1 } }).fetch(),
    currentUser:Meteor.user(),
  };
})(AppReto);

//			     <input type="text" ref="player2" placeholder="Nombre Jugador-2" required className="form-control"/>

/* <div className="container">
	      <header>
	          <h1>Lista de Retos</h1>
	          <form className="new-reto" onSubmit={this.handleSubmit.bind(this)} >
	            <input type="text"
	              ref="retador1"
	              placeholder="Nombre Jugador-1"
	            />
	            <input type="text"
	              ref="retador2"
	              placeholder="Nombre Jugador-2"
	            />
	            <button className = "btn btn-primary" id="button">Enviar</button>
	          </form>
	          <span>
	          	<h4>Retos Activos</h4>
	          </span>
	        </header>
        
        <ul>
          {this.renderRetos()}
        </ul>
      </div>
*/

