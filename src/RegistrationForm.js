import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [submittedData, setSubmittedData] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData([...submittedData, formData]);
        setFormData({ name: '', email: '', password: '' });  // Clear form after submission
    };

    return (
        <div className="main-container">
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </label>
                    <button type="submit">Register</button>
                </form>
            </div>

            <div className="result-container">
                {submittedData.length > 0 && (
                    <div className="result">
                        <h2>Submitted Data</h2>
                        {submittedData.map((data, index) => (
                            <div key={index} className="submitted-item">
                                <p><strong>Registration {index + 1}:</strong></p>
                                <p>Name: {data.name}</p>
                                <p>Email: {data.email}</p>
                                <p>Password: {data.password}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default RegistrationForm;
