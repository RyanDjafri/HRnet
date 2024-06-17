import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";

const Home = () => {
  const [states, setStates] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const statesData = [
      { name: "Alabama", abbreviation: "AL" },
      { name: "Alaska", abbreviation: "AK" },
      { name: "American Samoa", abbreviation: "AS" },
      { name: "Arizona", abbreviation: "AZ" },
      { name: "Arkansas", abbreviation: "AR" },
      { name: "California", abbreviation: "CA" },
      { name: "Colorado", abbreviation: "CO" },
      { name: "Connecticut", abbreviation: "CT" },
      { name: "Delaware", abbreviation: "DE" },
      { name: "District Of Columbia", abbreviation: "DC" },
      { name: "Federated States Of Micronesia", abbreviation: "FM" },
      { name: "Florida", abbreviation: "FL" },
      { name: "Georgia", abbreviation: "GA" },
      { name: "Guam", abbreviation: "GU" },
      { name: "Hawaii", abbreviation: "HI" },
      { name: "Idaho", abbreviation: "ID" },
      { name: "Illinois", abbreviation: "IL" },
      { name: "Indiana", abbreviation: "IN" },
      { name: "Iowa", abbreviation: "IA" },
      { name: "Kansas", abbreviation: "KS" },
      { name: "Kentucky", abbreviation: "KY" },
      { name: "Louisiana", abbreviation: "LA" },
      { name: "Maine", abbreviation: "ME" },
      { name: "Marshall Islands", abbreviation: "MH" },
      { name: "Maryland", abbreviation: "MD" },
      { name: "Massachusetts", abbreviation: "MA" },
      { name: "Michigan", abbreviation: "MI" },
      { name: "Minnesota", abbreviation: "MN" },
      { name: "Mississippi", abbreviation: "MS" },
      { name: "Missouri", abbreviation: "MO" },
      { name: "Montana", abbreviation: "MT" },
      { name: "Nebraska", abbreviation: "NE" },
      { name: "Nevada", abbreviation: "NV" },
      { name: "New Hampshire", abbreviation: "NH" },
      { name: "New Jersey", abbreviation: "NJ" },
      { name: "New Mexico", abbreviation: "NM" },
      { name: "New York", abbreviation: "NY" },
      { name: "North Carolina", abbreviation: "NC" },
      { name: "North Dakota", abbreviation: "ND" },
      { name: "Northern Mariana Islands", abbreviation: "MP" },
      { name: "Ohio", abbreviation: "OH" },
      { name: "Oklahoma", abbreviation: "OK" },
      { name: "Oregon", abbreviation: "OR" },
      { name: "Palau", abbreviation: "PW" },
      { name: "Pennsylvania", abbreviation: "PA" },
      { name: "Puerto Rico", abbreviation: "PR" },
      { name: "Rhode Island", abbreviation: "RI" },
      { name: "South Carolina", abbreviation: "SC" },
      { name: "South Dakota", abbreviation: "SD" },
      { name: "Tennessee", abbreviation: "TN" },
      { name: "Texas", abbreviation: "TX" },
      { name: "Utah", abbreviation: "UT" },
      { name: "Vermont", abbreviation: "VT" },
      { name: "Virgin Islands", abbreviation: "VI" },
      { name: "Virginia", abbreviation: "VA" },
      { name: "Washington", abbreviation: "WA" },
      { name: "West Virginia", abbreviation: "WV" },
      { name: "Wisconsin", abbreviation: "WI" },
      { name: "Wyoming", abbreviation: "WY" },
    ];
    setStates(statesData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department,
      street,
      city,
      state,
      zipCode,
    };
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setStartDate("");
    setDepartment("");
    setStreet("");
    setCity("");
    setState("");
    setZipCode("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>HRnet</h1>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Department</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <div>
          <label>Street</label>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>State</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          >
            <option value="">Select</option>
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Zip Code</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Employee</button>
      </form>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Employee Saved!</h2>
        <p>The employee has been successfully saved.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Home;
