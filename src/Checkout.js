import './Checkout.css';
import NavBar from './NavBar';
import CheckOutComponent from './CheckOutComponent';
import { Link } from "react-router-dom";
import useFetch from './php/useFetch';
import phpUrl from './php/phpUrls';

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

const Checkout = (props) => {
    const {basketCount} = props;

    let { response }  = useFetch(phpUrl+'/getCheckout.php');
    if (response !== null) {

        let supplierArray = [];
        response.forEach(product => {
            supplierArray.push(product.supplierId);
        });
        supplierArray = supplierArray.filter(onlyUnique);

        let checkoutComponents = [];
        for (let i=0; i<supplierArray.length; i++) {
            let supplierOrderLines = [];
            response.forEach(product => {
                if (product.supplierId == supplierArray[i]) {
                    supplierOrderLines.push(product);
                }
            });

            checkoutComponents.push(
                <CheckOutComponent key={i} supplierOrderLines={supplierOrderLines} poRequest={i+1} requestTotal={supplierArray.length}/>
            )
        }

        return (
            <div className='container-checkout'>
            <div className="checkout">
                <NavBar title='Checkout' basketCount={basketCount} />
                <div className='checkoutcomponent'>
                    {checkoutComponents}
                </div>
                <Link to="/products"><button id='sendorder'>Send Order</button></Link>
            </div>
            </div>
        );
    }

    else {
        return null;
    };    
}

export default Checkout;