export const typeDefs = `
type Ingredient {
   id: ID!
   description: String
}

type Query {
   ingredients: [Ingredient]
}
`;
