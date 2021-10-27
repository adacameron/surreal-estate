import React, { useState } from "react";
import '../styles/AddProperty.css'

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
          
            <form onSubmit={handleAddProperty}>

                <div className="add-property__title">
                    <label htmlFor="title">
                        <input
                            id="title"
                            name="title"
                            value={fields.title}
                            onChange={handleFieldChange}
                            placeholder="Property listing title"
                        />
                    </label>
                </div>
                <div className="add-property__type">
                    <label htmlFor="type">Type of property
                        <select>
                            <option value="Flat">Flat</option>
                            <option value="Detached">Detached</option>
                            <option value="Semi-Detached">Semi-Detached</option>
                            <option value="Terraced">Terraced</option>
                            <option value="End of Terrace">End of Terrace</option>
                            <option value="Cottage">Cottage</option>
                            <option value="Bungalow">Bungalow</option>
                        </select>
                    </label>
                </div>

                <div className="add-property__bedrooms">
                    <label htmlFor="bedrooms">Bedrooms
                        <input
                            id="bedrooms"
                            name="bedrooms"
                            value={fields.bedrooms}
                            onChange={handleFieldChange}
                            placeholder="Min 1"
                        />
                    </label>
                </div>
                <div className="add-property__bathrooms">
                    <label htmlFor="Bathrooms">Bathrooms
                        <input
                            id="Bathrooms"
                            name="Bathrooms"
                            value={fields.bathrooms}
                            onChange={handleFieldChange}
                            placeholder="Min 1"
                        />
                    </label>
                </div>
                <div className="add-property__price">
                    <label htmlFor="Price">Price
                        <input
                            id="price"
                            name="price"
                            type="number"
                            min="10,000"
                            max="10,000,000"
                            value={fields.price}
                            onChange={handleFieldChange}
                            placeholder="£"
                        />
                    </label>
                </div>
                <div className="add-property__email">
                    <label htmlFor="Email">Email
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={fields.email}
                            onChange={handleFieldChange}
                            placeholder="user@address.co.uk"
                        />
                    </label>
                </div>
                <div className="add-property__city">
                    <label htmlFor="city">City
                        <select
                            id="city"
                            name="city"
                            value={fields.city}
                            onChange={handleFieldChange}>
                            <option value="Manchester">Manchester</option>
                            <option value="Leeds">Leeds</option>
                            <option value="Sheffield">Sheffield</option>
                            <option value="Liverpool">Liverpool</option>
                        </select>
                    </label>
                </div>
                <div className="add-property__submit">
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
};

export default AddProperty;