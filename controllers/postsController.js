const posts = require("../data/posts.js");
const connection = require("../data/db.js");


function index(req, res) {
	const sql = "SELECT * FROM posts"

	connection.query(sql, (error, result) => {
		if (error) return res.status(500).json({ error: 'Database query failed' });
		res.json(result);
	})
}

function show(req, res) {
	const id = parseInt(req.params.id);
	const postSql = `SELECT * FROM posts WHERE id = ?`
	const tagSql = `SELECT 
    *
FROM
    tags
        JOIN
    post_tag ON tags.id = post_tag.tag_id
WHERE
    post_id = ?`

	connection.query(postSql, [id], (err, postResults) => {
		if (err) return res.status(500).json({ error: 'Database query failed' });
		if (postResults.length === 0) return res.status(404).json({ error: 'post not found' });
		const post = postResults[0];
		connection.query(tagSql, [id], (err, tagsResults) => {
			if (err) return res.status(500).json({ error: 'Database query failed' });
			post.tags = tagsResults.map(tag => tag.label);
			res.json(post);
		})
	})
}


function destroy(req, res) {
	const id = parseInt(req.params.id);
	const sql = 'DELETE FROM posts WHERE id = ? ';
	connection.query(sql, [id], (error, result) => {
		if (error) return res.status(404).json({ error: '' });
		res.json(result);
	})
}

module.exports = {
	index,
	show,
	destroy
}
