import React, { useEffect, useState } from 'react';
import { http } from './../utils/http';
import { useNavigate } from 'react-router-dom';

const FitbitDashboard = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [expandedRow, setExpandedRow] = useState(null); // Track a single expanded row
    const navigate = useNavigate()

    useEffect(() => {
        // Fetch Fitbit data from Flask API
        http.get('/fitbit')
            .then((response) => {
                if (response.data.success) {
                    console.log(response?.data);
                    setData(response.data.data);
                } else {
                    setError(response.data.error);
                }
            })
            .catch((err) => setError(err.message));
    }, []);

    const toggleRow = (clientId) => {
        setExpandedRow((prev) => (prev === clientId ? null : clientId)); // Toggle row expansion
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Fitbit Data Dashboard</h1>
            <button onClick={()=>navigate('/addfibit-user')}>Add+</button>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead style={{ backgroundColor: '#f4f4f4', borderBottom: '2px solid #ccc' }}>
                    <tr>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Client ID</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Steps</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Calories Burned</th>
                        <th style={{ padding: '10px', textAlign: 'center' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry) => (
                        <React.Fragment key={entry.client_id}>
                            <tr style={{ borderBottom: '1px solid #ddd' }}>
                                <td style={{ padding: '10px' }}>{entry.client_id}</td>
                                <td style={{ padding: '10px' }}>{entry.profile.user.fullName}</td>
                                <td style={{ padding: '10px' }}>{entry.activity_summary.summary.steps}</td>
                                <td style={{ padding: '10px' }}>{entry.activity_summary.summary.caloriesOut}</td>
                                <td style={{ padding: '10px', textAlign: 'center' }}>
                                    <button 
                                        onClick={() => toggleRow(entry.client_id)}
                                        style={{ 
                                            padding: '5px 10px', 
                                            backgroundColor: expandedRow === entry.client_id ? '#f44336' : '#4CAF50', 
                                            color: '#fff', 
                                            border: 'none', 
                                            borderRadius: '5px', 
                                            cursor: 'pointer' 
                                        }}>
                                        {expandedRow === entry.client_id ? 'Collapse' : 'Expand'}
                                    </button>
                                </td>
                            </tr>
                            {expandedRow === entry.client_id && (
                                <tr style={{ backgroundColor: '#f9f9f9' }}>
                                    <td colSpan="5" style={{ padding: '20px' }}>
                                        <div style={{ textAlign: 'left' }}>
                                            <h3 style={{ color: '#555' }}>Detailed Data</h3>
                                            <p><strong>Age:</strong> {entry.profile.user.age}</p>
                                            <p><strong>Height:</strong> {entry.profile.user.height} cm</p>
                                            <p><strong>Weight:</strong> {entry.profile.user.weight} kg</p>
                                            <h4 style={{ color: '#555' }}>Activity Summary</h4>
                                            <p><strong>Distance:</strong> {entry.activity_summary.goals.distance} km</p>
                                            <p><strong>Active Minutes:</strong> {entry.activity_summary.goals.activeMinutes}</p>
                                            <h4 style={{ color: '#555' }}>Heart Rate Zones</h4>
                                            <ul>
                                                {entry.heart_rate["activities-heart"][0].value.heartRateZones.map((zone, index) => (
                                                    <li key={index}>
                                                        {zone.name}: {zone.min}-{zone.max} bpm
                                                    </li>
                                                ))}
                                            </ul>
                                            <h4 style={{ color: '#555' }}>Sleep Summary</h4>
                                            <p><strong>Total Minutes Asleep:</strong> {entry.sleep_data.summary.totalMinutesAsleep}</p>
                                            <p><strong>Total Time in Bed:</strong> {entry.sleep_data.summary.totalTimeInBed}</p>
                                            <h4 style={{ color: '#555' }}>Hydration Data</h4>
                                            <p><strong>Water Consumed:</strong> {entry.hydration_data.summary.water} ml</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FitbitDashboard;
