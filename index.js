const employee = {
    name:"sam",
    streetAddress: "123 Main Street"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee={...employee,[key]:value};
    return newEmployee;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    const copiedEMployee={...employee};
    delete copiedEMployee[key];
    return copiedEMployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;

}