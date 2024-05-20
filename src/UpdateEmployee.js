import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export default function UpdateEmployee() {
    const [employee, setEmployee] = useState({ id: "", empName: "", designation: "" })
    const [message, setMessage] = useState("");
    const params = useParams();

    useEffect(() => { setEmployee({ ...employee, id: params.id }) }, []);

    const handleChange = (event) => {
        setEmployee({ ...employee, [event.target.name]: event.target.value })
    }
    const update = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:4000/employees/${employee.id}`, employee)
            .then((response) => { setMessage("Employee Updated") })
            .catch((error) => { setMessage("Something went wrong..") })
    }
    const getDetails = (event) => {
        //   alert(params.id)
        event.preventDefault();
        // setEmployee({...employee,empName:"test"})
        axios.get(`http://localhost:4000/employees/${employee.id}`)
            .then((response) => { setEmployee(response.data) })
            .catch((error) => { setMessage("Employee not found") })


    }
    const remove = (event) => {
        event.preventDefault();
        axios.delete(`http://localhost:4000/employees/${employee.id}`)
            .then((response) => { setMessage("Employee removed from the DB") })
            .catch((error) => { setMessage("Something went wrong..") })
    }
    return (
        <>
            <h1>Update Employee</h1>
            <form>
                EmpId: <input type="text" name="id" placeholder="Enter Employee ID" value={employee.id} onChange={handleChange} /><br />
                Name:<input type="text" name="empName" placeholder="Enter Employee Name" value={employee.empName} onChange={handleChange} /><br />
                Designation:<input type="text" name="designation" placeholder="Enter designation" value={employee.designation} onChange={handleChange} /><br />
                <button onClick={getDetails}>Get Details</button> <button onClick={update}>Update</button><button onClick={remove}>Remove Employee</button>
                {(message !== "") ? <div>{message}</div> : null}
            </form>
        </>
    )
}