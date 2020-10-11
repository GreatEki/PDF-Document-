const pdf = require('html-pdf');
const invoiceTemplate = require('../pdf/Invoice');
const path = require('path');

const createInvoicePdf = (req, res) => {
	try {
		console.log(req.body);
		pdf.create(invoiceTemplate(req.body), {}).toFile('invoice.pdf', (err) => {
			if (err) {
				res.send(Promis.reject());
			}

			res.send(Promise.resolve());
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			success: false,
			message: err.message,
		});
	}
};

const getInvoicePdf = (req, res) => {
	res.sendFile(path.join(__dirname, '../invoice.pdf'));
};

module.exports = { createInvoicePdf, getInvoicePdf };
