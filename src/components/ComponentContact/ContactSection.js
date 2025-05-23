import React from 'react';
import './../../App.css';

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ContactSection = () => {
    return (
        <div>
            <div className="container">
                <div className="mt-5 mb-5 border-bottom">
                    <h1 className="pb-5">Contact Us</h1>
                </div>
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col" style={{marginLeft: "125px"}}>
                                <div className="form-group">
                                    <input type="text" style={{width: "400px"}} className="form-control" placeholder="Your First Name"/>
                                </div>
                            </div>
                            <div className="col" style={{marginRight: "125px"}}>
                                <div className="form-group">
                                    <input type="text" style={{width: "400px"}} className="form-control" placeholder="Your Last Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group" style={{marginLeft: "125px"}}>
                                    <input type="Email" style={{width: "400px"}} className="form-control" placeholder="Your Email"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group" style={{marginRight: "125px"}}>
                                    <input type="text" style={{width: "400px"}} className="form-control" placeholder="Your phone"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group" style={{margin: "0px 125px"}}>
                            <textarea className="form-control" rows="7" placeholder="Message"/>
                        </div>
                        <Button variant="danger" className="mt-5" size="sm" style={{ padding: "10px 25px"}}>
                        <Link className="text-light" to="#deets" style={{textDecoration: "none"}}>
                            SEND MESSAGE
                        </Link>
                        </Button>
                    </form>
                    <div className="row" style={{ display: "flex", justifyContent: "space-around",marginTop: "100px"}}>
                        <div className="col-auto text-left">
                            <h4 style={{fontWeight: "bold"}}>Post Address</h4>
                            <p className="text-left mb-0">Moov</p>
                            <p className="text-left mb-0">Jl.Pondok kecil, no.43,</p>
                            <p className="text-left">Green Palace</p>
                        </div>
                        <div className="col-auto text-left">
                            <h4 style={{fontWeight: "bold"}}>Phone</h4>
                            <p className="text-left">Phone: +62 899 554 9124</p>
                            <p className="text-left">Fax: +62 899 234 8790</p>
                        </div>
                        <div className="col-auto text-left">
                            <h4 style={{fontWeight: "bold"}}>Email</h4>
                            <p className="text-left"> Moov@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
