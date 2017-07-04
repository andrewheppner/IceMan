import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';
// import queries and mutations from user folder
import IngredientQueries from './ingredient/queries'

// creating GraphQL schema with parameters
// each parameter can only take one GraphQLObjectType
export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',      // arbitrary name for library API
        fields: IngredientQueries // connect fields from queries.js
    }),
});
