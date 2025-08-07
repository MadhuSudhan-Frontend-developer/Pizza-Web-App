// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './css/Home.css';
// import './css/table.css';


// function Homepage() {
//     const [profile, setProfile] = useState(null);
//     const [showProfile, setShowProfile] = useState(false); // State to control profile visibility

//     useEffect(() => {
//         fetchProfile(); // Fetch profile data when the component mounts
//     }, []);

//     const fetchProfile = async () => {
//         try {
//             const response = await axios.get('http://localhost:3001/profile'); // Endpoint to fetch user profile data
//             setProfile(response.data); // Update profile state with fetched data
//         } catch (error) {
//             console.error('Error fetching profile:', error);
//         }
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('token'); // Remove authentication token
//         window.location.href = '/login'; // Redirect to login page
//     };

//     const toggleProfile = () => {
//         setShowProfile(!showProfile); // Toggle the visibility of profile information
//     };

//     return (
//         <div className='container-fluid'>
//             <div className='navbarContainer'>
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//                     <div className="container-fluid">
//                         <Link className="navbar-brand" to="#active">My App</Link>
//                         <div className="collapse navbar-collapse" id="navbarNav">
//                             <ul className="navbar-nav">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/register">Register</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/login">Login</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="ml-auto">
//                             <button className="btn btn-primary mr-2" onClick={handleLogout}>Logout</button>
//                             <button className="btn btn-primary" onClick={toggleProfile}>Profile</button>
//                         </div>
//                     </div>
//                 </nav>
//             </div>

//             <div className="d-flex justify-content-center align-items-right bg-white vh-100">
//                 <div className="bg-white p-5 m-auto rounded w-50 h-20">
//                     <div className={`profile-container ${showProfile && profile ? 'border-pink' : ''}`}>
//                         {showProfile && profile ? (
//                             <div>
//                                 <h3>Profile</h3>
//                                 <table className="table">
//                                     <tbody>
//                                         <tr>
//                                             <td>Name:</td>
//                                             <td>{profile.name}</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Email:</td>
//                                             <td>{profile.email}</td> {/* Display the updated email here */}
//                                         </tr>
//                                         <tr>
//                                             <td>Age:</td>
//                                             <td>{profile.age}</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Address:</td>
//                                             <td>{profile.address}</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Nationality:</td>
//                                             <td>{profile.nationality}</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Phone Number:</td>
//                                             <td>{profile.phoneNumber}</td>
//                                         </tr>
//                                         {/* Add more profile information as needed */}
//                                     </tbody>
//                                 </table>
//                                 <div className="ml-auto">
//                                     <Link to="/profile" className="btn btn-primary">Edit Profile</Link>
//                                 </div>
//                             </div>

//                         ) : (
//                             <p>Loading profile...</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Homepage;


//2
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBag, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import './css/HP.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// function Homepage() {
//     const [profile, setProfile] = useState(null);
//     const [showProfile, setShowProfile] = useState(false);

//     useEffect(() => {
//         fetchProfile();
//     }, []);

//     const fetchProfile = async () => {
//         try {
//             const response = await axios.get('http://localhost:3001/profile');
//             setProfile(response.data);
//         } catch (error) {
//             console.error('Error fetching profile:', error);
//         }
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         window.location.href = '/login';
//     };

//     const toggleProfile = () => {
//         setShowProfile(!showProfile);
//     };

//     return (
//         <div className='container-fluid'>
//             <nav className="navbar navbar-expand-lg bg-warning fixed-top">
//                 <div className="container">
//                     <Link className="navbar-brand" to="/">Pizza</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav me-auto">
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#home">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#about">About</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#menu">Menu</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#order">Order</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#cart">Cart</a>
//                             </li>
//                         </ul>
//                         <div className="d-flex align-items-center">
//                             <Link className="nav-link" to="/myorder">
//                                 <FontAwesomeIcon icon={faShoppingBag} className="fa-2x p-2" />
//                             </Link>
//                             <Link className="nav-link" to="/cart">
//                                 <FontAwesomeIcon icon={faShoppingCart} className="fa-2x p-2" />
//                             </Link>
//                             <button className="btn btn-link nav-link" onClick={toggleProfile} data-bs-toggle="modal" data-bs-target="#profileModal">
//                                 <FontAwesomeIcon icon={faUser} className="fa-2x p-2" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             <section id="home">
//                 <div className="heroo-section vh-100">
//                     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//                         <div className="carousel-inner">
//                             <div className="carousel-item active"></div>
//                             <div className="carousel-item"></div>
//                             <div className="carousel-item"></div>
//                             <div className="carousel-item"></div>
//                         </div>
//                         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                             <span className="visually-hidden">Previous</span>
//                         </button>
//                         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                             <span className="visually-hidden">Next</span>
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             <section id="about">
//                 <div className="about-section">
//                     <div className="container">
//                         <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem iste nisi, alias nostrum tempora hic!</h2>
//                     </div>
//                 </div>
//             </section>

//             <section id="menu">
//                 <div className="menu-section"></div>
//             </section>

//             <section id="order">
//                 <div className="order-section"></div>
//             </section>

//             <section id="cart">
//                 <div className="cart-section"></div>
//             </section>

//             {/* Profile Modal */}
//             <div className={`modal fade`} id="profileModal" tabIndex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="profileModalLabel">Profile</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             {profile ? (
//                                 <div>
//                                     <table className="table">
//                                         <tbody>
//                                             <tr>
//                                                 <td>Name:</td>
//                                                 <td>{profile.name}</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>Email:</td>
//                                                 <td>{profile.email}</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>Age:</td>
//                                                 <td>{profile.age}</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>Address:</td>
//                                                 <td>{profile.address}</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>Nationality:</td>
//                                                 <td>{profile.nationality}</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>Phone Number:</td>
//                                                 <td>{profile.phoneNumber}</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                     <div className="text-end">
//                                         <Link to="/profile" className="btn btn-primary">Edit Profile</Link>
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <p>Loading profile...</p>
//                             )}
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Homepage;




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBag, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import './css/HP.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// // import './Menu/menu' 
// function Homepage() {
//     const [profile, setProfile] = useState(null);
//     const [showProfile, setShowProfile] = useState(false);

//     const menuItems = [
//       {
//           name: 'Non-Veg Pizza',
//           description: 'Delicious non-vegetarian pizzas made with premium ingredients.',
//           price: 9.99,
//           image: 'non-veg-pizza.jpg'
//       },
//       {
//           name: 'Veg Pizza',
//           description: 'Delightful vegetarian pizzas loaded with fresh veggies and cheese.',
//           price: 8.99,
//           image: 'veg-pizza.jpg'
//       },
//       {
//           name: 'Pizza MANIA',
//           description: 'Delightful Pizza MANIA  pizzas loaded with fresh veggies and cheese.',
//           price: 8.99,
//           image: 'veg-pizza.jpg'
//       },
      
//       {
//           name: 'Small pizza',
//           description: 'Delightful Small  pizzas loaded with fresh veggies and cheese.',
//           price: 8.99,
//           image: 'veg-pizza.jpg'
//       },
//       {
//           name: 'Couples pizza',
//           description: 'Delightful Couples pizza pizzas loaded with fresh veggies and cheese.',
//           price: 8.99,
//           image: 'veg-pizza.jpg'
//       },
//       {
//           name: 'big pizza',
//           description: 'Delightful Big pizzas loaded with fresh veggies and cheese.',
//           price: 8.99,
//           image: 'veg-pizza.jpg'
//       },

//       // Add more menu items as needed
//   ];


//     useEffect(() => {
//         fetchProfile();
//     }, []);

//     const fetchProfile = async () => {
//         try {
//             const response = await axios.get('http://localhost:3001/profile');
//             setProfile(response.data);
//         } catch (error) {
//             console.error('Error fetching profile:', error);
//         }
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         window.location.href = '/login';
//     };

//     const toggleProfile = () => {
//         setShowProfile(!showProfile);
//     };

//     return (
//         <div className='container-fluid'>
//             <nav className="navbar navbar-expand-lg bg-warning fixed-top">
//                 <div className="container">
//                     <Link className="navbar-brand" to="/">Pizza</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav me-auto">
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#home">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#about">About</a>
//                             </li>
//                             <li className="nav-item">
//                             <Link to="/menu" className="nav-link">Menu</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#order">Order</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#cart">Cart</a>
//                             </li>
//                             {/* Add more sections here */}
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#contact">Contact</a>
//                             </li>
//                         </ul>
//                         <div className="d-flex align-items-center">
//                             <Link className="nav-link" to="/myorder">
//                                 <FontAwesomeIcon icon={faShoppingBag} className="fa-2x p-2" />
//                             </Link>
//                             <Link className="nav-link" to="/cart">
//                                 <FontAwesomeIcon icon={faShoppingCart} className="fa-2x p-2" />
//                             </Link>
//                             <button className="btn btn-link nav-link" onClick={toggleProfile} data-bs-toggle="modal" data-bs-target="#profileModal">
//                                 <FontAwesomeIcon icon={faUser} className="fa-2x p-2" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* Add more sections here */}
//             <section id="home">
//                 <div className="heroo-section vh-100">
//                     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//                         <div className="carousel-inner">
//                             <div className="carousel-item active"></div>
//                             <div className="carousel-item"></div>
//                             <div className="carousel-item"></div>
//                             <div className="carousel-item"></div>
//                         </div>
//                         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                             <span className="visually-hidden">Previous</span>
//                         </button>
//                         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                             <span className="visually-hidden">Next</span>
//                         </button>
//                     </div>
//                 </div>
//             </section>
// <br /><br />
//             <section id="about">
//     <div className="about-section">
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-6">
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIKz-KWJzK79ckQrPEi5v5HKwL_WGnjZyIg&s" alt="About" className="img-fluid" />
//                 </div>
//                 <div className="col-md-6">
//                     <h2>Lorem ipsum</h2>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste nisi, alias nostrum tempora hic!</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>

// {/* <section id="menu">
//     <div className="menu-section">
//         <div className="container">
//             <h2 className="text-center mb-4">Our Menu</h2>
//             <div className="row">
//                 <div className="col-md-4">
//                     <div className="card mb-3">
//                         <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Non-Veg Pizza" />
//                         <div className="card-body">
//                             <h5 className="card-title">Non-Veg Pizza</h5>
//                             <p className="card-text">Delicious non-vegetarian pizzas made with premium ingredients.</p>
//                             <button className="btn btn-primary mb-3">Add to Cart</button>
//                             <button className="btn btn-primary">View more</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card mb-3">
//                         <img src="https://images.unsplash.com/photo-1617470702892-e01504297e84?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Veg Pizza" />
//                         <div className="card-body">
//                             <h5 className="card-title">Veg Pizza</h5>
//                             <p className="card-text">Delightful vegetarian pizzas loaded with fresh veggies and cheese.</p>
//                             <button className="btn btn-primary mb-3">Add to Cart</button>
//                             <button className="btn btn-primary">View more</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card mb-3">
//                         <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Pizza Mania" />
//                         <div className="card-body">
//                             <h5 className="card-title">Pizza Mania</h5>
//                             <p className="card-text">Irresistible pizza mania flavors that will tantalize your taste buds.</p>
//                             <button className="btn btn-primary mb-3">Add to Cart</button>
//                             <button className="btn btn-primary">View more</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section> */}
// <div className="menu-section">
//     <div className="container">
//         <h2 className="text-center mb-4">Our Menu</h2>
//         <div className="row">
//             {menuItems.map((menuItem, index) => (
//                 <div className="col-md-4" key={index}>
//                     <div className="card mb-3">
//                         <img src={menuItem.image} className="card-img-top" alt={menuItem.name} />
//                         <div className="card-body">
//                             <h5 className="card-title">{menuItem.name}</h5>
//                             <p className="card-text">{menuItem.description}</p>
//                             <p className="card-text">Price: ${menuItem.price}</p>
//                             <button className="btn btn-primary mb-3" onClick={() => addToCart(menuItem)}>Add to Cart</button>
//                             <button className="btn btn-primary">View more</button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// </div>

// <br /><br /><br />



// <section id="order">
//     <div className="order-section">
//         <div className="container">
//         <h2 className="text-center mb-4">Our Order</h2>

//             <div className="row">
//             <div className="col-md-4">
//                     <div className="card">
//                         <img src="https://via.placeholder.com/150" className="card-img-top" alt="Pizza" />
//                         <div className="card-body">
//                             <h5 className="card-title">Pizza Name</h5>
//                             <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                             <p className="card-text">Price: $8.99</p>
//                             <button className="btn btn-primary mr-3">Add to Cart</button> {/* mb-3 adds margin-bottom */}
                           
//                             <button className="btn btn-primary">Buy Now</button>

//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-md-4">
//                     <div className="card">
//                         <img src="https://via.placeholder.com/150" className="card-img-top" alt="Pizza" />
//                         <div className="card-body">
//                             <h5 className="card-title">Pizza Name</h5>
//                             <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                             <p className="card-text">Price: $8.99</p>
//                             <button className="btn btn-primary mr-3">Add to Cart</button> {/* mb-3 adds margin-bottom */}
                           
//                             <button className="btn btn-primary">Buy Now</button>

//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card">
//                         <img src="https://via.placeholder.com/150" className="card-img-top" alt="Pizza" />
//                         <div className="card-body">
//                             <h5 className="card-title">Pizza Name</h5>
//                             <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                             <p className="card-text">Price: $8.99</p>
//                             <button className="btn btn-primary mr-3">Add to Cart</button> {/* mb-3 adds margin-bottom */}
                           
//                             <button className="btn btn-primary">Buy Now</button>

//                         </div>
//                     </div>
//                 </div>

//                <div className='momo'>
// <br /><br /><br /><br />

//                   </div>
//                 {/* <br /><br /><br /><br />
//  <br /><br /><br /><br /> */}
//                 <div className="col-md-4">
//                     <div className="card">
//                         <img src="https://via.placeholder.com/150" className="card-img-top" alt="Pizza" />
//                         <div className="card-body">
//                             <h5 className="card-title">Pizza Name</h5>
//                             <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                             <p className="card-text">Price: $8.99</p>
//                             <button className="btn btn-primary mr-3">Add to Cart</button> {/* mb-3 adds margin-bottom */}
                           
//                             <button className="btn btn-primary">Buy Now</button>

//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-md-4">
//                     <div className="card">
//                         <img src="https://via.placeholder.com/150" className="card-img-top" alt="Pizza" />
//                         <div className="card-body">
//                             <h5 className="card-title">Pizza Name</h5>
//                             <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                             <p className="card-text">Price: $8.99</p>
//                             <button className="btn btn-primary mr-3">Add to Cart</button> {/* mb-3 adds margin-bottom */}
                           
//                             <button className="btn btn-primary">Buy Now</button>

//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-md-4">
//                     <div className="card">
//                         <img src="https://via.placeholder.com/150" className="card-img-top" alt="Pizza" />
//                         <div className="card-body">
//                             <h5 className="card-title">Pizza Name</h5>
//                             <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                             <p className="card-text">Price: $8.99</p>
//                             <button className="btn btn-primary mr-3">Add to Cart</button> {/* mb-3 adds margin-bottom */}
                           
//                             <button className="btn btn-primary">Buy Now</button>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
    
// </section>
// <br /><br />


            

//             <section id="cart">
//                 <div className="cart-section"></div>
//             </section>

        //     {/* Profile Modal */}
        //     <div className={`modal fade`} id="profileModal" tabIndex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
        //         <div className="modal-dialog">
        //             <div className="modal-content">
        //                 <div className="modal-header">
        //                     <h5 className="modal-title" id="profileModalLabel">Profile</h5>
        //                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //                 </div>
        //                 <div className="modal-body">
        //                     {profile ? (
        //                         <div>
        //                             <table className="table">
        //                                 <tbody>
        //                                     <tr>
        //                                         <td>Name:</td>
        //                                         <td>{profile.name}</td>
        //                                     </tr>
        //                                     <tr>
        //                                         <td>Email:</td>
        //                                         <td>{profile.email}</td>
        //                                     </tr>
        //                                     <tr>
        //                                         <td>Age:</td>
        //                                         <td>{profile.age}</td>
        //                                     </tr>
        //                                     <tr>
        //                                         <td>Address:</td>
        //                                         <td>{profile.address}</td>
        //                                     </tr>
        //                                     <tr>
        //                                         <td>Nationality:</td>
        //                                         <td>{profile.nationality}</td>
        //                                     </tr>
        //                                     <tr>
        //                                         <td>Phone Number:</td>
        //                                         <td>{profile.phoneNumber}</td>
        //                                     </tr>
        //                                 </tbody>
        //                             </table>
        //                             <div className="text-end">
        //                                 <Link to="/profile" className="btn btn-primary">Edit Profile</Link>
        //                             </div>
        //                         </div>
        //                     ) : (
        //                         <p>Loading profile...</p>
        //                     )}
        //                 </div>
        //                 <div className="modal-footer">
        //                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
//     );
// }

// export default Homepage;

// client\src\Homepage.jsx



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './css/HP.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Homepage() {
    const [profile, setProfile] = useState(null);
    const [showProfile, setShowProfile] = useState(false);
    const [cart, setCart] = useState([]);
    // const [buyNow, setBuyNow] = useState([]);

        const [buyNowItems, setBuyNowItems] = useState([]); // State to store items added to the shopping bag
    
        // const handleAddToBag = (item) => {
        //     setBuyNowItems([...buyNowItems, item]); // Add the item to the shopping bag
        // };

    
    const menuItems = [
        {
            name: 'Non-Veg Pizza',
            description: 'Delicious non-vegetarian pizzas made with premium ingredients.',
            price: 9.99,
            image: 'https://img.freepik.com/free-photo/freshly-baked-pizza-rustic-wooden-table-generated-by-ai_24640-80691.jpg?t=st=1717328610~exp=1717332210~hmac=0cea3cab4b7e6f2b796bdeaea14f77c212da6ae29a81671ac2bf6ed358d83cc2&w=1800'
        },
        {
            name: 'Veg Pizza',
            description: 'Delightful vegetarian pizzas loaded with fresh veggies and cheese.',
            price: 8.99,
            image: 'https://img.freepik.com/free-photo/high-angle-view-fresh-tasty-pizza-surrounded-with-vegetables-spices-herbs-kitchen-counter_23-2148076075.jpg?t=st=1717328672~exp=1717332272~hmac=4205cc4fb803b609dd8ac1c370efc0a2233524bc8528e3b89fa9eab0c13fc5fc&w=1480'
        },
        {
            name: 'Pizza MANIA',
            description: 'Delightful Pizza MANIA pizzas loaded with fresh veggies and cheese.',
            price: 8.99,
            image: 'https://img.freepik.com/free-photo/view-cartoon-child-with-delicious-3d-pizza_23-2151017566.jpg?t=st=1717328714~exp=1717332314~hmac=c3bd519ed7f5f04ef3883be9da288607f9e8bda1e4237be57e2de3bf66cc4c4a&w=1380'
        },
        {
            name: 'Small pizza',
            description: 'Delightful Small pizzas loaded with fresh veggies and cheese.',
            price: 8.99,
            image: 'https://img.freepik.com/free-photo/mixed-ingredient-pizza-with-olives-tomato-pepperoni_114579-2999.jpg?t=st=1717328769~exp=1717332369~hmac=d836fa5d9324854b216cd2daecccccd7f3f8c2e38c37a27e58bc51f70b906edb&w=1480'
        },
        {
            name: 'Couples pizza',
            description: 'Delightful Couples pizza pizzas loaded with fresh veggies and cheese.',
            price: 8.99,
            image: 'https://img.freepik.com/free-photo/relaxing-women-having-pizza_23-2147764713.jpg?t=st=1717328816~exp=1717332416~hmac=a120781bf7dbaf5c3c6f5995b216c619d0be72007e05deec3673eb55332f2bd5&w=1480'
        },
        {
            name: 'big pizza',
            description: 'Delightful Big pizzas loaded with fresh veggies and cheese.',
            price: 8.99,
            image: 'https://img.freepik.com/free-photo/freshly-baked-homemade-pizza-rustic-table-generated-by-ai_24640-81778.jpg?t=st=1717328853~exp=1717332453~hmac=ad30b55714470c3b1a1d4901c6323b89bd2f95f8e52d4f9a1f50870a2c929e97&w=1800'
        },
    ];

// Order items
const orderItem = [
        {
            name: 'Margherita Pizza',
            description: 'Classic pizza topped with fresh tomatoes, mozzarella, and basil.',
            price: 7.99,
            image: 'https://images.pexels.com/photos/18431672/pexels-photo-18431672/free-photo-of-pizza-margherita-cut-in-four.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            name: 'Pepperoni Pizza',
            description: 'A popular pizza topped with mozzarella and slices of spicy pepperoni.',
            price: 8.99,
            image: 'https://images.pexels.com/photos/4109083/pexels-photo-4109083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            name: 'BBQ Chicken Pizza',
            description: 'Topped with grilled chicken, BBQ sauce, red onions, and cilantro.',
            price: 9.99,
            image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            name: 'Hawaiian Pizza',
            description: 'A delightful combination of ham, pineapple, and mozzarella cheese.',
            price: 8.99,
            image: 'https://images.pexels.com/photos/20364012/pexels-photo-20364012/free-photo-of-top-view-of-pizza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            name: 'Veggie Supreme Pizza',
            description: 'Loaded with bell peppers, onions, mushrooms, olives, and mozzarella.',
            price: 9.49,
            image: 'https://images.pexels.com/photos/3762069/pexels-photo-3762069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            name: 'Meat Lovers Pizza',
            description: 'Packed with pepperoni, sausage, bacon, ham, and ground beef.',
            price: 10.99,
            image: 'https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=800g'
        },
        {
            name: 'Four Cheese Pizza',
            description: 'A cheesy delight with mozzarella, cheddar, parmesan, and gorgonzola.',
            price: 9.49,
            image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
      
        {
            name: 'Lovspinach and Feta Pizza',
            description: 'A healthy option with spinach, feta cheese, and sun-dried tomatoes.',
            price: 8.99,
            image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
    ];
    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await axios.get('http://localhost:3001/profile');
            setProfile(response.data);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };


  
    
  

    const addToCart = (menuItem) => {
        const existingItem = cart.find(item => item.name === menuItem.name);
        if (existingItem) {
            setCart(cart.map(item =>
                item.name === menuItem.name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...menuItem, quantity: 1 }]);
        }
    };

    const removeFromCart = (menuItem) => {
        setCart(cart.filter(item => item.name !== menuItem.name));
    };

    const incrementQuantity = (menuItem) => {
        setCart(cart.map(item =>
            item.name === menuItem.name
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    const decrementQuantity = (menuItem) => {
        setCart(cart.map(item =>
            item.name === menuItem.name && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));

  
    };
    

    

    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg bg-warning fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">Pizza</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/menu" className="nav-link">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#order">Order</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#cart">Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center">
                       
      {/* Shopping Bag Button */}
      <button className="btn btn-link nav-link" data-bs-toggle="modal" data-bs-target="#shoppingBagModal">
                <FontAwesomeIcon icon={faShoppingBag} className="fa-2x p-2" />
                <span className="badge bg-danger">{buyNowItems.length}</span>
            </button>

                            <button className="btn btn-link nav-link" data-bs-toggle="modal" data-bs-target="#cartModal">
                                <FontAwesomeIcon icon={faShoppingCart} className="fa-2x p-2" />
                                <span className="badge bg-danger">{cart.length}</span>
                            </button>


                            <div className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#profile" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleProfile}>
        <FontAwesomeIcon icon={faUser} className="fa-2x p-2" />
    </a>
    <ul className={`dropdown-menu dropdown-menu-start ${showProfile ? 'show' : ''}`} aria-labelledby="navbarDropdown">
        {profile  ? (
            <li>
                <p className="dropdown-item">Email: {profile.email}</p>
                {/* Add other profile details as needed */}
            </li>
        ) : (
            <li>
                <p className="dropdown-item">Loading...</p>
            </li>
        )}
        <li>
            <Link className="dropdown-item" to="/profile">Profile</Link>
        </li>
        <li>
            <button className="dropdown-item" onClick={handleLogout}>Logout</button>
        </li>
    </ul>
</div>


<div className="container">

</div>
 </div>
    </div>
        </div>
         </nav>
<br />
<br />
<br />
            <div id="home" className="home d-flex align-items-center" style={{ height: '100vh' }}>
                <div className="container text-center">
                    <div id="pizzaCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {menuItems.map((item, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                    <img src={item.image} className="d-block w-100" alt={item.name} style={{ height: '60vh', objectFit: 'cover' }} />
                                     <div className="carousel-caption d-none d-md-block">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                             </div>
 <div className='helo container'>
        <div className='helo container'>
           <a href="#order" className="btn btn-warning btn-lg orb">Order Now</a>
                                </div>
</div>
                                </div>
                                
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#pizzaCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#pizzaCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button> 
                    </div>
                </div>
            </div>

            <section id="menu" className="menu">
                <div className="container">
                    <h2 className="text-center">Our Menu</h2>
                    <div className="row">
                        {menuItems.map((menuItem, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-4">
                                    <img src={menuItem.image} className="card-img-top" alt={menuItem.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{menuItem.name}</h5>
                                        <p className="card-text">{menuItem.description}</p>
                                        <p className="card-text"><strong>${menuItem.price.toFixed(2)}</strong></p>
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-warning" onClick={() => addToCart(menuItem)}>Add to Cart</button>
                                            <button className="btn btn-primary" onClick={() => buyNow(menuItem)}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="about" className="about py-5 bg-light">
    <div className="container">
        <h2 className="text-center">About Us</h2>
        <div className="row align-items-center">
            <div className="col-md-6 text-center">
                <img 
                    src="https://images.pexels.com/photos/6937442/pexels-photo-6937442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Model" 
                    className="img-fluid rounded"
                />
            </div>
            <div className="col-md-6">
                <p>Welcome to our pizza place! We are passionate about creating delicious pizzas with the freshest ingredients. Our journey started with a love for authentic flavors and a desire to bring the best pizza experience to our community.</p>
                <p>At our pizzeria, we believe in quality, taste, and customer satisfaction. Our menu is crafted to offer a wide variety of pizzas that cater to all taste preferences, including vegetarian and non-vegetarian options.</p>
                <p>Join us to experience the perfect blend of traditional recipes and innovative twists that make our pizzas unique. We are committed to delivering a memorable dining experience, whether you dine in, take out, or order online.</p>
                <p>Thank you for choosing our pizza place. We look forward to serving you!</p>
            </div>
        </div>
    </div>
</section>
            <section id="order" className="order py-5">
                <div className="container">
                    <h2 className="text-center">Order</h2>
                    <div className="row">
                        {orderItem.map((menuItem, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-4">
                                    <img src={menuItem.image} className="card-img-top" alt={menuItem.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{menuItem.name}</h5>
                                        <p className="card-text">{menuItem.description}</p>
                                        <p className="card-text"><strong>${menuItem.price.toFixed(2)}</strong></p>
                                        <button className="btn btn-warning" onClick={() => addToCart(menuItem)}>Add to Cart</button>
                                        <button className="btn btn-primary m-2" onClick={() => handleBuyNow(menuItem)}>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="cart" className="cart py-5 bg-light">
                <div className="container">
                    <h2 className="text-center">Cart</h2>
                    {cart.length === 0 ? (
                        <p className="text-center">Your cart is empty.</p>
                    ) : (
                        <ul className="list-group">
                            {cart.map((item, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5>{item.name}</h5>
                                        <p>{item.description}</p>
                                        <p><strong>${item.price.toFixed(2)}</strong></p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-outline-secondary btn-sm mx-1" onClick={() => decrementQuantity(item)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button className="btn btn-outline-secondary btn-sm mx-1" onClick={() => incrementQuantity(item)}>+</button>
                                        <button className="btn btn-danger btn-sm ms-2" onClick={() => removeFromCart(item)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>

             {/* Shopping Bag Modal */}
             <div className="modal fade" id="shoppingBagModal" tabIndex="-1" aria-labelledby="shoppingBagModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="shoppingBagModalLabel">Shopping Bag</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {buyNowItems.length === 0 ? (
                                <p>Your shopping bag is empty.</p>
                            ) : (
                                <ul className="list-group">
                                    {buyNowItems.map((item, index) => (
                                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5>{item.name}</h5>
                                                <p>{item.description}</p>
                                                <p><strong>${item.price.toFixed(2)}</strong></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                {/* Add any buttons or actions here if needed */}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shopping Bag Button */}
     


            
            <section id="contact" className="contact py-5 bg-light">
    <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <p className="text-center mb-4">Get in touch with us for any queries or feedback.</p>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <div className="mb-3">
                        <p>Contact Details:</p>
                        <p>Email: softwaremadhu1@gmail.com</p>
                        <p>Mobile No: 1234567890</p>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>


<section id="faq" className="faq py-5 bg-light">
    <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What are your opening hours?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        Our opening hours are Monday to Friday, 9 AM to 9 PM, and Saturday to Sunday, 10 AM to 10 PM.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Do you offer vegetarian options?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        Yes, we offer a variety of vegetarian pizzas and other dishes. Check our menu for more details.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Can I place an order online?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        Yes, you can place an order online through our website or mobile app. We offer delivery and pick-up options.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        What safety measures are you taking for COVID-19?
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        We are following all recommended guidelines, including regular sanitization, contactless delivery, and ensuring our staff are wearing masks and gloves.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


      {/* Map Section */}
      <section id="map" className="map py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Location</h2>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="map-container" style={{ height: '400px', width: '100%' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12609.414178134482!2d-74.0060159!3d40.7127754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQyJzQ1LjkiTiA3NMKwMDBMJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1593002927197!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <footer className="py-3 bg-dark text-white text-center">
    <div className="container">
        <p className="mb-0">&copy; 2024 Pizza. All rights reserved. Created by Madhu</p>
    </div>
</footer>

         <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cartModalLabel">Cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {cart.length === 0 ? (
                                <p>Your cart is empty.</p>
                            ) : (
                                <ul className="list-group">
                                    {cart.map((item, index) => (
                                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5>{item.name}</h5>
                                                <p>{item.description}</p>
                                                <p><strong>${item.price.toFixed(2)}</strong></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <button className="btn btn-outline-secondary btn-sm mx-1" onClick={() => decrementQuantity(item)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button className="btn btn-outline-secondary btn-sm mx-1" onClick={() => incrementQuantity(item)}>+</button>
                                                <button className="btn btn-danger btn-sm ms-2" onClick={() => removeFromCart(item)}>Remove</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
      
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
