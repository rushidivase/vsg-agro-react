import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: '5 Tyne Cultivator for Power Tiller', image: '/vsg-agro-react/images/p (1).png', price: '$15,000', description: 'Ideal for tough terrains.' },
    { id: 2, name: 'Advanced Harvester', image: '/vsg-agro-react/images/p2.jpeg', price: '$25,000', description: 'Boosts harvesting efficiency.' },
    { id: 3, name: 'Irrigation System', image: '/vsg-agro-react/images/irrigation.jpg', price: '$5,000', description: 'Smart water management solutions.' }
];

function Products() {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4 product-heading">Our Products</h2>
            <Row className="g-4">
                {products.map(product => (
                    <Col key={product.id} md={4}>
                        <Card className="product-card shadow-sm h-100 border-0">
                            <Card.Img variant="top" src={product.image} className="product-image p-3" />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <h5 className="text-success">{product.price}</h5>
                                <Link to={`/product/${product.id}`}>
                                    <Button variant="outline-primary" className="w-100 mt-2">View Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;
