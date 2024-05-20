import ViewEmployees from './ViewEmployee';
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function FetchEmployees() {

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/employees')
            .then((response) => {
                console.log("Response:", response)
                setEmployees(response.data);
                console.log(employees);
            }
            )
            .catch((error) => {
                console.log(error);
            }
            )
    })

    return (
        <>

            <ViewEmployees employeesProp={employees} />


        </>
    );
}


export default FetchEmployees;
