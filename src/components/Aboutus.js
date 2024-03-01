import React from 'react';
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <div className='about'>
    <div className='cont' >
      <h1 className='header'>About Us</h1>

      <div className='intro-container'>
        <h3>Welcome to Health Hub</h3>
        <p className='intro-text'>
          At Health Hub, we are dedicated to providing quality healthcare solutions to our valued customers.
          Established in 2021, we have been serving the community with a commitment to excellence in health and wellness.
        </p>
        <p className='intro-text'>
          <b>Mission:</b> Empowering Health, Enriching Lives. Our mission is to be your trusted partner in healthcare
          by delivering a comprehensive range of high-quality medical products and services. We strive to contribute to
          the well-being of our customers and the community by ensuring access to essential healthcare resources.
        </p>
      </div>

      <div className='values-container'>
        <h4>Our Values</h4>
        <p>
          <b>Quality Assurance:</b> We adhere to the highest standards to ensure the safety and efficacy of the products we offer.
          <br></br>
          <b>Customer-Centric Approach:</b> Your health is our priority. We are dedicated to understanding your needs and providing personalized solutions.
          <br></br>
          <b>Integrity:</b> We operate with transparency, honesty, and integrity in all aspects of our business.
          <br></br>
          <b>Innovation:</b> Embracing innovation, we continuously explore new products and services to meet evolving healthcare needs.
        </p>
      </div>

      <div className='why-choose-container'>
        <h5>Why Choose Health Hub</h5>
        <p>
          <b>Wide Range of Products:</b> Explore a comprehensive selection of pharmaceuticals, medical devices, health supplements, and more.
          <br></br>
          <b>Expert Guidance:</b> Our knowledgeable team is here to assist you with product information, usage guidelines, and any questions you may have.
          <br></br>
          <b>Reliable Service:</b> We are committed to delivering your orders promptly and securely, ensuring a seamless shopping experience.
        </p>
      </div>

      <div className='community-container'>
        <h5>Community Engagement</h5>
        <p>
          Beyond being a healthcare provider, we believe in giving back to the community.
          Health Hub actively participates in local health initiatives, charitable events, and community education programs to promote overall wellness.
        </p>
      </div>

      <div className='visit-us-container'>
        <h5>Visit Us</h5>
        <p>
          Experience the Health Hub difference by visiting our store at Thiruvananthapuram.
          <br></br>
          Feel free to reach out to us at <span className='contact'>9999999999</span> or <span className='contact'>xyzabc123@gmail.com</span> for any inquiries or assistance.
        </p>
      </div>

      <p className='closing-text'>
        Thank you for choosing Health Hub as your healthcare partner. We look forward to serving you and contributing to your health and happiness.
      </p>

      <Link to="/" className='link'>Home</Link>
    </div>
    </div>
  );
}

export default Aboutus;
