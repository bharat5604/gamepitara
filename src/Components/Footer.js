import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Footer = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="footer__in one">
                            <Link to="/"><img src="img/logo.png" className="img-fluid logo" alt="footer logo" /></Link>
                            <p>Asia's Best Online Casino Slot & Live Games</p>
                            <div className="warning"><img src="img/warning.png" width={40} alt="" /> <span>Be Responsible</span></div>
                        </div>
                    </div>
                    <div className="col-md-2 col-6">
                        <div className="footer__in">
                            <h3>menu</h3>
                            <Link to="">Online cashino games</Link>
                            <Link to="">Casino Slot Games</Link>
                            <Link to="">Casino Table Games</Link>
                            <Link to="">Casino Bonus & Offers</Link>
                            <Link to="">Jeet Privilege</Link>
                            <Link to="">Tournaments</Link>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="footer__in">
                            <h3>quick links</h3>
                            <Link to="">Online cashino games</Link>
                            <Link to="">Casino Slot Games</Link>
                            <Link to="">Casino Table Games</Link>
                            <Link to="">Casino Bonus & Offers</Link>
                            <Link to="">Jeet Privilege</Link>
                            <Link to="">Tournaments</Link>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="footer__in fourth">
                            <h3>get in touch</h3>
                            <a href="tel:9199886799"><i className="fa fa-phone"></i> +91 919 988 6799</a>
                            <a href="mailTo:bhushansingh696@gmail.com"><i className="fa fa-envelope"></i> bhushansingh696@gmail.com</a>
                            <div className="social">
                                <a href="#!"><span><i className="fa fa-facebook"></i></span></a>
                                <a href="#!"><span className="instagram"><i className="fa fa-instagram"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="client">
                    <div className="heading">
                        <h1>game provider</h1>
                    </div>
                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        // responsive={responsive}
                        // infinite={true}
                        // autoPlay={true}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={13000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={11500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-10-px"
                    >
                        <div>
                        <img src="img/client/client1.png" alt="" />
                        <img src="img/client/client6.png" alt="" />
                        </div>
                        <div>
                        <img src="img/client/client3.png" alt=""/>
                        <img src="img/client/client7.jpg" alt=""/>
                        </div>
                        <div>
                        <img src="img/client/client4.jpg" alt=""/>
                        <img src="img/client/client8.jpg" alt=""/>
                        </div>
                        <div>
                        <img src="img/client/client5.jpg" alt=""/>
                        <img src="img/client/client2.png" alt=""/>

                        </div>
                        {/* <div>Item 4</div> */}
                    </Carousel>;
                </div>
            <div className="payment">
                <div className="container-fluid">
                <div className="heading">
                    <h1>payment providers</h1>
                </div>
                    <img src="img/payment/bank1.png" alt=""/>
                    <img src="img/payment/bank2.png" alt=""/>
                    <img src="img/payment/bank3.png" alt=""/>
                    <img src="img/payment/bank4.png" alt=""/>
                    <img src="img/payment/bank5.png" alt=""/>
                    <img src="img/payment/bank6.png" alt=""/>
                    <img src="img/payment/bank7.png" alt=""/>
                    <img src="img/payment/master.png" alt=""/>
                </div>
            </div>

            <div className="footer__btm">
                <div className="container">
                    <p>© 2021 Game Pitara Pvt Ltd 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
