import './Checkout.css';
import NavBar from './NavBar';
import CheckOutComponent from './CheckOutComponent';
import { Link } from "react-router-dom";


const Checkout = (props) => {
    const {basketCount} = props;

    return (
        <div className='container-checkout'>
        <div className="checkout">
            <NavBar title='Checkout' basketCount={basketCount} />
            <div className='checkoutcomponent'>
            <CheckOutComponent/>
            </div>
            <Link to="/products"><button id='sendorder'>Send Order</button></Link>
        </div>
        </div>
    );
}

export default Checkout;