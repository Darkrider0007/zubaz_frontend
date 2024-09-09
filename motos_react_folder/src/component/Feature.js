import React from "react";
import { Col, Container, Card, Row } from "reactstrap";
import { Link } from "react-router-dom";

import Feature1 from "../assets/images/1.png";
import Feature2 from "../assets/images/2.png";

export default function Feature() {
    const services = [
        {
            id: 'service1',
            icon: 'airplay',
            title: "Design & Development",
            description: "Various versions have evolved over the years, sometimes by on purpose injected humour and the like."
        },
        {
            id: 'service2',
            icon: 'circle-layer',
            title: "Management & Marketing",
            description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est'
        },
        {
            id: 'service3',
            icon: 'fire',
            title: "Stratagy & Research",
            description: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias'
        },
        {
            id: 'service4',
            icon: 'flip-h',
            title: "Easy To Use",
            description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled'
        }, {
            id: 'service5',
            icon: 'mountains',
            title: "Daily Reports",
            description: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain'
        }, {
            id: 'service6',
            icon: 'wind',
            title: "Real Time Zone",
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
    ]

    return (
        <>
            {/*  Services START  */}
            <section className="section" id="features">
                <Container>
                    <Row className="justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h3 className="title mb-3">Our Features</h3>
                                <p className="text-muted mx-auto para-desc mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        {services.map((item, key) => (
                            <Col lg={4} md={6} className="mt-5 pt-4" key={key}>
                                <Card className="features feature-primary feature-shadow-md shadow rounded p-4 pt-5">
                                    <div className="icon-style mt-n80 position-relative text-center shadow rounded bg-white mb-4">
                                        <i className={"h4 mb-0 uil uil-" + item.icon}></i>
                                    </div>
                                    <div className="content">
                                        <Link to="#" className="title text-dark h5">{item.title}</Link>
                                        <p className="text-muted mt-3">{item.description}</p>
                                        <Link to="#" className="text-dark title">Read More <i className="uil uil-arrow-right"></i> </Link>
                                    </div>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                </Container>

                <Container className="mt-100 mt-60">
                    <Row>
                        <Col lg={5}>
                            <div className="section-title">
                                <h4 className="section-title mb-3 mb-lg-0">Some of the most importent <br /> things in this tools</h4>
                            </div>
                        </Col>

                        <Col lg={7}>
                            <p className="text-muted para-desc mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={6} md={6}>
                            <img src={Feature1} className="img-fluid shadow-md rounded-md" alt="" />
                        </Col>

                        <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-lg-5">
                                <h4 className="title mb-4">Great Product Analytics With Real Problem</h4>
                                <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                                <ul className="list-unstyled text-muted">
                                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                                </ul>
                                <Link to="#" className="mt-3 text-primary">Find Out More <i className="uil uil-angle-right-b"></i></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={6} md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title me-lg-5">
                                <h4 className="title mb-4">Get Notified About Importent Email</h4>
                                <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                                <ul className="list-unstyled text-muted">
                                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                                </ul>
                                <Link to="#" className="mt-3 text-primary">Find Out More <i className="uil uil-angle-right-b"></i></Link>
                            </div>
                        </Col>

                        <Col lg={6} md={6} className="order-1 order-md-2">
                            <img src={Feature2} className="img-fluid shadow-md rounded-md" alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};