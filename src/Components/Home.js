import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="home">
            <div className="home__carousel">
                <Carousel data-interval={5000} touch={true}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="img/slider/slider1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="img/slider/slider2.jpg"
                            alt="Third slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="img/slider/slider3.jpg"
                            alt="Third slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="img/slider/slider4.jpg"
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="home__btm__banner">
                <marquee behavior="scroll" direction="left" onmouseover="stop()" scrollamount="6">
                    <p> <span>JILI:</span> New game launched. Play JILI Teen Patti with real players. Try it now. ♠️</p>
                    <p><span>Referral Bonus:</span>Great satisfaction comes from sharing with others. Invite your friends and families from your referral code and get rewarded ₹300 each</p>
                    <p><span>Scratch card:</span> 100% Win With Scratch Card. Available in JeetWin App. Get yours now!</p>
                    <p><span>New Sign Up:</span> Let us take you for a spin with the best casino bonus in India. Sign up now and enjoy 5 Free Spins in Our Lucky Wheel.
                    </p>
                </marquee>
            </div>

            {/* home slider component */}
            <div className="container-fluid">
                <div className="slider">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="slider__in home__carousel">
                                <Carousel data-interval="100" data-ride={false} touch={true}>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="img/slider/sld1.jpg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="img/slider/sld2.jpg"
                                            alt="Third slide"
                                        />


                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="img/slider/sld3.jpg"
                                            alt="Third slide"
                                        />


                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="img/slider/sld4.jpg"
                                            alt="Third slide"
                                        />


                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="slider__in slider__in2 home__carousel">
                                <Carousel data-interval={5000} touch={true}>
                                    
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="img/slider/sld5.png"
                                            alt="Third slide"
                                        />


                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="img/slider/sld6.png"
                                            alt="Third slide"
                                        />


                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home slider */}

            <div className="container-fluid">
                <div className="home__why">
                    <div className="heading">
                        <h1>Why Game Pitara?</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <img src="img/why/why.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <img src="img/why/why1.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <img src="img/why/why2.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <img src="img/why/why3.jpg" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* games  start*/}
            <div className="home__game">
                <div className="container-fluid">
                <div className="heading">
                    <h1>Hold Your Breath GamePitara is under maintaince and soon we will be launching with these games</h1>
                </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="game__in">
                                <img src="img/games/game1.jpg" className="img-fluid" alt=""/>
                                <div className="text">
                                    <h3>comming soon...</h3>
                                    <span>stay tuned!</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game__in">
                                <img src="img/games/game2.jpg" className="img-fluid" alt=""/>
                                <div className="text">
                                    <h3>comming soon...</h3>
                                    <span>stay tuned!</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game__in">
                                <img src="img/games/game3.jpg" className="img-fluid" alt=""/>
                                <div className="text">
                                    <h3>comming soon...</h3>
                                    <span>stay tuned!</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game__in">
                                <img src="img/games/game4.jpg" className="img-fluid" alt=""/>
                                <div className="text">
                                    <h3>comming soon...</h3>
                                    <span>stay tuned!</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game__in">
                                <img src="img/games/game5.jpg" className="img-fluid" alt=""/>
                                <div className="text">
                                    <h3>comming soon...</h3>
                                    <span>stay tuned!</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game__in">
                                <img src="img/games/game6.jpg" className="img-fluid" alt=""/>
                                <div className="text">
                                    <h3>comming soon...</h3>
                                    <span>stay tuned!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* games end */}
        </div>
    )
}

export default Home
