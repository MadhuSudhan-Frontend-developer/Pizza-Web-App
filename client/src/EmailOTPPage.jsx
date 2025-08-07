// client\src\EmailOTPPage.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmailOTPPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('');
  const navigate = useNavigate();

  const sendOTP = async () => {
    try {
      await axios.post('http://localhost:3001/sendOTP', { email });
      setOtpSent(true);
      setVerificationStatus('');
    } catch (error) {
      console.error('Error sending OTP:', error);
      setVerificationStatus('Error sending OTP. Please try again.');
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await axios.post('http://localhost:3001/verifyOTP', { email, otp });
      setVerificationStatus(response.data.message);
      navigate('/login');
    } catch (error) {
      console.error('Error verifying OTP:', error);
      if (error.response && error.response.data && error.response.data.error) {
        console.error('Server error:', error.response.data.error);
        setVerificationStatus(error.response.data.error);
      } else {
        console.error('An error occurred while verifying OTP');
        setVerificationStatus('An error occurred while verifying OTP');
      }
    }
  };

  return (
    <div className="container">
      <h2>Enter Email</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>
      {!otpSent ? (
        <button type="button" className="btn btn-primary" onClick={sendOTP}>
          Send OTP
        </button>
      ) : (
        <div>
          <p>An OTP has been sent to your email. Please check your inbox.</p>
          <div className="form-group">
            <label htmlFor="otp">Enter OTP</label>
            <input
              type="text"
              className="form-control"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={verifyOTP}>
            Verify OTP
          </button>
          <p>{verificationStatus}</p>
        </div>
      )}
      <div className="mt-3">
        <p className="mb-0">Already have an account?</p>
        <Link to="/login" className="text-decoration-none">
          Login
        </Link>
      </div>
    </div>
  );
};

export default EmailOTPPage;
