const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/cats', (req, res) => {
	res.send('meow');
});

app.get('/dogs', (req, res) => {
	res.send('rufff');
});

app.get('/chickens/:posts', (req, res) => {
	const post = req.params.posts;
	res.send(`Welcome to chickens/${post}`);
});

app.get('/search', (req, res) => {
	const { q } = req.query;
	res.send(`Results for ${q}`);
});

app.get(/.*/, (req, res) => {
	res.send('Ooops nothing here with that page number');
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
