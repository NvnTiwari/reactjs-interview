import React from 'react'

const EmployeeList = ({ 
    employees = [], 
    editEmployee = () => {},  
    deleteEmployee= () => {} 
}) => {
    const employeeList = employees.map( (employee, index) => {
        return (
            <tr>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.dob}</td>
                <td>{employee.designation}</td>
                <td>{employee.profilePhotoLink}</td>
                <td>{employee.experience}</td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary" onClick={() => editEmployee(employee, index)}>
                            Edit
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={() => deleteEmployee(index)}>
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        );
    });
    return (
        <table className="table table-responsive table-hover table-border">
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DOB</th>
                <th>Designation</th>
                <th>Photo Link</th>
                <th>Experience</th>
                <th>Actions</th>
            </thead>
            {employeeList}
        </table>
    )
}

export default EmployeeList;