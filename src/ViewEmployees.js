import React from 'react'
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import img from "./logo.svg"
export default function ViewEmployees(props) {
    let employees = props.employeesProp;
    let navigate = useNavigate();
    const handleUpdate = () => {
        navigate("/update");
    }
    return (
        <div className="container mt-5">
            <h2>Featured Employees</h2>
            <div className="row">
                {
                    employees.map((employee) => {
                        return (
                            <div className="col-md-4" key={employee.id}>
                                <div className="card">
                                    <img src={img} className="card-img-top" alt="Card" />
                                    <div className="card-body">
                                        <h5 className="card-title">{employee.id}</h5> <div className="card-text" >
                                            <p>EmpId: {employee.id}</p>
                                            <p> Name: {employee.empName}</p>
                                            <p>Designation: {employee.designation}</p>
                                        </div>
                                        <button onClick={handleUpdate} className='btn btn-primary'>
                                            Update Employee</button>
                                    </div>
                                </div>
                            </div>)
                    }
                    )
                }
            </div>
        </div>);
}
