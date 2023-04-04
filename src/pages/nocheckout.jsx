import React from 'react';

const Checkout = ()=> {
    return (
        <>
            <div>
                <div className='home-cart'>
                    <h4>HOME / CART</h4>
                </div>
                <div className='no-items'>
                    <i className='pe-7s-cash'></i>
                    <p>No items found in cart to checkout</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
        </>
    );
}

export default Checkout;