import React, { Component } from 'react';
import {
  ApolloClient,
  ApolloProvider,
} from 'react-apollo';
import logo from './logo.svg';
import './App.css';
import IngredientInput from './components/IngredientInput';
import { mockNetworkInterface } from './components/IngredientInput/ingredientsMock';

const client = new ApolloClient({
	networkInterface: mockNetworkInterface,
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client} >
				<div className="App">
					<IngredientInput />
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
