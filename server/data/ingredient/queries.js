import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
	GraphQLString,
} from 'graphql';
import mongoose from 'mongoose';

// import models and types from models.js
import { IngredientModel, IngredientType } from './models';

// create field for receiving single user
const Ingredient = {
    type: IngredientType,
    args: {
        // argument for searching user
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },

    // method that forms request and returns data
    resolve (root, params, options) {
        return IngredientModel
			.findById(params.id)
            .exec();  // return JSON
    }
};

const Ingredients = {
    type: new GraphQLList(IngredientType),
    args: {},
    resolve (root, params, options) {
        return IngredientModel
            .find()
            .exec();
    }
};

const Recipe = {
    type: new GraphQLList(IngredientType),
    args: {
		// argument for searching all ingredients
        ingredients: {
            name: 'ingredients',
            type: new GraphQLList(GraphQLString)
        }
	},
    resolve (root, params, options) {
        return IngredientModel
            .find({
				"description": {$in: parameters.ingredients}
			})
            .exec();
    }
};
export default {
    Ingredient: Ingredient,
    Ingredients: Ingredients,
	Recipe: Recipe,

}
