import React, { useState } from "react";

const DoctorAppointment = () => {
  const [formData, setFormData] = useState({
    doctor_mobile: "",
    user_mobile: "",
    google_meet_link: "",
  });

  const [responseMessage, setResponseMessage] = useState(""); // State to store server response message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the formData to check the fields before sending the request
    console.log(formData); 

    try {
      const response = await fetch("http://localhost:5000/doctorappointcreate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json(); // Parse the response as JSON

        setResponseMessage("Appointment successfully created!"); // Display success message
        console.log("Response from server:", data);
        setFormData({
          doctor_mobile: "",
          user_mobile: "",
          google_meet_link: "",
        });
      } else {
        const errorData = await response.json(); // Get error data from server response
        console.error("Error from server:", errorData);
        setResponseMessage(`Error: ${errorData.message || "Failed to create appointment. Please try again."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred while sending the appointment. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Doctor Appointment Form</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
        {/* Doctor's Mobile Number */}
        <label htmlFor="doctor_mobile">Doctor's Mobile Number:</label><br />
        <input
          type="text"
          id="doctor_mobile"
          name="doctor_mobile"
          placeholder="Enter doctor's mobile number"
          value={formData.doctor_mobile}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px", fontSize: "16px" }}
        /><br />

        {/* User's Mobile Number */}
        <label htmlFor="user_mobile">User's Mobile Number:</label><br />
        <input
          type="text"
          id="user_mobile"
          name="user_mobile"
          placeholder="Enter user's mobile number"
          value={formData.user_mobile}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px", fontSize: "16px" }}
        /><br />

        {/* Google Meet Link */}
        <label htmlFor="google_meet_link">Google Meet Link:</label><br />
        <input
          type="url"
          id="google_meet_link"
          name="google_meet_link"
          placeholder="Enter Google Meet link"
          value={formData.google_meet_link}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px", fontSize: "16px" }}
        /><br />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Send Appointment
        </button>
      </form>

      {/* Response message */}
      {responseMessage && (
        <div style={{ marginTop: "20px", color: responseMessage.includes("successfully") ? "green" : "red" }}>
          <strong>{responseMessage}</strong>
        </div>
      )}
    </div>
  );
};

export default DoctorAppointment;
