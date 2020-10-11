const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');

const invoiceTemplate = require('./pdf/Invoice');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	// Allow access from specified origin
	res.header('Access-Control-Allow-Origin', '*');

	//Allow Access for specified headers
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);

	// Allow Access for Request Methods
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE');
	}

	next();
});

app.use('/pdf', require('./routes/pdfRoutes'));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on ${port}`));
