import React,{ useContext, useState }  from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { MyContext } from '../pages/product';
import Slider from '../pages/slider';
import Product from '../pages/product';
import Cart from '../pages/cart';
import NoCart from '../pages/nocart';
import NoWishlist from '../pages/wishlist';
import NoCompare from '../pages/nocompare'
// import '../App.css'

const Header = ()=> {
    const [show, setShow] = useState(false)
    const x = useContext(MyContext);
    return(
        <Router>
        <>
            <div className="header">
                <div className="header-img">
                    <img src="/images/logo.png" alt="" />
                </div>
                <div className='header-menu'>
                    <div>
                        <Link to='/home'><p className='para'>Home<span><i className="pe-7s-angle-down"></i></span></p></Link>
                    </div>
                    <div>
                        <Link to='/shop'><p className='para'>Shop<span><i className="pe-7s-angle-down"></i></span></p></Link>
                    </div>
                    <div>
                        <Link to='/collection'><p>Collection</p></Link>
                    </div>
                    <div>
                        <Link to='/pages'><p className='para'>Pages<span><i className="pe-7s-angle-down"></i></span></p></Link>
                    </div>
                    <div>
                        <Link to='/blog'><p className='para'>Blog<span><i className="pe-7s-angle-down"></i></span></p></Link>
                    </div>
                    <div>
                        <Link to='/contact'><p>Contact Us</p></Link>
                    </div>
                </div>
                <div className='icon'>
                    <div>
                        <button className="pe-7s-search"></button>
                    </div>
                    <div>
                        <button className="pe-7s-user-female"></button>
                    </div>
                    <div>
                        <Link to='/compare'><button className="pe-7s-shuffle shuffle"><span>0</span></button></Link>
                    </div>
                    <div>
                        <Link to='/wishlist'><button className="pe-7s-like like"><span>0</span></button></Link>
                    </div>
                    <div className='full-bag'>
                       
                    <button onClick={()=> setShow(!show)} className="pe-7s-shopbag bag"><span>{x}</span></button>
                    
                    { show && 
                        <div className='cart-card'>
                            {(x === 0) ? <div className='cart-no-items'>No items added to cart</div> :
                            <div className='cart-items'>
                                <div className='bag-items'>
                                    <img src='/images/1.jpg' alt=''/>
                                    <div>
                                        <p>Lorem ipsum accessories one</p>
                                        <p>Qty:</p>
                                        <p>$2.79</p>
                                    </div>
                                    <button className='pe-7s-close'></button>
                                </div>
                                <div className='cart-total'>
                                    <p>Total :</p>
                                    <p>$2.79</p>
                                </div>
                                <div className='cart-btn'>
                                    <Link to='/cart'> 
                                        <button>VIEW CART</button>
                                    </Link>
                                    <Link to='/checkout'>
                                        <button>CHECKOUT</button>
                                    </Link>
                                </div>
                            </div>
                            }
                        </div>
                    }
                    </div> 
                    {/* <i class="pe-7s-menu"></i> */}
                </div>
          
            </div>
            <div>
                <Routes>
                    <Route path='/home' element={<Slider/>} />
                    <Route path='/shop' element={<Product></Product>}/>
                    <Route path='/cart' element={(x === 0) ? <NoCart/> : <Cart/>}/>
                    <Route path='/wishlist' element={<NoWishlist/>}/>
                    <Route path='/compare' element={<NoCompare/>}/>
                </Routes>
            </div>
        </>
        </Router>
    )
}

export default Header; 