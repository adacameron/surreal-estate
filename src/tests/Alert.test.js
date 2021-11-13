/* eslint-disable no-unused-vars */
import React from "react";
import { render, asFragment } from '@testing-library/react';
import Alert from '../components/Alert';

describe('Alert component', () => {
    it('displays an error message', () => {

        const { getByText, asFragment } = render(<Alert message='Error!' />);
        
        expect(getByText(/Error/).textContent).toBe('Error!');
        expect(asFragment()).toMatchSnapshot();
    });

    it('displays a success message', () => {
        const { getByText, asFragment } = render(<Alert message='Success!' success />);

        // passing a prop without assigning a value is equivalent of assigning prop={true}
        // i.e. <Alert message='Success!' success={true} />

        expect(getByText(/Success/).textContent).toBe('Success!');
        expect(asFragment()).toMatchSnapshot();

    });
    
    it('does not render an error or a success message if message props is empty', () => {
        const { asFragment } = render(<Alert message="" />);
        const alert = asFragment();

        expect(alert).toMatchSnapshot();
    })
});