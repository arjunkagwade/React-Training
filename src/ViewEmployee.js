import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import img from "./logo.svg"
import { useNavigate } from "react-router-dom";
export default function ViewEmployees(props) {
    let employees = props.employeesProp;
    const navigate = useNavigate();
    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
    }
    return (
        <div className="container mt-5">
            <h2>Featured Employees</h2>
            <div className="row">
                {
                    employees.map((employee) => {
                        return (
                            <div className="col-md-4" key={employee.empId}>
                                <div className="card">
                                    <img src={img} className="card-img-top" alt="Card" />
                                    <div className="card-body">
                                        <h5 className="card-title">{employee.empId}</h5>
                                        <div className="card-text" >


                                            <p>EmpId: {employee.id}</p>
                                            <p> Name: {employee.empName}</p>
                                            <p>Designation: {employee.designation}</p>
                                        </div>
                                        <button className="btn btn-primary" onClick={() => { handleUpdate(employee.id) }}>Update Employee Details</button>
                                    </div>
                                </div>
                            </div>


                        )
                    })
                }
            </div>
        </div>
    );
}

