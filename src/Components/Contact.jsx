import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <div style={{ backgroundColor: '#f4f9f4', padding: '40px 0' }}> {/* Light greenish background */}
            <Container>
                <h2 className="text-center mb-4 text-success">Contact Us</h2>

                <Row className="justify-content-center">
                    <Col md={10} lg={8}> {/* Increased width */}
                        {/* Google Map */}
                        <div className="map-container mb-4 shadow-sm rounded">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.731269450219!2d73.85921641489215!3d18.641400387345033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0d9c0f401f%3A0xd3d7b9c7e9bb8c12!2sBaramati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707577798367"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Company Location"
                            ></iframe>
                        </div>

                        {/* Enquire Now Form */}
                        <div className="enquiry-form p-4 shadow-sm bg-white rounded">
                            <h4 className="mb-3 text-center text-success">Enquire Now</h4>
                            <Form>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Your message..." required />
                                </Form.Group>

                                <Button variant="success" type="submit" className="w-100">Submit</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
