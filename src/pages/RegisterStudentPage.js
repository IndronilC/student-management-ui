import React from "react";

export class RegisterStudentPage extends React.Component{
    render(){
        return(
            <div>
                <h1>Register Student</h1>
                <div>
                     <label>Please Enter Student Name:</label>
                     <input placeholder="Please Enter Student Name"/>
                </div>
                 <div>
                    <label>Please Enter Course Name:</label>
                    <input placeholder="Please Enter Course" />
                </div>
                <div>
                   <label>Please Enter Specialization Name:</label>
                  <input placeholder="Please Enter Specialization" />
                </div>
                <div>
                  <label>Please Enter Your Percentage:</label>
                  <input placeholder="Please Enter Percentage" />
                </div>
                <div>
                    <label>Please Enter Your Department:</label> 
                   <input placeholder="Please Enter Department Name" />
                </div>
            </div>

            
        )
    }
}

export default RegisterStudentPage;