import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Alert, Spinner, Modal } from 'react-bootstrap';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'cart'));
                const cartData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setCartItems(cartData);
            } catch (err) {
                setError("Failed to fetch cart items.");
                console.error("Error fetching cart items:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    const handleRemoveItem = async () => {
        if (!itemToDelete) return;

        try {
            await deleteDoc(doc(db, 'cart', itemToDelete));
            setCartItems(cartItems.filter(item => item.id !== itemToDelete));
            setShowModal(false);
        } catch (err) {
            console.error("Error removing item:", err);
            alert("Failed to remove item.");
        }
    };

    if (loading) {
        return (
            <Container className="text-center my-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    if (error) return <h3 className="text-danger text-center">{error}</h3>;

    return (
        <Container className="my-5">
            <h2 className="cart-heading text-center mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <Alert variant="info" className="text-center">Your cart is empty.</Alert>
            ) : (
                <Row className="justify-content-center g-4">
                    {cartItems.map(item => (
                        <Col key={item.id} md={6} lg={4}>
                            <Card className="cart-card shadow-sm">
                                <Card.Img 
                                    variant="top" 
                                    src={item.productImage} 
                                    alt={item.productName} 
                                    style={{ height: '200px', objectFit: 'cover' }} 
                                />
                                <Card.Body>
                                    <Card.Title>{item.productName}</Card.Title>
                                    <h5 className="text-success">₹{item.productPrice}</h5>
                                    <p><strong>Name:</strong> {item.userName}</p>
                                    <p><strong>Mobile:</strong> {item.userMobile}</p>
                                    <Button 
                                        variant="danger" 
                                        onClick={() => { setItemToDelete(item.id); setShowModal(true); }}
                                    >
                                        Remove
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}

            {/* Delete Confirmation Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to remove this item from your cart?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={handleRemoveItem}>Remove</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Cart;
