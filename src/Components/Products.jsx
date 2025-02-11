import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: '5 Tyne Cultivator for Power Tiller', image: '/vsg-agro-react/images/p (1).png', price: '$15,000', description: 'Ideal for tough terrains.' },
    { id: 2, name: 'Advanced Harvester', image: '/vsg-agro-react/images/p2.jpeg', price: '$25,000', description: 'Boosts harvesting efficiency.' },
    { id: 3, name: 'Irrigation System', image: '/vsg-agro-react/images/irrigation.jpg', price: '$5,000', description: 'Smart water management solutions.' }
];

function Products() {
    const [isGridView, setIsGridView] = useState(true);

    return (
        <Container className="my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="product-heading">Our Products</h2>
                <div>
                    <Button variant={isGridView ? "success" : "outline-success"} className="me-2" onClick={() => setIsGridView(true)}>Grid View</Button>
                    <Button variant={!isGridView ? "success" : "outline-success"} onClick={() => setIsGridView(false)}>List View</Button>
                </div>
            </div>

            <Row className={isGridView ? 'g-4' : 'g-3'}>
                {products.map(product => (
                    <Col key={product.id} md={isGridView ? 4 : 12}>
                        <Card className="product-card shadow-sm">
                            <Row className={isGridView ? '' : 'g-0'}>
                                <Col md={isGridView ? 12 : 4}>
                                    <Card.Img variant="top" src={product.image} className="product-image" />
                                </Col>
                                <Col md={isGridView ? 12 : 8}>
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <h5 className="text-success">{product.price}</h5>
                                        
                                        {/* 🗂️ View Details Link */}
                                        <Link to={`/product/${product.id}`}>
                                            <Button variant="primary">View Details</Button>
                                        </Link>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;
