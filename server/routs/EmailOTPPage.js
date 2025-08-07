// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const registrationModel = require('./models/registration');

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/registration", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("MongoDB connected successfully");
// }).catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
// });

// app.post('/register', (req, res) => {
//     registrationModel.create(req.body)
//         .then(registration => res.json(registration))
//         .catch(err => res.json(err));
// });

// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await registrationModel.findOne({ email, password }).exec();
//         if (!user) {
//             return res.status(401).json({ error: "Invalid email or password" });
//         }
//         res.json({ message: "Login successful" });
//     } catch (err) {
//         console.error("Error finding user:", err);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });


// app.post('/profile', async (req, res) => {
//     try {
//         const newProfileData = req.body;
//         const createdProfile = await registrationModel.create(newProfileData);
//         res.status(201).json(createdProfile);
//     } catch (error) {
//         console.error('Error creating profile:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


// app.get('/profile', async (req, res) => {
//     try {
//         // Fetch user's profile data from MongoDB
//         const profileData = await registrationModel.findOne({ /* Define your query criteria here */ }).exec();
        
//         // Check if profile data exists
//         if (!profileData) {
//             return res.status(404).json({ error: "Profile not found" });
//         }

//         // Send profile data as JSON response
//         res.json(profileData);
//     } catch (error) {
//         console.error("Error fetching profile data:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// app.put('/profile/:userId', async (req, res) => {
//     try {
//         const userId = req.params.userId;
//         const updatedProfileData = req.body;
//         const updatedProfile = await registrationModel.findByIdAndUpdate(userId, updatedProfileData, { new: true });
//         res.json(updatedProfile);
//     } catch (error) {
//         console.error('Error updating profile:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


// // Add route handler for DELETE request to /profile endpoint
// app.delete('/profile', async (req, res) => {
//     try {
//         // Perform any necessary validation or processing
        
//         // Delete the profile from the database (assuming you're using MongoDB)
//         // Example: Delete the profile based on the user's ID
//         const userId = req.params.userId; // Assuming userId is passed in the request params
//         await registrationModel.findByIdAndDelete(userId);

//         // Send success message as the response
//         res.json({ message: 'Profile deleted successfully' });
//     } catch (error) {
//         console.error('Error deleting profile:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });






// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
