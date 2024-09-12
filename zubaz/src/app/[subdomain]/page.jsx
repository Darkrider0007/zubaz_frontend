"use client";
// export async function generateStaticParams() {
//   const subdomains = ["sub1", "sub2", "sub3"]; // Replace with your subdomains or fetch from an API

//   return subdomains.map((subdomain) => ({
//     subdomain,
//   }));
// }

// export default function SubdomainPage({ params }) {
//   const { subdomain } = params;
//   return (
//     <div>
//       <h1>Subdomain: {subdomain}</h1>
//       <p>Content for {subdomain}.yourdomain.com</p>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";

import {
  Menu,
  Video,
  Heart,
  ShoppingCart,
  Dribbble,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Mail as Envelope,
  File,
  Camera,
  ArrowUp,
} from "react-feather";

import { Link as Link2 } from "react-scroll";
import Link from "next/link";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

// Modal Video
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

import AgencyFeature from "../../components/Section/Template1/AgencyFeature.js";
// import Review from "../../../components/Section/Template1/Review";

import BackgroundImage1 from "../../assets/images/bg/5.jpg";
import AmazonImage from "../../assets/images/client/amazon.svg";
import GoogleImage from "../../assets/images/client/google.svg";
import LenovoImage from "../../assets/images/client/lenovo.svg";
import PaypalImage from "../../assets/images/client/paypal.svg";
import ShopifyImage from "../../assets/images/client/shopify.svg";
import SpotifyImage from "../../assets/images/client/spotify.svg";
import MapImage from "../../assets/images/map.png";
import AboutImage from "../../assets/images/about.jpg";
import CTAImage from "../../assets/images/bg/cta.png";
import Logodark from "../../assets/images/logo-dark.png";
import Logolight from "../../assets/images/logo-light.png";

import Image1 from "../../assets/images/portfolio/11.jpg";
import Image2 from "../../assets/images/portfolio/12.jpg";
import Image3 from "../../assets/images/portfolio/13.jpg";
import Image4 from "../../assets/images/portfolio/14.jpg";
import Image5 from "../../assets/images/portfolio/15.jpg";
import Image6 from "../../assets/images/portfolio/16.jpg";
import Image7 from "../../assets/images/portfolio/17.jpg";
import Image8 from "../../assets/images/portfolio/18.jpg";
import Image9 from "../../assets/images/portfolio/19.jpg";
import Logo from "../../assets/images/logo-icon-64.png";
import "../../assets/scss/themes.scss";
import { Inter, Raleway } from "next/font/google";
import "~/assets/css/bootstrap.min.css";
import "~/assets/css/app.css";
import "~/assets/css/main.css";
import "~/assets/css/react-adjustment.css";
import "../../assets/scss/themes.scss";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
];

const Agency = () => {
  const [isMenuOpen, setMenu] = useState(true);
  const [videoModal, setVideoModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filterPortfolio, setFilterPortfolio] = useState(null);
  const [arrow, setArrow] = useState(false);
  const [iscontact, contactModal] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };

  const portfolioList = [
    { image: Image1, title: "Iphone mockup", subtext: "Branding" },
    { image: Image2, title: "Iphone mockup", subtext: "Designing" },
    { image: Image3, title: "Iphone mockup", subtext: "Branding" },
    { image: Image4, title: "Iphone mockup", subtext: "Photography" },
    { image: Image5, title: "Iphone mockup", subtext: "Development" },
    { image: Image6, title: "Iphone mockup", subtext: "Development" },
  ];

  const matchsubtext = (subtext) => {
    setFilterPortfolio(subtext);
  };

  const filterData = filterPortfolio
    ? portfolioList.filter((item) => item.subtext === filterPortfolio)
    : portfolioList;

  const windowScroll = () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY >= 50) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  };

  const openModal = () => {
    setVideoModal(true);
  };

  const toggleMenu = () => {
    setMenu(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", windowScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);

  return (
    <>
      <div>
        <nav
          id="navbar"
          className="navbar navbar-expand-lg nav-light fixed-top sticky">
          <div className="container">
            <NavbarBrand href="/">
              <span className="logo-light-mode">
                <img src={Logolight} alt="" />
                <img src={Logodark} alt="" />
              </span>
              <img src={Logolight} alt="" />
            </NavbarBrand>
            <NavbarToggler onClick={toggleMenu}>
              <Menu />
            </NavbarToggler>

            <Collapse
              className={`navbar-collapse ${isMenuOpen ? "hidden" : "show"}`}>
              <Nav
                className="navbar-nav ms-auto mb-2 mb-lg-0"
                id="navbar-navlist">
                <NavItem>
                  <Link2
                    activeClass="active"
                    to="home"
                    spy
                    smooth
                    duration={500}
                    className="nav-link">
                    Home
                  </Link2>
                </NavItem>
                <NavItem>
                  <Link2
                    activeClass="active"
                    to="feature"
                    spy
                    smooth
                    duration={500}
                    className="nav-link">
                    Features
                  </Link2>
                </NavItem>
                <NavItem>
                  <Link2
                    activeClass="active"
                    to="portfolio"
                    spy
                    smooth
                    duration={500}
                    className="nav-link">
                    Product
                  </Link2>
                </NavItem>
                <NavItem>
                  <Link2
                    activeClass="active"
                    to="review"
                    spy
                    smooth
                    duration={500}
                    className="nav-link">
                    Testimonial
                  </Link2>
                </NavItem>
                <NavItem>
                  <Link2
                    className="nav-link"
                    to="#"
                    onClick={() => contactModal(true)}>
                    Contact Us
                  </Link2>
                </NavItem>
              </Nav>

              <ul className="list-inline menu-social mb-0 ps-lg-4 ms-2">
                <li className="list-inline-item">
                  <Link2 to="#" className="btn btn-primary">
                    Start Project
                  </Link2>
                </li>
              </ul>
            </Collapse>
          </div>
        </nav>

        <Modal isOpen={iscontact} toggle={() => contactModal(!iscontact)}>
          <ModalHeader>Contact Us</ModalHeader>
          <ModalBody>
            <form method="post" name="myForm">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label fw-normal">
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name :"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label fw-normal">
                      Your Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email :"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label fw-normal">Subject</label>
                    <input className="form-control" placeholder="Subject :" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label fw-normal">
                      Comments <span className="text-danger">*</span>
                    </label>
                    <textarea
                      rows={4}
                      className="form-control"
                      placeholder="Message :"></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary d-block w-100">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </ModalBody>
        </Modal>

        <section
          className="bg-home d-flex align-items-center"
          style={{ background: `url(${BackgroundImage1.src})` }}
          id="home">
          <div className="bg-overlay bg-linear-gradient-3"></div>
          <Container>
            <Row>
              <Col>
                <div className="title-heading">
                  <h1 className="heading text-white title-dark mb-4">
                    Build your audience <br /> and sell more
                  </h1>
                  <p className="para-desc text-white-50">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion-centered campaigns.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link2 to="#" className="btn btn-primary m-1">
                      Get Started
                    </Link2>
                    <Link2
                      to="#"
                      data-type="youtube"
                      data-id="yba7hPeTSjk"
                      onClick={openModal}
                      className="btn btn-icon btn-pills btn-primary m-1 lightbox">
                      <Video className="icons" />
                    </Link2>
                    <span className="text-uppercase text-white-50 small align-middle ms-2">
                      Watch Now
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section">
          <Container>
            <div style={{ background: `url(${MapImage.src}) center center` }}>
              <Row className="align-items-center">
                <Col lg={6} md={6}>
                  <div className="position-relative me-lg-5">
                    <img
                      src={AboutImage.src}
                      className="rounded img-fluid mx-auto d-block"
                      alt=""
                    />
                    <div className="play-icon">
                      <Link2
                        to="#"
                        onClick={openModal}
                        data-type="youtube"
                        data-id="yba7hPeTSjk"
                        className="play-btn lightbox">
                        <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                      </Link2>
                    </div>
                  </div>
                </Col>

                <Col lg={6} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title">
                    <h4 className="title mb-3">
                      Right Solutions Give You A <br /> Hassle Free Business
                    </h4>
                    <p className="text-muted">
                      This prevents repetitive patterns from impairing the
                      overall visual impression and facilitates the comparison
                      of different typefaces. Furthermore, it is advantageous
                      when the dummy text is relatively realistic so that the
                      layout impression of the final publication is not
                      compromised.
                    </p>
                    <ul className="list-unstyled text-muted">
                      <li className="mb-1">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Beautiful and easy to understand animations
                      </li>
                      <li className="mb-1">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Our Talented &amp; Experienced Marketing Agency
                      </li>
                      <li className="mb-1">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Theme advantages are pixel perfect design
                      </li>
                    </ul>

                    <div className="d-inline-block">
                      <div className="pt-3 d-flex align-items-center border-top">
                        <i className="uil uil-envelope text-primary me-2 fs-1"></i>
                        <div className="content">
                          <p className="mb-0">Need More Help?</p>
                          <Link2 to="#" className="text-dark h6">
                            Ask us your question
                          </Link2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        {/* Feature start */}
        <AgencyFeature />

        <Container className="mt-100 mt-60" id="portfolio">
          <Row className="justify-content-center">
            <div className="col-12 filters-group-wrap text-center">
              <div className="filters-group">
                <ul className="container-filter mb-4 categories-filter list-unstyled filter-options">
                  <li
                    className={`${
                      filterPortfolio === "All" ? "active" : ""
                    } list-inline-item categories h6 position-relative text-dark`}
                    onClick={() => matchsubtext("All")}>
                    All
                  </li>
                  <li
                    className={`${
                      filterPortfolio === "Branding" ? "active" : ""
                    } list-inline-item categories h6 position-relative text-dark`}
                    onClick={() => matchsubtext("Branding")}>
                    Branding
                  </li>
                  <li
                    className={`${
                      filterPortfolio === "Designing" ? "active" : ""
                    } list-inline-item categories h6 position-relative text-dark`}
                    onClick={() => matchsubtext("Designing")}>
                    Designing
                  </li>
                  <li
                    className={`${
                      filterPortfolio === "Photography" ? "active" : ""
                    } list-inline-item categories h6 position-relative text-dark`}
                    onClick={() => matchsubtext("Photography")}>
                    Photography
                  </li>
                  <li
                    className={`${
                      filterPortfolio === "Development" ? "active" : ""
                    } list-inline-item categories h6 position-relative text-dark`}
                    onClick={() => matchsubtext("Development")}>
                    Development
                  </li>
                </ul>
              </div>
            </div>
          </Row>

          <Row className="g-4">
            {filterData.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 col-12 picture-item"
                key={index}>
                <div className="card border-0 project project-primary position-relative d-block overflow-hidden rounded">
                  <div className="card-body p-0">
                    <img
                      src={item.image.src}
                      className="img-fluid"
                      alt="workimage"
                    />
                    <div className="overlay-work bg-dark"></div>
                    <div className="content bg-white p-3 rounded shadow start-0 end-0 bottom-0 m-3">
                      <Link2 to="#" className="text-dark title h5">
                        {item.title}
                      </Link2>
                      <h6 className="text-muted fw-normal mt-2 tag mb-0">
                        {item.subtext}
                      </h6>
                    </div>
                    <div className="icons text-center">
                      <Link2
                        to="#"
                        onClick={() => setIsOpen(true)}
                        className="btn btn-icon btn-pills lightbox">
                        <Camera className="fea icon-sm image-icon" />
                      </Link2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Row>

          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
              }
            />
          )}

          <Row className="text-center">
            <div className="col-12 mt-4 pt-2">
              <Link2 to="#" className="btn btn-pills btn-primary">
                See works
              </Link2>
            </div>
          </Row>
        </Container>

        {/* Project start */}
        {/* <Review /> */}

        {/* CTA Start */}
        <section
          className="section"
          data-jarallax='{"speed": 0.5}'
          style={{ background: `url(${CTAImage.src}) center` }}>
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <div className="section-title text-center">
                  <h4 className="title text-white mb-3">
                    Ready to start your next web project now?
                  </h4>
                  <p className="text-white-50 mx-auto para-desc mb-0">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion-centered bootstrap pages.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link2 to="#" className="btn btn-primary">
                      Get Started !
                    </Link2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA End */}

        {/* Footer Start */}
        <footer className="bg-footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="py-4">
                  <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                      <img src={AmazonImage} alt="" />
                    </div>

                    <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                      <img src={GoogleImage} alt="" />
                    </div>

                    <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                      <img src={LenovoImage} alt="" />
                    </div>

                    <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                      <img src={PaypalImage} alt="" />
                    </div>

                    <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                      <img src={ShopifyImage} alt="" />
                    </div>

                    <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                      <img src={SpotifyImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-py-30 footer-bar">
            <div className="container text-center">
              <div className="row align-items-center justify-content-center">
                <div className="col-sm-8">
                  <div className="text-sm-start">
                    <p className="mb-0">
                      © {new Date().getFullYear()} Motos. Design with{" "}
                      <Heart className="text-danger" /> by{" "}
                      <Link2 to="#" className="text-reset">
                        Shreethemes
                      </Link2>
                      .
                    </p>
                  </div>
                </div>

                <div className="col-sm-4 mt-4 mt-sm-0">
                  <ul className="list-unstyled social-icon text-sm-end foot-social-icon mb-0">
                    <li className="list-inline-item">
                      <Link2 to="#" className="rounded">
                        <ShoppingCart title="Buy Now" />
                      </Link2>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link2 to="#" className="rounded">
                        <Dribbble title="dribbble" />
                      </Link2>
                    </li>
                    <li className="list-inline-item ms-1">
                      {/* <Link2 to="#" className="rounded">
                        {/* <Behance title="Behance" /> */}
                      {/* <FontAwesomeIcon icon="fa-brands fa-behance" /> */}
                      {/* </Link2> */}
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link2 to="#" className="rounded">
                        <Linkedin title="Linkedin" />
                      </Link2>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link2 to="#" className="rounded">
                        <Facebook title="facebook" />
                      </Link2>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link2 to="#" className="rounded">
                        <Instagram title="instagram" />
                      </Link2>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link2 to="#" className="rounded">
                        <Twitter title="twitter" />
                      </Link2>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link2 to="#" className="rounded">
                        <Envelope title="email" />
                      </Link2>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link2 to="#" className="rounded">
                        <File title="customization" />
                      </Link2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Back to top */}
        <Link
          // to="home"
          href={""}
          style={{ display: arrow ? "block" : "none" }}
          id="back-to-top"
          className="back-to-top rounded-pill fs-5">
          <ArrowUp className="fea icon-sm icons align-middle" />
        </Link>

        {/* Popup Video */}
        <ModalVideo
          channel="youtube"
          isOpen={videoModal}
          videoId="yba7hPeTSjk"
          onClose={() => setVideoModal(false)}
        />
      </div>
    </>
  );
};

export default Agency;
