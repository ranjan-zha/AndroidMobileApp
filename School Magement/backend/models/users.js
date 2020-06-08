const mongoose = require('mongoose');


const carmodelSchema = mongoose.Schema({
	_id 			: mongoose.Schema.Types.ObjectId,
	services : {
		password :{
			bcrypt : String,
		}
	},
	loginTokens     :[],
	profile	    	: {
		firstName   : String,
		lastName    : String,
		email       : String,
		phone       : String,
	},
	createdAt 		: Date,
	createdBy 		: String
});

module.exports = mongoose.model('users',carmodelSchema);


