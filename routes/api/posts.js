const express = require('express')
const router = express.Router()

// Post Model
const Post = require('../../models/post')

//@route Get api/posts
//@desc Get all posts
//@access Public, to be set private later
router.get('/', (req, res) => {
	Post.find()
	.sort({date: -1})
	.then(posts => res.json(posts))
});

//@route Post api/posts
//@desc Create a post
//@access Public, to be set private later
router.post('/', (req, res) => {
const newPost = new Post({
	name: req.body.name,
	title: req.body.title,
	post: req.body.post,
	date: req.body.date
});
  newPost
  .save()
  .then(post => res.json(post));
});

//@route Delete api/posts
//@desc Delete a post
//@access Public, to be set private later
router.delete('/:id', (req, res) => {
 Post.findById(req.params.id)
 .then(post => post.remove().then(() => res.json("Post has been deleted")))
.catch(err => res.status(404).json("Post not deleted"));
});

module.exports = router;