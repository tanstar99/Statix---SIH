import React from 'react';
import './PatientInfo.css';

const PatientInfo = ({ patients }) => {
    return (
        <div className="patient-info-container">
            <header className="header">
                <h1>Patient Information - Admin Dashboard</h1>
            </header>

            <div className="content">
                {patients.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>DOB</th>
                                <th>Blood Group</th>
                                <th>Ward</th>
                                <th>Medical Condition</th>
                                <th>Bill</th>
                                <th>Address</th>
                                <th>Contact Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map(patient => (
                                <tr key={patient.patientId}>
                                    <td>{patient.name}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.dob}</td>
                                    <td>{patient.bloodGroup}</td>
                                    <td>{patient.ward}</td>
                                    <td>{patient.medicalCondition}</td>
                                    <td>${patient.bill.toFixed(2)}</td>
                                    <td>{patient.address}</td>
                                    <td>{patient.contact}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No patient information available.</p>
                )}
            </div>
        </div>
    );
};

export default PatientInfo;
