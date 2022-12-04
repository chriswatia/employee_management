import axios from "axios";

const EMPLOYEE_BASE_URL = "http://localhost:8081/api/v1/employees";

class EmployeeService{
    EmployeeService(){

    }

    getEmpoyees(){
        return axios.get(EMPLOYEE_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_URL, employee);
    }
}

export default new EmployeeService();