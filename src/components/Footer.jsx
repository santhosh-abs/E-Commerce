// import '../App.css'

const Footer = ()=> {
    return((
        <>
            <div className='footer'>
                <div className='footer-logo'>
                    <img src="/images/logo.png" alt=""/>
                    <p>© 2023 <a href='/contact'>Flone.</a></p>
                    <p>All Rights Reserved</p>
                </div>
                <div className='footer-bar'>
                    <h3>ABOUT US</h3>
                    <a href='/about'><p>About us</p></a>
                    <a href='/contact#'><p>Store location</p></a>
                    <a href='/contact'><p>Contact</p></a>
                    <a href='/contact#'><p>Orders tracking</p></a>
                </div>
                <div className='footer-bar'>
                    <h3>USEFUL LINKS</h3>
                    <a href='/contact#'><p>Returns</p></a>
                    <a href='/contact#'><p>Support Policy</p></a>
                    <a href='/contact#'><p>Size guide</p></a>
                    <a href='/contact#'><p>FAQs</p></a>
                </div>
                <div className='footer-bar'>
                    <h3>FOLLOW US</h3>
                    <a href='https://www.facebook.com/'><p>Facebook</p></a>
                    <a href='https://twitter.com/'><p>Twitter</p></a>
                    <a href='https://www.instagram.com/'><p>Instagram</p></a>
                    <a href='https://www.youtube.com/'><p>Youtube</p></a>
                </div>
                <div className='footer-bar'>
                    <h3>SUBSCRIBE</h3>
                    <p>Get E-mail updates about our latest shop<br/> and special offers.</p>

                    <input placeholder="Enter your email address..."/>
                    <a href='/contact#'><p><u>SUBSCRIBE</u></p></a>
                </div>
            </div>
        </>
    ))
}

export default Footer;