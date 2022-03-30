import './Checkout.css';
import NavBar from './NavBar';
import CheckOutComponent from './CheckOutComponent';
import useFetch from './php/useFetch';
import phpUrl from './php/phpUrls';
import webUrl from './php/webUrls';

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

const Checkout = (props) => {
    const { basketCount, loggedin, accessLevel } = props;
    if (loggedin !== 'Y') { window.location.replace(webUrl)};

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
                <NavBar title='Checkout' basketCount={basketCount} accessLevel={accessLevel} />

                <form method="POST" action={phpUrl+"/submitPurchaseOrder.php"}>
                    <div className='checkoutcomponent'>
                        {checkoutComponents}
                    </div>
                    <button type='submit' name='submit'>Submit Order</button>
                </form>
            </div>
            </div>
        );
    }

    else {
        return null;
    };    
}

export default Checkout;