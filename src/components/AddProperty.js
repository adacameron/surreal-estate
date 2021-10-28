import React, { useState } from "react";
import '../styles/AddProperty.scss'

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
        }
    };

    const [fields, setFields] = useState(initialState.fields);

    const handleAddProperty = (event) => {
        event.preventDefault();
        console.log(fields);
    };

    const handleFieldChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFields(fields => ({ ...fields, [name]: value }))
    }

    return (
        <div className="add-property">
            <h1>Add Property</h1>
          
            <form className="add-property__form" onSubmit={handleAddProperty}>

                <div className="add-property__title">
                    <label htmlFor="title">Property title   </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={fields.title}
                            onChange={handleFieldChange}
                            placeholder="E.g. 2 bed flat for sale"
                        />
                  
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
                            // min="10,000"
                            // max="10,000,000"
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