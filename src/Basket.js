import './Basket.css';
import NavBar from './NavBar';
import Nerf from './nerf.jpg';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const Basket = () => {
    return (
        <div className="basket">
            <NavBar title='Basket' />
            <div className="baskettable">
                <table>
                    <tr id='basket-nav'>
                        <th>Image</th>
                        <th>Product name</th>
                        <th>Quantity Available</th>
                        <th>Quantity To Order</th>
                        <th>Select Supplier</th>
                    </tr>

                    <tr id='1'>
                        <td><img src={Nerf} /></td>
                        <td>Nerf N-Strike</td>
                        <td>100</td>
                        <td>
                            <input className='basket-inp' type="number"/>
                        </td>
                        <td>
                            <Form.Select aria-label="Default select example">
                                <option>Choose Supplier</option>
                                <option value="1">Yoan Kirilov</option>
                                <option value="2">Jennifer Rae-Clarke</option>
                                <option value="3">Hussnain Zafar</option>
                            </Form.Select>
                        </td>
                    </tr>

                    <tr id='2'>
                        <td><img src={Nerf} /></td>
                        <td>Lego Classic Bricks</td>
                        <td>124</td>
                        <td>
                            <input className='basket-inp' type="number"/>
                        </td>
                        <td>
                            <Form.Select aria-label="Default select example">
                                <option>Choose Supplier</option>
                                <option value="1">Yoan Kirilov</option>
                                <option value="2">Jennifer Rae-Clarke</option>
                                <option value="3">Hussnain Zafar</option>
                            </Form.Select>
                        </td>
                    </tr>

                    <tr id='2'>
                        <td><img src={Nerf} /></td>
                        <td>Polaroid Play 3D Pen</td>
                        <td>90</td>
                        <td>
                            <input className='basket-inp' type="number"/>
                        </td>
                        <td>
                            <Form.Select aria-label="Default select example">
                                <option>Choose Supplier</option>
                                <option value="1">Yoan Kirilov</option>
                                <option value="2">Jennifer Rae-Clarke</option>
                                <option value="3">Hussnain Zafar</option>
                            </Form.Select>
                        </td>
                    </tr>

                    

                </table>
                <Link to="/checkout"><button id='checkout-btn'>Checkout</button></Link>
            </div>
        </div>

    );
}

export default Basket;