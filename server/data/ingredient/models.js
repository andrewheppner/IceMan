import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
	GraphQLList,
    GraphQLID,
} from 'graphql';
import mongoose from 'mongoose';

const nutrientSchema = mongoose.Schema({
	_id: String,
    description: String,
	amountPer100G: Number,
})

// schema for collection
const schema = mongoose.Schema({
    _id: String,
    description: String,
    nutrients: [nutrientSchema],
});

// define Ingredients collection and connect schema to it
export let IngredientModel = mongoose.model('ingredients', schema);

const nutrient = new GraphQLObjectType({
  name: 'nutrient',
  fields: {
    _id: { type: GraphQLID },
    description: { type: GraphQLString },
	amountPer100G: { type: GraphQLString },
  }
})

// type for queries
export let IngredientType = new GraphQLObjectType({
    name: 'Ingredient',
    fields: {
        _id: {
            type: GraphQLID
        },
        description: {
            type: GraphQLString
        },
		nutrients: {
			type: new GraphQLList(nutrient)
		}
    }
});
