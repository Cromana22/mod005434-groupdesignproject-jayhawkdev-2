import './Basket.css';
import NavBar from './NavBar';
import useFetch from './php/useFetch';
import { Link } from "react-router-dom";
import phpUrl from './php/phpUrls';
import BasketTableRow from './BasketTableRow';

const Basket = (props) => {
    const {basketCount} = props;

    let { response }  = useFetch(phpUrl+'/getBasket.php');
    let rows = [];
    let rowCount = 1;
    
    if (response !== null) { 
        Object.entries(response).forEach(item => {
            let product = item[0];
            let qtyToOrder = item[1];

            rows.push(
                <BasketTableRow key={rowCount} product={product} qtyToOrder={qtyToOrder} rowCount={rowCount} />
            );
            rowCount++;
        });
    };

    return (
        <div className="basket">
            <NavBar title='Basket' basketCount={basketCount} />
            <div className="baskettable table-responsive">
                <form method="POST" action={phpUrl+'/generateCheckout.php'}>
                    <table id='basket-table'>
                        <thead>
                            <tr className='basket-tr'>
                                <th>Image</th>
                                <th>Product name</th>
                                <th>Quantity Available</th>
                                <th>Quantity To Order</th>
                                <th>Select Supplier</th>
                            </tr>
                        </thead>
                        <tbody>
                                {rows}
                        </tbody>
                    </table>
                    <button type='submit' name='submit'>Checkout Form</button>
                </form>
            </div>
        </div>
    );
}

export default Basket;