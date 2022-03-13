import './Products.css';
import NavBar from './NavBar';
import Nerf from './nerf.jpg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {
    const {basketCount} = props;

    return (
        <div className="products">
            <NavBar title='Products' basketCount={basketCount} />
            <div className="productstable">
                <table id='products-table'>
                    <thead>
                        <tr className='products-tr'>
                            <th>Image</th>
                            <th>Product name</th>
                            <th>Quantity Available</th>
                            <th>Reorder Level</th>
                            <th>Stock Status</th>
                            <th>Quantity To Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id='1' className='products-tr'>
                            <td><img src={Nerf} /></td>
                            <td>Nerf N-Strike</td>
                            <td>100</td>
                            <td>10</td>
                            <td><FontAwesomeIcon id='productsCircle1' icon={faCircle} /></td>
                            <td>
                                <input className='products-inp' type="number"/>
                            </td>
                            <td><button>Checkout</button></td>
                        </tr>

                        <tr id='2' className='products-tr'>
                            <td><img src={Nerf} /></td>
                            <td>Lego Classic Bricks</td>
                            <td>124</td>
                            <td>20</td>
                            <td><FontAwesomeIcon id='productsCircle2' icon={faCircle} /></td>
                            <td>
                                <input className='products-inp' type="number"/>
                            </td>
                            <td><button>Checkout</button></td>
                        </tr>

                        <tr id='3' className='products-tr'>
                            <td><img src={Nerf} /></td>
                            <td>Polaroid Play 3D Pen</td>
                            <td>90</td>
                            <td>70</td>
                            <td><FontAwesomeIcon id='productsCircle3' icon={faCircle} /></td>
                            <td>
                                <input className='products-inp' type="number"/>
                            </td>
                            <td><button>Checkout</button></td>
                        </tr>

                        <tr id='4' className='products-tr'>
                            <td><img src={Nerf} /></td>
                            <td>USB Power Bank</td>
                            <td>87</td>
                            <td>15</td>
                            <td><FontAwesomeIcon id='productsCircle4' icon={faCircle} /></td>
                            <td>
                                <input className='products-inp' type="number"/>
                            </td>
                            <td><button>Checkout</button></td>
                        </tr>

                        <tr id='5' className='products-tr'>
                            <td><img src={Nerf} /></td>
                            <td>Spider Catcher</td>
                            <td>45</td>
                            <td>5</td>
                            <td><FontAwesomeIcon id='productsCircle5' icon={faCircle} /></td>
                            <td>
                                <input className='products-inp' type="number"/>
                            </td>
                            <td><button>Checkout</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Products;