import React, { Component } from 'react';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
    }

    render() {
        return (
            <div className="card mt-4">
                <div className="card-header">
                    <h4 className="">Employee List
                        <a href="" className="btn btn-primary btn-sm float-end">Add Employee
                        </a>
                    </h4>
                </div>
                <div className="card-body">
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>Fisrt Name</th>
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