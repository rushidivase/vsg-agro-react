import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutUs() {
    return (
        <Container fluid className="about-us-section py-5">
            <h1 className="text-center mb-4 about-heading">About VSG Agro Equipments</h1>
            <p className="text-center about-intro">
                Driving agricultural excellence with cutting-edge equipment designed to empower farmers.
            </p>

            <Row className="justify-content-center my-5">
                <Col md={4} className="mb-4">
                    <Card className="shadow about-card">
                        <Card.Body>
                            <Card.Title>🌱 Our Mission</Card.Title>
                            <Card.Text>
                                To revolutionize farming with advanced, reliable, and sustainable equipment that enhances productivity and efficiency for every farmer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="shadow about-card">
                        <Card.Body>
                            <Card.Title>🚜 Why Choose Us?</Card.Title>
                            <Card.Text>
                                We offer state-of-the-art agricultural machinery with unmatched durability, expert support, and a passion for farming innovation.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="shadow about-card">
                        <Card.Body>
                            <Card.Title>🌍 Our Vision</Card.Title>
                            <Card.Text>
                                To become the leading provider of smart agro solutions, empowering farmers across regions to achieve sustainable growth.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


{/* //For Future Update
            <Row className="justify-content-center">
                <Col md={10}>
                    <img
                        src="/images/team.jpg"  // Add a relevant team image here
                        alt="Our Team"
                        className="img-fluid rounded shadow team-image"
                    />
                </Col>
            </Row> */}
        </Container>
    );
}

export default AboutUs;
