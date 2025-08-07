// server/index.js

require('dotenv').config(); // Load environment variables from .env
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const registrationModel = require('./models/registration');

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB connection (no deprecated options)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

// ✅ Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// 🔐 In-memory OTP store (consider Redis/db for production)
const otpMap = {};

// ===== ROUTES =====

// ✅ Home Route (fixes "Cannot GET /" issue)
app.get('/', (req, res) => {
    res.send("Pizza Web App backend is running...");
});

// ✅ Register User
app.post('/register', (req, res) => {
    registrationModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ error: err.message }));
});

// ✅ Login
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

// ✅ Profile CRUD
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

// ✅ Send OTP
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

// ✅ Verify OTP
app.post('/verifyOTP', (req, res) => {
    const { email, otp } = req.body;
    if (otpMap[email] && otpMap[email] === otp) {
        delete otpMap[email];
        res.json({ message: "OTP verified" });
    } else {
        res.status(401).json({ error: "Invalid OTP" });
    }
});

// ✅ Verify Email
app.post('/verifyEmail', async (req, res) => {
    try {
        const user = await registrationModel.findOne({ email: req.body.email });
        if (user) {
            res.json({ message: "Email exists" });
        } else {
            res.status(404).json({ error: "Email not found" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ✅ Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
