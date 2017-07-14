import mongoose from 'mongoose';

// schema for collection
const schema = mongoose.Schema({
	_id: String,
	description: String,
	nutrients: [nutrientSchema],
});

const nutrientSchema = mongoose.Schema({
	_id: String,
    description: String,
	amountPer100G: Number,
})


// define Ingredients collection and connect schema to it
export const IngredientModel = mongoose.model('ingredients', schema);
