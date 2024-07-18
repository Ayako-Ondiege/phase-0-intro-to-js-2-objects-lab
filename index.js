// Write your solution in this file!
const employee = {
    name: "James Ayako",
    streetAddress: "Waiyaki Way",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

let secondEmployeeInformation=  updateEmployeeWithKeyAndValue(employee,"streetAddress","Musa Gitau Rd");

console.log(secondEmployeeInformation);

console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   
        employee
        [key] = value

        return employee
} 


thirdEmployeeInformation = destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress","Kwarara Rd");

console.log(employee);



function deleteFromEmployeeByKey(employee, key){

    let fourthEmployeeInformation = {...employee};
    delete fourthEmployeeInformation[key];
    return fourthEmployeeInformation
}

let updateEmployee = deleteFromEmployeeByKey(employee,"name");

console.log(updateEmployee);

function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key];
    return employee
}

updateEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name");

console.log(employee);


