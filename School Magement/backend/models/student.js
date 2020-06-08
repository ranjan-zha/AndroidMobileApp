const mongoose = require('mongoose');


const studentSchema = mongoose.Schema({
	_id 		: mongoose.Schema.Types.ObjectId,
	fName 		: String,
	mName 		: String,
	lName 		: String,
	dob   		: String,
	email 		: String,
    phone 		: String,
    parentphone : String,
	standard    : String,
	gender 		: String,
	pincode 	: Number,
    school  	: String,
    address    	: String,
    country  	: String,
    state   	: String,
    city        : String,
	createdAt 	: Date,
	createdBy 	: String
});

module.exports = mongoose.model('student', studentSchema);