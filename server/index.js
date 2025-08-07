//server\index.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const registrationModel = require('./models/registration');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://massmasala4:madhu1439@cluster0.9ychy.mongodb.net/registration?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'massmasala4@gmail.com', // Your email address
        pass: 'tvsttiqdlvdtsjiw' // Your email password
        //tvst tiqd lvdt sjiw

    }
});

// Map to store OTPs
const otpMap = {};

// Registration endpoint
app.post('/register', (req, res) => {
    registrationModel.create(req.body)
        .then(registration => res.json(registration))
        .catch(err => res.json(err));
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await registrationModel.findOne({ email, password }).exec();
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        res.json({ message: "Login successful" });
    } catch (err) {
        console.error("Error finding user:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Profile endpoints
app.post('/profile', async (req, res) => {
    try {
        const newProfileData = req.body;
        const createdProfile = await registrationModel.create(newProfileData);
        res.status(201).json(createdProfile);
    } catch (error) {
        console.error('Error creating profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/profile', async (req, res) => {
    try {
        // Fetch user's profile data from MongoDB
        const profileData = await registrationModel.findOne({ /* Define your query criteria here */ }).exec();
        
        // Check if profile data exists
        if (!profileData) {
            return res.status(404).json({ error: "Profile not found" });
        }

        // Send profile data as JSON response
        res.json(profileData);
    } catch (error) {
        console.error("Error fetching profile data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.put('/profile/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const updatedProfileData = req.body;
        const updatedProfile = await registrationModel.findByIdAndUpdate(userId, updatedProfileData, { new: true });
        res.json(updatedProfile);
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/profile/:email', async (req, res) => {
    try {
        const email = req.params.email;
        // Logic to delete the profile with the specified email
        await registrationModel.findOneAndDelete({ email: email });
        res.json({ message: 'Profile deleted successfully' });
    } catch (error) {
        console.error('Error deleting profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});





// // OTP endpoints
// app.post('/sendOTP', async (req, res) => {
//     const { email } = req.body;
//     const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
//     otpMap[email] = otp;
//     const mailOptions = {
//         from: 'massmasala4@gmail.com',
//         to: email,
//         subject: 'OTP for Email Verification',
//         text: `Your OTP for email verification is: ${otp}`
//     };
//     try {
//         await transporter.sendMail(mailOptions);
//         res.json({ message: "OTP sent successfully" });
//     } catch (error) {
//         console.error('Error sending OTP:', error);
//         res.status(500).json({ error: "Error sending OTP" });
//     }
// });
// OTP endpoints
// OTP endpoints
app.post('/sendOTP', async (req, res) => {
    const { email } = req.body;
    const otp = otpGenerator.generate(6, { digits: true, alphabets: false, specialChars: false });
    otpMap[email] = otp;
    const mailOptions = {
        from: 'massmasala4@gmail.com',
        to: email,
        subject: 'OTP for Email Verification',
        text: `Your OTP for email verification is: ${otp}`
    };
    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "OTP sent successfully" });
    } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ error: "Error sending OTP" });
    }
});



app.post('/verifyOTP', async (req, res) => {
    const { email, otp } = req.body;
    if (otpMap[email] && otpMap[email] === otp) {
        delete otpMap[email];
        res.json({ message: "OTP verification successful" });
    } else {
        res.status(401).json({ error: "Invalid OTP" });
    }
});

// Verify email endpoint
app.post('/verifyEmail', async (req, res) => {
    try {
        const { email } = req.body;
        const existingUser = await registrationModel.findOne({ email }).exec();
        if (existingUser) {
            res.json({ message: "Email exists in the database" });
        } else {
            res.status(404).json({ error: "Email not found in the database" });
        }
    } catch (error) {
        console.error('Error verifying email:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
