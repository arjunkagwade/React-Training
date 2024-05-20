import axios from "axios"
import { useState } from "react"
export default function UpdateEmployee() {
    const [employee, setEmployee] = useState({ id: "", empName: "", designation: "" })
    const [message, setMessage] = useState("");
    const handleChange = (event) => {
        setEmployee({ ...employee, [event.target.name]: event.target.value })
    }
    const addDetails = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:4000/employees/`, employee)
            .then((response) => { console.log(response); setMessage("Employee added sucessfully") })
            .catch((error) => { setMessage("Not able to add the record") })

    }
    const update = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:4000/employees/${employee.id}`, employee)
            .then((response) => {
                setMessage("Employee Updated")
            })
            .catch((error) => {
                setMessage("Something went wrong..")
            })
    }
    const getDetails = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:4000/employees/${employee.id}`)
            .then((response) => { console.log(response); setEmployee(response.data) })
            .catch((error) => { setMessage("Employee not found") })
    }
    const remove = (event) => {
        event.preventDefault();
        axios.delete(`http://localhost:4000/employees/${employee.id}`)
            .then((response) => {
                setMessage("Employee removed from the DB")
            })
            .catch((error) => { setMessage("Something went wrong..") })
    }

    return (
        <>
            <h1>Update Employee</h1>
            <form>
                EmpId: <input type="text" name="id" placeholder="Enter Employee ID"
                    value={employee.id} onChange={handleChange} /><br />
                Name:<input type="text" name="empName" placeholder="Enter Employee Name"
                    value={employee.empName} onChange={handleChange} /><br />
                Designation:<input type="text" name="designation" placeholder="Enter designation"
                    value={employee.designation} onChange={handleChange} /><br />
                <button onClick={getDetails}>Get Details</button>
                <button onClick={addDetails}>Add Details</button>
                <button onClick={update}>Update</button>
                <button onClick={remove}>Remove Employee</button>
                {(message !== "") ? <div>{message}</div> : null}
            </form>
        </>
    )
}
