import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutUs from './AboutUs';
import Products from './Products';
import Contact from './Contact';

function Home() {
    return (
        <div>
            <Container fluid className="my-2">
                <section id="home" className="mb-5">
                    <Row className="justify-content-center carousel-container bg-light rounded mb-4 p-3">
                        <Col md={8} className="p-3 rounded">
                            <div id="productCarousel" className="carousel slide shadow-lg" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="/vsg-agro-react/images/c3.jpeg" className="d-block w-100 carousel-image" alt="Tractor" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Powerful Tractor</h5>
                                            <p>Built for tough terrains.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/vsg-agro-react/images/c2.jpeg" className="d-block w-100 carousel-image" alt="Harvester" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Advanced Harvester</h5>
                                            <p>Efficiency in every row.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/vsg-agro-react/images/c1.jpeg" className="d-block w-100 carousel-image" alt="Irrigation System" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Irrigation System</h5>
                                            <p>Smart water management solutions.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </Col>
                    </Row>

                    {/* <Row className="justify-content-center poster-container mb-4 bg-light">
                        <Col md={10} className="p-3 rounded">
                            <img
                                className="img-fluid rounded w-100 mb-4"
                                src="/vsg-agro-react/images/poster1.png"
                                alt="Poster"
                            />
                        </Col>
                    </Row> */}
                </section>

                <section id="about-us">
                    <AboutUs />
                </section>

                <section id="products" className="mb-5">
                    <Products />
                </section>

                <section id="contact" className="mb-5">
                  <Contact />
                </section>
            </Container>
        </div>
    );
}

export default Home;
