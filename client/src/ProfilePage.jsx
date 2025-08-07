// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './css/ProfilePage.css'; // Import CSS file

// function ProfilePage() {
//     const [profile, setProfile] = useState(null);
//     const [editMode, setEditMode] = useState(false);
//     const [editedProfile, setEditedProfile] = useState(null);

//     useEffect(() => {
//         fetchProfile();
//     }, []);

//     const fetchProfile = async () => {
//         try {
//             const response = await axios.get('http://localhost:3001/profile');
//             setProfile(response.data);
//             setEditedProfile(response.data); // Initialize edited profile with fetched data
//         } catch (error) {
//             console.error('Error fetching profile:', error);
//         }
//     };

//     const handleEdit = () => {
//         setEditMode(true);
//     };

//     const handleUpdate = async () => {
//         try {
//             // Send request to update profile details
//             await axios.put(`http://localhost:3001/profile/${profile._id}`, editedProfile); // Include the profile ID in the request URL
//             // Fetch updated profile details
//             fetchProfile();
//             // Exit edit mode
//             setEditMode(false);
//         } catch (error) {
//             console.error('Error updating profile:', error);
//         }
//     };

//     const handleDelete = async () => {
//         try {
//             // Send request to delete profile using the user ID
//             await axios.delete(`http://localhost:3001/profile/${profile._id}`);
//             // Redirect to another page or perform other actions after deletion
//         } catch (error) {
//             console.error('Error deleting profile:', error);
//         }
//     };

//     const handleChange = (e) => {
//         // Update edited profile state as user types
//         setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
//     };

//     return (
//         <div className="profile-container">
//             {profile && (
//                 <div>
//                     <h2 className="profile-heading">Profile</h2>
//                     {editMode ? (
//                         <div>
//                             <label>Username:</label>
//                             <input type="text" name="name" value={editedProfile.name} onChange={handleChange} autoComplete="name" className="profile-input" />
//                             <label>Email:</label>
//                             <input type="text" name="email" value={editedProfile.email} onChange={handleChange} autoComplete="email" className="profile-input" />
//                             <label>Password:</label>
//                             <input type="password" name="password" value={editedProfile.password} onChange={handleChange} autoComplete="new-password" className="profile-input" />
//                             <button onClick={handleUpdate} className="profile-button">Update</button>
//                         </div>
//                     ) : (
//                         <div>
//                             <p><span className="profile-label">Username:</span> {profile.name}</p>
//                             <p><span className="profile-label">Email:</span> {profile.email}</p>
//                             <p><span className="profile-label">Password:</span> ********</p>
//                             <button onClick={handleEdit} className="profile-button">Edit</button>
//                             <button onClick={handleDelete} className="profile-button">Delete</button>
//                         </div>
//                     )}
//                 </div>
//             )}
//             {!profile && <p>Loading...</p>}
//         </div>
//     );
// }

// export default ProfilePage;
//client\src\ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/ProfilePage.css'; // Import CSS file

function ProfilePage() {
    const [profile, setProfile] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedProfile, setEditedProfile] = useState(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await axios.get('http://localhost:3001/profile');
            setProfile(response.data);
            setEditedProfile(response.data); // Initialize edited profile with fetched data
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleUpdate = async () => {
        try {
            // Send request to update profile details
            await axios.put(`http://localhost:3001/profile/${profile._id}`, editedProfile); // Include the profile ID in the request URL
            // Fetch updated profile details
            fetchProfile();
            // Exit edit mode
            setEditMode(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleDelete = async () => {
        try {
            // Send request to delete profile using the profile email
            await axios.delete(`http://localhost:3001/profile/${profile.email}`);
            // After successful deletion, clear the profile state
            setProfile(null);
        } catch (error) {
            console.error('Error deleting profile:', error);
        }
    };

    const handleChange = (e) => {
        // Update edited profile state as user types
        setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
    };

    return (
        <div className="profile-container">
            {profile && (
                <div>
                    <h2 className="profile-heading">Profile</h2>
                    {editMode ? (
                        <div>
                            <label>Username:</label>
                            <input type="text" name="name" value={editedProfile.name} onChange={handleChange} autoComplete="name" className="profile-input" />
                            <label>Email:</label>
                            <input type="text" name="email" value={editedProfile.email} onChange={handleChange} autoComplete="email" className="profile-input" />
                            <label>Password:</label>
                            <input type="password" name="password" value={editedProfile.password} onChange={handleChange} autoComplete="new-password" className="profile-input" />
                            <button onClick={handleUpdate} className="profile-button">Update</button>
                        </div>
                    ) : (
                        <div>
                            <p><span className="profile-label">Username:</span> {profile.name}</p>
                            <p><span className="profile-label">Email:</span> {profile.email}</p>
                            <p><span className="profile-label">Password:</span> ********</p>
                            <button onClick={handleEdit} className="profile-button">Edit</button>
                            <button onClick={handleDelete} className="profile-button">Delete</button>
                        </div>
                    )}
                </div>
            )}
            {!profile && <p>Loading...</p>}
        </div>
    );
}

export default ProfilePage;
