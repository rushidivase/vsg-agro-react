import React, { useState } from 'react';
import { db } from '../firebase'; // Ensure this is correctly set up
import { collection, addDoc } from 'firebase/firestore';

function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        image: ''
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!product.name || !product.description || !product.price || !product.image) {
            alert("Please fill all fields!");
            return;
        }

        try {
            await addDoc(collection(db, 'products'), {
                name: product.name,
                description: product.description,
                price: parseFloat(product.price),
                image: product.image
            });

            alert("Product added successfully!");
            setProduct({ name: '', description: '', price: '', image: '' }); // Reset form
        } catch (error) {
            console.error("Error adding product: ", error);
            alert("Error adding product.");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" name="name" className="form-control" value={product.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea name="description" className="form-control" value={product.description} onChange={handleChange} required></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" name="price" className="form-control" value={product.price} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image URL (Cloudinary)</label>
                    <input type="text" name="image" className="form-control" value={product.image} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
