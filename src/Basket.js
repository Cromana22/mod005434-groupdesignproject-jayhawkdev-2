import './Basket.css';
import NavBar from './NavBar';
import useFetch from './php/useFetch';
import phpUrl from './php/phpUrls';
import BasketTableRow from './BasketTableRow';
import webUrl from './php/webUrls';

const Basket = (props) => {
    const { basketCount, loggedin, accessLevel } = props;
    if (loggedin !== 'Y') { window.location.replace(webUrl)};

    let { response }  = useFetch(phpUrl+'/getBasket.php');
    let rows = [];
    let rowCount = 1;
    
    if (response !== null) {
        if (basketCount > 0) {
            Object.entries(JSON.parse(response.basket)).forEach(item => {
                let product = item[0];  
                let qtyToOrder = item[1];

                rows.push(
                    <BasketTableRow key={rowCount} product={product} qtyToOrder={qtyToOrder} rowCount={rowCount} />
                );
                rowCount++;
            });
        }
    };

    return (
        <div className="basket">
            <NavBar title='Basket' basketCount={basketCount} accessLevel={accessLevel} />
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
                                {
                                    basketCount == 0 &&
                                    <tr>
                                        <td className="noItems" colSpan={5}>You have no items in your basket.</td>
                                    </tr>
                                }
                        </tbody>
                    </table>
                    <div className='checkout-btn'>
                    {
                        basketCount > 0 &&
                        <button  type='submit' name='submit'>Checkout</button>
                    }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Basket;