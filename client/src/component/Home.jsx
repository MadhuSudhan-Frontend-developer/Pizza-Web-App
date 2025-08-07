// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // // import './css/Home.css';
// // //path src/Home.jsx

// // const Home = () => {
// //     return (
// //         <div className='container-fluid'>
// //             <div className='navbarContainer'>
// //                 <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
// //                     <div className="container-fluid">
// //                         <Link className="navbar-brand" to="/">My App</Link>
// //                         <div className="collapse navbar-collapse" id="navbarNav">
// //                             <ul className="navbar-nav">
// //                                 <li className="nav-item">
// //                                     <Link className="nav-link" to="../Login">Login</Link>
// //                                 </li>
// //                                 <li className="nav-item">
// //                                     <Link className="nav-link" to="../Signup">Signup</Link>
// //                                 </li>
// //                             </ul>
// //                         </div>
// //                     </div>
// //                 </nav>
// //             </div>

// //             <div className="d-flex justify-content-center align-items-center bg-green vh-100">
// //                 <div className="text-center">
// //                     <h1>Welcome to My App</h1>
// //                     <p>Please login or signup to continue.</p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../css/home1.css'; // Import your custom CSS file

// const Home = () => {
//     return (
//         <div className='container-fluid'>
//             <div className='navbarContainer'>
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//                     <div className="container-fluid">
//                         <Link className="navbar-brand" to="/">My App</Link>
//                         <div className="collapse navbar-collapse" id="navbarNav">
//                             <ul className="navbar-nav">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="../Login">Login</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="../Signup">Signup</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </div>

//             <div className="ben" >
//     <img src="https://fontsonic.com/wp-content/uploads/2023/03/Ben-10-Font-Family-Free-Download.jpg.webp" alt="Cover" className="img-fluid" />
//     <div className="container position-absolute top-50 start-50 translate-middle">
//         {/* Welcome Message */}
//         <h1>Welcome to My App</h1>
//         <p>Please login or signup to continue.</p>
//         {/* Web Developer Intro */}
//         <h2>Intro to Web Development</h2>
//         <p>Add your web developer intro text here...</p>
//     </div>
// </div>



//             {/* Web Developer Section */}
//             <section className="section">
//                 <div className="container">
//                     <div className="row">
                      
//                         <div className="col-md-6">
//                             <h2>Intro to Web Development</h2>
//                             <p>Add your intro text here...</p>
//                         </div>
//                         <div className="col-md-6">
//                             <img src="https://cdn.pixabay.com/photo/2023/07/25/18/42/vector-graphic-8149677_1280.jpg" alt="Web Developer" className="img-fluid" />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* About Section */}
//             <section className="section bg-light">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <img src="https://cdn.pixabay.com/photo/2022/10/01/21/25/woman-7492273_1280.jpg" alt="About" className="img-fluid" />
//                         </div>
//                         <div className="col-md-6">
//                             <h2>About Me</h2>
//                             <p>Add your about intro text here...</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Service Section */}
//             <section className="section">
//                 <div className="container text-center">
//                     <h2>Services</h2>
//                     <p>Add your service intro text here...</p>
//                     <div className="row">
//                         {/* Service Card 1 */}
//                         <div className="col-md-3">
//                             <h3>Web Design</h3>
//                             <p>Add service description here...</p>
//                         </div>
//                         {/* Service Card 2 */}
//                         <div className="col-md-3">
//                             <h3>Web Development</h3>
//                             <p>Add service description here...</p>
//                         </div>
//                         {/* Service Card 3 */}
//                         <div className="col-md-3">
//                             <h3>Content Writing</h3>
//                             <p>Add service description here...</p>
//                         </div>
//                         {/* Service Card 4 */}
//                         <div className="col-md-3">
//                             <h3>Graphic Design</h3>
//                             <p>Add service description here...</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Section */}
//             <section className="section bg-light">
//                 <div className="container text-center">
//                     <h2>Contact</h2>
//                     <p>Get in touch with us...</p>
//                     {/* Add your contact form here */}
//                 </div>
//             </section>
//         </div>
//     );
// }


//path client/src/component/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css'; // Import the custom CSS file
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <div className='container-fluid'>
            <div className='navbarContainer'>
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
                                    <a className="nav-link" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <Link className="btn btn-outline-primary me-2 btn-login" to="/login">Login</Link>
                                <Link className="btn btn-primary btn-signup" to="/signup">Signup</Link>
                            </div>
                            {/* <div className="d-flex align-items-center">
                                <Link className="nav-link" to="/myorder">
                                    <FontAwesomeIcon icon="shopping-bag" />
                                </Link>
                                <Link className="nav-link" to="/cart">
                                    <FontAwesomeIcon icon="shopping-cart" />
                                </Link>
                                <Link className="nav-link" to="/profile">
                                    <FontAwesomeIcon icon="user" />
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </nav>
            </div>

            {/* Welcome Section */}
            <div id="home" className="carousel slide hero-section vh-100" data-bs-ride="carousel">
                <div className="carousel-inner h-100">
                    <div className="carousel-item active h-100">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-center text-white">
                                <h1>Welcome to Pizza</h1>
                                <p>Your one-stop shop for delicious pizzas and more. Please login or signup to continue.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item h-100">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-center text-white">
                                <h1>Discover Our Menu</h1>
                                <p>Explore a wide variety of delicious pizzas and other dishes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item h-100">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-center text-white">
                                <h1>Order Now</h1>
                                <p>Place your order online and enjoy our delicious pizzas at home.</p>
                            </div>
                        </div>
                    </div>



                    <div className="carousel-item h-100">
                         <div className="d-flex justify-content-center align-items-center h-100">
                          <div className="text-center text-white">
                            <h1>Explore Our Pizza Varieties</h1>
                                <p>Discover the finest ingredients and unique flavors in our pizza collection.</p>
                                   <div className="pizza-details  " >
                                     <div className="card">
                                           <div className="card-body ">
                                         <h3>Margherita</h3>
                                         <p>Ingredients: Fresh tomatoes, mozzarella cheese, fresh basil, olive oil, and a hint of salt.</p>
                                          </div>
                </div>


<div className="card">
    <div className="card-head">
    <p>Please <Link to="/signup" className="text-decoration-none text-warning">register</Link> to view more.</p>
            <Link to="/login" className="btn btn-outline-warning me-2">Login</Link>
            <Link to="/signup" className="btn btn-dark ">View More</Link>
    </div>
    <div className="card-body">
    <h3>Pepperoni</h3>
                <p>Ingredients: Pepperoni, mozzarella cheese, tomato sauce, and Italian herbs.</p>
    </div>
</div>
            
<div className="card">
    <div className="card-body">
    <h3>Veggie Delight</h3>
                <p>Ingredients: Bell peppers, onions, mushrooms, black olives, mozzarella cheese, and tomato sauce.</p>
    </div>
</div>

<div className="card">
    <div className="card-body">
    <h3>BBQ Chicken</h3>
                <p>Ingredients: Grilled chicken, BBQ sauce, red onions, cilantro, and mozzarella cheese.</p>
    </div>
</div>

            </div>

        </div>
    </div>
</div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#home" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#home" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Services Section */}
            <section id="services" className="section">
                <div className="container text-center">
                    <h2>Our Services</h2>
                    <p>We offer a variety of services to meet your needs:</p>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="service-card">
                                <h3>Custom Pizza Creation</h3>
                                <p>Create your own pizza with a variety of fresh toppings and sauces.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="service-card">
                                <h3>Fast Delivery</h3>
                                <p>Enjoy our delicious pizzas delivered to your doorstep in no time.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="service-card">
                                <h3>Catering Services</h3>
                                <p>We provide catering services for events and parties with customized menus.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="service-card">
                                <h3>Online Ordering</h3>
                                <p>Place your order online for a convenient and quick service experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://cdn.pixabay.com/photo/2022/10/01/21/25/woman-7492273_1280.jpg" alt="About" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2>About Us</h2>
                            <p>We are passionate about providing the best pizza experience for our customers. Our ingredients are fresh, our recipes are tried and tested, and our service is unmatched. Join us for a slice of perfection!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
                <div className="container text-center">
                    <h2>Contact</h2>
                    <p>We'd love to hear from you! Get in touch with us to discuss your order or any questions you may have.</p>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Your Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Your Email" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>

         

            {/* Map Section */}
            <section className="section map-section">
                <div className="container text-center">
                    <h2>Visit Us</h2>
                    <p>Find us on the map:</p>
                    {/* Embedded Map */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.8816303933!2d-0.24167995010769734!3d51.52877184101335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035d40cf41fd%3A0x5cdd5b60219b5660!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1638244517863!5m2!1sen!2suk" 
                        width="600" 
                        height="450" 
                        style={{ border: '0' }} 
                        allowFullScreen="" 
                        loading="lazy">
                    </iframe>
                </div>
            </section>

               {/* Footer Section */}
               <footer className="footer bg-dark text-white">
                <div className="container text-center">
                    <p>&copy; 2024 Pizza. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
