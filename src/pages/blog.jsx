// import  '../App.css'

const Blogs = ()=> {

const blog = [
    {
        img: <img src='/images/blog-1.jpg' alt=''/>,
        top: 'lifestyle',
        para:'A guide to latest trends',
        admin:'By Admin'

    },
    {
        img: <img src='/images/blog-2.jpg' alt=''/>,
        top: 'lifestyle',
        para:'Five ways to lead a happy life',
        admin:'By Admin'
    },
    {
        img: <img src='/images/blog-3.jpg' alt=''/>,
        top: 'lifestyle',
        para:'Tips on having a happy life',
        admin:'By Admin'
    },
]    
    return(
        <>
        <div className='blog'>
            <div className='head'>
                <h2>OUR BLOG</h2> 
            </div>
            <div className='blog-img'>
                {blog.map((item, index) => {
                    return(
                    <div key={index} className='head-img'>
                        {item.img}
                        <div className='span'>
                            <span>{item.top}</span>
                        </div>
                        <div className='admin'>
                            <h4>{item.para}</h4>
                            <p>{item.admin}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}
export default Blogs;