import React, { Component } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
import logo from './logo.svg';
import './App.css';
import IngredientInput from './components/IngredientInput';

const networkInterface = createNetworkInterface({
	uri: 'http://localhost:3001/graphql',
	opts: {
    	credentials: 'cross-origin'
  	}
});
const client = new ApolloClient({ networkInterface });

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client} >
				<div className="App">
					Dog
					<IngredientInput />
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
