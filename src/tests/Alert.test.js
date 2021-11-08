/* eslint-disable no-unused-vars */
import React from "react";
import { screen, render } from '@testing-library/react';
import Alert from '../components/Alert';


describe('Alert component', () => {
    it('displays an error message', () => {

        const alertComponent = render(<Alert message='Server error, try again later!' />)

        const alertMessageNode = alertComponent.getBytext('Server error, try again later!')
        
        expect(alertMessageNode.textContent).toBe('Error!');
    })
})