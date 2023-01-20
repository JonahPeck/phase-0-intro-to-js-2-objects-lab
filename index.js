// Write your solution in this file!
const employee = {
employeeInfo: {
    name: "Jonah",
    streetAddress: "Grand",
}
};
function updateEmployeeWithKeyAndValue (employee, employeeInfo, name) {
const newEmployee = {...employee};
newEmployee[employeeInfo] = name;
return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, employeeInfo, name ){
employee[employeeInfo] = name;
return employee;
}
function  deleteFromEmployeeByKey(employee, name){
    const newEmployee = { ...name};
    newEmployee[employee] = name;
    return newEmployee;

}
function  destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}