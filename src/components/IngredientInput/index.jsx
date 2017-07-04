import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';

const IngredientInput = ({ data: {loading, error, ingredients }}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }
   return <ul>
     { ingredients.map( i => <li key={i.id}>{i.description}</li> ) }
   </ul>;
 };

const IngredientsListQuery = gql`
	query IngredientsListQuery {
		ingredients {
			id
			description
		}
	}
`;

export default graphql(IngredientsListQuery)(IngredientInput);
