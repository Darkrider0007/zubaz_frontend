import React, { Component } from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

import BackgroundImage from '../../assets/images/bg/1.jpg';
import Logo from '../../assets/images/logo-icon-64.png';

/**
 * Signup component
 */
export default function Signup() {
    return (
        <>
            <div className="back-to-home">
                <Link to="#" className="back-button btn btn-icon btn-primary"><Icon.ArrowLeft className="icons" /></Link>
            </div>
            {/* Hero Start */}
            <section className="cover-user bg-white">
                <div className="container-fluid px-0">
                    <Row className="g-0 position-relative">
                        <Col lg={4} className="cover-my-30 order-2">
                            <div className="cover-user-img d-flex align-items-center">
                                <Row>
                                    <div className="col-12">
                                        <div className="d-flex flex-column auth-hero">
                                            <div className="mt-md-5 text-center">
                                                <Link to="#"><img src={Logo} alt="" /></Link>
                                            </div>
                                            <div className="title-heading my-lg-auto">
                                                <Card className="border-0" style={{ zIndex: 1 }}>
                                                    <CardBody className="p-0">
                                                        <h4 className="card-title">Signup</h4>
                                                        <form className="login-form mt-4">
                                                            <Row>
                                                                <Col md={6} >
                                                                    <div className="mb-3">
                                                                        <label className="form-label">First name <span className="text-danger">*</span></label>
                                                                        <input type="text" className="form-control" placeholder="First Name" name="s" required />
                                                                    </div>
                                                                </Col>

                                                                <Col md={6} >
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Last name <span className="text-danger">*</span></label>
                                                                        <input type="text" className="form-control" placeholder="Last Name" name="s" required />
                                                                    </div>
                                                                </Col>

                                                                <Col md={12} >
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                                        <input type="email" className="form-control" placeholder="Email" name="email" required />
                                                                    </div>
                                                                </Col>
                                                                <Col md={12}>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Password <span className="text-danger">*</span></label>
                                                                        <input type="password" className="form-control" placeholder="Password" required />
                                                                    </div>
                                                                </Col>

                                                                <Col md={12}>
                                                                    <div className="mb-3">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                            <label className="form-check-label" >I Accept <Link to="#" className="text-primary">Terms And Condition</Link></label>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                <div className="col-lg-12 mb-0">
                                                                    <div className="d-grid">
                                                                        <button className="btn btn-primary">Register</button>
                                                                    </div>
                                                                </div>

                                                                <div className="mx-auto">
                                                                    <p className="mb-0 mt-3"><small className="text-dark me-2">Already have an account ?</small> <Link to="/auth-login" className="text-dark fw-bold">Sign in</Link></p>
                                                                </div>
                                                            </Row>
                                                        </form>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                            <div className="mb-md-5 text-center">
                                                <p className="mb-0 text-muted">© {(new Date().getFullYear())}{" "} Motos. Design with <i className="mdi mdi-heart text-danger"></i> by <Link to="#" className="text-reset">Shreethemes</Link>.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </Col>

                        <div className="col-lg-8 offset-lg-4 padding-less img order-1" style={{ backgroundImage: `url(${BackgroundImage})` }} data-jarallax='{"speed": 0.5}'></div>
                    </Row>
                </div>
            </section>
            {/* end section */}
        </>
    )
}
