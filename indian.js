const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.use(express.static(path.join(__dirname, 'adda')));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'adda/index.html'));
});
app.get('/indian/:id', (req,res) =>{
	const id = req.params.id;
	res.send('Hello dimoreh wewe ni ' +id);
});
const port = process.env.PORT || 3000;
app.listen(port, function(req,res){
	console.log(`Running on port ${port}...\n Ctr C to quit..`);
});


