import React from 'react';
import './AppointmentStatus.css';

const AppointmentStatus = ({ appointments }) => {
    return (
        <div className="appointment-status-container">
            <header className="header">
                <h1>Hospital Admin Dashboard</h1>
            </header>

            <div className="content">
                <div className="info">
                    <h2>Appointment Details</h2>
                    {appointments.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Booking ID</th>
                                    <th>Appointment Date</th>
                                    <th>Appointment Time</th>
                                    <th>Doctor</th>
                                    <th>Patient Name</th>
                                    <th>Patient ID</th>
                                    <th>Contact Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment) => (
                                    <tr key={appointment.bookingId}>
                                        <td>{appointment.bookingId}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.time}</td>
                                        <td>{appointment.doctor}</td>
                                        <td>{appointment.patientName}</td>
                                        <td>{appointment.patientId}</td>
                                        <td>{appointment.contactNumber}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No appointments available.</p>
                    )}
                </div>

                <a href="/admin-dashboard" className="back-button">Back to Dashboard</a>
            </div>
        </div>
    );
};

export default AppointmentStatus;
