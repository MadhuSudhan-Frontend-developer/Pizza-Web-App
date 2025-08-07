// server/index.js

require('dotenv').config(); // Load .env variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const registrationModel = require('./models/registration');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB using .env
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

// Nodemailer transporter using .env
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// In-memory OTP storage
const otpMap = {};

// ========== Routes ==========

// Register
app.post('/register', (req, res) => {
    registrationModel.create(req.body)
        .then(registration => res.json(registration))
        .catch(err => res.json(err));
});

// Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await registrationModel.findOne({ email, password });
        if (!user) return res.status(401).json({ error: "Invalid email or password" });
        res.json({ message: "Login successful" });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Profile
app.post('/profile', async (req, res) => {
    try {
        const newProfile = await registrationModel.create(req.body);
        res.status(201).json(newProfile);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/profile', async (req, res) => {
    try {
        const profile = await registrationModel.findOne({});
        if (!profile) return res.status(404).json({ error: "Profile not found" });
        res.json(profile);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.put('/profile/:userId', async (req, res) => {
    try {
        const updated = await registrationModel.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/profile/:email', async (req, res) => {
    try {
        await registrationModel.findOneAndDelete({ email: req.params.email });
        res.json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Send OTP
app.post('/sendOTP', async (req, res) => {
    const { email } = req.body;
    const otp = otpGenerator.generate(6, { digits: true, alphabets: false, specialChars: false });
    otpMap[email] = otp;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'OTP for Email Verification',
        text: `Your OTP is: ${otp}`
    };
    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "OTP sent successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error sending OTP" });
    }
});

// Verify OTP
app.post('/verifyOTP', async (req, res) => {
    const { email, otp } = req.body;
    if (otpMap[email] && otpMap[email] === otp) {
        delete otpMap[email];
        res.json({ message: "OTP verified" });
    } else {
        res.status(401).json({ error: "Invalid OTP" });
    }
});

// Verify Email
app.post('/verifyEmail', async (req, res) => {
    try {
        const existingUser = await registrationModel.findOne({ email: req.body.email });
        if (existingUser) {
            res.json({ message: "Email exists" });
        } else {
            res.status(404).json({ error: "Email not found" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
