import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FitbitDashboard = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch Fitbit data from Flask API
        axios.get('http://localhost:5000/fitbit')
            .then((response) => {
                if (response.data.success) {
                    setData(response.data.data);
                } else {
                    setError(response.data.error);
                }
            })
            .catch((err) => setError(err.message));
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Fitbit Data Dashboard</h1>
            <table border="1" style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Steps</th>
                        <th>Distance (km)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.date}</td>
                            <td>{entry.steps}</td>
                            <td>{entry.distance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FitbitDashboard;
