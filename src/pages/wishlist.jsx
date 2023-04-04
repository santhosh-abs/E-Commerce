import React from 'react';

function Wishlist() {
    return (
        <div>
            <div className='home-cart'>
                <h4>HOME / WISHLIST</h4>
            </div>
            <div className='no-items'>
                <i className='pe-7s-like'></i>
                <p>No items found in wishlist</p>
                <button>ADD ITEMS</button>
            </div>
        </div>
    );
}

export default Wishlist;