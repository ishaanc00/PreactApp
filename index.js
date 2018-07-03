import './style';
import { Component } from 'preact';

export default class App extends Component {
	render() {
		var x =10*10;
		var today = new Date(Date.now()).toDateString();
		return (
			<div>
	
				<h1>
					{today}
					</h1>
				<h1>Hey Hey Hey!</h1>
			</div>
		);
	}
}
