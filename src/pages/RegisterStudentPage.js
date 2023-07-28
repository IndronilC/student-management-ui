import React from "react";

export class RegisterStudentPage extends React.Component{
    state = {
        student_name: '',
        course: '',
        specialization: '',
        percentage_aggregate: '',
        department_name: ''

    };
    onChangeDisplayStudentName = (event) => {
        const value = event.target.value;
        this.setState({student_name: value});
    };

    onChangeDisplayCourseName = (event) => {
        const value = event.target.value;
        this.setState({course: value});
    };

    onChangeDisplaySpecializationName = (event) => {
        const value = event.target.value;
        this.setState({specialization: value});
    };

    onChangeDisplaPercentage = (event) => {
        const value = event.target.value;
        this.setState({percentage_aggregate: value});
    };

    onChangeDisplayDepartmentname = (event) => {
        const value = event.target.value;
        this.setState({department_name: value});
    };
    onClickRegisterNewStudent = (event) => {
        const student = {
            student_name: this.state.student_name,
            course: this.state.course,
            specialization: this.state.specialization,
            percentage_aggregate: this.state.percentage_aggregate,
            department_request: {department_name: this.state.department_name}
        }
      this.props.actions.postRegisterNewStudent(student);
    }
    render(){
        return(
            <div className="container">
                <h1 className="text-center">Register Student</h1>
                <div className="col-12 mb-3">
                     <label> Please Enter Student Name:</label>
                     <input className="form-control" placeholder="Please Enter Student Name" value={this.state.student_name}
                     onChange={this.onChangeDisplayStudentName}/>
                </div>
                 <div className="col-12 mb-3">
                    <label>Please Enter Course Name:</label>
                    <input className="form-control" placeholder="Please Enter Course" value={this.state.course}
                    onChange={this.onChangeDisplayCourseName}/>
                </div>
                <div className="col-12 mb-3">
                <label>Please Enter Specialization Name:</label>
                  <input className="form-control" placeholder="Please Enter Specialization" value={this.state.specialization} 
                  onChange={this.onChangeDisplaySpecializationName}/>
                </div>
                <div className="col-12 mb-3">
                  <label>Please Enter Your Percentage:</label>
                  <input className="form-control" placeholder="Please Enter Percentage" value={this.state.percentage_aggregate}
                  onChange={this.onChangeDisplaPercentage}/>
                </div>
                <div className="col-12 mb-3">
                    <label>Please Enter Your Department:</label> 
                   <input className= "form-control" placeholder="Please Enter Department Name" value={this.state.department_name}
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