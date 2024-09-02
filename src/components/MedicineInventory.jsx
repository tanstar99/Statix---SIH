import React, { useState } from 'react';
import './MedicineInventory.css';

const MedicineInventory = ({ medicines }) => {
    const [medicineList, setMedicineList] = useState(medicines);
    const [editMode, setEditMode] = useState(null);
    const [updatedMedicine, setUpdatedMedicine] = useState({});

    const handleEditClick = (medicine) => {
        setEditMode(medicine.id);
        setUpdatedMedicine({ ...medicine });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedMedicine({ ...updatedMedicine, [name]: value });
    };

    const handleUpdateClick = (id) => {
        setMedicineList(medicineList.map(med =>
            med.id === id ? updatedMedicine : med
        ));
        setEditMode(null);
    };

    const handleCancelClick = () => {
        setEditMode(null);
    };

    const availableMedicines = medicineList.filter(med => med.available);
    const outOfStockMedicines = medicineList.filter(med => !med.available);

    return (
        <div className="medicine-inventory-container">
            <header className="header">
                <h1>Medicine Inventory - Admin Dashboard</h1>
            </header>

            <div className="content">
                <div className="section">
                    <h2>Medicines Available</h2>
                    {availableMedicines.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {availableMedicines.map(med => (
                                    <tr key={med.id}>
                                        <td>{med.id}</td>
                                        <td>{med.name}</td>
                                        <td>{med.quantity}</td>
                                        <td>${med.price.toFixed(2)}</td>
                                        <td>
                                            <button onClick={() => handleEditClick(med)}>Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No medicines available.</p>
                    )}
                </div>

                <div className="section">
                    <h2>Medicines Not Available</h2>
                    {outOfStockMedicines.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {outOfStockMedicines.map(med => (
                                    <tr key={med.id}>
                                        <td>{med.id}</td>
                                        <td>{med.name}</td>
                                        <td>{med.quantity}</td>
                                        <td>${med.price.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No out-of-stock medicines.</p>
                    )}
                </div>

                {editMode && (
                    <div className="edit-form">
                        <h2>Edit Medicine</h2>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={updatedMedicine.name}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Quantity:
                            <input
                                type="number"
                                name="quantity"
                                value={updatedMedicine.quantity}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Price:
                            <input
                                type="number"
                                name="price"
                                value={updatedMedicine.price}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button onClick={() => handleUpdateClick(updatedMedicine.id)}>Update</button>
                        <button onClick={handleCancelClick} className="cancel-button">Cancel</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MedicineInventory;
