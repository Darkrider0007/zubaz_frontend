import React from "react";
import { Col, Row } from "reactstrap";

import BackgroudImage from "../assets/images/bg/6.jpg";

/**
 * Agency feature section
 */
export default function AgencyFeature() {
    const AgencyFeature = [
        {
            id: '1',
            icon: 'mdi mdi-language-php',
            title: "Financial Planning",
            description: "Horem ipsum dolor consectetuer Lorem simply dummy orem commo."
        },
        {
            id: '2',
            icon: 'mdi mdi-file-image',
            title: "Quality Resourcing",
            description: 'When an unknown printer took a galley of type and scrambled it.'
        },
        {
            id: '3',
            icon: 'uil uil-camera',
            title: "Business Services",
            description: 'It has survived not only five centuries but leap in typesetting.'
        },
        {
            id: '4',
            icon: 'mdi mdi-google-glass',
            title: "Software And Research",
            description: 'It was popularised with the release of Letraset sheets sit amet.'
        }, {
            id: '5',
            icon: 'mdi mdi-source-commit',
            title: "Travel And Aviation",
            description: 'It is a long established fact that a reader will be distracted.'
        }, {
            id: '6',
            icon: 'mdi mdi-code-tags',
            title: "Healthcare Services",
            description: 'A point of using lorem ipsum is that it has normal distribution.'
        },
    ]


    return (
        <>
            {/* Start Features  */}
            <section style={{ background: `url(${BackgroudImage}) top` }} id="feature">
                <div className="container-fluid px-0">
                    <Row className="g-0">
                        <Col lg={6} className="order-1 order-lg-2 py-5 py-lg-0">
                            <div className="py-5 py-lg-0 my-5 my-lg-0"></div>
                        </Col>

                        <Col lg={6} className="order-2 order-lg-1">
                            <div className="bg-light px-4 py-5 px-md-5">
                                <div className="row">
                                    <div className="col">
                                        <div className="section-title mb-4 pb-2">
                                            <h4 className="title mb-3">Our Features</h4>
                                            <p className="text-muted para-desc mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                                        </div>
                                    </div>
                                </div>

                                <Row>
                                    {AgencyFeature.map((item, key) => (
                                        <Col md={6} className="mt-4 pt-2" key={key}>
                                            <div className="features feature-primary">
                                                <div className="feature-icon text-center">
                                                    <i className={item.icon + " rounded h4"}></i>
                                                </div>
                                                <div className="flex-1 mt-4">
                                                    <h5 className="mt-0">{item.title}</h5>
                                                    <p className="text-muted mb-0">{item.description}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            {/* End Features  */}
        </>
    )
};