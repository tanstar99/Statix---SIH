import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import BedAvailability from './components/BedAvailablity';
import AppointmentStatus from './AppointmentStatus';
import PatientInfo from './components/PatientInfo';
import MedicineInventory from './components/MedicineInventory';
import OPDDetails from './components/OPDDetails';
import AppointmentBooking from './components/Appointment';
import AmbulanceBooking from './components/AmbulanceBooking';

const sampleAppointments = [
  {
      bookingId: '001',
      date: 'September 1, 2024',
      time: '2:30 PM',
      doctor: 'Dr. Sanjay Sethi',
      patientName: 'John Doe',
      patientId: '123456',
      contactNumber: '(555) 123-4567',
  },
  // Add more appointments here
];

const sampleOpdData = [
  {
      patientId: '001',
      name: 'Siya Shah',
      admissionDate: 'August 25, 2024',
      doctor: 'Dr. Richa Raghavan',
      status: 'Admitted',
  },
  {
      patientId: '002',
      name: 'Vikas Chavla',
      admissionDate: 'August 28, 2024',
      doctor: 'Dr. Sanjay Joshi',
      status: 'Recovering',
  },
  {
      patientId: '003',
      name: 'Kapil Modi',
      admissionDate: 'September 1, 2024',
      doctor: 'Dr. Soham Singhania',
      status: 'Newly Admitted',
  },
  // Add more patient data as needed
];

const sampleMedicines = [
  {
      id: '001',
      name: 'Aspirin',
      quantity: 100,
      price: 5.99,
      available: true,
  },
  {
      id: '002',
      name: 'Paracetamol',
      quantity: 0,
      price: 3.49,
      available: false,
  },
  {
      id: '003',
      name: 'Ibuprofen',
      quantity: 50,
      price: 7.99,
      available: true,
  },
  // Add more medicines as needed
];

const samplePatients = [
  {
      patientId: '001',
      name: 'Alice Charls',
      age: 30,
      dob: '1994-03-12',
      bloodGroup: 'O+',
      ward: 'Ward A',
      medicalCondition: 'Flu',
      bill: 120.50,
      address: '123 Viman Nagar, Delhi',
      contact: '(555) 123-4567',
  },
  {
      patientId: '002',
      name: 'Ram Rathi',
      age: 45,
      dob: '1978-07-22',
      bloodGroup: 'A-',
      ward: 'Ward B',
      medicalCondition: 'Diabetes',
      bill: 250.75,
      address: '456 Dwarkadhish, Delhi',
      contact: '(555) 234-5678',
  },
  {
      patientId: '003',
      name: 'Shyam Patel',
      age: 60,
      dob: '1963-11-30',
      bloodGroup: 'B+',
      ward: 'Ward C',
      medicalCondition: 'Hypertension',
      bill: 310.20,
      address: '789 Prakashan Nagari, Delhi',
      contact: '(555) 345-6789',
  },
  // Add more patient data as needed
];


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route path="bed-availability" element={<BedAvailability />} />
          <Route path="appointments" element={<AppointmentStatus appointments={sampleAppointments}/>} />
          <Route path="patient-info" element={<PatientInfo patients={samplePatients} />} />
          <Route path="medicine-inventory" element={<MedicineInventory medicines = {sampleMedicines} />} />
          <Route path="opd-details" element={<OPDDetails opddata= {sampleAppointments}/>} />
        </Route>
        <Route path="/user-dashboard" element={<UserDashboard />}>
          <Route path="appointments" element={<AppointmentBooking />} />
          <Route path="ambulance" element={<AmbulanceBooking />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
