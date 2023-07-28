import axios from "axios";
export const newStudentRegistration = (student) => {
    return axios.post('/api/v1/student/register', student);

};