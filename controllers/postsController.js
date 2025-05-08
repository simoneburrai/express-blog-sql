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
	const sql = `SELECT * FROM posts WHERE id = ?`
	connection.query(sql, [id], (error, result) => {
		if (error) return res.status(500).json({ error: 'Database query failed' });
		res.json(result);
	})
}


function destroy(req, res) {
	const id = parseInt(req.params.id);
	const sql = 'DELETE FROM posts WHERE id = ? ';
	connection.query(sql, [id], (error, result) => {
		if (error) return res.status(500).json({ error: 'Database query failed' });
		res.json(result);
	})
}

module.exports = {
	index,
	show,
	destroy
}
