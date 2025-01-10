import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook
import { http } from './../utils/http';

const FitbitCredentialsForm = () => {
    const navigate = useNavigate(); // Always call hooks at the top level
    const [formData, setFormData] = useState({
        client_id: '',
        client_secret: '',
        redirect_uri: '',
        email: '',
        password: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseMessage('');

        try {
            const response = await http.post('/store-credentials', formData);
            if (response.data.success) {
                setResponseMessage('Credentials stored successfully!');
                // Navigate back after showing the message
                setTimeout(() => {
                    navigate(-1); // Navigate to the previous page
                }, 1000);
            } else {
                setResponseMessage('Failed to store credentials: ' + response.data.error);
            }
        } catch (error) {
            setResponseMessage('Error: ' + error.message);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ textAlign: 'center' }}>Enter Fitbit Credentials</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ marginBottom: '10px' }}>
                    <strong>Client ID:</strong>
                    <input
                        type="text"
                        name="client_id"
                        value={formData.client_id}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                        required
                    />
                </label>
                <label style={{ marginBottom: '10px' }}>
                    <strong>Client Secret:</strong>
                    <input
                        type="password"
                        name="client_secret"
                        value={formData.client_secret}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                        required
                    />
                </label>
                <label style={{ marginBottom: '10px' }}>
                    <strong>Redirect URI:</strong>
                    <input
                        type="text"
                        name="redirect_uri"
                        value={formData.redirect_uri}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                        required
                    />
                </label>
                <label style={{ marginBottom: '10px' }}>
                    <strong>Email:</strong>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                        required
                    />
                </label>
                <label style={{ marginBottom: '10px' }}>
                    <strong>Password:</strong>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                        required
                    />
                </label>
                <button
                    type="submit"
                    style={{ padding: '10px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Submit
                </button>
            </form>
            {responseMessage && (
                <p style={{ marginTop: '20px', color: responseMessage.includes('successfully') ? 'green' : 'red' }}>
                    {responseMessage}
                </p>
            )}
        </div>
    );
};

export default FitbitCredentialsForm;
