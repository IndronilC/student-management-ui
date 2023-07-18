import React from "react";

export class RegisterStudentPage extends React.Component{
    render(){
        return(
            <div>
                <h1>Register Student</h1>
                <div>
                  <input placeholder="Please Enter Student Name"/>
                </div>
                <div>
                    <input placeholder="Please Enter Course" />
                </div>
                <div>
                    <input placeholder="Please Enter Specialization" />
                </div>
                <div>
                    <input placeholder="Please Enter Percentage" />
                </div>
                <div>
                    <input placeholder="Please Enter Department Name" />
                </div>
            </div>

            
        )
    }
}

export default RegisterStudentPage;