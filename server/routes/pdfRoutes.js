const express = require('express');
const router = express.Router();

const {
	createInvoicePdf,
	getInvoicePdf,
} = require('../controllers/pdfController');

router.route('/invoice').post(createInvoicePdf);

router.route('/invoice').get(getInvoicePdf);

module.exports = router;
