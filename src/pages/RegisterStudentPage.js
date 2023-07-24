import React from "react";

export class RegisterStudentPage extends React.Component{
    state = {
        displayStudentName: '',
        displayCourseName: '',
        displaySpecializationName: '',
        displayPercentage: '',
        displayDepartmentName: ''

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

    onChangeDisplaPercentage = (event) => {
        const value = event.target.value;
        this.setState({displayPercentage: value});
    };

    onChangeDisplayDepartmentname = (event) => {
        const value = event.target.value;
        this.setState({displayDepartmentName: value});
    };
    onClickRegisterNewStudent = (event) => {
        if(this.props.actions){
            this.props.actions.postRegisterNewStudent();
        }    

    }
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
                  <input placeholder="Please Enter Percentage" value={this.state.displayPercentage}
                  onChange={this.onChangeDisplaPercentage}/>
                </div>
                <div>
                    <label>Please Enter Your Department:</label> 
                   <input placeholder="Please Enter Department Name" value={this.state.displayDepartmentName}
                   onChange={this.onChangeDisplayDepartmentname}/>
                </div>
                <div>
                    <button onClick={this.onClickRegisterNewStudent}> Register New Student </button>
                </div>
            </div>

            
        )
    }
}

RegisterStudentPage.defaultProps = {
    actions: {
        postRegisterNewStudent: () => {
            new Promise((resolve, reject) => {
                resolve({});
            })
        }
    }
};

export default RegisterStudentPage;