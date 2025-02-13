import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [userDetails, setUserDetails] = useState({ name: '', mobile: '' });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'products'));
                const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsData);
            } catch (err) {
                setError("Failed to fetch products");
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!userDetails.name || !userDetails.mobile) {
            alert("Please fill in all details.");
            return;
        }

        try {
            await addDoc(collection(db, 'cart'), {
                productId: selectedProduct.id,
                productName: selectedProduct.name,
                productImage: selectedProduct.image,
                productPrice: selectedProduct.price,
                userName: userDetails.name,
                userMobile: userDetails.mobile,
                timestamp: new Date()
            });

            alert("Product added to cart successfully!");
            setShowModal(false);
            setUserDetails({ name: '', mobile: '' });
        } catch (err) {
            console.error("Error adding to cart:", err);
            alert("Failed to add product to cart.");
        }
    };

    if (loading) return <h3 className="text-center">Loading products...</h3>;
    if (error) return <h3 className="text-danger text-center">{error}</h3>;

    return (
        <Container className="my-5">
            <h2 className="product-heading">Our Products</h2>
            <Row className="g-4">
                {products.length === 0 && (
                    <h4 className="text-center text-muted">No products available.</h4>
                )}
                {products.map(product => (
                    <Col key={product.id} md={4}>
                        <Card className="product-card shadow-sm">
                            <Card.Img variant="top" src={product.image} alt={product.name} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <h5 className="text-success">₹{product.price}</h5>
                                <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Modal for User Details */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Your Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={userDetails.name}
                                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter your mobile number"
                                value={userDetails.mobile}
                                onChange={(e) => setUserDetails({ ...userDetails, mobile: e.target.value })}
                                required
                            />
                        </Form.Group>
                        <Button variant="success" type="submit">Add to Cart</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default Products;
