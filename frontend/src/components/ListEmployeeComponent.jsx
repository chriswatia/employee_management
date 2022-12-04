import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';


class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmpoyees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Employee List
                        <a href="add-employee" onClick={this.addEmployee} className="btn btn-primary btn-sm float-end">Add Employee
                        </a>
                    </h4>
                </div>
                <div className="card-body">
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Middle Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstname}</td>
                                            <td>{employee.middlename}</td>
                                            <td>{employee.lastname}</td>
                                            <td>{employee.email}</td>
                                            <td><a className='btn btn-primary btn-sm' href="true">Edit</a></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;