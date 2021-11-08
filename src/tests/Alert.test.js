/* eslint-disable no-unused-vars */
import React from "react";
import { render } from '@testing-library/react';
import Alert from '../components/Alert';

describe('Alert component', () => {
    it('displays an error message', () => {

        const { getByText } = render(<Alert message='Server error, try again later!' />);
        
        expect(getByText(/Error/).textContent).toBe('Error!');
    });

    it('displays a success message', () => {
        const { getByText } = render(<Alert message='Success!' success />);

        // passing a prop without assigning a value is equivalent of assigning prop={true}
        // i.e. <Alert message='Success!' success={true} />

        expect(getByText(/Success/).textContent).toBe('Success!');
    });
});