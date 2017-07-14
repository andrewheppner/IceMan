import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `

	type Ingredient {
		id: ID!
		description: String
	}

	type Query {
		ingredients: [Ingredient]
	}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
