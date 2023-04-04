import React from 'react';

const CheckOut = ()=> {
    return (
        <>
            <div className='home-cart'>
                <h4>HOME / CART</h4>
            </div>
            <div className='checkout-details'>
                <div className='checkout'>
                    <h3>Billing Details</h3>
                    <div className='name'>
                        <div className='name-input'>
                            <label>First Name</label>
                            <input type="text" />
                        </div>
                        <div className='name-input'>
                            <label>Last Name</label>
                            <input type="text" />
                        </div>
                    </div>
                    <label>Company Name</label>
                    <input type="text" />
                    <label>Country</label>
                    <select>
                        <option>Select a country</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                    </select>
                    <label>Street Address</label>
                    <input type="text" placeholder='House number and street name' />
                    <input type="text" placeholder='Apartment, suite, unit etc.' />
                    <label>Town / City</label>
                    <input type="text" />
                    <label>State / Country</label>
                    <input type="text" />
                    <label>Postcode / ZIP</label>
                    <input type="text" />
                    <label>Phone</label>
                    <input type="text" />
                    <label>Email Address</label>
                    <input type="text" />
                    <h3>Additional Information</h3>
                    <label>Order notes</label>
                    <textarea type="textarea" placeholder='Notes about your order, e.g. special notes for delivery. ' />
                </div>
                <div className='order-details'>
                    <h3>Your order</h3>
                    <div className='product-total'>
                        <div className='total-head'>
                            <p>Product</p>
                            <p>Total</p>
                        </div>
                        <div className='total-head'>
                            <p>Lorem ipsum accessories one X 1</p>
                            <p>$ 2.79</p>
                        </div>
                        <div className='total-head'>
                            <p>Shipping</p>
                            <p>Free shipping</p>
                        </div>
                        <div className='total-head'>
                            <p>Total</p>
                            <p>$ 2.79</p>
                        </div>
                    </div>
                    <div className='place-order'>
                        <button>PLACE ORDER</button>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default CheckOut;