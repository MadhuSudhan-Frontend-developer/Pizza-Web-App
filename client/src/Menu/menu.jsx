// client/src/Menu/menu.jsx

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function Menu() {
    // State to manage cart items
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Function to add item to cart
    const addToCart = (itemName) => {
        const existingItemIndex = cartItems.findIndex(item => item.name === itemName);
        if (existingItemIndex > -1) {
            // Item already exists, increase the quantity
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            // Item doesn't exist, add it to the cart
            setCartItems([...cartItems, { name: itemName, quantity: 1 }]);
        }
    };

    // Function to decrease item quantity in cart
    const removeFromCart = (itemName) => {
        const existingItemIndex = cartItems.findIndex(item => item.name === itemName);
        if (existingItemIndex > -1) {
            const updatedCartItems = [...cartItems];
            if (updatedCartItems[existingItemIndex].quantity > 1) {
                // Decrease the quantity
                updatedCartItems[existingItemIndex].quantity -= 1;
            } else {
                // Remove the item from cart if quantity is 1
                updatedCartItems.splice(existingItemIndex, 1);
            }
            setCartItems(updatedCartItems);
        }
    };

    // Function to toggle cart modal
    const toggleCartPopup = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <>
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-center">Our Menu</h2>
                    <button className="btn btn-primary" onClick={toggleCartPopup}>
                        <i className="fa fa-shopping-cart"></i>
                    </button>
                </div>
            </div>

            <section id="menu">
                <div className="menu-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-3">
                                    <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Veg Pizza" />
                                    <div className="card-body">
                                        <h5 className="card-title">Veg Pizza</h5>
                                        <p className="card-text">Delicious vegetarian pizzas made with premium ingredients.</p>
                                        <button className="btn btn-primary mb-3" onClick={() => addToCart('Veg Pizza')}>Add to Cart</button>
                                        <button className="btn btn-primary">View more</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card mb-3">
                                    <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Non-Veg Pizza" />
                                    <div className="card-body">
                                        <h5 className="card-title">Non-Veg Pizza</h5>
                                        <p className="card-text">Delicious non-vegetarian pizzas made with premium ingredients.</p>
                                        <button className="btn btn-primary mb-3" onClick={() => addToCart('Non-Veg Pizza')}>Add to Cart</button>
                                        <button className="btn btn-primary">View more</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card mb-3">
                                    <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Miana Pizza" />
                                    <div className="card-body">
                                        <h5 className="card-title">Miana Pizza</h5>
                                        <p className="card-text">Delicious non-vegetarian pizzas made with premium ingredients.</p>
                                        <button className="btn btn-primary mb-3" onClick={() => addToCart('Miana Pizza')}>Add to Cart</button>
                                        <button className="btn btn-primary">View more</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card mb-3">
                                    <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Family Pizza" />
                                    <div className="card-body">
                                        <h5 className="card-title">Family Pizza</h5>
                                        <p className="card-text">Delicious non-vegetarian pizzas made with premium ingredients.</p>
                                        <button className="btn btn-primary mb-3" onClick={() => addToCart('Family Pizza')}>Add to Cart</button>
                                        <button className="btn btn-primary">View more</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card mb-3">
                                    <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Small Pizza" />
                                    <div className="card-body">
                                        <h5 className="card-title">Small Pizza</h5>
                                        <p className="card-text">Delicious non-vegetarian pizzas made with premium ingredients.</p>
                                        <button className="btn btn-primary mb-3" onClick={() => addToCart('Small Pizza')}>Add to Cart</button>
                                        <button className="btn btn-primary">View more</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card mb-3">
                                    <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Big Pizza" />
                                    <div className="card-body">
                                        <h5 className="card-title">Big Pizza</h5>
                                        <p className="card-text">Delicious non-vegetarian pizzas made with premium ingredients.</p>
                                        <button className="btn btn-primary mb-3" onClick={() => addToCart('Big Pizza')}>Add to Cart</button>
                                        <button className="btn btn-primary">View more</button>
                                    </div>
                                </div>
                            </div>

                            {/* Other menu items */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Cart modal */}
            <div className={`modal fade ${isCartOpen ? 'show d-block' : 'd-none'}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Cart</h5>
                            <button type="button" className="close" aria-label="Close" onClick={toggleCartPopup}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {cartItems.map((item, index) => (
                                    <li key={index}>
                                        {item.name} - Quantity: {item.quantity}
                                        <button className="btn btn-sm btn-success mx-2" onClick={() => addToCart(item.name)}>+</button>
                                        <button className="btn btn-sm btn-danger mx-2" onClick={() => removeFromCart(item.name)}>-</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={toggleCartPopup}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;
