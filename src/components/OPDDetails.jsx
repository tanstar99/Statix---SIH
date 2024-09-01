import React from 'react';
import './OpdDetails.css';

const OpdDetails = ({ opdData }) => {
    // Filtering data based on status
    const admittedPatients = opdData.filter(patient => patient.status === 'Admitted');
    const recoveringPatients = opdData.filter(patient => patient.status === 'Recovering');
    const newlyAdmittedPatients = opdData.filter(patient => patient.status === 'Newly Admitted');

    return (
        <div className="opd-details-container">
            <header className="header">
                <h1>OPD Details - Admin Dashboard</h1>
            </header>

            <div className="content">
                <div className="section">
                    <h2>Admitted Patients</h2>
                    {admittedPatients.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Patient ID</th>
                                    <th>Name</th>
                                    <th>Admission Date</th>
                                    <th>Doctor</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {admittedPatients.map(patient => (
                                    <tr key={patient.patientId}>
                                        <td>{patient.patientId}</td>
                                        <td>{patient.name}</td>
                                        <td>{patient.admissionDate}</td>
                                        <td>{patient.doctor}</td>
                                        <td>{patient.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No admitted patients.</p>
                    )}
                </div>

                <div className="section">
                    <h2>Patients About to Recover</h2>
                    {recoveringPatients.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Patient ID</th>
                                    <th>Name</th>
                                    <th>Admission Date</th>
                                    <th>Doctor</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recoveringPatients.map(patient => (
                                    <tr key={patient.patientId}>
                                        <td>{patient.patientId}</td>
                                        <td>{patient.name}</td>
                                        <td>{patient.admissionDate}</td>
                                        <td>{patient.doctor}</td>
                                        <td>{patient.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No patients about to recover.</p>
                    )}
                </div>

                <div className="section">
                    <h2>Newly Admitted Patients</h2>
                    {newlyAdmittedPatients.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Patient ID</th>
                                    <th>Name</th>
                                    <th>Admission Date</th>
                                    <th>Doctor</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newlyAdmittedPatients.map(patient => (
                                    <tr key={patient.patientId}>
                                        <td>{patient.patientId}</td>
                                        <td>{patient.name}</td>
                                        <td>{patient.admissionDate}</td>
                                        <td>{patient.doctor}</td>
                                        <td>{patient.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No newly admitted patients.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OpdDetails;
