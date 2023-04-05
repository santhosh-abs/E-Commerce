import React, { useState, useContext  } from 'react';
import { AppContext } from '../App';

const Cart = ()=> {
    const [cart, setCart] = useContext(AppContext);

    const [quantity, setQuantity] = useState(1)


    const quantityPlus = ()=>{
        if (cart.count >= 1){
            setQuantity(quantity + 1)
        }
    }
    const quantityminus = ()=>{
        if (1 < quantity ){
            setQuantity(quantity - 1)
        }
    }


    const y = quantity * 2.79;
    console.log(y)
    return (
        <>
            <div className='home-cart'>
                <h4>HOME / CART</h4>
            </div>
            <div className='cart-table'>
                <h3>Your cart items</h3>
                <table>
                    <thead>
                        <th>IMAGES</th>
                        <th>PRODUCT NAME</th>
                        <th>UNIT PRICE</th>
                        <th>QTY</th>
                        <th>SUBTOTAL</th>
                        <th>ACTION</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src='/images/1.jpg' alt=''/></td>
                            <td><p>Lorem ipsum accessories one</p></td>
                            <td><del>$3.10</del> $2.79</td>
                            <td>
                                <div className='qty'>
                                    <button onClick={quantityminus}>-</button>
                                    <p>{quantity}</p>
                                    <button onClick={ quantityPlus}>+</button>
                                </div>
                            </td>
                            <td>${y} </td>
                            <td><i className='pe-7s-close'></i></td>
                        </tr>
                    </tbody>
                </table>
                <div className='shopping'>
                    <button>CONTINUE SHOPPING</button>
                    <button >CLEAR SHOPPING CART</button>
                </div>
            </div>
            
            <div className='destination'>
                <div className='tax'>
                    <h3>Estimate Shipping And Tax</h3>
                    <p>Enter your destination to get a shipping estimate.</p>
                    <label>* Country</label>
                    <select>
                        <option>Bangaladesh</option>
                        <option>Albania</option>
                        <option>Aland Island</option>
                        <option>Afghanistan</option>
                        <option>Belgium</option>
                    </select>
                    <label>* Region / State</label>
                    <select>
                        <option>Bangaladesh</option>
                        <option>Albania</option>
                        <option>Aland Island</option>
                        <option>Afghanistan</option>
                        <option>Belgium</option>
                    </select>
                    <label>* Zip / Postal Code</label>
                    <input className='zip' type="text" />
                    <button>GET A QUOTE</button>
                </div>
                <div className='cupon'>
                    <h3>Use Coupon Code</h3>
                    <p>Enter your coupon code if you have one.</p>
                    <input type="text" />
                    <button>APPLY COUPON</button>
                </div>
                <div className='check-out'>
                    <h3>Cart Total</h3>
                    <div className='p-total'>
                        <p>Total products</p>
                        <p>{y}</p>
                    </div>
                    <div className='g-total'>
                        <p>Grand Total</p>
                        <p>{y}</p>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </>
    );
}

export default Cart;