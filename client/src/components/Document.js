import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Divider } from 'antd';
import './document.css';

// import moment from 'moment';
// import { numberWithCommas } from "../helper/numberWithCommas";

const Document = ({ invoice, client, clientDetails }) => {
	return (
		<div className='card'>
			<section className='header'>
				<div className='logo'>
					<div className=''>
						<img src='/image/carrot.png' alt='carrot-suite' />
					</div>

					<div className='companyAddress'>
						<h4> XYZ Properties</h4>

						<small> 1, medical road Ikeja,</small>

						<small> Ikeja, Lagos</small>

						<small> Nigeria</small>

						<small> +2348026847945, +2347035925697</small>

						<small> www.carrotsuite.co</small>
					</div>
				</div>

				<div className=''>
					<h1> Invoice </h1>
					<h4 className='text-muted'> #10001 </h4>

					<h3 className='mt-5'> Balance Due</h3>

					<h3> N 26250 </h3>
				</div>
			</section>

			<section className='clientInfo'>
				<div className='d-flex flex-column'>
					<h3> Invoice To</h3>
					<h5>
						{' '}
						<span> Abel </span> <span> Smart </span>
					</h5>
					<h5> 23 grret street</h5>
					<h5>
						<span className=''> Phone: </span>{' '}
						{/* {clientDetails.UserPhones
              ? clientDetails.UserPhones[0].phoneNumber
              : null} */}
					</h5>
					<h5>
						<span className=''> Email: </span> {/* {clientDetails.email} */}
					</h5>
				</div>

				<div>
					<h3> </h3>
					<br />
					<h3>
						Invoice Date: <small> 23-09-2020 </small>{' '}
					</h3>
					<h3>
						Due Date: <small> 26-09-2020 </small>{' '}
					</h3>
					<h3>
						Marketer: <small>Ola Ola </small>{' '}
					</h3>
				</div>
			</section>

			<section className='itemTable'>
				<table border='5' cellSpacing='2' cellPadding='5' className='table'>
					<thead>
						<tr>
							<th align='center' scope='col'>
								{' '}
								#
							</th>
							<th align='center' scope='col'>
								{' '}
								item &amp; Description
							</th>
							<th align='center' scope='col'>
								{' '}
								Price{' '}
							</th>
							<th align='center' scope='col'>
								{' '}
								Qty{' '}
							</th>
							<th align='center' scope='col'>
								{' '}
								Item Discount{' '}
							</th>
							<th align='center' scope='col'>
								{' '}
								Total{' '}
							</th>
						</tr>
					</thead>

					<tbody>
						{/* {invoice.InvoiceItems ? (
              invoice.InvoiceItems.map((item, i) => {
                return ( */}
						<tr>
							<td align='center'> #120 </td>
							<td align='center'>Generator</td>
							<td align='center'> N 80,000.00 </td>
							<td align='center'> 1.00 </td>
							<td align='center'> N 1050.00 </td>
							<td align='center'> N 79, 950.00 </td>
						</tr>
						{/* );
              })
            ) : ( */}
						{/* <tr>
							<td colSpan='6' className='text-center'>
								{' '}
								No Item
							</td>
						</tr> */}
						{/* )} */}
					</tbody>
				</table>
			</section>

			{/* <Divider /> */}

			<section className='summary'>
				<div className='accountInfo'>
					<p> Account Name: Property Cloud Tech Limited </p>
					<p> Account No/Bank: 0114023729 (GTBank) </p>
					<p> Account No/Bank: 1013173318 (Zenith) </p>
					<p> Account No/Bank: 0039691957 (Union) </p>
					<p> TIN: 12001705-0001</p>

					<p> Invoice is payable every 30 days</p>
				</div>

				<div>
					<table border='5' cellSpacing='2' cellPadding='5' className='table'>
						<thead>
							<tr>
								<th scope='col'> Total Due </th>
								<th scope='col'> </th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<th scope='row'> Sub Total </th>
								<td scope='row'> N 10, 000.00 </td>
							</tr>

							<tr>
								<th scope='row'> Discount</th>
								<td> N 500.00</td>
							</tr>

							<tr>
								<th scope='row'> Exclusive </th>
								<td> N 10, 000.00 </td>
							</tr>

							<tr>
								<th scope='col'> VAT </th>
								<td> N 3, 000.00 </td>
							</tr>

							<tr>
								<th scope='row'> Total </th>
								<td> N 13, 000.00 </td>
							</tr>

							<tr>
								<th scope='row'> Payment Made </th>
								<td className='text-danger'> (-) N 0.00 </td>
							</tr>

							<tr>
								<th scope='row'> Balance Due</th>
								<td> N 13, 000.00 </td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
};

export default Document;
