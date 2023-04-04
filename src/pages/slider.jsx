// import '../App.css'
import Product from './product';
import Blog from './blog'

const Slider = ()=> {
    return(
        <>
            <div className='slider'>
                <img src="/images/slider-2.jpg" alt=""/>
                <div className='img-text'>
                    <h2>Stylish</h2>
                    <span>Male Clothes</span>
                    <p>30% off summer vacation</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className='support'>
                <div>
                    <img src='/images/support-1.png' alt=''/>
                    <h4>Free Shipping</h4>
                    <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>               
                </div>
                <div>
                    <img src='/images/support-2.png' alt=''/>
                    <h4>Support 24/7</h4>
                    <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>               
                </div>
                <div>
                    <img src='/images/support-3.png' alt=''/>
                    <h4>Money Return</h4>
                    <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>               
                </div>
            </div>
            <div>
                <Product/>
            </div>
            <div>
                <Blog/>
            </div>
        </>
    )
}

export default Slider;
