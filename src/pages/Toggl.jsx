import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { http } from './../utils/http';

export default function Toggl() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await http.get('/toggl'); // Replace with your API endpoint
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderEntries = (obj) => {
    return Object.entries(obj).map(([key, value]) => {
      if (Array.isArray(value)) {
        // Render array items
        return (
          <div key={key}>
            <h4>{key}:</h4>
            <ul>
              {value.map((item, index) => (
                <li key={index}>
                  {typeof item === 'object' ? renderEntries(item) : item}
                </li>
              ))}
            </ul>
          </div>
        );
      } else if (typeof value === 'object' && value !== null) {
        // Render nested object
        return (
          <div key={key}>
            <h4>{key}:</h4>
            <div style={{ paddingLeft: '20px' }}>{renderEntries(value)}</div>
          </div>
        );
      } else {
        // Render key-value pair
        return (
          <div key={key}>
            <strong>{key}:</strong> {value}
          </div>
        );
      }
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* <h1>Toggl Data</h1> */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && (
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          {renderEntries(data)}
        </div>
      )}
    </div>
  );
}
