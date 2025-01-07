import React, { useState } from "react";

const DoctorAppointment = () => {
  const [formData, setFormData] = useState({
    doctor_mobile: "",
    user_mobile: "",
    google_meet_link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/doctorappointcreate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Appointment successfully created!");
        console.log("Response from server:", data);
        setFormData({
          doctor_mobile: "",
          user_mobile: "",
          google_meet_link: "",
        });
      } else {
        console.error("Failed to create appointment");
        alert("Error creating appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the appointment. Please try again.");
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
    </div>
  );
};

export default DoctorAppointment;
