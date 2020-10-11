import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { saveAs } from 'file-saver';

import Document from './components/Document';

function App() {
	const downloadPdf = async () => {
		const items = [
			{
				id: 1,
				name: 'Drilling Machine',
				price: 80000,
				qty: 1,
				discount: 500,
				total: 80000,
			},
			{
				id: 2,
				name: 'Survey Plan',
				price: 20000,
				qty: 1,
				discount: 300,
				total: 20000,
			},
		];
		try {
			const invoiceDoc = {
				invoiceNo: 456,
				balance_due: 80000,
				invoiceDate: '22/10/2020',
				dueDate: '29/10/200',
				clientEmail: 'ekivictor@gmail.com',
				first_name: 'Ekene Victor',
				last_name: 'Idiagbor',
				clientPhone: '08100548455',
				clientAddress: ' Test Avenue',
				accountName: 'Ekene Victor',
				accountNo: 757848484948,
				tin: '',
				subtotal: 100000,
				discount: 6000,
				exclusive: 80000,
				vat: 5200,
				total: 120000,
				paymentMade: 50000,
				salesrep: 'Nice Guy',
				items: items,
			};
			await axios.post(`http://localhost:5000/pdf/invoice`, invoiceDoc);

			const res = await axios.get(`http://localhost:5000/pdf/invoice`, {
				responseType: 'blob',
			});
			console.log(res);

			const pdfBlob = await new Blob([res.data], { type: 'application/pdf' });

			saveAs(pdfBlob, 'invoice.pdf');
		} catch (err) {
			if (err.response) {
				console.log(err.response.data);
			}
			console.log(err.message);
		}
	};
	return (
		<div className='App'>
			<h1> Generate PDF APP </h1>
			<div>
				<button onClick={() => downloadPdf()}> Download PDF </button>
			</div>

			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Document} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
