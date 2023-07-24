import React from 'react';
import { fireEvent, getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RegisterStudentPage } from './RegisterStudentPage';

describe('RegisterStudentPage',() => {
    describe('Layout', () => {
        it('has header for Register Student', () => {
           const {container} = render(<RegisterStudentPage />)
           const header = container.querySelector('h1')
           expect(header).toHaveTextContent('Register Student')
        });    

         it('has label for please enter student name', () => {
            const{container} = render(<RegisterStudentPage />)
            const label = container.querySelector('label')
            expect(label).toHaveTextContent('Please Enter Student Name:');

        });

        it('has label for enter course name', () => {
            const {getByText} = render(<label>Please Enter Course Name:</label>)
            expect(getByText("Please Enter Course Name:")).toBeTruthy
 
         });

         it('has label for enter specialization name', () => {
            const {getByText} = render(<label>Please Enter Specialization Name:</label>)
            expect(getByText("Please Enter Specialization Name:")).toBeTruthy
 
         });

         it('has label for enter percentage', () => {
            const {getByText} = render(<label>Please Enter Your Percentage:</label>)
            expect(getByText("Please Enter Your Percentage:")).toBeTruthy
 
         });

         it('has label for enter percentage', () => {
            const {getByText} = render(<label>Please Enter your Department:</label>)
            expect(getByText("Please Enter your Department:")).toBeTruthy
 
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

        it('has button for register student submission', () => {
            const {container} = render(<RegisterStudentPage />)
            const submitButton = container.querySelector('button')
            expect(submitButton).toBeInTheDocument();
        });

    });

    describe('interactions of components and user', () => {
        const changeEvent = (content) => {
           return {
             target: {
              value: content
            }
          } 
         };

        it('sets displayname value into the student name place holder text', () => {
        const {queryByPlaceholderText} = render(<RegisterStudentPage />)
        const displayStudentNameInput = queryByPlaceholderText('Please Enter Student Name')
        
        fireEvent.change(displayStudentNameInput, changeEvent('Please Enter Student Name'))
        expect(displayStudentNameInput).toHaveValue('Please Enter Student Name')
        });

        it('sets displayname value into the course name place holder text', () => {
            const {queryByPlaceholderText} = render(<RegisterStudentPage />)
            const displayStudentCourseInput = queryByPlaceholderText('Please Enter Course')
            
            fireEvent.change(displayStudentCourseInput, changeEvent('Please Enter Course'))
            expect(displayStudentCourseInput).toHaveValue('Please Enter Course')
         });

         it('sets displayname value into the specialization name place holder text', () => {
            const {queryByPlaceholderText} = render(<RegisterStudentPage />)
            const displaySpecializationInput = queryByPlaceholderText('Please Enter Specialization')
            
            fireEvent.change(displaySpecializationInput, changeEvent('Please Enter Specialization'))
            expect(displaySpecializationInput).toHaveValue('Please Enter Specialization')
         });

         it('sets displayname value into the percentage place holder text', () => {
            const {queryByPlaceholderText} = render(<RegisterStudentPage />)
            const displayPercentage = queryByPlaceholderText('Please Enter Percentage')
            
            fireEvent.change(displayPercentage, changeEvent('Please Enter Percentage'))
            expect(displayPercentage).toHaveValue('Please Enter Percentage')
         });

         it('sets displayname value into the department place holder text', () => {
            const {queryByPlaceholderText} = render(<RegisterStudentPage />)
            const displayDepartmentName = queryByPlaceholderText('Please Enter Department Name')
            
            fireEvent.change(displayDepartmentName, changeEvent('Please Enter Department Name'))
            expect(displayDepartmentName).toHaveValue('Please Enter Department Name')
         });
    
    


    });

});