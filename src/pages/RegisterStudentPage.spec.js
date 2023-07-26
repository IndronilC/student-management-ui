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

         let button, displayStudentNameInput, displayStudentCourseInput, 
         displaySpecializationInput, displayPercentageInput, displayDepartmentNameInput;

         const setUpForSubmit = (props) => {
            const rendered = render (
                <RegisterStudentPage {...props} />
            );

            const {container, queryByPlaceholderText} = rendered;

            displayStudentNameInput = queryByPlaceholderText('Please Enter Student Name');
            displayStudentCourseInput = queryByPlaceholderText('Please Enter Course');
            displaySpecializationInput = queryByPlaceholderText('Please Enter Specialization');
            displayPercentageInput = queryByPlaceholderText('Please Enter Percentage');
            displayDepartmentNameInput = queryByPlaceholderText('Please Enter Department Name');

            fireEvent.change(displayStudentNameInput, changeEvent('Please Enter Student Name'));
            fireEvent.change(displayStudentCourseInput, changeEvent('Please Enter Course'));
            fireEvent.change(displaySpecializationInput, changeEvent('Please Enter Specialization'));
            fireEvent.change(displayPercentageInput, changeEvent('Please Enter Percentage'));
            fireEvent.change(displayDepartmentNameInput, changeEvent('Please Enter Department Name'));
            button = container.querySelector('button');
 
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
            const displayPercentageInput = queryByPlaceholderText('Please Enter Percentage')
            
            fireEvent.change(displayPercentageInput, changeEvent('Please Enter Percentage'))
            expect(displayPercentageInput).toHaveValue('Please Enter Percentage')
         });

         it('sets displayname value into the department place holder text', () => {
            const {queryByPlaceholderText} = render(<RegisterStudentPage />)
            const displayDepartmentNameInput = queryByPlaceholderText('Please Enter Department Name')
            
            fireEvent.change(displayDepartmentNameInput, changeEvent('Please Enter Department Name'))
            expect(displayDepartmentNameInput).toHaveValue('Please Enter Department Name')
         });

         it('calls postRegisterNewStudent when fields are valid and actions are provided in props', () => {
            const actions = {
                postRegisterNewStudent: jest.fn().mockResolvedValueOnce({})
            };
            setUpForSubmit({actions})
           
            fireEvent.click(button);
            expect(actions.postRegisterNewStudent).toHaveBeenCalledTimes(1);
         });

         it('calls postRegisterNewStudent when no exception or error is thrown when action does not have props', () => {
            setUpForSubmit();
            expect(() => fireEvent.click(button)).not.toThrow();
            
         });

         it('calls postRegisterNewStudent when data for new student has been provided', () => {
            const actions = {
                postRegisterNewStudent: jest.fn().mockResolvedValueOnce({})
            };
            setUpForSubmit({actions})
            const expectedNewStudentObject = {
                displayStudentName: 'Please Enter Student Name',
                displayCourseName: 'Please Enter Course',
                displaySpecializationName: 'Please Enter Specialization',
                displayPercentage: 'Please Enter Percentage',
                displayDepartmentName: 'Please Enter Department Name'

            }
           
            fireEvent.click(button);
            expect(actions.postRegisterNewStudent).toHaveBeenCalledWith(expectedNewStudentObject);
         });
    
    


    });

});