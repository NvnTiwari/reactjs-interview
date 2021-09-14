import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './component/EmployeeList';
import EmployeeCreate from './component/EmployeeCreate';

function App() {
const [employees, setEmployees] = useState([]);
const [currentEmployees, setCurrentEmployees] = useState({});
const [currentIndex, setCurrentIndex] = useState({});


const addEmployee = (employee, index) => {
    if (index > -1) {
        const oldEmployees = [...employees];
        const newEmployees = oldEmployees.splice(index, 1, employee);
        setEmployees(newEmployees);
        setCurrentEmployees({});
        setCurrentIndex(-1);
    } else {
        setEmployees([...employees, employee])
        setCurrentEmployees({});
        setCurrentIndex(-1);
    }
    
}

const editEmployee = (employee, index) => {
    setCurrentEmployees(employee);
    setCurrentIndex(index);
}

const deleteEmployee = (index) => {
    const filterEmployee = employees.filter((emp, i) => {
        return index !== i
    });
    setEmployees(filterEmployee);
}

  return (
      <div className="container">
          <EmployeeCreate index={currentIndex} addEmployee={addEmployee}  employee={currentEmployees}/>
          <EmployeeList employees={employees} deleteEmployee={deleteEmployee} editEmployee={editEmployee}/>    
      </div>
  );
}

export default App;
