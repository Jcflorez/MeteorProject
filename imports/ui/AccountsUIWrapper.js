//Dependencies
import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class AccountsUIWrapper extends Component {
	componentDidMount(){
		this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
	}

	componentWillUmount(){
		Blaze.remove(this.view);
	}
	render(){
		return <span ref="container" />;
	}

}
export default AccountsUIWrapper;