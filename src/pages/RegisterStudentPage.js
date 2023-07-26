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
        const student = {
            displayStudentName: this.state.displayStudentName,
            displayCourseName: this.state.displayCourseName,
            displaySpecializationName: this.state.displaySpecializationName,
            displayPercentage: this.state.displayPercentage,
            displayDepartmentName: this.state.displayDepartmentName
        }
      this.props.actions.postRegisterNewStudent(student);
    }
    render(){
        return(
            <div className="container">
                <h1 className="text-center">Register Student</h1>
                <div className="col-12 mb-3">
                     <label> Please Enter Student Name:</label>
                     <input className="form-control" placeholder="Please Enter Student Name" value={this.state.displayStudentName}
                     onChange={this.onChangeDisplayStudentName}/>
                </div>
                 <div className="col-12 mb-3">
                    <label>Please Enter Course Name:</label>
                    <input className="form-control" placeholder="Please Enter Course" value={this.state.displayCourseName}
                    onChange={this.onChangeDisplayCourseName}/>
                </div>
                <div className="col-12 mb-3">
                <label>Please Enter Specialization Name:</label>
                  <input className="form-control" placeholder="Please Enter Specialization" value={this.state.displaySpecializationName} 
                  onChange={this.onChangeDisplaySpecializationName}/>
                </div>
                <div className="col-12 mb-3">
                  <label>Please Enter Your Percentage:</label>
                  <input className="form-control" placeholder="Please Enter Percentage" value={this.state.displayPercentage}
                  onChange={this.onChangeDisplaPercentage}/>
                </div>
                <div className="col-12 mb-3">
                    <label>Please Enter Your Department:</label> 
                   <input className= "form-control" placeholder="Please Enter Department Name" value={this.state.displayDepartmentName}
                   onChange={this.onChangeDisplayDepartmentname}/>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={this.onClickRegisterNewStudent}> Register New Student </button>
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