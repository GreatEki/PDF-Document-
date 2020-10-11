module.exports = (invoiceDoc) => {
	// const today = new Date();

	return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           
            <title>Invoice.js</title>
    
            <style>
            .card {
                background: white;
                width: 75%;
                margin: 50px auto;
                font-family: sans-serif;
                
            }
            
            .header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .logo {
                display: flex;
                 width: 100%; 
            }
            
            .header img {
                width: 100px;
            }
            
            .companyAddress h4 {
                display: block;
                font-family: sans-serif;
                
            }
            .companyAddress small {
                display: block;
               
                font-family: sans-serif;
            }
            
            .clientInfo {
                display: flex;
                justify-content: space-between;
                margin: 10px 0;
            }
            
           
            
            .summary {
                display: flex;
                margin: 50px 0;
                justify-content: space-between;
            }
            
            .summary div {
                flex-basis: 50%;
            }

            .accountInfo {
                margin-bottom: 30px;
            }

            .accountInfo small {
                display: block;
            }

            .table {
                font-family: arial, sans-serif;
                border-collapse: collapse;
                width: 100%;
              }
              
              .table tr:nth-child(even) {
                background-color: #dddddd;
              }
           
            
            </style>
        </head>
    
        <body>
        <div class='card'>

        <table width = 100%> 
            <tr> 
                <td> 
                <div class='logo'>
                <div class=''>
                    <img src='../public/image/carrot.png' alt='carrot-suite' />
                </div>

                <div class='companyAddress'>
                    <h4> XYZ Properties</h4>

                    <small> 1, medical road Ikeja,</small>

                    <small> Ikeja, Lagos</small>

                    <small> Nigeria</small>

                    <small> +2348026847945, +2347035925697</small>

                    <small> www.carrotsuite.co</small>
                </div>
            </div>
                </td>

                <td align = right > 
                <p> Invoice </p>
                <small class='text-muted'> ${invoiceDoc.invoiceNo} </small>

                <p> Balance Due</p>

                <p> N ${invoiceDoc.balance_due} </p>
                </td>
            </tr>
        
        </table>


        <table class='table' width = 100%> 
            <tr> 
                <td> 
                <p> Invoice To: Abel Smart </p>
                <p> <span> Address </span> 23 grret street </p>
                <p>
                    <span class=''> Phone: </span>
                    ${invoiceDoc.clientPhone}
                </p>
                <p>
                     Email: ${invoiceDoc.clientEmail}
                </p>
                </td>

                <td align = right> 
                <p> </p>
                <br />
                <p>
                    Invoice Date: <small> ${invoiceDoc.invoiceDate} </small>
                </p>
                <p>
                    Due Date: <small> 26-09-2020 </small>
                </p>
                <p>
                    Marketer: <small>${invoiceDoc.salesrep} </small>
                </p>
                </td>
            </tr>
        </table>

     

        <section class='itemTable'>
            <table border='1' cellpadding='2' width = 100% class='table'>
                <thead>
                    <tr>
                        <th align='center' scope='col'>
                            #
                        </th>
                        <th align='center' scope='col'>
                           
                            item &amp; Description
                        </th>
                        <th align='center' scope='col'>
                           
                            Price
                        </th>
                        <th align='center' scope='col'>
                           
                            Qty
                        </th>
                        <th align='center' scope='col'>
                           
                            Item Discount
                        </th>
                        <th align='center' scope='col'>
                           
                            Total
                        </th>
                    </tr>
                </thead>

                <tbody>
                 ${invoiceDoc.items
										.map(
											(obj) => `
                     <tr>
                        <td align='center'> # ${obj.id} </td>
                        <td align='center'> ${obj.name} </td>
                        <td align='center'> N ${obj.price} </td>
                        <td align='center'> ${obj.qty} </td>
                        <td align='center'> N ${obj.qty} </td>
                        <td align='center'> N ${obj.total}.00 </td>
                    </tr>
                     `
										)
										.join('')}

                 
                </tbody>
            </table>
        </section>


        <table> 
        
        </table>

        <section class='summary'>
            <div class='accountInfo'>
                <small> Account Name: Property Cloud Tech Limited </small>
                <small> Account No/Bank: 0114023729 (GTBank) </small>
                <small> Account No/Bank: 1013173318 (Zenith) </small>
                <small> Account No/Bank: 0039691957 (Union) </small>
                <small> TIN: 12001705-0001</small>

                <small> Invoice is payable every 30 days</small>
            </div>

            <div>
                <table border = '2' cellpadding= '2' cellspacing ='5' class='table'>
                <caption> Summary  </caption>
                    <thead>
                        <tr>
                            <th scope='col'> Total Due </th>
                            <th scope='col'> </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th scope='row'> Sub Total </th>
                            <td scope='row'> N ${invoiceDoc.subtotal}.00 </td>
                        </tr>

                        <tr>
                            <th scope='row'> Discount</th>
                            <td> N ${invoiceDoc.discount}.00</td>
                        </tr>

                        <tr>
                            <th scope='row'> Exclusive </th>
                            <td> N ${invoiceDoc.exclusive}.00 </td>
                        </tr>

                        <tr>
                            <th scope='col'> VAT </th>
                            <td> N 3, ${invoiceDoc.vat}.00 </td>
                        </tr>

                        <tr>
                            <th scope='row'> Total </th>
                            <td> N ${invoiceDoc.total}.00 </td>
                        </tr>

                        <tr>
                            <th scope='row'> Payment Made </th>
                            <td> <font color = red> (-) N ${
															invoiceDoc.paymentMade
														}.00 </font> </td>
                        </tr>

                        <tr>
                            <th scope='row'> Balance Due</th>
                            <td> N 13, ${invoiceDoc.balance_due}.00 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
        </body>
    </html>
    
      
      `;
};
