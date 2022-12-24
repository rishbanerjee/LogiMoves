import { useState, useEffect } from "react";

import "./GodownOwnerForm.css";

function GodownOwnerForm() {
  const initialValues = { username: "", email: "", Address: "", Number: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };

  return (
    <div className="container">
      

      <form onSubmit={handleSubmit}>
        <h1>Warehouse Owner Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Office Address</label>
            <input
              type="Address"
              name="Address"
              placeholder="Address"
              value={formValues.Address}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.Address}</p>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="Number"
              name="Number"
              placeholder="Phone Number"
              value={formValues.Number}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.Number}</p>
          <div className="field pdf">
            <label>Proof Of OwnerShip</label>
            <input
              type="file"
              accept="pdf"
              name="ownership"
              placeholder="Proof Of OwnerShip"
              value={formValues.ownership}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field pdf">
            <label>Warehouse License</label>
            <input
              type="file"
              accept="pdf"
              name="license"
              placeholder="Proof Of OwnerShip"
              value={formValues.license}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field pdf">
            <label>Address Proof</label>
            <input
              type="file"
              accept="pdf"
              name="addressproof"
              placeholder="Proof Of Address"
              value={formValues.addressproof}
              onChange={handleChange}
              required
            />
          </div>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default GodownOwnerForm;