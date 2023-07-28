import axios from 'axios';
import * as apiCallsStudentRegistration from './apiCallsStudentRegistration';

describe("api calls for Student Registration ", () => {
    describe ("new student registration ", () => {
        it(' calls /api/v1/student/register', () => {
            const mockNewStudentRegistration = jest.fn();
            axios.post = mockNewStudentRegistration;
            apiCallsStudentRegistration.newStudentRegistration();
            // Calling the API for student registration for the first time 
            // accessing the first parameter
            const path = mockNewStudentRegistration.mock.calls[0][0];
            expect(path).toBe('/api/v1/student/register');
        })
    })
})