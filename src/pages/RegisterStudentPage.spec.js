import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RegisterStudentPage } from './RegisterStudentPage';

describe('RegisterStudentPage',() => {
    describe('Layout', () => {
        it('has header for Register Student', () => {
           const {container} = render(<RegisterStudentPage />)
           const header = container.querySelector('h1')
           expect(header).toHaveTextContent('Register Student')
        });    

    });

});