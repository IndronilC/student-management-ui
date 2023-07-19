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
        
        it('has input for student full name', () => {
            const {queryByPlaceholderText} = render(<RegisterStudentPage />)
            const displayStudentNameInput = queryByPlaceholderText('Please Enter Student Name')
            expect(displayStudentNameInput).toBeInTheDocument()

        });

        it('has input for course', () => {
            const {queryByPlaceholderText} = render(<RegisterStudentPage />)
            const displayStudentCourseInput = queryByPlaceholderText('Please Enter Course')
            expect(displayStudentCourseInput).toBeInTheDocument()

        });

        it('has input for specialization', () => {
            const {queryByPlaceholderText} = render(<RegisterStudentPage />)
            const displayStudentSpecializationInput = queryByPlaceholderText('Please Enter Specialization')
            expect(displayStudentSpecializationInput).toBeInTheDocument()

        });

        it('has input for percentage', () => {
            const {queryByPlaceholderText} = render(<RegisterStudentPage />);
            const percentageInput = queryByPlaceholderText('Please Enter Percentage');
            expect(percentageInput).toBeInTheDocument();

        });

        it('has input for department name', () => {
            const {queryByPlaceholderText} = render(<RegisterStudentPage />);
            const departmentNameInput = queryByPlaceholderText('Please Enter Department Name');
            expect(departmentNameInput).toBeInTheDocument();

        });

        


    });

});