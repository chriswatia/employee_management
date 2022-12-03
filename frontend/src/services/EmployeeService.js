import axios from "axios";

const EMPLOYEE_BASE_URL = "http://localhost:8081/api/v1/employees";

class EmployeeService{
    EmployeeService(){

    }

    getEmpoyees(){
        return axios.get(EMPLOYEE_BASE_URL);
    }
}

export default new EmployeeService();