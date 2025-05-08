const posts = require("../data/posts.js");


function index (req,res) {
	const tagKey = req.query.tag;
	kakakak.get();
	if(tagKey){
		const filteredPosts = posts.filter((post) => post.tags.includes(tagKey));
		res.json(filteredPosts);
		console.log(tagKey);
	} else {
		res.json(posts);
	}
	
}

function show (req,res) {
	const id = parseInt(req.params.id);
	const searchedPost = posts.find( (post)=>{
	return post.id === id;
	});
	if(id >= 0 && id < posts.length){
		res.json(searchedPost);
		res.sendStatus(200);
	}else {
		res.status(404).json({
			"status": 404,
			"message": "Contenuto non Trovato"
		})
	}
	
}

function store (req,res) {
	const id = posts.at(-1).id + 1;
	const newPost = {
		id,
		title: req.body.title,
		content: req.body.ingredients,
		image: req.body.image,
		tags: req.body.tags
	}
	posts.push(newPost);
	res.status(201).json(newPost);

}

function update (req,res) {
	const id = parseInt(req.params.id);
	const currentPost = posts.find( (post)=>{
	return post.id === id;
	});
	if(!currentPost){
		res.status(404).json({
			Status: "404",
			Error: "Post not Found"
		})
	}
	currentPost.title = req.body.title;
	currentPost.content = req.body.content;
	currentPost.image = req.body.image;
	currentPost.tags = req.body.tags;
	res.status(200).json(currentPost);
}

function modify (req,res) {
	const id = parseInt(req.params.id);
	const currentPost = posts.find( (post)=>{
	return post.id === id;
	});
	if(!currentPost){
		res.status(404).json({
			Status: "404",
			Error: "Post not Found"
		})
	}
	if(req.body.title){
		currentPost.title = req.body.title;
	}
	if(req.body.content){
		currentPost.content = req.body.content;
	}
	if(req.body.image){
		currentPost.image = req.body.image;
	}
	if(req.body.tags){
		currentPost.tags = req.body.tags;
	}
	res.status(200).json(currentPost);
}


function destroy (req,res) {
	const id = parseInt(req.params.id);
	const idSearchedPost = posts.findIndex((post) => post.id === id);
	if(idSearchedPost >= 0){
		posts.splice(idSearchedPost, 1);
		res.sendStatus(200);
	}else {
		res.status(404).json({
			"status": 404,
			"message": "Contenuto non Trovato"
		})
	}
	console.log(posts);
}

module.exports = {
	index,
	show,
	store,
	update,
	modify,
	destroy
}
