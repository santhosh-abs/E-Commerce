import React from 'react';

function Nocompare() {
    return (
        <div>
            <div className='home-cart'>
                <h4>HOME / COMPARE</h4>
            </div>
            <div className='no-items'>
                <i className='pe-7s-shuffle'></i>
                <p>No items found in compare</p>
                <button>ADD ITEMS</button>
            </div>
        </div>
    );
}

export default Nocompare;