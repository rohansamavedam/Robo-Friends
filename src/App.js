import React, {Component} from 'react';
import RoboList from './Robolist.js';
import SearchBox from './SearchBox.js';
import './App.css';
import Scroll from './Scroll.js';

class App extends Component {
	constructor(){
		super()
		this.state ={
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>{this.setState({robots: users})});
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render(){

		const filteredRobots = this.state.robots.filter((robots)=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return (
		<div className='tc'>
			<h1 className="tc">ROBOT FRIENDS</h1>
			<SearchBox searchChange={this.onSearchChange} />
			<Scroll>
				<RoboList robots={filteredRobots}/>
			</Scroll>
		</div>	
		);
	}
}

export default App;