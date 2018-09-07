const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema
const PostSchema = new Schema ({
	name: {
	type: String,
	required: true
},
	post: {
		type: String,
		required: true
},
	date: {
		type: Date,
		default: Date.now
},
	title:{
		type: String,
		required: true
}
});

module.exports = Post = mongoose.model('Post', PostSchema)