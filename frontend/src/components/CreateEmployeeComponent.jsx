import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            middlename: '',
            lastname: '',
            email: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeMiddleNameHandler = this.changeMiddleNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        // this.cancel = this.cancel.bind(this);
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstname: event.target.value });
    }

    changeMiddleNameHandler = (event) => {
        this.setState({ middlename: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastname: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    saveEmployee = (e) => {
        e.preventDefault();

        let employee = { firstname: this.state.firstname, lastname: this.state.lastname, middlename: this.state.middlename, email: this.state.email };
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/employees');
        });
    }

    cancel() {
        this.props.router.push('/employees');
    }

    render() {
        return (
            <div className="card mt-4">
                <div className="card-header">
                    <h4 className="">Add Employee
                        <button onClick={this.cancel.bind(this)} className="btn btn-danger btn-sm float-end">Cancel
                        </button>
                    </h4>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label>First Name</label>
                            <input type="text" name="firstname" className="form-control" placeholder='Enter First Name'
                                value={this.state.firstname} onChange={this.changeFirstNameHandler} />
                        </div>
                        <div className="mb-3">
                            <label>Middle Name</label>
                            <input type="text" name="middlename" className="form-control" placeholder='Enter Middle Name'
                                value={this.state.middlename} onChange={this.changeMiddleNameHandler} />
                        </div>
                        <div className="mb-3">
                            <label>Last Name</label>
                            <input name="lastname" className="form-control" placeholder='Enter Last Name'
                                value={this.state.lastname} onChange={this.changeLastNameHandler} />
                        </div>
                        <div className="mb-3">
                            <label>Email</label>
                            <input name="email" className="form-control" placeholder='Enter Email Address'
                                value={this.state.email} onChange={this.changeEmailHandler} />
                        </div>
                        <div className='row'>
                            <button className="btn btn-primary" onClick={this.saveEmployee} >Save</button>
                        </div>
                        {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }} >Cancel</button> */}
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;