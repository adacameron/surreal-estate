import React, { useState } from 'react';
import '../styles/AddProperty.scss'
import axios from 'axios';
import Alert from '../components/Alert';

const AddProperty = () => {
    const initialState = {
        fields: {
            title: '',
            type: '',
            bedrooms: '',
            bathrooms: '',
            price: '',
            city: 'Manchester',
            email: ''    
        },
        alert: {
            message: '',
            isSuccess: false,
          },
         // added alert as a key in the initial state object
    };

    // initial state is the form fields object

    const [fields, setFields] = useState(initialState.fields);

    // useState hook, setting the initial state using above object

    const [alert, setAlert] = useState(initialState.alert)
    // useState hook to manage state of the alert

    const handleAddProperty = (event) => {
        event.preventDefault();

        setAlert({ message: '', isSuccess:false });
        // clears error/success message before each re-submit

        axios.post('http://localhost:4000/api/v1/PropertyListing', {
            title: fields.title,
            type: fields.type,
            bedrooms: fields.bedrooms,
            bathrooms: fields.bathrooms,
            price: fields.price,
            city: fields.city,
            email: fields.email,
                  })
                  .then((response) => 
                  setAlert({
                      message: 'Property Added',
                      isSuccess: true,
                  })
                  )
                  .catch((response) => {
                    setAlert({
                        message: 'Server error. Please try again later.',
                        isSuccess: false,
                    })              
                });
    };

const handleFieldChange = (event) => {

    setFields(fields => ({ ...fields, [event.target.name]: event.target.value }))
    // when user types, this function overwrites the initial state and sets each field to the value inputted by user
}

return (
    <div className="add-property">
        <h1>Add Property</h1>

        <form className="add-property__form" onSubmit={handleAddProperty}>

        <Alert message={alert.message} success={alert.isSuccess} />


            <div className="add-property__title">
                <label htmlFor="title">
                    Property title
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={fields.title}
                        onChange={handleFieldChange}
                        placeholder="E.g. 2 bed flat for sale"
                    />
                </label>

            </div>
            <div className="add-property__type">
                <label htmlFor="type">Type of property  </label>
                <select
                    id="type"
                    name="type"
                    type="dropdown"
                    value={fields.type}
                    onChange={handleFieldChange}>

                    <option value="Flat">Flat</option>
                    <option value="Detached">Detached</option>
                    <option value="Semi-Detached">Semi-Detached</option>
                    <option value="Terraced">Terraced</option>
                    <option value="End of Terrace">End of Terrace</option>
                    <option value="Cottage">Cottage</option>
                    <option value="Bungalow">Bungalow</option>
                </select>

            </div>

            <div className="add-property__bedrooms">
                <label htmlFor="bedrooms">Bedrooms </label>
                <input
                    id="bedrooms"
                    name="bedrooms"
                    type="text"
                    value={fields.bedrooms}
                    onChange={handleFieldChange}
                    placeholder="Min 1"
                />

            </div>
            <div className="add-property__bathrooms">
                <label htmlFor="Bathrooms">Bathrooms </label>
                <input
                    id="bathrooms"
                    name="bathrooms"
                    type="text"
                    value={fields.bathrooms}
                    onChange={handleFieldChange}
                    placeholder="Min 1"
                />

            </div>
            <div className="add-property__price">
                <label htmlFor="Price">Price</label>
                <input
                    id="price"
                    name="price"
                    type="text"
                    value={fields.price}
                    onChange={handleFieldChange}
                    placeholder="£"
                />

            </div>
            <div className="add-property__email">
                <label htmlFor="Email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleFieldChange}
                    placeholder="user@address.co.uk"
                />

            </div>
            <div className="add-property__city">
                <label htmlFor="city">City </label>
                <select
                    id="city"
                    name="city"
                    type="dropdown"
                    value={fields.city}
                    onChange={handleFieldChange}>
                    <option value="Manchester">Manchester</option>
                    <option value="Leeds">Leeds</option>
                    <option value="Sheffield">Sheffield</option>
                    <option value="Liverpool">Liverpool</option>
                </select>
            </div>
            <div className="add-property__submit">
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
)
};

export default AddProperty;