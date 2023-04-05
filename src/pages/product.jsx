import React,{ useContext } from 'react'
import { AppContext } from '../App'


const Product = ()=> {
    const [cart, setCart] = useContext(AppContext);

    const addToCart = (data)=> {
        setCart({
            count: cart.count + 1,
            items: [...cart.items, data],
            itemIds: [...cart.itemIds, data.id],
        })

    }
    // const removeFromCart = (id)=> {
    //     setCart({
    //         count: cart.count - 1,
    //         items: cart.items.filter((item)=>item.id !== id),
    //         itemIds: cart.itemIds.filter((item)=>item !== id),
    //     })
    // }
    
    const product = [
        {   
            id: '1',
            img: <img src="/images/1.jpg" alt=""/>,
            percent:'-10%',
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79 <del>$3.1</del></span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {   
            id:'2',
            img: <img src="/images/2.jpg" alt=""/>,
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79</span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            id:'3',
            img: <img src="/images/3.jpg" alt=""/>,
            percent:'-20%',
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79 <del>$3.1</del></span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            
            id:'4',
            img: <img src="/images/12.jpg" alt=""/>,
            percent:'-20%',
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79 <del>$3.1</del></span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            id:'5',
            img: <img src="/images/5.jpg" alt=""/>,  
            percent:'-10%',
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79 <del>$3.1</del></span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            id:'6',
            img: <img src="/images/6.jpg" alt=""/>,  
            percent:'-30%',
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79 <del>$3.1</del></span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            id:'7',
            img: <img src="/images/7.jpg" alt=""/>,  
            percent:'-30%',
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79 <del>$3.1</del></span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            id:'8',
            img: <img src="/images/8.jpg" alt=""/>,  
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79</span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            id:'9',
            img: <img src="/images/9.jpg" alt=""/>,  
            percent:'-20%',
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79 <del>$3.1</del></span>,
            heart:<i className="pe-7s-like"></i>,
        },
        {
            id:'10',
            img: <img src="/images/11.jpg" alt=""/>,  
            new: 'New',
            para:'Lorem ipsum accessories one',
            price:<span>$2.79</span>,
            heart:<i className="pe-7s-like"></i>,
        }
    ]
    return(
        <>
            <div className='arrival'>
                <h2>NEW ARRIVAl</h2> 
            </div>
            <div className="product">
                {product.map((item, id)=> {
                    return(
                    <div key={id} className="product-card">
                        {item.img}
                        <div className="card-top">
                            <p>{item.percent}</p>
                            <span>{item.new}</span>
                        </div>
                        <div className="card-icon">
                            <div >
                                <button onClick={()=>addToCart(item)} 
                                 className={ cart.itemIds.includes(item.id) ? "btn-disable" : "" }>
                                    <i className="pe-7s-cart"></i>
                                </button>
                                <button /* onClick={()=>removeFromCart(item.id)} */>
                                    <i className="pe-7s-glasses"></i>
                                </button>
                                <button>
                                    <i className="pe-7s-repeat"></i>
                                </button>
                            </div>
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