import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../App.css";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

import cardImg1 from './../../assets/img/product/antman.png';
import cardImg2 from './../../assets/img/product/flash.png';
import cardImg3 from './../../assets/img/product/got.png';
import cardImg4 from './../../assets/img/product/InsidiousTheLastKey.png';
import cardImg5 from './../../assets/img/product/The Nun.png';
import cardImg6 from './../../assets/img/product/man in black.png';

const ProductCatalog = () => {
    return (
        <div>
            <div className="container">
                <div className="mt-5 mb-5 border-bottom">
                    <h1 className="pb-5">PRODUCT CATALOG</h1>
                </div>
                <div className="row" style={{display: "flex", justifyContent: "space-between"}} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img src={cardImg1}/>
                            <div className="card-body">
                                <h4 className="card-text text-left">Ant Man</h4>
                                <p className="card-text text-left" style={{color: "#c4c4c4"}}>2015, USA, Drama, Thriller</p>
                                <div className="container">
                                    <div className="row" style={{display: "flex", justifyContent: "space-between"}}>
                                        <h5 className="card-text font-weight-bold">$ 29.00</h5>
                                        <Button style={{borderRadius: "15px", padding: "0px 15px"}} variant="danger" className="py-0" size="sm">
                                            <Link className="text-light" to="#deets"  style={{textDecoration: "none"}}> BUY MOVIE </Link>       
                                        </Button>
                                    </div>
                                </div>
                            </div>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img src={cardImg2}/>
                            <div className="card-body">
                                <h4 className="card-text text-left">The Flash</h4>
                                <p className="card-text text-left" style={{color: "#c4c4c4"}}>2015, USA, Drama, Thriller</p>
                                <div className="container">
                                    <div className="row" style={{display: "flex", justifyContent: "space-between"}}>
                                        <h5 className="card-text font-weight-bold">$ 29.00</h5>
                                        <Button style={{borderRadius: "15px", padding: "0px 15px"}} variant="danger" className="py-0" size="sm">
                                            <Link className="text-light" to="#deets"  style={{textDecoration: "none"}}> BUY MOVIE </Link>       
                                        </Button>
                                    </div>
                                </div>
                            </div>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img src={cardImg3}/>
                        <div className="card-body">
                            <h4 className="card-text text-left">Game Of Thrones</h4>
                            <p className="card-text text-left" style={{color: "#c4c4c4"}}>2015, USA, Drama, Thriller</p>
                            <div className="container">
                                <div className="row" style={{display: "flex", justifyContent: "space-between"}}>
                                    <h5 className="card-text font-weight-bold">$ 29.00</h5>
                                    <Button style={{borderRadius: "15px", padding: "0px 15px"}} variant="danger" className="py-0" size="sm">
                                        <Link className="text-light" to="#deets"  style={{textDecoration: "none"}}> BUY MOVIE </Link>       
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                 <div className="row" style={{display: "flex", justifyContent: "space-between", marginTop: "70px"}} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img src={cardImg4}/>
                            <div className="card-body">
                                <h4 className="card-text text-left">Insidious The Last Key</h4>
                                <p className="card-text text-left" style={{color: "#c4c4c4"}}>2018, USA, Horror, Thriller</p>
                                <div className="container">
                                <div className="row" style={{display: "flex", justifyContent: "space-between"}}>
                                    <h5 className="card-text font-weight-bold">$ 29.00</h5>
                                    <Button style={{borderRadius: "15px", padding: "0px 15px"}} variant="danger" className="py-0" size="sm">
                                        <Link className="text-light" to="#deets"  style={{textDecoration: "none"}}> BUY MOVIE </Link>
                                    </Button>
                                </div>
                            </div>
                            </div>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img src={cardImg5}/>
                            <div className="card-body">
                                <h4 className="card-text text-left">The Nun</h4>
                                <p className="card-text text-left" style={{color: "#c4c4c4"}}>2018, USA, Horror, Thriller</p>
                                <div className="container">
                                <div className="row" style={{display: "flex", justifyContent: "space-between"}}>
                                    <h5 className="card-text font-weight-bold">$ 29.00</h5>
                                    <Button style={{borderRadius: "15px", padding: "0px 15px"}} variant="danger" className="py-0" size="sm">
                                        <Link className="text-light" to="#deets"  style={{textDecoration: "none"}}> BUY MOVIE </Link> 
                                    </Button>
                                </div>
                            </div>
                            </div>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img src={cardImg6}/>
                        <div className="card-body">
                            <h4 className="card-text text-left">MIB: International</h4>
                            <p className="card-text text-left" style={{color: "#c4c4c4"}}>2019, USA, Comedy, Action</p>
                            <div className="container">
                                <div className="row" style={{display: "flex", justifyContent: "space-between"}}>
                                    <h5 className="card-text font-weight-bold">$ 29.00</h5>
                                    <Button style={{borderRadius: "15px", padding: "0px 15px"}} variant="danger" className="py-0" size="sm">
                                        <Link className="text-light" to="#deets"  style={{textDecoration: "none"}}> BUY MOVIE </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                 </div>
            </div>
        </div>
    )
}

export default ProductCatalog;
