import './Checkout.css';
import NavBar from './NavBar';
import CheckOutComponent from './CheckOutComponent';
import { Link } from "react-router-dom";


const Checkout = () => {
    return (
        <div className="checkout">
            <NavBar title='Checkout' />
            <div className='checkoutcomponent'>
            <CheckOutComponent/>
            </div>
            <Link to="/products"><button>Send Order</button></Link>
        </div>
    );
}

export default Checkout;