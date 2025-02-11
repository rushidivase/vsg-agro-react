import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

const products = [
    { id: 1, name: '5 Tyne Cultivator for Power Tiller', image: '/vsg-agro-react/images/p (1).png', price: '$15,000', description: 'Ideal for tough terrains.' },
    { id: 2, name: 'Advanced Harvester', image: '/vsg-agro-react/images/p2.jpeg', price: '$25,000', description: 'Boosts harvesting efficiency.' },
    { id: 3, name: 'Irrigation System', image: '/vsg-agro-react/images/irrigation.jpg', price: '$5,000', description: 'Smart water management solutions.' }
];

function ProductDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <h2 className="text-center my-5">Product not found</h2>;
    }

    return (
        <Container className="my-5">
            <Card className="shadow-lg p-4">
                <Card.Img variant="top" src={product.image} className="product-image" />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <h4 className="text-success">{product.price}</h4>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ProductDetails;
