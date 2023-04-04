import React,{ createContext, useState } from 'react'

export const MyContext = createContext();

const Product = (props)=> {
    const [cartItems, setCartItems] = useState(0);

    const addToCart = ()=> {
        setCartItems(cartItems + 1 )

    }
    const removeFromCart = ()=> {
        if(0 < cartItems){
            setCartItems(cartItems - 1)
        }
    }
    
    const product = [
        {
            img: <img src="/images/1.jpg" alt=""/>,
            icon: [
                {
                    btn:<i className="pe-7s-cart"></i>,
                    btn1:<i className="pe-7s-glasses"></i>,
                    btn2: <i className="pe-7s-repeat"></i>
                },
            ],
            percent:'-10%',
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79 <del>$3.1</del></span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            img: <img src="/images/2.jpg" alt=""/>,
            icon: [
                {
                    btn:<i className="pe-7s-cart"></i>,
                    btn1:<i className="pe-7s-glasses"></i>,
                    btn2: <i className="pe-7s-repeat"></i>
                },
            ],
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79</span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            img: <img src="/images/3.jpg" alt=""/>,
            icon: [
                {
                    btn:<i className="pe-7s-cart"></i>,
                    btn1:<i className="pe-7s-glasses"></i>,
                    btn2: <i className="pe-7s-repeat"></i>
                },
            ],
            percent:'-20%',
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79 <del>$3.1</del></span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            img: <img src="/images/12.jpg" alt=""/>,
            icon: [
                {
                    btn:<i className="pe-7s-cart"></i>,
                    btn1:<i className="pe-7s-glasses"></i>,
                    btn2: <i className="pe-7s-repeat"></i>
                },
            ],
            percent:'-20%',
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79 <del>$3.1</del></span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            img: <img src="/images/5.jpg" alt=""/>,
            icon: [
                {
                    btn:<i className="pe-7s-cart"></i>,
                    btn1:<i className="pe-7s-glasses"></i>,
                    btn2: <i className="pe-7s-repeat"></i>
                },
            ],
            percent:'-10%',
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79 <del>$3.1</del></span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            img: <img src="/images/6.jpg" alt=""/>,
            icon: [
                {
                    btn:<i className="pe-7s-cart"></i>,
                    btn1:<i className="pe-7s-glasses"></i>,
                    btn2: <i className="pe-7s-repeat"></i>
                },
            ],
            percent:'-30%',
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79 <del>$3.1</del></span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            img: <img src="/images/7.jpg" alt=""/>,
            icon: [
                {
                    btn:<i className="pe-7s-cart"></i>,
                    btn1:<i className="pe-7s-glasses"></i>,
                    btn2: <i className="pe-7s-repeat"></i>
                },
            ],
            percent:'-30%',
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79 <del>$3.1</del></span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            img: <img src="/images/8.jpg" alt=""/>,
            icon: [
                {
                    btn:<i className="pe-7s-cart"></i>,
                    btn1:<i className="pe-7s-glasses"></i>,
                    btn2: <i className="pe-7s-repeat"></i>
                },
            ],
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79</span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            img: <img src="/images/9.jpg" alt=""/>,
            icon: [
                {
                    btn:<i className="pe-7s-cart"></i>,
                    btn1:<i className="pe-7s-glasses"></i>,
                    btn2: <i className="pe-7s-repeat"></i>
                },
            ],
            percent:'-20%',
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79 <del>$3.1</del></span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            img: <img src="/images/11.jpg" alt=""/>,
            icon: [
                {
                    btn:<i className="pe-7s-cart"></i>,
                    btn1:<i className="pe-7s-glasses"></i>,
                    btn2: <i className="pe-7s-repeat"></i>
                },
            ],
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79</span>,
            heart:<i className="pe-7s-like"></i>,
        }
    ]
    return(
        <>
        <MyContext.Provider value={cartItems}>
            {props.children}
        </MyContext.Provider>
            <div className='arrival'>
                <h2>NEW ARRIVAl</h2> 
            </div>
            <div className="product">
                {product.map((item, index)=> {
                    return(
                    <div key={index} className="product-card">
                        {item.img}
                        <div className="card-top">
                            <p>{item.percent}</p>
                            <span>{item.new}</span>
                        </div>
                        <div className="card-icon">
                            {item.icon.map((item, index)=> {
                                return(
                                <div key={index}>
                                    <button onClick={addToCart} >{item.btn}</button>
                                    <button onClick={removeFromCart} >{item.btn1}</button>
                                    <button>{item.btn2}</button>
                                </div>
                            )
                        })}
                        </div>
                        <div className="card-footer">
                            <div>
                                <p>{item.para}</p>
                                <h4>{item.price}</h4>                            
                            </div>
                            <div className="heart">
                                {item.heart}
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </>
    )
}
export default Product;