//path client/src/signup.jsx


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if password and confirm password match
        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            return;
        }
        // Check if any required fields are empty
        if (!name || !email || !password || !confirmPassword) {
            console.error('Please fill out all fields');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/register', {
                name,
                email,
                password
            });
            console.log(response.data);
            // Redirect to homepage upon successful registration
            navigate('/EmailOTPPage'); 
        } catch (error) {
            console.error('Error registering user:', error.response.data.error);
        }
    };
    

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-50">
                <h2 className="text-center mb-4">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="new-password"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            autoComplete="new-password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Signup</button>
                </form>
                <div className="mt-3 text-center">
                    <p className="mb-0">Already have an account?</p>
                    <Link to="/login" className="text-decoration-none">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
