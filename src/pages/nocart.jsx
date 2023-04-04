import React from 'react';

function Nocart() {
    return (
        <div>
            <div className='home-cart'>
                <h4>HOME / CART</h4>
            </div>
            <div className='no-items'>
                <i className='pe-7s-cart'></i>
                <p>No items found in cart</p>
                <button>SHOP NOW</button>
            </div>
        </div>
    );
}

export default Nocart;