import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css'


const Signup = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    address: '',
    gender: 'male', // Default gender can be set here
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9999/api/c3/user/register', formData);
      history('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Signup error:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="number" name="number" placeholder="Phone Number" value={formData.number} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button onClick={handleSubmit}>Signup</button>
        </form>
        <p>Already have an account? <Link to="/login"><span color='nlule'>Login</span></Link></p>
      </div>
    </div>
  );
};

export default Signup;
