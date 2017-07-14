const ingredients = [
	{
		id: 1,
		description: 'butter',
	},
	{
		id: 2,
		description: 'milk',
	}
];

export const resolvers = {
	Query: {
		ingredients: () => {
			return ingredients;
		},
	},
};
