import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="Header">
            <div className="header__top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 d-none d-sm-block">
                            <div className="logo">
                               <Link to="/"> <img src="img/logo.png" className="img-fluid" alt="logo" /></Link>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="top__right">
                                <form action="" method="post" className="">
                                    <div className="form-group d-none d-lg-block">
                                        <input type="text" name="username" placeholder="Username" />
                                        <a href="#!"> <input type="checkbox" /> remember me</a>

                                    </div>
                                    <div className="form-group d-none d-lg-block">
                                        <input type="password" name="password" placeholder="Password" />

                                        <i className="fa fa-eye-slash"></i>
                                        <a href="#!">Forgot password ?</a>
                                    </div>
                                    <button type="submit" className="btn d-none d-lg-block">login</button>
                                </form>
                                <button type="submit" className="btn d-md-block d-lg-none">login</button>
                                <button className="btn join">join now</button>
                                <div className="sidebar">
                                    <i className="fa fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="games">
                <div className="container-fluid">
                    <div className="games__in">
                        <ul>
                            <li>
                                <Link to=""><i className="fa fa-futbol-o"></i> Casino</Link>
                            </li>
                            <li>
                                <Link to=""><i className="fa fa-table"></i> Poker</Link>
                            </li>
                            <li>
                                <Link to=""><i className="fa fa-floppy-o"></i> Rouelette</Link>
                            </li>
                            <li>
                                <Link to=""><i className="fa fa-th-large"></i> bingo</Link>
                            </li>
                            <li>
                                <Link to=""><i className="	fa fa-bell-o"></i> baccarat</Link>
                            </li>
                            <li>
                                <Link to=""><i className="fa fa-cc-discover"></i> cards</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
