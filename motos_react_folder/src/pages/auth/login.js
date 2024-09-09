import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

import BackgroundImage from '../../assets/images/bg/1.jpg';
import Logo from '../../assets/images/logo-icon-64.png';

/**
 * Login component
 */
export default function Login() {
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
                                                <Card className="login-page border-0" style={{ zIndex: 1 }}>
                                                    <CardBody className="p-0">
                                                        <h4 className="card-title">Login</h4>
                                                        <form className="login-form mt-4">
                                                            <Row>
                                                                <Col lg={12} >
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                                        <input type="email" className="form-control" placeholder="Email" name="email" required />
                                                                    </div>
                                                                </Col>

                                                                <Col lg={12} >
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Password <span className="text-danger">*</span></label>
                                                                        <input type="password" className="form-control" placeholder="Password" required />
                                                                    </div>
                                                                </Col>

                                                                <Col lg={12} >
                                                                    <div className="d-flex justify-content-between">
                                                                        <div className="mb-3">
                                                                            <label className="form-check-label" >Remember me</label>
                                                                        </div>
                                                                        <p className="forgot-pass mb-0"><Link to="/auth-reset-password" className="text-dark fw-semibold">Forgot password ?</Link></p>
                                                                    </div>
                                                                </Col>

                                                                <div className="col-lg-12 mb-0">
                                                                    <div className="d-grid">
                                                                        <button className="btn btn-primary">Sign in</button>
                                                                    </div>
                                                                </div>

                                                                <div className="col-12">
                                                                    <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account ?</small> <Link to="/auth-signup" className="text-dark fw-semibold">Sign Up</Link></p>
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