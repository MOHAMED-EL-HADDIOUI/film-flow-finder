import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import Photo1 from './../assets/img/news/blog1.jpg';
import Photo2 from './../assets/img/news/blog2.jpg';
import Photo3 from './../assets/img/news/blog3.jpg';
import Photo4 from './../assets/img/news/blog4.jpg';

const News = () => {
    return (
        <div>
            <div style={{backgroundColor:"#220000"}} className="container-fluid py-3">
                <div className="row py-5">
                    <div className="col text-white text-center py-5">
                        <h3>OUR LATEST NEWS</h3>
                        <h1><strong>BLOG</strong></h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <ol className="breadcrumb justify-content-center py-3">
                            <li className="breadcrumb-item text-danger"><a>Home</a></li>
                            <li className="breadcrumb-item text-danger">Catalog</li>
                            <li className="breadcrumb-item active">Default Blog</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col text-center py-5">
                            <img src={Photo1} alt=""/>
                            <p className="mt-3 text-secondary">October 7, 2018  by Walter Myers</p>
                            <h3 className=""><strong>"BETTER CALL SAUL" WRITER OFFERS ADVICE</strong></h3>
                            <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla 
                                facilisi etiam dignissim diam quis enim. Scelerisque eleifend donec 
                                pretium vulputate sapi.</p>
                            <Button variant="outline-danger">MOVIES</Button>{' '}
                            <Button variant="outline-danger">NEWS</Button>{' '}
                            <Button variant="outline-danger">PREMIERS</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col text-center py-5">
                            <img src={Photo2} alt=""/>
                            <p className="mt-3 text-secondary">October 7, 2018  by Walter Myers</p>
                            <h3 className=""><strong>"SINGLE PARENTS" LANDS FULL-SEASON ORDER FROM ABC</strong></h3>
                            <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla 
                                facilisi etiam dignissim diam quis enim. Scelerisque eleifend donec 
                                pretium vulputate sapi.</p>
                            <Button variant="outline-danger">MOVIES</Button>{' '}
                            <Button variant="outline-danger">NEWS</Button>{' '}
                            <Button variant="outline-danger">PREMIERS</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col text-center py-5">
                            <img src={Photo3} alt=""/>
                            <p className="mt-3 text-secondary">October 7, 2018  by Walter Myers</p>
                            <h3 className=""><strong>"ANIMALS" CANCELED AFTER THREE SEASONS AT HBO</strong></h3>
                            <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla 
                                facilisi etiam dignissim diam quis enim. Scelerisque eleifend donec 
                                pretium vulputate sapi.</p>
                            <Button variant="outline-danger">MOVIES</Button>{' '}
                            <Button variant="outline-danger">NEWS</Button>{' '}
                            <Button variant="outline-danger">PREMIERS</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col text-center py-5">
                            <img src={Photo4} alt=""/>
                            <p className="mt-3 text-secondary">October 7, 2018  by Walter Myers</p>
                            <h3 className=""><strong>IRON MAN'S AVENGERS 4 ARMOR MAY BE RADICALLY DIFFERENT</strong></h3>
                            <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla 
                                facilisi etiam dignissim diam quis enim. Scelerisque eleifend donec 
                                pretium vulputate sapi.</p>
                            <Button variant="outline-danger">MOVIES</Button>{' '}
                            <Button variant="outline-danger">NEWS</Button>{' '}
                            <Button variant="outline-danger">PREMIERS</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default News
