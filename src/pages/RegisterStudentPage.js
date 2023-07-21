import React from "react";

export class RegisterStudentPage extends React.Component{
    state = {
        displayStudentName: '',
        displayCourseName: '',
        displaySpecializationName: ''

    };
    onChangeDisplayStudentName = (event) => {
        const value = event.target.value;
        this.setState({displayStudentName: value});
    };

    onChangeDisplayCourseName = (event) => {
        const value = event.target.value;
        this.setState({displayCourseName: value});
    };

    onChangeDisplaySpecializationName = (event) => {
        const value = event.target.value;
        this.setState({displaySpecializationName: value});
    };
    render(){
        return(
            <div>
                <h1>Register Student</h1>
                <div>
                     <label>Please Enter Student Name:</label>
                     <input placeholder="Please Enter Student Name" value={this.state.displayStudentName}
                     onChange={this.onChangeDisplayStudentName}/>
                </div>
                 <div>
                    <label>Please Enter Course Name:</label>
                    <input placeholder="Please Enter Course" value={this.state.displayCourseName}
                    onChange={this.onChangeDisplayCourseName}/>
                </div>
                <div>
                   <label>Please Enter Specialization Name:</label>
                  <input placeholder="Please Enter Specialization" value={this.state.displaySpecializationName} 
                  onChange={this.onChangeDisplaySpecializationName}/>
                </div>
                <div>
                  <label>Please Enter Your Percentage:</label>
                  <input placeholder="Please Enter Percentage" />
                </div>
                <div>
                    <label>Please Enter Your Department:</label> 
                   <input placeholder="Please Enter Department Name" />
                </div>
                <div>
                    <button> Register New Student </button>
                </div>
            </div>

            
        )
    }
}

export default RegisterStudentPage;